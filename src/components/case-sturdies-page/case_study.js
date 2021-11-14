import NavBar2 from "../Reusable-components/navbar2";
import OtherHero from "../Reusable-components/otherHero";
import CaseSelection from "./case_selection";
import Footer from "../Reusable-components/footer";

// CSS
import "./case_study.css";
import "../Reusable-components/project_row.css";

const CaseStudy = () => {
  return (
    <div>
      <NavBar2 />
      <OtherHero
        title={"Case Studies"}
        text={"Have a feel of what we could do for you."}
      />
      <CaseSelection />
      <Footer />
    </div>
  );
};

export default CaseStudy;
