const posts = [];

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const now = new Date().toLocaleString();
      resolve(now);
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!post) {
        reject("please enter post");
      }
      posts.push(post);
      resolve();
    }, 2000);
  });
}

Promise.all([createPost({ title: "Post1" }), updateLastUserActivityTime()])
  .then((val) => {
    console.log(posts);
    console.log(`user last activity time: ${val[1]}`);
  })
  .catch((err) => console.log(err));
