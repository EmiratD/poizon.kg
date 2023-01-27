import { useState, useEffect } from "react";
import { useSearchUserQuery } from "../../store/api/github.api";

import ItemCard from "../itemCard/ItemCard";

const HomePageCatalog = () => {
  const [catalog, setCatalog] = useState("man");

  const { isLoading, isError, data } = useSearchUserQuery(catalog);
  
  useEffect(() => {

  }, [data])

  return (
    <section className="catalog">
      <div className="catalog-fillter">
        <button autoFocus onClick={() => {setCatalog('man');
        }} className="catalog-fillter__btn">
          мужское
        </button>
        <button onClick={() => {setCatalog('woman');
        }} className="catalog-fillter__btn">
          женское
        </button>
        <button onClick={() => {setCatalog('new');
        }} className="catalog-fillter__btn">
          новинки
        </button>
      </div>
      <div className="catalog-bord">
        {isLoading && < div className="bord"><span className="bord-info-title">Loading</span></div>}
        {isError && < div className="bord"><span className="bord-info-title">error</span></div>}
        {data && data?.map(el => <ItemCard key={el.id} name={el.login} price={el.id} imge={el.avatar_url}/>)}
      </div>
    </section>
  );
};

export default HomePageCatalog;
