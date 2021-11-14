import NavBar2 from "../Reusable-components/navbar2";
import OtherHero from "../Reusable-components/otherHero";
import Selection from "../Reusable-components/selection";

import Footer from "../Reusable-components/footer";
// CSS
import "./clients.css";
// import { useEffect } from "react";
const Clients = () => {
  return (
    <div id="clients">
      <NavBar2 />
      <OtherHero
        title={"Our Clients"}
        text={
          "Catch a glimpse of what we can do for you from clients we have worked with."
        }
      />
      <Selection />
      <Footer />
    </div>
  );
};

export default Clients;
