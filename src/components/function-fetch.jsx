import { useState, useEffect } from "react";

function App() {
  const getData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=100");
    const data = await res.json();
    console.log(data.results);
    setUsers(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name.first}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
