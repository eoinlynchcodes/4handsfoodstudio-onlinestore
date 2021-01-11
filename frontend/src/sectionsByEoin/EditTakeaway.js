import Axios from "axios";
import "./sectionsbyEoin.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTakeaway, deleteTakeawayData } from "../actions/takeawayActions";
import { useHistory } from "react-router-dom";
import {
  saveProduct,
  listProducts,
  deleteProduct,
} from "../actions/productActions";

function EditTakeaway(props) {
  const history = useHistory();
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;

  const dispatch = useDispatch();
  const [takeawayData, setTakeawayData] = useState([]);

  // For handling main courses.
  const [main, setMain] = useState({
    isTakeaway: true,
    mainCourse: true,
    collectionDate: "",
    price: "",
    mainTitle: "",
    mainItems: "",
  });

  const handleChangeMain = (event) => {
    setMain({
      ...main,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitMain = (event) => {
    event.preventDefault();
    axios.post("/api/products/", main)
      .then((response) => {
        setMain(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // For Handling other courses.

  const [course, setCourse] = useState({
    isTakeaway: true,
    mainCourse: false,
    collectionDate: "",
    countInStock: "",
    price: "null",
    mainTitle: "",
    mainItems: "",
  });

  const handleCourseChange = (event) => {
    setCourse({
      ...course,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitCourses = (event) => {
    event.preventDefault();
    axios
      .post("/api/products/", course)
      .then((response) => {
        setCourse(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // For Handling Details - Date, Pickup Location, etc.

  const [details, setDetails] = useState({
    isTakeaway: true,
    collectionDate: "",
    pickupPoints: "",
    otherinfo: "",
  });

  const handleChangeDetails = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitDetails = (event) => {
    event.preventDefault();
    axios
      .post("/api/products/", details)
      .then((response) => {
        setDetails(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get takeaways.
  useEffect(() => {
    axios
      .get("/api/products/")
      .then((response) => {
        setTakeawayData(response.data.products);
      })
      .catch((error) => {
        return error.message;
      });
  }, []);

  // Delete takeaway
  const deleteHandler = (takeaway) => {
    dispatch(deleteProduct(takeaway._id));
    window.location.reload();
  };

  return (
    <section className="editTakeawayPage">
      <hr />
      <div>
        <h2>Menu currently online</h2>
        {takeawayData.map((takeaway) => {
          if (takeaway.isTakeaway === true) {
            return (
              <div className="menuTakeawaySection">
                <div>
                  <h5>{takeaway.collectionDate}</h5>
                  <h4>
                    <u>{takeaway.mainTitle}</u>
                  </h4>
                  <h4>
                    <u>{takeaway.courseTitle}</u>
                  </h4>
                  <p> {takeaway.mainITems}</p>
                  <p> {takeaway.courseText}</p>
                  {takeaway.price ? (
                    <p>
                      Price: <u>€{takeaway.price}</u>
                    </p>
                  ) : null}
                  {takeaway.countInStock ? (
                    <p>
                      Quantity available: <u>{takeaway.countInStock}</u>
                    </p>
                  ) : null}

                  <p>{takeaway.mainItems}</p>
                </div>
                {takeaway.pickupPoints ? (
                  <div>Pick-up Points: {takeaway.pickupPoints}</div>
                ) : null}
                {takeaway.otherinfo ? (
                  <div>Other Info: {takeaway.otherinfo}</div>
                ) : null}
                <button onClick={() => deleteHandler(takeaway)}>Delete</button>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>

      <div>
        <form
          onSubmit={(event) => handleSubmitMain(event)}
          className="editTakeawayForm"
        >
          <h2>Add Main Course</h2>
          <label>Main Course Price:</label>
          <input
            name="price"
            placeholder="Price in €"
            type="number"
            onChange={(event) => handleChangeMain(event)}
          />
          <br />

          <label>Number Available:</label>
          <input
            name="countInStock"
            type="number"
            placeholder="Number Available:"
            onChange={(event) => handleChangeMain(event)}
          />
          <br />

          <label>Main Course Title:</label>
          <textarea
            name="mainTitle"
            placeholder="Course Name:"
            onChange={(event) => handleChangeMain(event)}
          />
          <br />

          <label>Main Course Items/Text:</label>
          <textarea
            name="mainItems"
            placeholder="Course Contents:"
            rows="6"
            onChange={(event) => handleChangeMain(event)}
          />
          <button type="submit">Add Main Course</button>
        </form>

        <form
          onSubmit={(event) => handleSubmitCourses(event)}
          className="editTakeawayForm"
        >
          <h3>Add Other Course</h3>
          <label>Course Price:</label>
          <input
            name="price"
            placeholder="Price in €"
            type="number"
            onChange={(event) => handleCourseChange(event)}
          />
          <br />

          <label>Number Available:</label>
          <input
            name="countInStock"
            type="number"
            placeholder="Number Available:"
            onChange={(event) => handleCourseChange(event)}
          />
          <br />

          <label>Course Title:</label>
          <textarea
            name="courseTitle"
            placeholder="Course Name:"
            onChange={(event) => handleCourseChange(event)}
          />
          <br />

          <label>Course Text:</label>
          <textarea
            name="courseText"
            placeholder="Course Contents:"
            rows="6"
            onChange={(event) => handleCourseChange(event)}
          />
          <br />
          <button type="submit">Add</button>
          <br />
        </form>

        <form
          onSubmit={(event) => handleSubmitDetails(event)}
          className="editTakeawayForm"
        >
          <h2>Add Details</h2>
          <label>Collection Date:</label>
          <input
            name="collectionDate"
            placeholder="Date"
            onChange={(event) => handleChangeDetails(event)}
          />
          <br />

          <label>Pick-Up Points:</label>
          <textarea
            name="pickupPoints"
            placeholder="Where can it be collected?"
            rows="6"
            onChange={(event) => handleChangeDetails(event)}
          />
          <br />

          <label>Other Information to Add:</label>
          <textarea
            name="otherinfo"
            placeholder="Any other information to add:"
            rows="8"
            onChange={(event) => handleChangeDetails(event)}
          />
          <br />
          <button type="submit">Add Details</button>
          <br />
        </form>
      </div>
    </section>
  );
}

export default EditTakeaway;
