// "use strict";

// const { db, Account, IncomingTransaction, OutgoingTransaction, User, Conversionrate } = require("../server/db");

// async function seed() {
//   await db.sync({ force: true })

//   const users = await Promise.all([
//     User.create({
//       email: "judith@email.com",
//       password: "123"
//     })
//   ]);

//   const Accounts = await Promise.all([
//     Account.create({
//       type: "USD",
//       amount: "2000",
//       userId: 1
//     }),
//     Account.create({
//       type: "EUR",
//       amount: "100",
//       userId: 1
//     }),
//     Account.create({
//       type: "USD",
//       userId: 1
//     })
//   ])

// // separate the `seed` function from the `runSeed` function.
// // so that we can isolate the error handling and exit trapping.
// // The `seed` function is concerned only with modifying the database.
// async function runSeed() {
//   console.log("seeding...");
//   try {
//     await seed();
//   } catch (err) {
//     console.error(err);
//     process.exitCode = 1;
//   } finally {
//     console.log("closing db connection");
//     await db.close();
//     console.log("db connection closed");
//   }
// }

// if (module === require.main) {
//   runSeed();
// }

// module.exports = seed;
