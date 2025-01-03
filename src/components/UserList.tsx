import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../types";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-row space-x-2">
              <div className="flex h-[40px] w-[40px] bg-[#7676f6] rounded-full justify-center items-center font-bold text-white">
                {user.name[0]}
              </div>
              <div>
                <h2 className="text-[14px] font-semibold">{user.name}</h2>
                {/* <p className="text-[12px] text-gray-500">{user.username}</p> */}
                <p className="text-[12px] text-gray-500 mb-4">{user.email}</p>
              </div>
            </div>

            <Link
              to={`/user/${user.id}`}
              className="text-blue-500 hover:underline "
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
