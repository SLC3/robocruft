# robocruft
Remove the cruft from Robo 3T (previously Robomongo) printouts.

Note, only tested with emails so far.
e.g. `db.getCollection('users').find({},{ _id: false, email: true })`

MIT License