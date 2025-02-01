import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./Routes";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
