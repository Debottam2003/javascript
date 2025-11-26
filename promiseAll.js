// Promise.all() is a powerful utility in JavaScript used to run multiple
// asynchronous operations in parallel and wait for all of them to complete.
// If any one of them fails all fails

let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log(values); // [1, 2, 3]
  })
  .catch((error) => {
    console.error(error); // Will not run unless one of them fails
  });

const fetchUser = fetch("/api/user");
const fetchPosts = fetch("/api/posts");
const fetchComments = fetch("/api/comments");

Promise.all([fetchUser, fetchPosts, fetchComments])
  .then(async ([userRes, postsRes, commentsRes]) => {
    const user = await userRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();
    console.log({ user, posts, comments });
  })
  .catch((err) => {
    console.error("Something failed:", err);
  });

Promise.all([fetch("/api/user"), fetch("/api/posts"), fetch("/api/comments")])
  .then(async ([userRes, postsRes, commentsRes]) => {
    const [user, posts, comments] = await Promise.all([
      userRes.json(),
      postsRes.json(),
      commentsRes.json(),
    ]);
    console.log({ user, posts, comments });
  })
  .catch((err) => {
    console.error("Something failed:", err);
  });

Promise.allSettled([p1, p2, p3]).then((results) => {
  console.log(results);
  /*
    [
      { status: 'fulfilled', value: 'Success 1' },
      { status: 'rejected', reason: 'Error in p2' },
      { status: 'fulfilled', value: 'Success 3' }
    ]
    */
});

let results = await Promise.allSettled([p1, p2, p3]);

const images = results
  .filter((r) => r.status === "fulfilled") // only keep successful ones
  .map((r) => r.value); // extract <img> elements

results = await Promise.all([p1, p2, p3]);
console.log(results); // [ 1, 2, 3 ]

p1 = new Promise((resolve) => setTimeout(() => resolve("Success 1"), 100));
p2 = new Promise((resolve) => setTimeout(() => resolve("Success 2"), 200));
p3 = new Promise((resolve) => setTimeout(() => resolve("Success 3"), 300));

results = await Promise.all([p1, p2, p3]);
console.log(results); // [ 'Success 1', 'Success 2', 'Success 3' ]
