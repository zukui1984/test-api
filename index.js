const express= require('express');
const app = express();



// function handleIndexRequest(req, res) {
//   res.send('Hello World!');
// }

function handleIndexRequest(req, res) {
  const name = req.query.name || 'Stranger';
  res.render('home', {name : name});
}

app.get('/', handleIndexRequest);

app.listen(3000, () => {
console.log('Example app listening on port 3000!');

app.set('view engine', 'ejs');
});