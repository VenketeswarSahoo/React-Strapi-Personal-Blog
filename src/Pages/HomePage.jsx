import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
const HomePage = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <Hero blogs={blogs ? blogs : ""} />
      <Footer />
    </div>
  );
};

export default HomePage;
