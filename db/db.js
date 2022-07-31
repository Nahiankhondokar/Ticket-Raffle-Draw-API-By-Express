const Ticket = require('../models/ticket');

class MyDB {

    // all ticket is here
    constructor(){
        this.tickets = [];
    }


    /**
     *  create ticket
     *  @param {String} username
     *  @param {number} price
     */
    create(username, price){
        const ticket = new Ticket(username, price);
        console.log(ticket);
        this.tickets.push(ticket);
        return ticket;
    }


    /**
     *  find all ticket
     */
    find(){
        return this.tickets; 
    }

    /**
     * Multiple ticket booking
     * @param {String} username 
     * @param {Number} price 
     * @param {Number} quantity 
     */
    bulkTicket(username, price, quantity){

        const result = [];
        for (let i = 0; i < quantity; i++) { 
            const ticket = this.create(username, price);
            result.push(ticket);
        }
        return result;
    }


    /**
     *  find single ticket
     * @param {String} ticketId 
     */
    findById(ticketId){
        const single = this.tickets.find(
            /**
             *  @param {Ticket} ticket
             */

        (ticket) => {
            ticket.id == ticketId
        });

        return single;
            
    }

    /**
     *  filter data by username
     * @param {String} username
     * @returns {Array<Ticket>}
     */
    findByUsername(username){
        const multiTricket = this.tickets.filter((data) => data.username == username );

        return multiTricket;
    }



    /**
     * @param {String} ticketId
     */
     deleteById(ticketId){
        const index = this.tickets.findIndex(data => data.id == ticketId);

        if(index != -1){
            this.tickets.splice(index, 1);
            return true;
        }else{
            return false;
        }
    }


    /**
     * @param {String} ticketId
     * @param {{username : String, price : number}} ticketBody
     */
     updateById(ticketId, ticketBody){
        const update = this.findById(ticketId);
        update.username = ticketBody.username ?? update.username;
        update.price    = ticketBody.price ?? update.price;

        return update;
    }


    /**
     * 
     * @param {number} winnerCount 
     * 
     */
    draw(winnerCount){

        // [-,-,-]
        const winnerindexes = new Array(winnerCount);
        // console.log(winnerindexes);
        let index = 0;
        while(index < winnerindexes.length){
            
            const winnerindex = Math.floor(Math.random() * this.tickets.length);
            // console.log('index', winnerindex);
            if(!winnerindexes.includes(winnerindex)){
                
                winnerindexes[index++] = winnerindex;
                continue;
            }

        }

        // console.log(winnerindexes);
        const winners = winnerindexes.map(index => this.tickets[index]);
        return winners;
    }


}



const myDB = new MyDB();
module.exports = myDB;