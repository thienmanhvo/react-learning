import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHanlder = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHanlder} />
      <UserList users={users} />
    </div>
  );
}

export default App;
