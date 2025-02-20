import data from "../data.json";

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt?: string;
}

interface PostData {
    title: string;
    content: string;
    author: string;
}

class PostService {
    private posts: Post[];

    constructor() {
        this.posts = [...data.posts];
    }

    public getAllPosts(): Post[] {
        return this.posts;
    }

    public getPostById(id: number): Post | undefined {
        return this.posts.find((post) => post.id === id);
    }

    public createPost(postData: PostData): Post {
        const newPost: Post = {
            id: this.posts.length + 1,
            title: postData.title,
            content: postData.content,
            author: postData.author,
            createdAt: new Date().toISOString()
        };
        this.posts.push(newPost);
        return newPost;
    }

    public updatePost(id: number, postData: PostData): Post | null {
        const index = this.posts.findIndex((post) => post.id === id);
        if (index === -1) return null;

        this.posts[index] = {
            ...this.posts[index],
            title: postData.title,
            content: postData.content,
            author: postData.author,
            updatedAt: new Date().toISOString()
        };

        return this.posts[index];
    }
}

export default PostService;
