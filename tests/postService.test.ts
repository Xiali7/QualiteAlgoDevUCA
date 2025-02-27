import { describe, it, expect, beforeEach } from "vitest";
import PostService from "../src/services/PostService";

describe("PostService", () => {
    let postService: PostService;

    beforeEach(() => {
        postService = new PostService();
    });

    it("should return a post by id", () => {
        const post = postService.getPostById(1);
        expect(post).toBeDefined();
        expect(post?.id).toBe(1);
    });

    it("should return undefined for a non-existent post id", () => {
        const post = postService.getPostById(999);
        expect(post).toBeUndefined();
    });

    it("should create a new post", () => {
        const newPostData = {
            title: "New Post",
            content: "This is a new post.",
            author: "John Doe"
        };
        const newPost = postService.createPost(newPostData);
        expect(newPost).toBeDefined();
        expect(newPost.id).toBeGreaterThan(0);
        expect(newPost.title).toBe(newPostData.title);
    });

    it("should update an existing post", () => {
        const updatePostData = {
            title: "Updated Title",
            content: "Updated content.",
            author: "Jane Doe"
        };
        const updatedPost = postService.updatePost(1, updatePostData);
        expect(updatedPost).toBeDefined();
        expect(updatedPost?.title).toBe(updatePostData.title);
    });

    it("should return null when updating a non-existent post", () => {
        const updatePostData = {
            title: "Updated Title",
            content: "Updated content.",
            author: "Jane Doe"
        };
        const result = postService.updatePost(999, updatePostData);
        expect(result).toBeNull();
    });
});
