import  AboutUsBord from "../components/aboutUs/AboutUs";
import SignInAndLogIn from "../components/signInAndLogIn/SignInAndLogIn";
import ItemCard from "../components/itemCard/ItemCard";

const HomePage = () => {

  const item = <ItemCard name = {'nike'} price = {54} imge = {'https://e7.pngegg.com/pngimages/507/572/png-clipart-sneakers-sneaker-collecting-shoe-vans-adidas-adidas-white-text.png'}/>;

  const itemArr = [
    item,
    item,
    item,
    item,
    item,
    item,
    item,
    item,
  ];

  return(
      <main className="wrapper">
        {AboutUsBord}
        <div className="m0auto">
          <SignInAndLogIn/>
        </div>
        <div className="bord">
          {itemArr.map(item => item)}
        </div>
      </main>
  )
};

export default HomePage;