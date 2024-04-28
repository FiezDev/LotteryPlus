import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { processUserData } from '../utils/processUserData';
import { User } from '../interfaces';

interface UserApiResponse {
  users: User[];
}

const UserStats: React.FC = () => {
  const [stats, setStats] = useState<ReturnType<typeof processUserData> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<UserApiResponse>('https://dummyjson.com/users')
      .then((response) => {
        const processedData = processUserData(response.data.users);
        setStats(processedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User Statistics by Department</h1>
      {stats && Object.entries(stats).map(([department, data]) => (
        <div key={department}>
          <h2>{department}</h2>
          <p>Male: {data.male}</p>
          <p>Female: {data.female}</p>
          <p>Age Range: {data.ageRange}</p>
          <div>
            Hair Colors:
            {data.hair && (
              <ul>
                {Object.entries(data.hair).map(([color, count]) => (
                  <li key={color}>{color}: {count}</li>
                ))}
              </ul>
            )}
          </div>
          <div>
            Addresses:
            {data.addressUser && (
              <ul>
                {Object.entries(data.addressUser).map(([name, postalCode]) => (
                  <li key={name}>{name}: {postalCode}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
