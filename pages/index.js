  import Header from "../components/header";
  import Hero from "../components/hero";
  import AreaPropertyContainer from "../components/area-property-container";
  import InfoPropertyContainer from "../components/info-property-container";
  import RentPropertiesContainer from "../components/rent-properties-container";
  import RentPropertiesForm from "../components/rent-properties-form";
  import ContactContainer from "../components/contact-container";
  import Footer from "../components/footer";
  import styles from "./index.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
        {/* <Header /> */}
        <Hero />
        <AreaPropertyContainer />
        <InfoPropertyContainer />
        <RentPropertiesContainer />
        <RentPropertiesForm />
        <ContactContainer />
        <Footer />
    </div>
  );
};

export default LandingPage;
