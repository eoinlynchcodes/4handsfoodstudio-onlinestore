import mongoose from 'mongoose';

const takeAwaySchema = new mongoose.Schema(
  {
    collectionDate: { type: String, required: true },
    course: { type: Boolean, required: false },
    mainPrice: { type: Number, required: true },
    mainTitle: { type: String, required: true },
    mainItems: { type: String, required: true },
    headingTwoPrice: { type: Number, required: false },
    headingTwo: { type: String, required: false },
    textTwo: { type: String, required: false },
    headingThreePrice: { type: Number, required: false },
    headingThree: { type: String, required: false },
    textThree: { type: String, required: false },
    pickupPoints: { type: String, required: false },
    otherinfo: { type: String, required: false },
  },
);

const takeAwayModel = mongoose.model('Takeaway', takeAwaySchema);

export default takeAwayModel;
