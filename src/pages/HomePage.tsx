import SliderInfoBord from "../components/sliderInfoBord/SliderInfoBord";
import HomePageCatalog from "../components/homePageCatalog/HomePageCatalog";
import Workflow from "../components/workflow/Workflow";
import SliderLogo from "../components/sliderLogo/SliderLogo";

const HomePage = () => {
  return (
    <main className="wrapper">
      <SliderInfoBord />
      <div className="m0auto"></div>
      <HomePageCatalog />
      <SliderLogo />
      <Workflow />
    </main>
  );
};

export default HomePage;
