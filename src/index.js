const port = process.env.port || 8004;
const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
// const requests = require('requests'); 
const staticPath = path.join(__dirname, "../public");
const tempPath = path.join(__dirname, "../templetes/views");
const partialsPath = path.join(__dirname, "../templetes/partials");

app.set("view engine", "hbs");
app.set("views", tempPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));
 
app.get("", (req, res) => {
    res.render('index');
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get('*', (req, res) => {
    res.render('404error', {
        errmsg:"Oops! 404 Error"
    });
});
app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
})