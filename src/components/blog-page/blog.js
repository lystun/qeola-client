import NavBar2 from "../Reusable-components/navbar2";
import OtherHero from "../Reusable-components/otherHero";
import BlogSelection from "./blogSelection";
// import Pagination from "../blog-details-page/pagination";
import Footer from "../Reusable-components/footer";

// CSS
import "./blog.css";

const Blog = () => {
  return (
    <div>
      <NavBar2 />
      <OtherHero
        title="Qeola Musings"
        // titleb="Stays Here"
        text="Thought pieces from the industry "
      />
      <BlogSelection />
      {/* <Pagination /> */}
      <Footer />
    </div>
  );
};

export default Blog;
