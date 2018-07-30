let express = require('express')
let app = express()
let c9config = require("c9config"); 

process.env.PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send("test")
})


app.listen(process.env.PORT, function () {
	console.log(`Starting Server @ port ${process.env.PORT}....`);
	console.log(`Server now listening on port ${process.env.PORT} successfully!`);
	c9config.isC9 // true or false depending wether on C9 or not. 
    c9config.print() // prints an overview of the important information to console 
    c9config.workspace
});