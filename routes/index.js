const express = require('express');
const router = express.Router();
const { scanWebsite } = require('./vulnerability.js')

router.get('/', function (req, res, next) {
	return res.render('index.ejs', {vul:""});
});

router.get('/vulnerability/:website', function(req, res, next){
	var website_url = req.params.website;
	//The commented section below is for an error parsing feature that's incomplete
	/* if ('/' in website_url){
		var err = "Make sure you don't have any forward slash or invalid characters in the website"
	} */
	const output = async () => {
		await scanWebsite(website_url)
	}
	return res.render('search', {vul:output()});

});
module.exports = router;