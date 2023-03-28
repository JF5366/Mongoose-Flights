const mongoose = require('mongoose')

const Schema = mongoose.Schema

//new Date(new Date().setFullYear(new Date().getFullYear() + 1))
let nextYear = new Date (Date.now() + (1000*60*60*24*365)).toDateString();

const destinationSchema = new Schema({
   airport: { type: String, enum:['AUS', 'DAL', 'LAX', 'SAN' ,'SEA' ] },
   arrival: { type: Date}
})
const Destinations = mongoose.model("Destinations", destinationSchema);

const flightSchema = new Schema({
   airline: {type: String, enum:['American','Southwest','United']},
   flightNo: {type: Number, required: 10<=9999},
   departs: {type: Date, default: nextYear},
   airport: {type: String, enum:['AUS', 'DAL', 'LAX', 'SAN' , 'SEA' ], default: 'SAN'},
   destinations: {type: [destinationSchema]}
},
{ timestamps: true })
// 




const Flight = mongoose.model('Flight', flightSchema)

module.exports = { Flight, Destinations }