const { db, Account, Post, Comment } = require("../server/db");

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
      title: "How many of you could care less about celebrating your birthday?",
      content: "I know a lot of people get excited about their birthday but I just don’t see the big deal. It’s not anything I accomplished, it’s just the day I was born. I’m not trying to hate on anyone who does like to celebrate theirs. I mean my wife loves celebrating hers, mine, and our sons. I just never get excited about mine. Was just curious if any others felt the same?",
      allowComments: true,
      type: "Discord",
      accountId: 2
    }),
    Post.create({
      title: "This absolute gem I stumbled upon today while refactoring a 2 year old React codebase.",
      content: "newBooking(data) { let ok = true; if (ok) { const res = null; guestBooking(data, this.guestBookingCallback); } }",
      allowComments: true,
      type: "Discord",
      accountId: 2
    })
  ])

  await Promise.all([
    await Comment.create({
      content: "This is pretty cool.",
      postId: 1,
      commentId: null,
      accountId: 1
    }),
    await Comment.create({
      content: "I guess.",
      postId: 1,
      commentId: 1,
      accountId: 2
    }),
    await Comment.create({
      content: "What does I guess mean",
      postId: 1,
      commentId: 2,
      accountId: 1
    }),
    await Comment.create({
      content: "Yes I feel the same",
      postId: 1,
      commentId: null,
      accountId: 3
    }),
    await Comment.create({
      content: "It means I guess",
      postId: 1,
      commentId: 3,
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
