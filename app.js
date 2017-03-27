/**
 * Module dependencies.
 */

const express = require('express');
const errorHandler = require('errorhandler');
const morgan = require('morgan');;
const serveStatic = require('serve-static');

const http = require('http');
const path = require('path');

const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(serveStatic(path.join(__dirname, 'public')));

const env = process.env.NODE_ENV || 'development';
if ('development' === env) {
  app.use(morgan('dev'));
  app.use(errorHandler());
} else if ('production' === env) {
  app.use(morgan('combined'));
} else {
  console.error(`Invalid environment ${env} specified`);
  process.exit(1);
}

app.get('/current', routes.current);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
