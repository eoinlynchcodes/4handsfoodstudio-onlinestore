import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
const productSchema = new mongoose.Schema({
  isTakeaway: { type: Boolean, required: true },
  name: { type: String, required: false },
  image: { type: String, required: false },
  size: { type: String, required: false },
  price: { type: Number, default: 0, required: false },
  category: { type: String, required: false },
  countInStock: { type: Number, default: 0, required: false },
  description: { type: String, required: false },
  ingredients: { type: String, required: false },
  rating: { type: Number, default: 0, required: false },
  numReviews: { type: Number, default: 0, required: false },
  reviews: [reviewSchema],
  collectionDate: { type: String, required: false },
  mainCourse: { type: Boolean, required: false },
  mainPrice: { type: Number, required: false },
  mainTitle: { type: String, required: false },
  mainItems: { type: String, required: false },
  coursePrice: { type: Number, required: false },
  courseTitle: { type: String, required: false },
  courseText: { type: String, required: false },
  pickupPoints: { type: String, required: false },
  otherinfo: { type: String, required: false },
});

const productModel = mongoose.model('Product', productSchema);

export default productModel;
