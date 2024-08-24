import List from "./components/list/List";
import Detail from "./components/details/Detail";

import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import Chat from "./components/chat/chat";

const App = () => {
  const user = true;
  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
