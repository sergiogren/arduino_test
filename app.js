var express = require('express');
var app = express();
var path = require('path');
var expressNunjucks = require('express-nunjucks');
var isDev = app.get('env') === 'development';


app.use('/public/', express.static(path.join(__dirname, 'public')));
app.set('views', __dirname + '/public');


var njk = expressNunjucks(app, {
    watch: isDev,
    noCache: isDev
});
 
app.get('/', function(req, res){
    res.render('index');
});

app.listen(8010, function () {
  console.log('app started on port 8010');
});