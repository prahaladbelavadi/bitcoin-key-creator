const exporess = require("express");
const app = new express();

app.get("/", (req, res) => res.send("Hello World!"));

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
