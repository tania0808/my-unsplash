const Photo = require('../models/Photo');

exports.addPhoto = async(req, res) => {
    if(req.body === undefined) return res.status(400).json('Empty data !!!');

    const photo = new Photo({
        userId: req.auth.id,
        label: req.body.label,
        photoUrl: req.body.photoUrl
    });

    console.log(photo);
    try {
        await photo.save();

        const photoCreated = await Photo.findOne({ label: photo.label });

        res.send({
            newPhoto: photoCreated
        })
    }

    // SEND AN ERROR
    catch(err){ res.status(400).send(allPhotos) }
}

exports.getAllphotos = async (req, res) => {
    Photo.find({ userId: req.auth.id})
    .then( photos => res.status(200).json(photos))
    .catch(err => res.status(400).json({ err }))
}

exports.deletePhoto = async (req, res) => {
    Photo.findOne({_id: req.body.id})
    .then(photo => {
        if(photo.userId !== req.auth.id) {
            res.status(400).json({ message: 'Unauthorized request !' });
        } else {
            Photo.deleteOne({ _id: req.body.id})
            .then(() => {
                res.status(200).json({message: "Photo was deleted !"})
            })
            .catch(err => res.status(404).json({ message: err }))
        }
    })
    .catch(() => res.status(400).json({ err: 'no photo with this id !' }))
}
