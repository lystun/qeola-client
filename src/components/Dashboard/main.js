import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Add from "./add";
// import Edit from "./edit";

// import { bindActionCreators } from "redux";
// import { actionCreators } from "../../state";

const Main = () => {
  //   const briefs = useSelector((state) => state.brief);
  // const dispatch = useDispatch();
  // const { briefAct } = bindActionCreators(actionCreators, dispatch);

  //   console.log(AC);
  //   console.log(briefs);
  const Main = useSelector((state) => state.mainState);

  // console.log(Main);
  return <div>{Main}</div>;
};

export default Main;
