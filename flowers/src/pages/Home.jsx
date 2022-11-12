import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home2 from "../components/Home_2";
import { Navigate } from "react-router-dom";

function Home(props) {
  let autentificated =
    localStorage.getItem("user") && localStorage.getItem("token");

  if (!autentificated) {
    return <Navigate to={"/Login"} />;
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Home2 />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
