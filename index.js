const express = require('express');
const app = express();
app.use(express.json());

app.post('/add', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const sum = num1 + num2;
    res.json({ result: sum });
});


const port = 3000;
module.exports = app.listen(port, () => console.log(`Server running on port ${port}`));
