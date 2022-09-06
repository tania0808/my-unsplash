const Photo = require("../models/Photo");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.addPhoto = async (req, res) => {
  if (req.body === undefined) return res.status(400).json("Empty data !!!");

  const photo = new Photo({
    userId: req.auth.id,
    label: req.body.label,
    photoUrl: req.body.photoUrl,
  });

  console.log(photo);
  try {
    await photo.save();

    const photoCreated = await Photo.findOne({ label: photo.label });

    res.send({
      newPhoto: photoCreated,
    });
  } catch (err) {
    // SEND AN ERROR
    res.status(400).send(allPhotos);
  }
};

exports.getAllphotos = async (req, res) => {
  Photo.find({ userId: req.auth.id })
    .then((photos) => res.status(200).json(photos))
    .catch((err) => res.status(400).json({ err }));
};

exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.body.id });
  const userExists = await User.findOne({ _id: req.auth.id });
  const validPass = await bcrypt.compare(
    req.body.password,
    userExists.password
  );
  if (!validPass)
    return res.status(400).send({ message: "Invalid password !" });

  if (photo.userId !== req.auth.id) {
    res.status(400).send({ message: "not your photo !!!" });
  } else {
    Photo.deleteOne({ _id: req.body.id }).then(() => {
      res.status(200).json({ message: "Photo was deleted !" });
    })
    .catch(err => res.send(err))
  }
};
