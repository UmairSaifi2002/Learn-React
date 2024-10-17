import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/UmairSaifi2002")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   });

  return (
    <div className="text-center m-4 bg-teal-50 text-white p-4 text-4xl rounded-3xl text-zinc-800 flex flex-col items-center gap-8 shadow-xl shadow-gray-500/90">
      Repo Count : {data.public_repos}
      <img className="rounded-3xl text-center shadow-xl shadow-gray-500/90" src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/UmairSaifi2002')
    return response.json()
}