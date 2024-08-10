import List from "./components/list/List";
import Detail from "./components/details/Detail";

import Chat from "./components/chat/chat";

import ChatList from "./components/chatList/ChatList";
import Userinfo from "./components/list/Userinfo/Userinfo";

const App = () => {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
      <ChatList />
      <Userinfo />
    </div>
  );
};

export default App;
