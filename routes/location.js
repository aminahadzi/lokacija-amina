var express = require('express');
var router = express.Router();

var lokacije = [];

router.get('/', function(req, res, next) {
    res.send({
        location_list: lokacije
    });
});


router.post('/', function (req, res, next) {
    var new_location = {
        coordinate: {
            latitude: req.body.latitude,
            longitude: req.body.longitude
        },
        person: req.body.person,
        time: req.body.time
    };

    lokacije.push(new_location);
    res.send({
        success: true
    });

});

module.exports = router;