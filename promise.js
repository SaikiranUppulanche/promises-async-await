const posts = [];

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const now = new Date().toLocaleString();
      resolve(now);
    }, 1000);
  });
}

async function createPost(post) {
  const updatePost = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!post) {
        reject("please enter post");
      }
      posts.push(post);
      console.log(posts);
      resolve();
    }, 2000);
  });
  return updatePost;
}

async function deletePost() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        let popped = posts.pop();
        resolve(popped);
      } else {
        reject("Error: Something went wrong");
      }
    }, 1000);
  });
}

function printPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.forEach((post) => {
        console.log(post);
      });
    }, 0);
  });
}

function addPost() {
  createPost({ title: "Post" });
  deletePost().catch((err) => console.log(err));
}
addPost();
// createPost({ title: "Post" }).then(() =>
//   deletePost().catch((err) => console.log(err))
// );

// Promise.all([createPost({ title: "Post1" }), updateLastUserActivityTime()])
//   .then((val) => {
//     console.log(posts);
//     console.log(`user last activity time: ${val[1]}`);
//   })
//   .catch((err) => console.log(err));
