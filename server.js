// 1. Require Mongoose
const { query } = require('express');
const mongoose = require('mongoose')

// 2. Require your Model
const Vampire = require('./models/vampire.js')

// 3. Require your extra data source
const vampireData = require('./populateVampires.js')

// 4. Connect your database
const connectionString = 'mongodb://localhost:27017/vampireDB'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('You are connected to MongoDB!')
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.create(vampireData, (err, createdVampires) => {
//     if(err) return console.log(err)
//     console.log('Created vampires!')
// })

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({ gender: 'f' }, (err, foundVampires) => {
//     if(err) return console.log(err)
//     console.log(foundVampires)
// })

// Vampire.find({ victims: { $gt: 500 }}, (err, foundVampires) => {
//     if(err) return console.log(err)
//     console.log(foundVampires)
// })

// Vampire.find({ victims: { $lte: 150 }}, (err, foundVampires) => {
//     if(err) return console.log(err)
//     console.log(foundVampires)
// })

// Vampire.find({ victims: { $ne: 210234 } }, (err, foundVampires) => {
//     if (err) return console.log(err)
//     console.log(foundVampires)
// })

// Vampire.find({ victims: { $gt: 150, $lte: 500 } }, (err, foundVampires) => {
//     if (err) return console.log(err)
//     console.log(foundVampires)
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({ victims: { $exists: false }}, (err, foundVampires) => {
//     if(err) return console.log(err)
//     console.log(foundVampires)
// })

/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({
//     $or: [
//         { location: 'New York, New York, US' },
//         { location: 'New Orleans, Louisiana, US' }]
// }, (err, foundVampires) => {
//     if (err) return console.log (err)
//     console.log(foundVampires)
// })

// Vampire.find({
//     $or: [
//         { loves: 'brooding' },
//         { loves: 'being tragic' }]
// }, (err, foundVampires) => {
//     if (err) return console.log (err)
//     console.log(foundVampires)
// })

// Vampire.find({
//     $or: [
//         { victims: {$gt: 1000} },
//         { loves: 'marshmallows' }]
//     }, (err, foundVampires) => {
//         if (err) return console.log (err)
//         console.log(foundVampires)
// })

// Vampire.find({
//     $or: [
//         { hair_color: 'red' },
//         { eye_color: 'green' }]
//     }, (err, foundVampires) => {
//         if (err) return console.log (err)
//         console.log(foundVampires)
// })

/////////////////////////////////////////////////
//### Select objects that match one of several values

// Vampire.find({
//     $or: [
//         { loves: 'frilly shirtsleeves' },
//         { loves: 'filly collars' }]
//     }, (err, foundVampires) => {
//         if (err) return console.log (err)
//         console.log(foundVampires)
// })

// Vampire.find({
//     loves: 'brooding' }, 
//     (err, foundVampires) => {
//         if (err) return console.log (err)
//         console.log(foundVampires)
// })

// Vampire.find({
//     $or: [
//         { loves: 'appearing innocent' },
//         { loves: 'trickery' },
//         { loves: 'lurking in rotting mansions' },
//         { loves: 'R&B music' }]
//     }, (err, foundVampires) => {
//         if (err) return console.log (err)
//         console.log(foundVampires)
// })

// Vampire.find({
//     $and: [
//         { loves: { $nin: ['top hats', 'virgin blood'] } },
//         { loves: { $in: ['fancy cloaks'] } }
//     ]
// },
//     (err, foundVampires) => {
//         if (err) return console.log(err)
//         console.log(foundVampires)
//     })

/////////////////////////////////////////////////
//### Negative Selection
// Vampire.find({
//     $and: [
//         { eye_color: { $nin: ['brown'] } },
//         { loves: { $in: ['ribbons'] } }
//     ]
// },
//     (err, foundVampires) => {
//         if (err) return console.log(err)
//         console.log(foundVampires)
//     })

// Vampire.find({
//     location: { $nin: ['Rome, Italy'] }
// },
//     (err, foundVampires) => {
//         if (err) return console.log(err)
//         console.log(foundVampires)
//     })

// Vampire.find({
//     $and: [
//         { loves: { $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding'] } },
//     ]
// },
//     (err, foundVampires) => {
//         if (err) return console.log(err)
//         console.log(foundVampires)
//     })

Vampire.find({
    victims: {$lt: 200}
},
    (err, foundVampires) => {
        if (err) return console.log(err)
        console.log(foundVampires)
    })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////

// module.exports = {
//     Vampire: require('./models/vampire.js')
// }
