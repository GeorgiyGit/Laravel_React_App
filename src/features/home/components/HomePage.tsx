import { useEffect, useState } from "react";
import classNames from "classnames";
import { ISimpleProduct } from "../models/simple-product";
import Loader from "./Loader";
import { useActions } from "../../../hooks/useActions";
import { IProductSearch } from "../../../store/types/productTypes";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { GetProductList } = useActions();
  const [search, setSearch] = useState<IProductSearch>({
    page: 1,
  });

  const { list, current_page, count_page, total } = useTypedSelector(
    (store) => store.product
  );
  // useSelector((store: any) => store.product as IProductState);

  useEffect(() => {
    GetProductList(search);
    isLoading = false;
  }, [search]);

  //get products
  //http.get<Array<ISimpleProduct>>("api/products").then(async (res) => {
  //const { data } = res;
  //console.log(data);
  //setList(data);
  //console.log(list);
  //setLoading(false);
  //});
  //}, []);
  const buttons: Array<number> = [];
  for (let i = 1; i <= count_page; i++) buttons.push(i);

  const paginate = buttons.map((page) => {
    return (
      <li key={page} className="page-item">
        <Link
          to={"?page=" + page}
          onClick={() => setSearch({ page })}
          className={classNames("page-link", { active: page === current_page })}
        >
          {page}
        </Link>
      </li>
    );
  });

  const content = list.map(
    (
      product //view products with cards
    ) => (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{product.id}</h5>
          <p className="card-text">{product.name}</p>
        </div>
      </div>
    )
  );

  let loadDiv;
  let isLoading = false;
  if (isLoading) {
    loadDiv = <Loader />; //loader
  } else {
    loadDiv = null;
  }
  return (
    <>
      <h1 className="text-center">Home Page</h1>

      <div className="containter">
        <nav>
          <ul className="pagination">{paginate}</ul>
        </nav>
        {loadDiv}
        {content}
      </div>
    </>
  );
};
export default HomePage;
