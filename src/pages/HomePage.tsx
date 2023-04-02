import SliderInfoBord from "../components/sliderInfoBord/SliderInfoBord";
import Catalog from "../components/catalog/Catalog";
import Workflow from "../components/workflow/Workflow";
import SliderLogo from "../components/sliderLogo/SliderLogo";

const HomePage = () => {
  return (
    <main className="wrapper">
      <SliderInfoBord />
      <Catalog />
      <SliderLogo />
      <Workflow />
    </main>
  );
};

export default HomePage;
