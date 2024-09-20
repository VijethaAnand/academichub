import React from "react";
// import Navigation from "./Navigation";

import Navbar from "../Navbar";
// import Landingpage from "./Landingpage";
import Aboutsection from "./Aboutsection";
import Projectssection from "./Projectssection";
import Articlessection from "./Articlessection";
import Booksection from "./Booksection";
import News from "./News";
import Footer from "./Footer";
import Sliderlandingpage from "./Landingpage/Sliderlandingpage";
function Home() {
  return (
    <>
      <Navbar />
      <Sliderlandingpage />
      <Aboutsection />
      <Projectssection />
      <Articlessection />
      <Booksection />
      <News />
      <Footer />

      {/* <Navigation /> */}
    </>
  );
}

export default Home;
