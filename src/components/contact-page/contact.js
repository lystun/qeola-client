// import Header from "../Reusable-components/navbar";
import NavBar2 from "../Reusable-components/navbar2";
import OtherHero from "../Reusable-components/otherHero";
import Contact from "../Reusable-components/contact";
import Footer from "../Reusable-components/footer";

const ContactPage = () => {
  return (
    <div>
      <NavBar2 />
      <OtherHero
        title="This is your chance to not only build your 
dreams but build a future. "
      />
      <Contact />
      <Footer />
    </div>
  );
};
export default ContactPage;
