var express = require('express');

var router = express.Router();

router.route('/')
	.get(function (req, res) {
		res.render('home', {
			titlu: 'Prima pagina',
			nume: 'Tibi'
		});
	});

module.exports = router;
