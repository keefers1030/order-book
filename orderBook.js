/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push(incomingOrder)

    return existingBook
  }
  for (let i = 0; i < existingBook.length; i++) {
    if ((existingBook[i].type !== incomingOrder.type) &&
      (existingBook[i].quantity === incomingOrder.quantity) &&
      (existingBook[i].price === incomingOrder.price)) {
      existingBook.splice(i, 1)

      return existingBook
    }
    else if ((existingBook[i].type !== incomingOrder.type) &&
      (existingBook[i].quantity > incomingOrder.quantity) &&
      (existingBook[i].price === incomingOrder.price)) {
      existingBook[i].quantity -= incomingOrder.quantity
      existingBook.push(existingBook[i])
      existingBook.splice(i, 1)

      return existingBook
    }
    // needs to be last 
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
