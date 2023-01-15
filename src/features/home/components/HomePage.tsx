import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import http from "../../../http_common";
import { ISimpleProduct } from "../models/simple-product";
import Loader from "./Loader";

const HomePage = () => {
  const [list, setList] = useState<Array<ISimpleProduct>>([]);
  const[isLoading,setLoading]=useState<boolean>(true);

  useEffect(()=> {//get products
    http.get<Array<ISimpleProduct>>("api/products").then(async (res) => {
      const { data } = res;
      console.log(data);
      setList(data);
      console.log(list);
      setLoading(false);
    });
  }, []);

  const content = list.map((product) => (//view products with cards
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{product.id}</h5>
        <p className="card-text">{product.name}</p>
      </div>
    </div>
  ));

  let loadDiv;
  if(isLoading){
    loadDiv=<Loader/>//loader
  }
  else{
    loadDiv=null;
  }
  return (
    <>
      <h1 className="text-center">Home Page</h1>

      <div className="containter">
        {loadDiv}
        {content}
      </div>
    </>
  );
};
export default HomePage;
