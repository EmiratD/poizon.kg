import AboutUsBord from "../components/aboutUs/AboutUs";
import SignInAndLogIn from "../components/signInAndLogIn/SignInAndLogIn";
import HomePageCatalogIBord from "../components/homePageCatalogIBord/HomePageCatalogIBord";
import Workflow from "../components/workflow/Workflow";
import SliderLogo from "../components/sliderLogo/SliderLogo";


const HomePage = () => {


  return (
    <main className="wrapper">
      {AboutUsBord}
      <div className="m0auto">
        <SignInAndLogIn />
      </div>
      <HomePageCatalogIBord/>
      <div className="bord">
        <SliderLogo/>
      </div>
      <Workflow/>
    </main>
  );
};

export default HomePage;
