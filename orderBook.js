/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push(({ 'type': incomingOrder.type, 'quantity': incomingOrder.quantity, 'price': incomingOrder.price }))

    return existingBook
  }
  /*
    for (let i = 0; i < existingBook.length; i++) {
      if (existingBook[i].type === incomingOrder.type || existingBook[i].type !== incomingOrder.type) {
        existingBook.push(({ 'type': incomingOrder.type, 'quantity': incomingOrder.quantity, 'price': incomingOrder.price }))
  
        return existingBook
      }
    }
    */
  for (let i = 0; i < existingBook.length; i++) {
    if
      (incomingOrder.quantity === existingBook[i].quantity) {
      existingBook.shift(({ 'type': incomingOrder.type, 'quantity': incomingOrder.quantity, 'price': incomingOrder.price }))

      return existingBook
    }
  }

  for (let i = 0; i < existingBook.length; i++) {


}

//const existingBook = [{ type: 'buy', quantity: 10, price: 6150 }, { type: 'sell', quantity: 12, price: 6250 }]
//const incomingOrder = { type: 'sell', quantity: 10, price: 6150 }

// adds an order to the book when the book has orders of the corresponding type (i.e. a sell with no buys)
// check to see the status of the book (what orders it has)





// adds an order to the book when the book has a corresponding order type but it does not match

// // check to see the status of the book (what orders it has)

// if book has incoming order of the a different status (buy OR sell), add the order to the book

// update book

// const existingBook = [{ type: 'sell', quantity: 10, price: 6150 }]
// const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }
// reconcileOrder(existingBook, incomingOrder)
module.exports = reconcileOrder
