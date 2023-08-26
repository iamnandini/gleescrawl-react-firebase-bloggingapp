import { Link, Route, Routes, Switch, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Createpost from "./Pages/createpost/Createpost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Swal from "sweetalert2";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate(); // Access the navigate function

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/"); // Use navigate to navigate to the home page
    });
  };

  const showAlert = () => {
    Swal.fire({
      title: "Login to Create a Post <3",
      html: "<strong>Good Day!!</strong>",
      icon: "info",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          navigate("/login"); // Navigate to the login page after a delay
        }, 500);
      }
    });
  };

  return (
    <div className="App">
      <nav>
        <img src="/newlogo.png" />
        <div>
        <Link to="/">Home</Link>

        {!isAuth ? (<>
          <Link onClick={showAlert} >Create Post</Link>
          <Link to="/login"> Login </Link>
          </>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
        </div>

      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path={"/login"} element={<Login setIsAuth={setIsAuth} />} />
        <Route path={"/createpost"} Component={Createpost} />
      </Routes>
    </div>
  );
}

export default App;
