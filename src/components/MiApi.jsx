import { useEffect, useState } from "react";

import {
  UserCircleIcon,
  MapIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const MiApi = ({ searchUser }) => {
  const [users, setUsers] = useState([]);
  const [countrys, setCountrys] = useState([]);

  const getDataUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    setUsers(data.results);
  };

  const getDataCountrys = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountrys(data);
  };

  useEffect(() => {
    getDataUsers();
    getDataCountrys();
  }, []);

  return (
    <>
      <main className="bg-slate-100 p-5 h-full">
        {users
          .filter((user) =>
            searchUser.toLowerCase() === ""
              ? users
              : user.login.username.toLowerCase().includes(searchUser) ||
                user.name.first.toLowerCase().includes(searchUser) ||
                user.email.toLowerCase().includes(searchUser)
          )
          .map((user, index) => (
            <div
              className="flex flex-col items-center bg-white p-5 rounded-2xl hover:scale-105 transition-all duration-200 mb-5 md:hidden"
              key={index}
            >
              <div className="flex flex-col items-center">
                <div>
                  <img
                    src={user.picture.medium}
                    alt=""
                    className="rounded-full border-2 border-blue-500"
                  />
                </div>
                <div className="flex flex-col items-center py-2">
                  <div className="flex flex-col items-center border-b border-slate-500 pb-2 mb-2 w-full">
                    <p className="font-bold flex items-center text-sm">
                      Username
                    </p>
                    <div className="flex items-center">
                      <UserCircleIcon className="h-6 w-6 text-blue-500 " />
                      <p className="text-lg ml-1">{user.login.username}</p>
                    </div>
                  </div>
                  <div className="flex px-2">
                    <div className="flex flex-col items-center mr-5">
                      <p className="font-bold flex flex-col">First name</p>
                      <p>{user.name.first}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="font-bold flex flex-col">Last Name</p>
                      <p>{user.name.last}</p>
                    </div>
                  </div>
                  <p className="text-lg my-2 px-2 text-blue-500 hover:text-blue-700 transition-all duration-200 cursor-pointer ">
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full px-5">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <MapIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">City:</p>
                  </div>
                  <p>
                    {user.location.city}, <br /> {user.location.country}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <EnvelopeIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">Postcode:</p>
                  </div>
                  <p>{user.location.postcode}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <DevicePhoneMobileIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">Cellphone:</p>
                  </div>
                  <p>{user.cell}</p>
                </div>
              </div>
            </div>
          ))}
      </main>

      <main className="hidden bg-slate-100 p-5 h-full md:flex gap-5 flex-wrap justify-center">
        {users
          .filter((user) =>
            searchUser.toLowerCase() === ""
              ? users
              : user.login.username.toLowerCase().includes(searchUser) ||
                user.name.first.toLowerCase().includes(searchUser) ||
                user.email.toLowerCase().includes(searchUser)
          )
          .map((user, index) => (
            <div
              className="bg-white p-5 rounded-2xl mb-5 hover:scale-105 transition-all duration-200 "
              key={index}
            >
              <div className="flex justify-center">
                <img
                  src={user.picture.medium}
                  alt=""
                  className="rounded-full border-2 border-blue-500"
                />
              </div>
              <div className="flex flex-col items-center border-b border-slate-500 pb-2 mb-2 w-full">
                <p className="font-bold flex items-center text-sm">Username</p>
                <div className="flex items-center">
                  <UserCircleIcon className="h-6 w-6 text-blue-500 " />
                  <p className="text-lg ml-1">{user.login.username}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex px-2">
                  <div className="flex flex-col items-center mr-5">
                    <p className="font-bold flex flex-col">First name</p>
                    <p>{user.name.first}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold flex flex-col">Last Name</p>
                    <p>{user.name.last}</p>
                  </div>
                </div>
              </div>
              <p className="text-lg my-3 px-2 text-blue-500 hover:text-blue-700 transition-all duration-200 cursor-pointer text-center">
                {user.email}
              </p>
              <div className="flex justify-between gap-6 w-full px-5">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <MapIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">City:</p>
                  </div>
                  <p>
                    {user.location.city}, <br /> {user.location.country}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <EnvelopeIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">Postcode:</p>
                  </div>
                  <p>{user.location.postcode}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <DevicePhoneMobileIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">Cellphone:</p>
                  </div>
                  <p>{user.cell}</p>
                </div>
              </div>
            </div>
          ))}
      </main>
    </>
  );
};

export default MiApi;
