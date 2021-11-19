const express = require('express')
const app = express()
const logic = require('./test')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))


var ans = []

app.get('/', (req, res) => {
    res.render('index', {text: ans})
})

app.post('/calc', (req,res) => {
    var input = [0,0,0,0]
    if(req.body.num1 != 0){
        input[0] = req.body.num1;
    }
    if(req.body.num2 != 0){
        input[1] = req.body.num2;
    }
    if(req.body.num3 != 0){
        input[2] = req.body.num3;
    }
    if(req.body.num4 != 0){
        input[3] = req.body.num4;
    }
    console.log(input)
    logic.gen(input)
    ans = logic.calc()
    res.redirect('/')
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});