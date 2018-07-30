let express = require('express')
let app = express()
let c9config = require("c9config"); 

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.render("./resume/index.html")
})

app.listen(app.get('port'), function() {
console.log("Node app is running at localhost:" + app.get('port'))

c9config.isC9 // true or false depending wether on C9 or not. 
c9config.print() // prints an overview of the important information to console 
c9config.workspace
  
})
