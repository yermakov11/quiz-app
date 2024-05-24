import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-around p-4 bg-gray-800 text-white">
      <Link to="/">
       <button className="px-4 py-2 bg-white text-black hover:bg-gray-700 rounded">user</button>
      </Link>
      <Link to="/admin">
        <button className="px-4 py-2 bg-white text-black hover:bg-gray-700 rounded">admin</button>
      </Link>
    </div>
  );
}
