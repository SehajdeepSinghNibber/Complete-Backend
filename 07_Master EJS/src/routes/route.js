import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Home Page" });
});

router.get("/login", (req, res) => {
    res.render("login", { title: "Login Page" });
});

router.get("/register", (req, res) => {
    res.render("register", { title: "Register Page" });
});

router.get("/profile", (req, res) => {
    res.render("profile", { title: "Profile Page", name: null });
});

router.get("/profile/:name", (req, res) => {
    const name = req.params.name;
    res.render("profile", { title: "Profile Page", name });
});

export default router;