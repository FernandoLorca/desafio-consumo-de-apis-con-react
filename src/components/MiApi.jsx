import { useEffect, useState } from "react";

import {
  UserCircleIcon,
  MapIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

import Sort from "./Sort";

const MiApi = ({ searchUser }) => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const res1 = await fetch("https://randomuser.me/api/?results=20");
    const data1 = await res1.json();
    const images = data1.results.map((result) => result.picture.medium);

    const res2 = await fetch("https://jsonplaceholder.typicode.com/users");
    const data2 = await res2.json();

    const combinedData = data2.map((user, index) => {
      return { ...user, image: images[index] };
    });
    setUsers(combinedData);
  };

  useEffect(() => {
    getData();
  }, []);

  const sortUsers = () => {
    const sortedUsers = [...users].sort((a, b) =>
      a.username > b.username ? 1 : -1
    );
    setUsers(sortedUsers);
  };

  return (
    <>
      <main className="bg-slate-100 p-5 h-full">
        <div className="flex justify-center">
          <Sort onSort={sortUsers} />
        </div>
        {users
          .filter((user) =>
            searchUser.toLowerCase() === ""
              ? users
              : user.username.toLowerCase().includes(searchUser) ||
                user.name.toLowerCase().includes(searchUser) ||
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
                    src={user.image}
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
                      <p className="text-lg ml-1">{user.username}</p>
                    </div>
                  </div>
                  <div className="flex px-2">
                    <div className="flex flex-col items-center mr-5">
                      <p className="font-bold flex flex-col">First name</p>
                      <p>{user.name.split(" ")[0]}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="font-bold flex flex-col">Last Name</p>
                      <p>{user.name.split(" ")[1]}</p>
                    </div>
                  </div>
                  <p className="text-lg my-2 px-2 text-blue-500 hover:text-blue-700 transition-all duration-200 cursor-pointer ">
                    {user.email.toLowerCase()}
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
                    {user.address.street}, <br /> {user.address.city}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <EnvelopeIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">Zipcode:</p>
                  </div>
                  <p>{user.address.zipcode}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <DevicePhoneMobileIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">Phone:</p>
                  </div>
                  <p>{user.phone}</p>
                </div>
              </div>
            </div>
          ))}
      </main>

      <main className="hidden bg-slate-100 p-5 md:flex gap-5 flex-wrap justify-center h-full">
        {users
          .filter((user) =>
            searchUser.toLowerCase() === ""
              ? users
              : user.username.toLowerCase().includes(searchUser) ||
                user.name.toLowerCase().includes(searchUser) ||
                user.email.toLowerCase().includes(searchUser)
          )
          .map((user, index) => (
            <div
              className="flex-col items-center bg-white p-5 rounded-2xl hover:scale-105 transition-all duration-200 mb-5 "
              key={index}
            >
              <div className="flex flex-col items-center">
                <div>
                  <img
                    src={user.image}
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
                      <p className="text-lg ml-1">{user.username}</p>
                    </div>
                  </div>
                  <div className="flex px-2">
                    <div className="flex flex-col items-center mr-5">
                      <p className="font-bold flex flex-col">First name</p>
                      <p>{user.name.split(" ")[0]}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="font-bold flex flex-col">Last Name</p>
                      <p>{user.name.split(" ")[1]}</p>
                    </div>
                  </div>
                  <p className="text-lg my-2 px-2 text-blue-500 hover:text-blue-700 transition-all duration-200 cursor-pointer ">
                    {user.email.toLowerCase()}
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
                    {user.address.street}, <br /> {user.address.city}
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <EnvelopeIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">Zipcode:</p>
                  </div>
                  <p>{user.address.zipcode}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center h-4 w-4 mr-1">
                      <DevicePhoneMobileIcon className="h-full text-blue-500" />
                    </div>
                    <p className="font-bold">Phone:</p>
                  </div>
                  <p>{user.phone}</p>
                </div>
              </div>
            </div>
          ))}
      </main>
    </>
  );
};

export default MiApi;
