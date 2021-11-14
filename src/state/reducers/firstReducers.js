import Welcome from "../../components/Dashboard/welcome";

const briefReducer = (state = "helloo", action) => {
  switch (action.type) {
    case "BRIEF":
      return <Welcome />;
    default:
      return state;
  }
};

export default briefReducer;
