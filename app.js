const express = require("express");
const path = require("path");
const app = express();
const port = 800;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true }))

// Serve HTML files directly from the views directory
app.use(express.static(path.join(__dirname, 'views')));


// ENDPOINTS
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
app.get("/swimming-pool-construction", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'swimming-pool-construction.html'));
});
app.get("/swimming-pool-maintenance", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'swimming-pool-maintenance.html'));
});
app.get("/swimming-pool-repair", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'swimming-pool-repair.html'));
});
app.get("/swimming-pool-equipment", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'swimming-pool-equipment.html'));
});
app.get("/Landscaping", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Landscaping.html'));
});
app.get("/fountain", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'fountain.html'));
});
app.get("/portfolio", (req, res) => { 
    res.sendFile(path.join(__dirname, 'views', 'portfolio.html'));
});


// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
