import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push('/payment');
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  // cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.shippingPrice = 0;
  // cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.taxPrice = 0;
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="order-screen">
        <div className="col-2">
              <div className="order-box">
                <h2>Shipping Details</h2>
                <p>
                  <strong>Name:</strong><br/> {cart.shippingAddress.fullName} <br /><br />
                  <strong>Address: </strong><br/> {cart.shippingAddress.address},<br/>
                  {cart.shippingAddress.city},<br/>
                  {cart.shippingAddress.country}, <br/> {cart.shippingAddress.postalCode},
                  <br/><br/>
                  {cart.shippingAddress.instructions}
                  {console.log(cart)}
                </p>
              </div>
            {/* <li>
              <div className="order-box">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {cart.paymentMethod}
                </p>
              </div>
            </li> */}
              <div className="order-box">
                <h2>Order Items</h2>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x €{item.price} = €{item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
              </div>
        </div>
        <div className="col-1">
          <div className="order-box">
                <h2>Order Summary</h2>
                <div className="row">
                  <div>Items</div>
                  <div>€{cart.itemsPrice.toFixed(2)}</div>
                </div>
                {/* <div className="row">
                  <div>Shipping</div>
                  <div>€{cart.shippingPrice.toFixed(2)}</div>
                </div> */}
                {/* <div className="row">
                  <div>Tax</div>
                  <div>€{cart.taxPrice.toFixed(2)}</div>
                </div> */}
                <br/>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>€{cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div><br/>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="placeorderbutton"
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
          </div>
        </div>
      </div>
    </div>
  );
}