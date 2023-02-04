// import HomePageCatalogIBord from "../components/homePageCatalogI/HomePageCatalogI";
import Catalog from "../components/catalog/Catalog";
const CatalogPage = () => {
  return (
    <main className="wrapper">
      <Catalog searchOn={true} fillterOn={true}/>
    </main>
  );
};
export default CatalogPage;
