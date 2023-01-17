import { useState, useEffect } from 'react';

import ItemCard from "../itemCard/ItemCard";

const HomePageCatalogIBord = () => {

  const item = (
    <ItemCard
      name={"nike"}
      price={54}
      imge={
        "https://e7.pngegg.com/pngimages/507/572/png-clipart-sneakers-sneaker-collecting-shoe-vans-adidas-adidas-white-text.png"
      }
    />
  );
  const item2 = (
    <ItemCard
      name={"puma"}
      price={12}
      imge={
        "https://www.shutterstock.com/image-vector/transparent-shoes-icon-png-vector-260nw-1952341351.jpg"
      }
    />
  );
  const item3 = (
    <ItemCard
      name={"adida"}
      price={28}
      imge={
        "https://st4.depositphotos.com/18664664/20981/v/600/depositphotos_209817200-stock-illustration-sneaker-icon-vector-isolated-white.jpg"
      }
    />
  );

  const itemArr = [item, item, item, item, item, item, item, item, item, item,];
  const item2Arr = [item2,item2,item2,item2,item2,item2,item2,item2,item2,item2,]
  const item3Arr = [item3,item3,item3,item3,item3,item3,item3,item3,item3,item3,];



  const [catalog, setCatalog] = useState(itemArr);

  useEffect(()=>{

  }, [catalog])

  return (
    <section className="catalog">
      <div className="catalog-fillter">
        <button autoFocus onClick={()=>{setCatalog(itemArr)}} className="catalog-fillter__btn">мужское</button>
        <button onClick={()=>{setCatalog(item2Arr)}} className="catalog-fillter__btn">женское</button>
        <button onClick={()=>{setCatalog(item3Arr)}} className="catalog-fillter__btn">новинки</button>
      </div>
      <div className="catalog-bord">
        {catalog.map(item => item)}
      </div>
      
    </section>
  );
};

export default HomePageCatalogIBord;
