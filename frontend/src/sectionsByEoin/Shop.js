import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";

function Shop(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  const handleAddToCart = (product) => {
    props.history.push("/cart/" + product._id + "?qty=" + 1);
  };

  return (
    <section className="homepageContainer">
      <div className="vl"></div>
      <div className="containerByEoin">
        <section className="products-section">
          <div className="product-padding-section">
            {/* <h1 id="products">Products</h1> */}
            <p>More products will be available here soon.</p>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <ul id="products" className="products">
                {products.map((product) => (
                  <li key={product._id}>
                    {product ? (
                      <div className="product">
                        <Link to={"/product/" + product._id}>
                          <img
                            className="product-image"
                            src={product.image}
                            alt="product"
                          />
                        </Link>
                        <div className="product-name pad">
                          <Link
                            className="product-actual-name"
                            to={"/product/" + product._id}
                          >
                            {product.name}
                          </Link>
                        </div>

                        <div className="product-price pad">
                          {" "}
                          {product.price ? `€ ${product.price}` : null}
                        </div>

                        <div className="buttonDivHomepageProduct">
                          <div className="button primary fifty">More Info</div>
                          {product.countInStock > 0 ? (
                            <div
                              onClick={(product) => handleAddToCart(product)}
                              id="greenButton"
                              className="whitetext button fifty"
                            >
                              Add to Cart
                            </div>
                          ) : (
                            <div className="button primary">
                              <a href="#contact" className="whitetext">
                                Email Us For Orders
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h2>
                          Products will soon be available for purchase here.
                        </h2>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="stockists">
          
        </section>

      </div>
      <div className="vl"></div>
    </section>
  );
}

export default Shop;
