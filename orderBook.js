/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push((incomingOrder))

    return existingBook
  }


  for (let i = 0; i < existingBook.length; i++) {
    if (existingBook[i].type === incomingOrder.type || existingBook[i].type !== incomingOrder.type) {
      existingBook.push(incomingOrder)

      return existingBook
    }
    // fulfill order(add order to beginning) --- and then remove duplicate order
    if (incomingOrder.quantity === existingBook[i].quantity) {
      existingBook.pop((incomingOrder))
      existingBook.splice(existingBook[i])

      return existingBook
      console.log(existingBook)
    }

    // fulfills an order and reduces the matching order when the book contains a matching order of a larger quantity
    if ((incomingOrder.type !== existingBook.type)
      && (incomingOrder.quantity === existingBook.quantity)
      && (incomingOrder.price === existingBook.price)) {
      existingBook.push()

      return existingBook
    }
  }
}
const existingBook = [{ type: 'sell', quantity: 10, price: 6150 }]
const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }
reconcileOrder(existingBook, incomingOrder)
module.exports = reconcileOrder
