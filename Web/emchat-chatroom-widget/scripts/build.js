import path from "path"
import fs from "fs-extra"
import { defineConfig, build } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJSX from "@vitejs/plugin-vue-jsx"
import dts from "vite-plugin-dts"
import { visualizer } from "rollup-plugin-visualizer"
import { fileURLToPath } from "url"

const __filenameNew = fileURLToPath(import.meta.url)

const __dirnameNew = path.dirname(__filenameNew)
const name = "emchat-chatroom-widget"
const version = "1.0.2"

/**
 * 基础配置
 */
const BASE_VITE_CONFIG = defineConfig({
  publicDir: false, //暂不需要打包静态资源到public文件夹
  plugins: [
    vue(),
    vueJSX(),
    // visualizer({
    //   emitFile: true,
    //   filename: "stats.html"
    // }),
    dts({
      outputDir: "./build/types",
      insertTypesEntry: true, // 插入TS 入口
      copyDtsFiles: true // 是否将源码里的 .d.ts 文件复制到 outputDir
    })
  ]
})
/**
 * rollupOptions配置
 */
const rollupOptions = defineConfig({
  // that shouldn't be bundled
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
})
// 组件库全局入口
const compontsDir = path.resolve(__dirnameNew, "../src/")
// 输出目录
const outputDir = path.resolve(__dirnameNew, "../build")
// 生成 package.json
const createPackageJson = () => {
  const fileStr = `{
      "name": "${name}",
      "version": "${version}",
      "description": "该组件用于快速构建一个环信聊天室窗口。",
      "main": "emchat-chatroom-widget.umd.js",
      "module":"emchat-chatroom-widget.esm.js",
      "repository": {
        "type": "git",
        "url": "git+https://github.com/HuangFeiPeng/emchat-chatroom-widget"
      },
      "keywords": ["vue3", "环信", "UI"],
      "author": "NeoHuang",
      "license": "MIT"
    }
    `
  // 单个组件 or 全量
  const filePath = path.resolve(outputDir, `package.json`)

  fs.outputFile(filePath, fileStr, "utf-8")
}
// copy README.md
const copyFiles = () => {
  const markdown = fs.createReadStream(
    path.resolve(__dirnameNew, "../README.md")
  )
  markdown.pipe(
    fs.createWriteStream(path.resolve(__dirnameNew, "../build/README.md"))
  )
}
const buildAll = async () => {
  await build(
    defineConfig({
      ...BASE_VITE_CONFIG,
      build: {
        lib: {
          entry: compontsDir,
          name: "emchat-chatroom-widget",
          fileName: "emchat-chatroom-widget",
          // 导出模块格式
          formats: ["esm", "umd", "cjs"]
        },
        rollupOptions,
        outDir: outputDir
      }
    })
  )

  createPackageJson()
  copyFiles()
}
const buildLib = async () => {
  await buildAll()

  // 按需打包
  //   fsExtra
  //     .readdirSync(compontsDir)
  //     .filter(name => {
  //       // 获取组件的目录
  //       const componentDir = path.resolve(compontsDir, name)
  //       const isDir = fsExtra.lstatSync(componentDir).isDirectory()
  //       return isDir && fsExtra.readdirSync(componentDir).includes("index.ts")
  //     })
  //     .forEach(async name => {
  //       await buildSingle(name)
  //     })

  //   copyFiles()
}

buildLib()
