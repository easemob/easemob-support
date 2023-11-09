export const scrollBottom = (dom: Element) => {
  dom?.scrollTo({
    top: dom?.scrollHeight
  })
}
