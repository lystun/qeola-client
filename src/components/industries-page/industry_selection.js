// import { useState } from "react";
import CardIndustry from "../Reusable-components/card_industry";

const IndustrySelection = () => {
  // const [active, setActive] = useState({
  //   Allworks: "active",
  //   Branding: "",
  //   WebDesign: "",
  //   MobileApp: "",
  //   Marketing: "",
  // });
  // const [sturdies, setSturdies] = useState(
  //   <div>
  // <div className="row align-items-center ">
  //   <div className="col-6 col-lg-3 col-md-3 px-1 p-3">
  //     <CardIndustry
  //       title={"Education"}
  //       image={"images/Home/icons/education.png"}
  //     />
  //   </div>
  //   <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //     <CardIndustry
  //       title={"Health"}
  //       image={"images/Home/icons/health.png"}
  //     />
  //   </div>
  //   <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //     <CardIndustry
  //       title={"Agriculture"}
  //       image={"images/Home/icons/agriculture.png"}
  //     />
  //   </div>
  //   <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //     <CardIndustry
  //       title={"Startup and Venture Capital"}
  //       image={"images/Home/icons/startup_and_venture_capital.png"}
  //     />
  //   </div>

  //   <div className="col-6 col-lg-3 col-md-4 px-1">
  //     <CardIndustry title={"Faith"} image={"images/Home/icons/faith.png"} />
  //   </div>
  //   <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //     <CardIndustry
  //       title={"Consulting"}
  //       image={"images/Home/icons/consulting.png"}
  //     />
  //   </div>
  //   <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //     <CardIndustry
  //       title={"Social Impact"}
  //       image={"images/Home/icons/social_impact.png"}
  //     />
  //   </div>
  //   <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //     <CardIndustry
  //       title={"Finance and Insurance"}
  //       image={"images/Home/icons/finance_and_insurance.png"}
  //     />
  //   </div>
  //   <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //     <CardIndustry
  //       title={"Real Estate"}
  //       image={"images/Home/icons/real_estate.png"}
  //     />
  //   </div>
  //   <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //     <CardIndustry
  //       title={"Talent Outsourcing"}
  //       image={"images/Home/icons/talent_outsourcing.png"}
  //     />
  //   </div>
  // </div>
  //   </div>
  // );

  // const Allworks = () => {
  //   setActive({
  //     Allworks: "active",
  //     Branding: "",
  //     WebDesign: "",
  //     MobileApp: "",
  //     Marketing: "",
  //   });
  //   setSturdies(
  //     <div>
  //       <div>
  //         <div className="row align-items-center ">
  //           <div className="col-6 col-lg-3 col-md-3 px-1 p-3">
  //             <CardIndustry
  //               title={"Education"}
  //               image={"images/Home/icons/education.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Health"}
  //               image={"images/Home/icons/health.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Agriculture"}
  //               image={"images/Home/icons/agriculture.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Startup and Venture Capital"}
  //               image={"images/Home/icons/startup_and_venture_capital.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-4 px-1">
  //             <CardIndustry
  //               title={"Faith"}
  //               image={"images/Home/icons/faith.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Consulting"}
  //               image={"images/Home/icons/consulting.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Social Impact"}
  //               image={"images/Home/icons/social_impact.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Finance and Insurance"}
  //               image={"images/Home/icons/finance_and_insurance.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Real Estate"}
  //               image={"images/Home/icons/real_estate.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Talent Outsourcing"}
  //               image={"images/Home/icons/talent_outsourcing.png"}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const Branding = () => {
  //   setActive({
  //     Allworks: "",
  //     Branding: "active",
  //     WebDesign: "",
  //     MobileApp: "",
  //     Marketing: "",
  //   });
  //   setSturdies(
  //     <div>
  //       <div>
  //         <div className="row align-items-center ">
  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Health"}
  //               image={"images/Home/icons/health.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Consulting"}
  //               image={"images/Home/icons/consulting.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Finance and Insurance"}
  //               image={"images/Home/icons/finance_and_insurance.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Real Estate"}
  //               image={"images/Home/icons/real_estate.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Talent Outsourcing"}
  //               image={"images/Home/icons/talent_outsourcing.png"}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const WebDesign = () => {
  //   setActive({
  //     Allworks: "",
  //     Branding: "",
  //     WebDesign: "active",
  //     MobileApp: "",
  //     Marketing: "",
  //   });
  //   setSturdies(
  //     <div>
  //       <div>
  //         <div className="row align-items-center ">
  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Agriculture"}
  //               image={"images/Home/icons/agriculture.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Startup and Venture Capital"}
  //               image={"images/Home/icons/startup_and_venture_capital.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-4 px-1">
  //             <CardIndustry
  //               title={"Faith"}
  //               image={"images/Home/icons/faith.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Consulting"}
  //               image={"images/Home/icons/consulting.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Real Estate"}
  //               image={"images/Home/icons/real_estate.png"}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const MobileApp = () => {
  //   setActive({
  //     Allworks: "",
  //     Branding: "",
  //     WebDesign: "",
  //     MobileApp: "active",
  //     Marketing: "",
  //   });
  //   setSturdies(
  //     <div>
  //       <div>
  //         <div className="row align-items-center ">
  //           <div className="col-6 col-lg-3 col-md-3 px-1 p-3">
  //             <CardIndustry
  //               title={"Education"}
  //               image={"images/Home/icons/education.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Health"}
  //               image={"images/Home/icons/health.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Agriculture"}
  //               image={"images/Home/icons/agriculture.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-4 px-1">
  //             <CardIndustry
  //               title={"Faith"}
  //               image={"images/Home/icons/faith.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Consulting"}
  //               image={"images/Home/icons/consulting.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Finance and Insurance"}
  //               image={"images/Home/icons/finance_and_insurance.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Real Estate"}
  //               image={"images/Home/icons/real_estate.png"}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const Marketing = () => {
  //   setActive({
  //     Allworks: "",
  //     Branding: "",
  //     WebDesign: "",
  //     MobileApp: "",
  //     Marketing: "active",
  //   });
  //   setSturdies(
  //     <div>
  //       <div>
  //         <div className="row align-items-center ">
  //           <div className="col-6 col-lg-3 col-md-3 px-1 p-3">
  //             <CardIndustry
  //               title={"Education"}
  //               image={"images/Home/icons/education.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Agriculture"}
  //               image={"images/Home/icons/agriculture.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-3 px-1 ">
  //             <CardIndustry
  //               title={"Startup and Venture Capital"}
  //               image={"images/Home/icons/startup_and_venture_capital.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-4 px-1">
  //             <CardIndustry
  //               title={"Faith"}
  //               image={"images/Home/icons/faith.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Consulting"}
  //               image={"images/Home/icons/consulting.png"}
  //             />
  //           </div>

  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Finance and Insurance"}
  //               image={"images/Home/icons/finance_and_insurance.png"}
  //             />
  //           </div>
  //           <div className="col-6 col-lg-3 col-md-4 px-1 ">
  //             <CardIndustry
  //               title={"Real Estate"}
  //               image={"images/Home/icons/real_estate.png"}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div>
      <section id="case-study">
        <div className="container">
          {/* <div className="my-5 pt-5">
            <button
              className={`shadow-none px-1 mx-3 py-1 ${active.Allworks}`}
              onClick={Allworks}
            >
              All Works
            </button>
            <button
              className={`shadow-none px-1 mx-3 py-1 ${active.Branding}`}
              onClick={Branding}
            >
              Branding
            </button>
            <button
              className={`shadow-none px-1 mx-3 py-1 ${active.WebDesign}`}
              onClick={WebDesign}
            >
              Web Design
            </button>
            <button
              className={`shadow-none px-1 mx-3 py-1 ${active.MobileApp}`}
              onClick={MobileApp}
            >
              Mobile App
            </button>
            <button
              className={`shadow-none px-1 mx-3 py-1 ${active.Marketing}`}
              onClick={Marketing}
            >
              Marketing
            </button>
          </div> */}
          <div className="my-5 pb-5">
            <div className="row align-items-center ">
              <div className="col-6 col-lg-3 col-md-3 px-1 p-3">
                <CardIndustry
                  title={"Education"}
                  image={"images/Home/icons/education.png"}
                />
              </div>
              <div className="col-6 col-lg-3 col-md-3 px-1 ">
                <CardIndustry
                  title={"Health"}
                  image={"images/Home/icons/health.png"}
                />
              </div>
              <div className="col-6 col-lg-3 col-md-3 px-1 ">
                <CardIndustry
                  title={"Agriculture"}
                  image={"images/Home/icons/agriculture.png"}
                />
              </div>
              <div className="col-6 col-lg-3 col-md-3 px-1 ">
                <CardIndustry
                  title={"Startup and Venture Capital"}
                  image={"images/Home/icons/startup_and_venture_capital.png"}
                />
              </div>

              <div className="col-6 col-lg-3 col-md-4 px-1">
                <CardIndustry
                  title={"Faith"}
                  image={"images/Home/icons/faith.png"}
                />
              </div>
              <div className="col-6 col-lg-3 col-md-4 px-1 ">
                <CardIndustry
                  title={"Consulting"}
                  image={"images/Home/icons/consulting.png"}
                />
              </div>
              <div className="col-6 col-lg-3 col-md-4 px-1 ">
                <CardIndustry
                  title={"Social Impact"}
                  image={"images/Home/icons/social_impact.png"}
                />
              </div>
              <div className="col-6 col-lg-3 col-md-4 px-1 ">
                <CardIndustry
                  title={"Finance and Insurance"}
                  image={"images/Home/icons/finance_and_insurance.png"}
                />
              </div>
              <div className="col-6 col-lg-3 col-md-4 px-1 ">
                <CardIndustry
                  title={"Real Estate"}
                  image={"images/Home/icons/real_estate.png"}
                />
              </div>
              <div className="col-6 col-lg-3 col-md-4 px-1 ">
                <CardIndustry
                  title={"Talent Outsourcing"}
                  image={"images/Home/icons/talent_outsourcing.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrySelection;
