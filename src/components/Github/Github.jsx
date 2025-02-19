import { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://api.github.com/users/ShubhamTyagi000`
      );
      let result = await response.json();
      setData(result);
      console.log(result);
    }
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-4">GitHub Profile</h2>

        {data ? (
          <div>
            <img
              src={data.avatar_url}
              alt="Avatar"
              className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700 shadow-md"
            />
            <p className="text-lg font-semibold mt-4">{data.login}</p>
            <div className="flex justify-between items-center bg-gray-700 p-3 rounded-lg mt-3">
              <p>
                <strong>Followers:</strong> {data.followers}
              </p>
              <p>
                <strong>Repos:</strong> {data.public_repos}
              </p>
            </div>
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              View Profile
            </a>
          </div>
        ) : (
          <p className="text-gray-400">Loading...</p>
        )}
      </div>
    </div>
  );
}
