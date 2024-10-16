const express = require("express")


const router =express.Router();

router.get("/home", (req,res) => {
    if (req.headers.accept && req.headers.accept.includes("application/json")) {
        const response = {
            message: "Welcome Home",
            timestamp: new Date(),
            user: {
                name: "John Doe",
                role: "Guest"
            }
        };
        res.json(response);
    } else {
        const htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        color: #333;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #007BFF;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome Home</h1>
                <p>This is your home page!</p>
            </body>
            </html>
        `;
        res.send(htmlResponse);
    }
});
router.get("/about", (req,res) => {
    if (req.headers.accept && req.headers.accept.includes("application/json")) {
        const response = {
            message: "Welcome Home",
            timestamp: new Date(),
            user: {
                name: "John Doe",
                role: "Guest"
            }
        };
        res.json(response);
    } else {
        const htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        color: #333;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #007BFF;
                    }
                </style>
            </head>
            <body>
                <h1>ABOUT</h1>
                <p>This is your ABOUT page!</p>
            </body>
            </html>
        `;
        res.send(htmlResponse);
    }
});
router.get("/contact", (req,res) => {
    if (req.headers.accept && req.headers.accept.includes("application/json")) {
        const response = {
            message: "Welcome Home",
            timestamp: new Date(),
            user: {
                name: "John Doe",
                role: "Guest"
            }
        };
        res.json(response);
    } else {
        const htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        color: #333;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #007BFF;
                    }
                </style>
            </head>
            <body>
                <h1>Contact</h1>
                <p>This is your contact page!</p>
            </body>
            </html>
        `;
        res.send(htmlResponse);
    }
});
router.get("/info", (req,res) => {
    if (req.headers.accept && req.headers.accept.includes("application/json")) {
        const response = {
            message: "Welcome Home",
            timestamp: new Date(),
            user: {
                name: "John Doe",
                role: "Guest"
            }
        };
        res.json(response);
    } else {
        const htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        color: #333;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #007BFF;
                    }
                </style>
            </head>
            <body>
                <h1>INFO</h1>
                <p>This is your info page!</p>
            </body>
            </html>
        `;
        res.send(htmlResponse);
    }
});
router.get("/dashboard", (req,res) => {
    if (req.headers.accept && req.headers.accept.includes("application/json")) {
        const response = {
            message: "Welcome Home",
            timestamp: new Date(),
            user: {
                name: "John Doe",
                role: "Guest"
            }
        };
        res.json(response);
    } else {
        const htmlResponse = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        color: #333;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #007BFF;
                    }
                </style>
            </head>
            <body>
                <h1>Dashboard</h1>
                <p>This is your dashboard page!</p>
            </body>
            </html>
        `;
        res.send(htmlResponse);
    }
});


module.exports = router;


