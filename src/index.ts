import express, { Request, Response } from "express";
import PostService from "./services/PostService";
const Sentry = require("@sentry/node");

const app: express.Application = express();

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));

const postService: PostService = new PostService();

app.get("/", (req: Request, res: Response): void => {
    res.render("home");
});

app.get("/posts", (req: Request, res: Response): void => {
    const posts: any[] = postService.getAllPosts();
    res.render("posts", { posts });
});

app.post("/posts", (req: Request, res: Response): void => {
    const post: any = postService.createPost(req.body);
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/new", (req: Request, res: Response): void => {
    res.render("new-post");
});

app.get("/posts/:id/edit", (req: Request, res: Response): void => {
    const postId: number = parseInt(req.params.id);
    const post: any = postService.getPostById(postId);

    if (!post) {
        res.status(404).json({ error: "Post not found" });
        return;
    }

    res.render("edit-post", { post });
});

app.get("/posts/:id", (req: Request, res: Response): void => {
    const postId: number = parseInt(req.params.id);
    const post: any = postService.getPostById(postId);

    if (!post) {
        res.status(404).json({ error: "Post not found" });
        return;
    }

    res.render("post", { post });
});

app.post("/posts/:id", (req: Request, res: Response): void => {
    console.log(req.params.id);

    const updatedPost: any = postService.updatePost(parseInt(req.params.id), req.body);

    res.redirect(`/posts/${req.params.id}`);
});

//test sentry
// try {
//     foo();
// } catch (e) {
//     Sentry.captureException(e);
// }

const PORT: number | string = process.env.PORT || 3009;
app.listen(PORT, (): void => {
    console.log(`Server running on http://localhost:${PORT}`);
});
