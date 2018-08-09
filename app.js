let express = require('express')
let app = express()

process.env.PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/resume'))


app.get('/', (req, res) => {
  res.redirect(__dirname + "/resume/index.html")
})

app.listen(process.env.PORT, () => {
  console.log(`\n Server now listening at ${process.env.PORT} successfully! \n`);
});
