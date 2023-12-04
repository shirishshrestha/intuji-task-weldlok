import "./OurSolutions.css";
import SolutionsCard from "./SolutionsCard";

const OurSolutions = () => {
  return (
    <>
      <section className="solutions" id="solutions">
        <div className="main__container">
          <div className="solutions__container">
            <div className="solutions__heading">
              <h3 className="main__heading">our solutions</h3>
              <h2 className="subheading">Our Diverse Product Range</h2>
            </div>
            <div className="solutions__card">
              <SolutionsCard
                image={"/images/solution-civil.png"}
                heading={"Civil Drainage Products"}
                para={
                  "Innovative Civil Drainage Products Including Ductile, Mild Steel Grates, Orca Drain..."
                }
              />
              <SolutionsCard
                image={"/images/solution-flooring.png"}
                heading={"Flooring & Grating Solutions"}
                para={
                  "Weldlok Grating and Flooring Products Come In Stainless Steel, Steel, & Mild Steel..."
                }
              />
              <SolutionsCard
                image={"/images/solution-handrail.png"}
                heading={"Handrail Systems"}
                para={
                  "Innovative Civil Drainage Products Including Ductile, Mild Steel Grates, Orca Drain..."
                }
              />
              <SolutionsCard
                image={"/images/solution-mastermesh.png"}
                heading={"Mastermesh Expanded Perforated"}
                para={
                  "Standard And Custom Designed Perforated Metal Products, Security Mesh, Decorative..."
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurSolutions;
