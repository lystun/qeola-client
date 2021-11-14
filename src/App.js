import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

// CSS
import "./App.css";

// COMPONENTS
import Home from "./components/home-page/Home";
import ContactPage from "./components/contact-page/contact";
import Clients from "./components/clients-page/clients";
import Blog from "./components/blog-page/blog";
import CaseStudy from "./components/case-sturdies-page/case_study";
import About from "./components/about-page/about";
import BlogDetails from "./components/blog-details-page/blog-details";
import Project from "./components/project-page/project";
import Login from "./components/Dashboard/login";
import Admin from "./components/Dashboard/admin";
import Industries from "./components/industries-page/industries";
import { useEffect } from "react";
import Register from "./components/Dashboard/register";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/Reusable-components/scrollToTop";

function App() {
  // const [Token, setToken] = useState();
  const Tokenizer = useSelector((state) => state.output);
  // const proj = useSelector((state) => state.output);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let Token = "";
  if (Tokenizer) {
    Token = Tokenizer.token;
  }
  // else if ((Tokenizer.logout.data.status = "success")) {
  //   Token = false;
  // }
  // setToken(Tokenizer);
  // console.log(Tokenizer);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path="/dashboard">{Token ? <Admin /> : <Login />}</Route>
          {/* <Route path="/project">
          {proj.openCaseStudy ? <Project /> : <CaseStudy />}
        </Route> */}

          <Route export path="/register" component={Register} />
          <Route exact path="/industries" component={Industries} />
          <Route exact path="/admin-login" component={Login} />
          <Route exact path="/project/:id" component={Project} />
          <Route exact path="/blog-details/:id" component={BlogDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/case-study" component={CaseStudy} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
