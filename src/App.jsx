import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    setUsers(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header className="flex flex-col justify-center items-center bg-slate-200 p-5">
        <h1 className="font-bold text-2xl tracking-wider pb-2">Users list</h1>
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder="Filter by user"
            className="text-center rounded-full w-full border-2 focus:outline-none focus:border-slate-300 shadow-lg shadow-slate-200 hover:shadow-slate-300 focus:shadow-slate-300 tracking-wide text-xs h-9 px-3 transition-shadow duration-200"
          />
        </div>
      </header>

      <main className="bg-slate-100 p-5 h-full">
        {users.map((user, index) => (
          <div
            className="flex flex-col items-center bg-white p-5 rounded-2xl relative
            hover:scale-105 transition-all duration-200 mb-5"
            key={index}
          >
            <div className="flex flex-col items-center">
              <div>
                <img
                  src={user.picture.medium}
                  alt=""
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center py-2">
                <div className="flex flex-col items-center border-b border-slate-500 pb-2 mb-2 w-full">
                  <span className="font-bold flex flex-col text-sm">
                    Username
                  </span>
                  <p className="text-lg">{user.login.username}</p>
                </div>
                <div className="flex px-2">
                  <div className="flex flex-col items-center mr-5">
                    <span className="font-bold flex flex-col">First name</span>
                    <p>{user.name.first}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-bold flex flex-col">Last Name</span>
                    <p>{user.name.last}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <span className="font-bold flex flex-col">City:</span>
                  <p>
                    {user.location.city}, {user.location.country}
                  </p>
                </li>
                <li>
                  <span className="font-bold flex flex-col">Postcode:</span>
                  <p>{user.location.postcode}</p>
                </li>
                <li>
                  <span className="font-bold flex flex-col">Email:</span>
                  <p>{user.email}</p>
                </li>
                <li>
                  <span className="font-bold flex flex-col">Cellphone:</span>
                  <p>{user.cell}</p>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-slate-200 flex flex-col justify-center items-center p-5">
        <p>All right reserved</p>
        <a
          href="#"
          className="font-bold hover:underline transition-all duration-200"
        >
          www.users-list.com
        </a>
      </footer>
    </>
  );
}

export default App;
