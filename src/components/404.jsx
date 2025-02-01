import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Zoom>
        <div className="text-center">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-8">
            Oops! Page not found.
          </p>
          <p className="text-gray-600 mb-8">
            The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link
            to="/"
            className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Go to Homepage
          </Link>
        </div>
      </Zoom>
    </div>
  );
};

export default NotFound;