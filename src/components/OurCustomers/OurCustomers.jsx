import CustomersCard from "./CustomersCard";
import "./OurCustomers.css";

const OurCustomers = () => {
  return (
    <>
      <section className="customers">
        <div className="main__container customers__container" id="customers">
          <div className="customers__heading">
            <h3 className="main__heading">our customers</h3>
            <h2 className="subheading">Who We Work For</h2>
          </div>
          <section className="customers__points">
            <CustomersCard
              image={"/images/customer-icon1.svg"}
              point={"EPCM"}
            />
            <CustomersCard
              image={"/images/customer-icon2.svg"}
              point={"Engineers"}
            />
            <CustomersCard
              image={"/images/customer-icon3.svg"}
              point={"Local Government"}
            />
            <CustomersCard
              image={"/images/customer-icon4.svg"}
              point={"Civil Contractors"}
            />
            <CustomersCard
              image={"/images/customer-icon5.svg"}
              point={"Distributors"}
            />
            <CustomersCard
              image={"/images/customer-icon6.svg"}
              point={"Architects"}
            />
            <CustomersCard
              image={"/images/customer-icon7.svg"}
              point={"Fabricators"}
            />
            <CustomersCard
              image={"/images/customer-icon8.svg"}
              point={"Mining"}
            />
            <CustomersCard
              image={"/images/customer-icon9.svg"}
              point={"State Government"}
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default OurCustomers;
