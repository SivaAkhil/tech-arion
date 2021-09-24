import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className="flex flex-col items-center space-y-5 pt-6">
      <Link to="/counter">
        <h1 className="bg-gray-500 px-5 py-3 rounded-md text-white font-medium hover:opacity-80">
          Counter
        </h1>
      </Link>
      <Link to="/posts">
        <h1 className="bg-gray-500 px-5 py-3 rounded-md text-white font-medium hover:opacity-80">
          Posts
        </h1>
      </Link>
      <Link to="/auth">
        <h1 className="bg-gray-500 px-5 py-3 rounded-md text-white font-medium hover:opacity-80">
          Auth
        </h1>
      </Link>
    </div>
  );
};

export default HomePage;
