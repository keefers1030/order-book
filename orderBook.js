/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push((incomingOrder))

    return existingBook
  }


  while (existingBook.length > 0 && incomingOrder.quantity > 0) {
    if (existingBook.type === incomingOrder.type || existingBook.type !== incomingOrder.type) {
      existingBook.push((incomingOrder))
    }
    // fulfill order(add order to beginning) --- and then remove duplicate order
    if (incomingOrder.quantity === existingBook.quantity) {
      existingBook.unshift((incomingOrder)) && existingBook.shift(incomingOrder.quantity === existingBook.quantity)
    }

    // fulfills an order and reduces the matching order when the book contains a matching order of a larger quantity
    if (incomingOrder.quantity < existingBook.quantity) {


    return existingBook
  }
}

// const existingBook = [{ type: 'sell', quantity: 10, price: 6150 }]
// const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }
// reconcileOrder(existingBook, incomingOrder)
module.exports = reconcileOrder
