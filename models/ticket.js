const shortid = require('shortid');

class Ticket {

    constructor(username, price){
        this.id = shortid.generate();
        this.username = username;
        this.price = price;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}


module.exports = Ticket;