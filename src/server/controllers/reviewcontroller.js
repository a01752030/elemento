const Review = require("../models/Review")

async function postReview (req, res) {

    const { rating, review} = req.body;

    const nuevaReview = new Review({
        rating, 
        review,
        fecha: new Date()
    });

    await nuevaReview.save();

    res.status(200).send({message: "Review creada correctamente c:"})


}
module.exports = [
    Review
]
