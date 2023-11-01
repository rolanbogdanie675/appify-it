/* filename: sophisticated_code.js */
// This code demonstrates a complex and sophisticated implementation of a social media platform

// Class representing a User
class User {
  constructor(username) {
    this.username = username;
    this.posts = [];
    this.likes = [];
  }

  // Method for creating a post
  createPost(content) {
    const post = new Post(content, this.username);
    this.posts.push(post);
    return post;
  }

  // Method for liking a post
  likePost(post) {
    if (!this.likes.includes(post)) {
      this.likes.push(post);
      post.addLike();
    }
  }
}

// Class representing a Post
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.likesCount = 0;
  }

  // Method for adding likes
  addLike() {
    this.likesCount++;
  }
}

// Create some users
const user1 = new User("Alice");
const user2 = new User("Bob");

// Alice creates a post
const post1 = user1.createPost("Hello, World!");

// Bob likes Alice's post
user2.likePost(post1);

console.log(user1);
console.log(user2);
console.log(post1);