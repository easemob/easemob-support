import { useEffect } from 'react'
import { Provider, Chatroom, useClient } from 'easemob-chat-uikit'
import 'easemob-chat-uikit/style.css'

const ChatRoomContainer = () => {
  const client = useClient()
  console.log('client', client.version)
  const chatroomId = '251087264219169' // 要加入的聊天室
  useEffect(() => {
    client &&
      client
        .open({
          user: 'hfp',
          pwd: '1'
        })
        .then((res) => {
          console.log('open', res)
        })
  }, [client])

  return (
    <div>
      <div style={{ width: '350px', height: '100vh' }}>
        <Chatroom chatroomId={chatroomId}></Chatroom>
      </div>
      {/* <div style={{ width: '350px' }}>
        <ChatroomMember chatroomId={chatroomId}></ChatroomMember>
      </div> */}
    </div>
  )
}
function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <Provider
        initConfig={{
          appKey: 'easemob-demo#support'
        }}
      >
        <ChatRoomContainer />
      </Provider>
    </>
  )
}

export default App
