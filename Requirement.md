#Lottery API

- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all tickets
- get ticket by id
- bulk buy (user can by multiple ticket at a time)
- raffle draw

Ticket structure :

- unique number (id)
- username
- price
- timestamp

Rotues :

- /tickets/sell - (GET) create lottery
- /tickets - (GET) find all lotteris
- /tickets/draw - find winner
- /tickets/bulk - multi ticket sell

- /tickets/i/:ticketId - (GET) find single ticket by id
- /tickets/i/:ticketId - (DELETE) ticket delete by id
- /tickets/i/:ticketId - (PUT/PATCH) ticket update by id

- /tickets/u/:username - (GET) find single ticket by username
- /tickets/u/:username - (DELETE) ticket delete by username
- /tickets/u/:username - (PUT/PATCH) ticket update by username
