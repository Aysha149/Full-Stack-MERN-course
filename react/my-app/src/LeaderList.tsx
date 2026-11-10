import { useEffect, useState } from "react";

// Define Leader model
type Leader = {
  _id: string;
  name: string;
  email: string;
  grade: string;
  post: number;
};

function LeaderList() {
  const [Leaders, setLeaders] = useState<Leader[]>([]);

  const fetchLeaders = async () => {
    const response = await fetch(" https://express-api-egw6.onrender.com/leaders");
    const data = await response.json();
const LeadersList: Leader[] = data.leaders;
    setLeaders(LeadersList);
  };

  useEffect(() => {
    fetchLeaders();
  }, []);

  return (
    <div className="container">
      <h2 className="text-primary mb-4 text-center">Leaders</h2>

      <ul className="list-group">
        {Leaders.map((Leader) => (
          <li key={Leader._id} className="list-group-item">
            <h4 className="text-warning">{Leader.name}</h4>

            <p className="text-primary mb-1">Email: {Leader.email}</p>

            <p className="text-secondary mb-1">Grade: {Leader.grade}</p>

            <p className="text-danger mb-0">
              Post: {Leader.post}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeaderList;