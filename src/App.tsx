import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Animals from "./pages/animals/AnimalOverview";
import About from "./pages/about/About";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminAnimals from "./pages/admin/AdminAnimals";
import AdminApplications from "./pages/admin/AdminApplications";
import AdminAdoptions from "./pages/admin/AdminAdoptions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/about" element={<About />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminAnimals />} />
          <Route path="animals" element={<AdminAnimals />} />
          <Route path="applications" element={<AdminApplications />} />
          <Route path="adoptions" element={<AdminAdoptions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
