const { Flight, Destinations } = require("../models/flightModel");



module.exports.index = async (req, res) => {
    try{
        //"AAU, I want to view the list of flights by departure date in ascending order."
        const results = await Flight.find().sort({departs:1})
        // scrollTo({departs: 1})


         res.render('flights/Index', { results })
    } catch(err){
        console.log(err)
        res.send(err.message)
    }

 //   const flights = await flights.find().sort({ createdAt: 1 }
}

module.exports.show = async (req, res) => {
    try {
      const flight = await Flight.findById(req.params.id);
      res.render("flights/Show", { flight });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };

module.exports.new =  (req, res) => {
   // res.render('flights/New')
    const newFlight = new Flight({
        airline: req.body.airline,
        flightNo: req.body.flightNo,
        departs: req.body.departs,
        airport: req.body.airport,
    });
    const dt = newFlight.departs;
    const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/new', {departsDate});
}

module.exports.create = async (req, res) => {
    console.log(req.body)
    try {
        const destinations = Destinations.create(req.body);
        const result = await Flight.create(req.body);
        await Flight.findByIdAndUpdate(req.params.id, {
          $push: {
            destinations: destinations._id,
          },
        });
        console.log(result);
      } catch (err) {
        console.log(err);
      }
      res.redirect("/flights");
    };


module.exports.delete = async (req, res) => {
 try {
    await Flight.findByIdAndDelete(req.params.id)
    console.log(req.params.id);
    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};
module.exports.edit = async (req, res) => {
    console.log("GET /flights/:id/edit");
    try {
      const flight = await Flight.findByIdAndUpdate(req.params.id, req.body);
      res.render("flights/Edit", { flight });
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };

  
// module.exports.update = async (req, res) => {
//     await Flight.findByIdAndUpdate(req.params.id, req.body)
//     res.redirect(`/flights/${req.params.id}`)
// }

module.exports.update = async (req, res) => {
    if (req.body.shipIsBroken) {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
  
    try {
      await Flight.findByIdAndUpdate(req.params.id, req.body);
      res.redirect(`/flights/${req.params.id}`);
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };
  
  module.exports.seed = async (req, res) => {
    console.log("flight /flights/seed");
    try {
      await Flight.deleteMany({});
      Flight.create(flight);
      res.redirect("/flights");
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };
  
  module.exports.clear = async (req, res) => {
    try {
      await Flight.deleteMany({});
      res.redirect("/flights");
    } catch (err) {
      console.log(err);
      res.send(err.message);
    }
  };



