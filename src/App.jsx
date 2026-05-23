import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 via-white to-gray-200">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;