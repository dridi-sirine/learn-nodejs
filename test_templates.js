var express = require('express');

var appx = express();

appx.get('/compter/:nombre', function(req, res) {
    var noms = ['Robert', 'Jacques', 'David'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});

appx.listen(4300);
//localhost:4300/computer/65
