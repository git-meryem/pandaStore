import { useEffect, useState } from "react";
import Product from "./Product";
import Category from "./Category";
export default function ProductList() {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
        setFilter(data);
        console.log("component is mounted");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //   useEffect(() => {
  //     console.log(product);
  //   }, [product]);

  const [search, setSearch] = useState("");
  const inputSearchChange = () => {
    const searchValue = document.querySelector("#searchValue").value;
    console.log(searchValue);
    setSearch(searchValue);
    console.log("search : " + search);
  };

  const submitSearch = (event) => {
    event.preventDefault();

    const filtredProduct = product.filter(
      (p) => p.id.toString().includes(search)||
      p.title.includes(search) ||
      p.price.toString().includes(search) ||
      p.description.includes(search)
    );
    setFilter(filtredProduct);
  };

  const handleCategoryClick = (cat) => {
    const filteredProducts = product.filter(
      (p) => p.category === cat||
      p.title.includes(search) ||
      p.price.toString().includes(search) ||
      p.description.includes(search) && p.id.toString().includes(search)
    );
    setFilter(filteredProducts);
  };

  const displayProduct = () => {
    if (filter.length === 0) {
      return (
        <tr>
          <td colSpan="7">No Items</td>
        </tr>
      );
    }
    return filter.map((result) => {
      return <Product productValue={result} key={result.id} />;
    });
  };

  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("category mount : ");
      const responce = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await responce.json();
      setCategory(data);
      console.log(category);
    };

    fetchData();
  }, []);

  const displayCategory = () => {
    return category.map((c) => {
      return (
        <Category cat={c} key={c} handleSearch={() => handleCategoryClick(c)} />
      );
    });
  };

  // const handleCategoryClick = (cat) => {
  //     const filteredProducts = product.filter((p) => p.category === cat);
  //     setFilter(filteredProducts);
  //   };

  return (

    <div className="container mt-2">
        <img src={require("./panda_logo-removebg-preview.png")} alt="panda" width={"110px"}/>

    {/* <h4 style={{ color:'#112D4E' , fontWeight:900 , textAlign:"center", textTransform:"uppercase"}}>
    Panda <span style={{ color:"#3F72AF" }}>Store</span> </h4> */}
      <div className="row mt-0">
       <div className="col d-flex justify-content-start">
        <h5
            style={{
            fontWeight: 700,
            margin: "30px",
            }}
        >
            Liste des produits
        </h5>
        </div>

        <div className="col d-flex justify-content-end">
            <div style={{display:"flex" , height:"fit-content" ,  alignSelf:"center" }}>
               
                <input
                type="test"
                id="searchValue"
                className="form-control"
                onChange={inputSearchChange}
                placeholder="search"
                ></input>
                <button
                type="submit"
                className="btn btn-primary"
                onClick={submitSearch}
                >
                <i class="bi bi-search"></i>
                </button>
            </div>
        </div>
      </div>

      <div className="btn-group col-12 m-2" role="group">
        {displayCategory()}
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Image</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>{displayProduct()}</tbody>
      </table>
    </div>
  );
}
