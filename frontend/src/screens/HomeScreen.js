import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Navigation from "../components/Navigation";
import stoveburning from "../imagesByEoin/stoveburning.png";
import firewoodstack from "../imagesByEoin/firewoodstack.jpeg";
import yard from "../imagesByEoin/yard.jpg";
import timberstack from "../imagesByEoin/timberstack.jpg";
import MyForm from "../components/MyForm.js";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { listTopSellers } from "../actions/userActions";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function HomeScreen(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    debugger;
    console.log(product);
    props.history.push("/cart/" + product._id + "?qty=" + 1);
  };

  return (
    // <div>
    //   <h2>Top Sellers</h2>
    //   {loadingSellers ? (
    //     <LoadingBox></LoadingBox>
    //   ) : errorSellers ? (
    //     <MessageBox variant="danger">{errorSellers}</MessageBox>
    //   ) : (
    //     <>
    //       {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
    //       <Carousel showArrows autoPlay showThumbs={false}>
    //         {sellers.map((seller) => (
    //           <div key={seller._id}>
    //             <Link to={`/seller/${seller._id}`}>
    //               <img src={seller.seller.logo} alt={seller.seller.name} />
    //               <p className="legend">{seller.seller.name}</p>
    //             </Link>
    //           </div>
    //         ))}
    //       </Carousel>
    //     </>
    //   )}
    //   <h2>Featured Products</h2>
    //   {loading ? (
    //     <LoadingBox></LoadingBox>
    //   ) : error ? (
    //     <MessageBox variant="danger">{error}</MessageBox>
    //   ) : (
    //     <>
    //       {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
    //       <div className="row center">
    //         {products.map((product) => (
    //           <Product key={product._id} product={product}></Product>
    //         ))}
    //       </div>
    //     </>
    //   )}
    // </div>

    <>
      {/* <Navigation /> */}
      <div className="videoAndDescription">
        <div className="left33">
          <div className="textToSquare">
            <div className="main-text-block">
              <h1>
                Firewood.
                <br /> Delivered.
              </h1>
              <h5 className="">
                Order online and get firewood delivered in Westmeath.
                <br /> Seasoned and dried by air or kiln.
              </h5>

              {/* <div className="image-for-mobile">
              <img src={} />
            </div> */}
              <div className="flexThisEvenly">
                <a className="" href="#products">
                  <p className="orderNowButton">Order Now</p>
                </a>
                <a className="" href="#products">
                  <p className="seeProductButton">
                    <u>See Products</u>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="right66">
          <img src={stoveburning} />
        </div>
      </div>

      <div className="firewoodSection">
        <img src={firewoodstack} />
      </div>
      {/* {category && <h2>{category}</h2>} */}

      {/* <ul className="filter">
        <li>
          <form onSubmit={submitHandler}>
            <input
              name="searchKeyword"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </li>
        <li>
          Sort By{' '}
          <select name="sortOrder" onChange={sortHandler}>
            <option value="">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </li>
      </ul> */}

      <div className="">
        <div id="supplyID" className="forPaddingSections">
          <hr className="smallHR" />
          <h3 className="supplytext">
            <i>
              Over 40 years of supplying firewood, timber products and tree
              services.
            </i>
          </h3>
          <hr className="smallHR" />
        </div>
      </div>

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
                        {/* <div className="product-brand pad">
                        {product.weightOrDimensions}
                      </div> */}
                        <div className="product-price pad">
                          {" "}
                          {product.price ? `€ ${product.price}` : null}
                        </div>
                        {/* <div className="product-rating pad">
                        <Rating
                          value={product.rating}
                          text={product.numReviews + " reviews"}
                        />
                      </div> */}
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

        <section className="">
          <div className="forPaddingSections">
            <section className="grey-border">
              <div className="inforgraphic greenOne">
                <div className="inside-infographic">
                  <h1>1</h1>
                </div>
                <div className="inforgraphic-text">
                  <h3>
                    <u>Order Firewood</u>
                  </h3>
                  <h5>Choose your product.</h5>
                </div>
              </div>

              <div className="inforgraphic greenTwo">
                <div className="inside-infographic">
                  <h1>2</h1>
                </div>
                <div className="inforgraphic-text">
                  <h3>
                    <u>Choose Delivery or Collection</u>
                  </h3>
                  <h4>
                    Receive firewood delivery or schedule a time for collection
                    from our yard in Mullingar.
                  </h4>
                </div>
              </div>

              <div className="inforgraphic greenThree">
                <div className="inside-infographic">
                  <h1>3</h1>
                </div>
                <div className="inforgraphic-text">
                  <h3>
                    <u>Make use of your new firewood</u>
                  </h3>
                  <h4>
                    All of our firewood is seasoned for at least 2 years. Get
                    exceptional heat from your fire.
                  </h4>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="homepageSectionFirewood">
          <div className="forPaddingSections">
            <h2>Our Firewood</h2>
            <section className="grey-border">
              <div className="imagecontainer">
                <img className="imagetocontain" src={yard} />
              </div>
              <div className="forPaddingSections">
                <ul className="our-firewood-section padText">
                  <li>Seasoned for at least two years.</li>
                  <li>
                    Comes from dangerous trees that had to be cut down for
                    safety reasons.
                  </li>
                  <li>
                    Naturally dried and seasoned in our yard in the centre of
                    Ireland for at least 2 years.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>

        <section className="about-section">
          <div className="forPaddingSections">
            <h1 id="about">About</h1>
            <section className="grey-border">
              <div>
                <img src={timberstack} />
              </div>
              <div className="forPaddingSections">
                <p className="padText">
                  Mick Lynch &amp; Son Tree Surgery have been felling dangerous
                  trees and selling firewood since 1978. In response to an
                  increasing demand for timber based products in the midlands,
                  John Lynch decided to setup timberandmulch.ie and the
                  necessary infrastructure to process and sell firewood, bark
                  mulch and slabs of hardwood for use with furniture,
                  construction, art, design and more.
                </p>
              </div>
            </section>
          </div>
        </section>

        <section className="contact-section">
          <div className="forPaddingSections">
            <h1 id="contact">Contact Us</h1>
            <MyForm />
            {/* <form className="contactForm">
              <label>Name:</label>
              <input type="text" 
              name="name"
              />
              <br />

              <label>Email:</label>
              <input type="text"
              name="email" />
              <br />

              <label>Phone Number:</label>
              <input type="text" 
              name="number"
              />
              <br />

              <label>Message:</label>
              <textarea type="textarea"
               name="message"
               rows="8" />
              <br />
              <input
                type="submit"
                className="contact-submit-button"
                value="Send Message"
              />
            </form> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
