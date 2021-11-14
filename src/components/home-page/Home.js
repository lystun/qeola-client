import Header from "../Reusable-components/navbar";
import Hero from "./hero";
import MoreClients from "./more_clients";
import Projects from "./projects";
import Contact from "../Reusable-components/contact";
import Footer from "../Reusable-components/footer";
import Services from "./services";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MoreClients />
      <Projects />
      <Services />
      <Contact
        title={
          "This is your chance to not only build your dreams but build a future."
        }
      />
      <Footer />
    </div>
  );
};
export default Home;
