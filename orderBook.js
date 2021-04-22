/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  let updatedBook = []

  if (existingBook.length === 0) {
    existingBook.push(incomingOrder)

    return existingBook
  }
  for (let i = 0; i < existingBook.length; i++) {
    // fulfill order --- and remove duplicate order of same quantity
    if ((existingBook[i].quantity === incomingOrder.quantity) &&
      (existingBook[i].price === incomingOrder.price)) {
      existingBook.splice(0, 1)

      return existingBook
    }
    else if ((existingBook[i].quantity === incomingOrder.quantity) &&
      (existingBook[i].price === incomingOrder.price)) {
      existingBook.splice(0, 1)

      return existingBook
    }
    else if ((existingBook[i].type === incomingOrder.type ||
      existingBook[i].type !== incomingOrder.type)) {
      existingBook.push(incomingOrder)

      return existingBook
    }

    return existingBook
  }
}

console.log(reconcileOrder([{ type: 'buy', quantity: 10, price: 6150 }, { type: 'sell', quantity: 12, price: 6250 }], { type: 'sell', quantity: 10, price: 6150 }))
module.exports = reconcileOrder
