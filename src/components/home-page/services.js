import React from "react";
import ServiceCard from "../Reusable-components/service_card";

const Services = () => {
  return (
    <section id="industries" className=" industries py-5 text-center mb-2">
      <div className="container ">
        <div className="Section-header py-4">
          <h1 className="fs-1 fs-sm-1 fw-bold">Our Services</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-4 col-lg-6 col-md-6 p-0 my-4">
            <ServiceCard
              image={"/images/service_icons/sd.png"}
              title={"Software Development"}
              text={
                "We bring a combination of domain expertise, exceptional talent, rigorous Agile development processes, and a commitment to delivering state-of-the-art software solutions."
              }
            />
          </div>
          <div className="col-12 col-xl-4 col-lg-6 col-md-6 p-0 my-4">
            <ServiceCard
              image={"/images/service_icons/dm.png"}
              title={"Digital Marketing"}
              text={
                "We boast of a team of experts, strategy, and proven process for uncovering insights you never see and delivering results you never expect. "
              }
            />
          </div>
          <div className="col-12 col-xl-4 col-lg-6 col-md-6 p-0 my-4">
            <ServiceCard
              image={"/images/service_icons/branding.png"}
              title={"Branding"}
              text={
                "We live and breathe contemporary brand strategy and design. Using a unique skill set of writers, designers, and developers, we turn great ideas into success stories."
              }
            />
          </div>
          <div className="col-12 col-xl-4 col-lg-6 col-md-6 p-0 my-4">
            <ServiceCard
              image={"/images/service_icons/pd.png"}
              title={"Product Design"}
              text={
                "We design a user experience that make products useful, usable and desirable. We take the time to understand your problems and design for results."
              }
            />
          </div>
          <div className="col-12 col-xl-4 col-lg-6 col-md-6 p-0 my-4">
            <ServiceCard
              image={"/images/service_icons/wd.png"}
              title={"Website Development"}
              text={
                "We do not just seek to build functional and responsive websites, but create an unforgettable digital experience for every site visit."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
