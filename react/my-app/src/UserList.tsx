import { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
};

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  }

  return (
    <div className="container mt-4">
      <h3 className="text-danger mb-4 text-center">User List Component</h3>
      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={fetchUsers}>
          Fetch Users
        </button>
      </div>

      <div className="container row">
        {users.map((user) => (
          <div className="col-md-6 mb-3" key={user.id}>
            <div className="card border-2 p-3 bg-light rounded-3">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.username}</h6>
                <p className="mb-1">
                  <strong>Email:</strong> {user.email}
                </p>

                <p className="mb-1">
                  <strong>Address:</strong> {user.address.street},
                  {user.address.city}
                </p>

                <p>
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;