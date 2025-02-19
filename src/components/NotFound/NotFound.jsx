import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-9xl font-extrabold text-gray-700 tracking-widest animate-bounce">404</h1>
      <p className="text-lg text-gray-400 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Go Home
      </Link>

      <div className="absolute bottom-10 text-gray-500 text-sm">
        <p>Lost? Don't worry, just head back home.</p>
      </div>
    </div>
  );
}
