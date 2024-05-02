"use strict";
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const post = new Post(this.id, content);
        this.posts.push(post);
        return post;
    }
    comment(post, content, parentId) {
        const comment = new Comment(this.id, content);
        if (parentId !== undefined) {
            const parentComment = post.findComment(parentId);
            if (parentComment) {
                parentComment.replies.push(comment);
            }
        }
        else {
            post.addComment(comment);
        }
        return comment;
    }
    follow(user) {
        this.followers.push(user);
    }
    likePost(post) {
        post.addLike(this);
    }
    viewFeed() {
        const feed = [];
        this.followers.forEach(follower => {
            feed.push(...follower.posts);
        });
        return feed;
    }
}
class Post {
    constructor(userId, content) {
        this.id = Math.floor(Math.random() * 1000); // Generating random id for simplicity
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }
    addLike(user) {
        this.likes.push(user);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    findComment(commentId) {
        return this.comments.find(comment => comment.id === commentId);
    }
}
class Comment {
    constructor(userId, content) {
        this.id = Math.floor(Math.random() * 1000); // Generating random id for simplicity
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
}
// Example Usage:
const user1 = new User(1);
const user2 = new User(2);
user1.follow(user2);
const post1 = user2.createPost("This is my first post!");
const comment1 = user1.comment(post1, "Great post!");
const comment2 = user1.comment(post1, "I agree with you!", comment1.id);
user1.likePost(post1);
const feed = user1.viewFeed();
console.log(feed);
