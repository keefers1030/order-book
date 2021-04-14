/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push((incomingOrder))

    return existingBook
  }

  for (let i = 0; i < existingBook.length; i++) {
    while (existingBook[i].type === incomingOrder.type || existingBook[i].type !== incomingOrder.type) {
      existingBook.push((incomingOrder))
      return existingBook
    }
    while (incomingOrder.quantity === existingBook[i].quantity) {
      existingBook.shift(({ 'type': incomingOrder.type, 'quantity': incomingOrder.quantity, 'price': incomingOrder.price }))

      return existingBook
    }
  }




  for (let i = 0; i < existingBook.length; i++) {
    if
      (incomingOrder.quantity > existingBook[i].quantity) {
      existingBook.shift(({ 'type': incomingOrder.type, 'quantity': incomingOrder.quantity, 'price': incomingOrder.price }))

      return existingBook

    }
  }
}

// const existingBook = [{ type: 'sell', quantity: 10, price: 6150 }]
// const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }
// reconcileOrder(existingBook, incomingOrder)
module.exports = reconcileOrder
