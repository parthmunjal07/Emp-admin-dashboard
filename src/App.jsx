import { useContext, useEffect, useState } from "react";
import "./App.css";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage } from "./utils/LocalStorage";
import AuthProvider, { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null)
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123"){
      setUser("admin")
    } else if (email == "user@me.com" && password == 123) {
      setUser('employee')
    } else {
      alert("Invalid Credentials")
    }
  }
  
  const data = AuthContext(AuthProvider)
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>:''}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
}

export default App;
