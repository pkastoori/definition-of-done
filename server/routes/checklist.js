const express = require("express");
const router = express.Router();
const cors = require("cors");
const corsOptions = require("../middleware/cors");
const Checklist = require("../models/checklist");

router.get("/activities", cors(corsOptions), (req, res) => {
  Checklist.find({})
    .then((checklist) =>
      res
        .status(200)
        .send({ message: "Activities retrieved", response: checklist })
    )
    .catch((error) => res.status(422).send({ message: error }));
});

router.post("/activities", cors(corsOptions), (req, res) => {
  const { content, status } = req.body;
  if (!content || !status) {
    return res.status(400).send({ message: "Please send all the fields" });
  }
  const activity = new Checklist({
    content,
    status,
  });
  activity
    .save()
    .then((activity) =>
      res.status(201).send({ message: "Activity posted", response: activity })
    )
    .catch((error) => res.status(422).send({ message: error }));
});

router.put("/activity/:id", cors(corsOptions), (req, res) => {
  Checklist.findOneAndUpdate(
    { _id: req.params.id },
    { status: req.body.status },
    { new: true }
  )
    .then((activity) =>
      res.status(200).send({ message: "Activity updated", response: activity })
    )
    .catch((error) => res.status(422).send({ message: error }));
});

router.put("/activities", cors(corsOptions), (req, res) => {
  Checklist.updateMany({ status: "pending" }, { status: "completed" })
    .then((activities) =>
      res.status(200).send({
        message: "Activies updated",
        response: { matched: activities.n, modified: activities.nModified },
      })
    )
    .catch((error) => res.status(422).send({ message: error }));
});

router.delete("/activity/:id", cors(corsOptions), (req, res) => {
  Checklist.findOneAndDelete({ _id: req.params.id })
    .then((activity) =>
      res.status(200).send({ message: "Activity deleted", response: activity })
    )
    .catch((error) => res.status(422).send({ message: error }));
});

module.exports = router;
