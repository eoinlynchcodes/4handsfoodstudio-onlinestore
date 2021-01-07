import express from 'express';
import Takeaway from '../models/takeawayModel';
// import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const takeaway = await Takeaway.find();
  res.send(takeaway);
});

router.post('/', async (req, res) => {
  const takeaway = new Takeaway({
    collectionDate: req.body.collectionDate,
    course: req.body.course,
    mainPrice: req.body.mainPrice,
    mainTitle: req.body.mainTitle,
    mainItems: req.body.mainItems,
    headingTwoPrice: req.body.headingTwoPrice,
    headingTwo: req.body.headingTwo,
    textTwo: req.body.textTwo,
    headingThreePrice: req.body.headingThreePrice,
    headingThree: req.body.headingThree,
    textThree: req.body.textThree,
    pickupPoints: req.body.pickupPoints,
    otherinfo: req.body.otherinfo,
  });
  const newTakeAway = await takeaway.save();
  if (newTakeAway) {
    return res.status(201).send({ message: 'Takeaway was successfully created.', data: newTakeAway });
  }
  return res.status(500).send({ message: 'Error in creating the takeaway.' });
});

router.delete('/:id', async (req, res) => {
  const deletedTakeaway = await Takeaway.findById(req.params.id);
  if (deletedTakeaway) {
    await deletedTakeaway.remove();
    res.send({ message: 'Takeaway Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

export default router;
