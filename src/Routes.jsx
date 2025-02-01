import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeethCleaning from "./sections/TeethCleaning";
import CavityFilling from "./sections/CavityFilling";
import ToothExtraction from "./sections/ToothExtraction";
import Vaneers from "./sections/Veneers";
import TeethWhitening from "./sections/TeethWhitening"; 
import DentalImplants from "./sections/DentalImplants";
import CrownsAndBridges from "./sections/CrownsAndBridges";
import ExploreDentures from "./sections/ExploreDentures";
import CompareDenture from "./sections/CompareDentures";
import RootCanal from "./sections/RootCanal";
import DentalFinancing from "./pages/Financing";
import PeriodontalTreatment from "./sections/PeriodontalTreatment";
import OurTeam from "./pages/OurTeam";
import OurMembership from "./pages/OurMembership";
import ContactUs from "./pages/ContactUs";
import InsuranceAndFinancing from "./pages/InsuranceAndFinancing";
import OurPrivacyPolicy from "./pages/OurPrivacyPolicy";
import OurMissionAndVision from "./pages/OurMissionAndVision";
import NotFound from "./components/404";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Teeth-Cleaning" element={<TeethCleaning />} />
      <Route path="/Cavity-filling" element={<CavityFilling />} />
      <Route path="/Tooth-extraction" element={<ToothExtraction />} />
      <Route path="/Teeth-Whitening" element={<TeethWhitening />} />
      <Route path="/Veneers" element={<Vaneers />} />
      <Route path="/Dental-Implants" element={<DentalImplants />} />
      <Route path="/Crowns-and-Bridges" element={<CrownsAndBridges />} />
      <Route path="/Explore-Dentures" element={<ExploreDentures/>} />
      <Route path="/Compare-Dentures" element={<CompareDenture />} />
      <Route path="/Root-Canal" element={<RootCanal />} />
      <Route path="/Financing" element={<DentalFinancing />} />
      <Route path="/Periodontal-Treatment" element={<PeriodontalTreatment />} />
      <Route path="team" element={<OurTeam />} />
      <Route path="/Membership-plan" element={<OurMembership />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/Insurance-and-Finacing" element={<InsuranceAndFinancing />} />
      <Route path="/Privacy-Policy" element={<OurPrivacyPolicy />} />
      <Route path="/Our-Mission" element={<OurMissionAndVision />} />
      {/* Add other routes here as needed */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
