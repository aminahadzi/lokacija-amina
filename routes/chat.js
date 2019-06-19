var express = require('express');
var router = express.Router();

var messages = [];

router.get('/', function(req, res, next) {
    res.send({
        chat_list: messages
    });
});
router.get('/:posiljalac/:primalac', function(req, res, next) {
    var posiljalac=req.params.posiljalac;
    var primalac=req.params.primalac;
    var izabrane_poruke=[];
    for(var i=0;i<messages.length;i++){
         if(messages[i].poruku_salje==posiljalac && messages[i].poruku_prime==primalac)  {
             izabrane_poruke.push(messages[i])
         }
    }
    res.send({
        izabrane_poruke:izabrane_poruke

    });
});


router.post('/', function (req, res, next) {
    var new_message = {
        poruku_salje:req.body.posiljalac,
        poruku_prime:req.body.primalac,
        tekst_poruke:req.body.tekst

    };

    messages.push(new_message);
    res.send({
        success: true
    });

});

module.exports = router;