const { db, Account, Post } = require("../server/db");

async function seed() {
  await db.sync({ force: true })

  await Promise.all([
    Account.create({
      name: "Matt",
      password: "123"
    }),
    Account.create({
      name: "Judith",
      password: "123"
    }),
    Account.create({
      name: "Griffin",
      password: "123"
    })
  ])

  await Promise.all([
    Post.create({
      content: "This is my first post",
      allowComments: true,
      type: "Discord",
      accountId: 2
    }),
    Post.create({
      content: "This is my second post",
      allowComments: true,
      type: "Discord",
      accountId: 2
    })
  ])
}

// separate the `seed` function from the `runSeed` function.
// so that we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed
