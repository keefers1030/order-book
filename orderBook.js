/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push(({ 'type': incomingOrder.type, 'quantity': incomingOrder.quantity, 'price': incomingOrder.price }))

    return existingBook
  }

  if (existingBook[0].type === incomingOrder.type || existingBook[0].type !== incomingOrder.type) {
    existingBook.push(({ 'type': incomingOrder.type, 'quantity': incomingOrder.quantity, 'price': incomingOrder.price }))
    return existingBook

}

  /*
    do {
      existingBook.push(({ 'type': incomingOrder.type, 'quantity': incomingOrder.quantity, 'price': incomingOrder.price }))

    }
    while (existingBook.type === incomingOrder.type) {

      return existingBook
    }
  

  do {
    existingBook.shift(({ 'type': incomingOrder.type, 'quantity': incomingOrder.quantity, 'price': incomingOrder.price }))

    return existingBook
  } while (existingBook.quantity == incomingOrder.quantity)
}


const fullfillOrder = (existingBook, incomingOrder) => {
}


// adds an order to the book when the book has orders of the corresponding type (i.e. a sell with no buys)
// check to see the status of the book (what orders it has)





// adds an order to the book when the book has a corresponding order type but it does not match

// // check to see the status of the book (what orders it has)

// if book has incoming order of the a different status (buy OR sell), add the order to the book

// update book





*/
}
const existingBook = [{ type: 'sell', quantity: 10, price: 6150 }]
const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }
reconcileOrder (existingBook,incomingOrder)
module.exports = reconcileOrder
