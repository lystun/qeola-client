// import Main from "../../components/Dashboard/main";
import BriefControl from "../../components/Dashboard/briefControl";
import CaseControl from "../../components/Dashboard/caseControl";
import CategoryControl from "../../components/Dashboard/categoryControl";
import ClientControl from "../../components/Dashboard/clientControl";
import Contact from "../../components/Dashboard/contact";
import DashContact from "../../components/Dashboard/dashContact";
import DashContact2 from "../../components/Dashboard/dashContact2";
import DashContact3 from "../../components/Dashboard/dashContact3";
import DashContact3Patch from "../../components/Dashboard/dashContact3patch";
import DashContactPatch from "../../components/Dashboard/dashContactPatch";
import Editorial from "../../components/Dashboard/editor";
import EditorialPatch from "../../components/Dashboard/editorPatch";
import EditorProj from "../../components/Dashboard/editorProj";
import EditorProjPatch from "../../components/Dashboard/editorProjPatch";
import IndustryControl from "../../components/Dashboard/industryControl";
import MainSpace from "../../components/Dashboard/mainSpace";
import MediaControl from "../../components/Dashboard/mediaControl";
import Output from "../../components/Dashboard/output";
import Welcome from "../../components/Dashboard/welcome";
// import { caseStudy } from "../actions";

const mainReducer = (state = "", action) => {
  switch (action.type) {
    case "WELCOME":
      return <Welcome api={action.payload} />;
    case "BLOGGING":
      return <MainSpace texta={"Blog List"} textb={"Create Blog Post"} />;
    case "BRIEFING":
      return <BriefControl />;
    case "CASE":
      return <CaseControl />;
    case "CLIENT":
      return <ClientControl />;
    case "INDUSTRY":
      return <IndustryControl />;
    case "MEDIA":
      return <MediaControl />;
    case "CATEGORY":
      return <CategoryControl />;
    case "SHOW_CATEGORIES":
      return <CategoryControl output={<Output />} />;
    case "ADD_CATEGORY":
      return (
        <DashContact3
          title={"Create Category"}
          btn={"Add Category"}
          name={"Category Name"}
        />
      );
    case "EDIT_CATEGORIES":
      return (
        <DashContact3Patch
          title={"Edit Category"}
          btn={"Update Category"}
          name={"Category Name"}
          category={action.payload.data.data.name}
          id={action.payload.data.data.id}
        />
      );
    case "SHOW_BLOGS":
      return (
        <MainSpace
          texta={"Edit/ show blogs"}
          textb={"Add new blog"}
          output={<Output />}
        />
      );
    case "ADD_BLOG":
      return <Editorial title={"Create Blog Post"} />;
    case "EDIT_BLOGS":
      return (
        <EditorialPatch
          header={"Change Blog Post"}
          title={action.payload.data.data.title}
          content={action.payload.data.data.content}
          author={action.payload.data.data.author}
          image={action.payload.data.data.image}
          category={action.payload.data.data.category.name}
          catId={action.payload.data.data.category.id}
          id={action.payload.data.data.id}
        />
      );
    case "SHOW_BRIEFS":
      return <BriefControl output={<Output />} />;
    case "ADD_BRIEF":
      return <Contact title={"Create Brief"} />;
    case "SHOW_CASE":
      return <CaseControl output={<Output />} />;
    case "ADD_CASE":
      return <EditorProj title={"Create Case Study"} />;
    case "EDIT_CASES":
      return (
        <EditorProjPatch
          header={"Edit Case Study"}
          title={action.payload.data.data.title}
          category={action.payload.data.data.category.name}
          content={action.payload.data.data.content}
          description={action.payload.data.data.description}
          id={action.payload.data.data.id}
          catId={action.payload.data.data.category.id}
        />
      );
    case "SHOW_CLIENT":
      return <ClientControl output={<Output />} />;
    case "ADD_CLIENT":
      return (
        <DashContact title={"Create New Client"} posting={action.payload} />
      );
    case "EDIT_CLIENTS":
      return (
        <DashContactPatch
          title={`Edit Client`}
          posting={action.payload}
          name={action.payload.data.data.name}
          category={action.payload.data.data.category.name}
          catId={action.payload.data.data.category.id}
          image={action.payload.data.data.image}
          id={action.payload.data.data.id}
        />
      );
    case "SHOW_INDUSTRY":
      return <IndustryControl output={<Output />} />;
    case "ADD_INDUSTRY":
      return (
        <DashContact2
          title={"Search User by email"}
          btn={"Search"}
          // logo={"Industry Logo"}
          email={"User's email"}
        />
      );
    case "SHOW_MEDIA":
      return <MediaControl output={<Output />} />;
    case "ADD_MEDIA":
      return (
        <DashContact2
          title={"Add Media Mention"}
          btn={"Add Media Mention"}
          logo={"Media Agency's Logo"}
          name={"Media Agency's Name"}
        />
      );

    default:
      return <Welcome api={action.payload} />;
  }
};

export default mainReducer;
