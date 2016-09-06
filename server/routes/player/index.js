var models = require("../../models")

module.exports = function(app){
    app.post("/player", (req, res) => {
        console.log(`Post player: ${JSON.stringify(req.body)}`)

        var newPlayer = new models.Player(req.body);

        newPlayer.save().then(p => {
            res.send(`Player ${req.body.name} created.`);
        }, e => {
            res.status(400).send('Bad Request');
        })
    })
}