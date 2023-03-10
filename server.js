const app = require('express')();

app.get('/', (req, res) => res.send('MusteBot Is Runing.'));

module.exports = () => {
  app.listen(1000);
} 