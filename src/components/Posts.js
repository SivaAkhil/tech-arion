import axios from "axios";
import { useEffect, useState } from "react";

import Post from "./Post";

const apiLink = "https://gorest.co.in/public/v1/todos";

const Posts = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(apiLink)
      .then((response) => {
        setLoading(false);
        setData(response.data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }

  return (
    <div className="grid place-items-center pt-5">
      <div className="grid grid-cols-3 grid-rows-3 gap-5 p-5 bg-green-200 w-4/5 rounded-lg">
        {data?.map((p) => {
          return <Post key={p.id} data={p} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
