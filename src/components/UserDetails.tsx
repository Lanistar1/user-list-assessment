import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../types';

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data: User) => setUser(data));
    }
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <p className="text-gray-600 mb-4">Username: {user.username}</p>
        <p className="text-gray-600 mb-4">Email: {user.email}</p>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Address</h2>
          <p className="text-gray-600">{user.address.street}</p>
          <p className="text-gray-600">{user.address.suite}</p>
          <p className="text-gray-600">{user.address.city}</p>
          <p className="text-gray-600">{user.address.zipcode}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Company</h2>
          <p className="text-gray-600">{user.company.name}</p>
          <p className="text-gray-600">{user.company.catchPhrase}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-600">Phone: {user.phone}</p>
          <p className="text-gray-600">Website: {user.website}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
