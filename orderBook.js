/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push(incomingOrder)

    return existingBook
  }
  for (let i = 0; i < existingBook.length; i++) {
    if ((existingBook[i].type === incomingOrder.type ||
      existingBook[i].type !== incomingOrder.type)) {
      existingBook.push(incomingOrder)

      return existingBook
    }
    // fulfill order --- and remove duplicate order of same quantity
    else if ((existingBook[i].quantity === incomingOrder.quantity) &&
      (existingBook[i].price === incomingOrder.price)) {
      existingBook.splice(i, 1)

      return existingBook
    }
    // fulfills an order and reduces the matching order when the book contains a matching order of a larger quantity
    else if ((existingBook[i].quantity > incomingOrder.quantity) &&
      (existingBook[i].price === incomingOrder.price)) {
      existingBook.splice(i, 1)

      return existingBook
    }
    // partially fulfills an order, removes the matching order and adds the remainder of the order to the book 
    // when the book contains a matching order of a smaller quantity
    else if ((existingBook[i].quantity > incomingOrder.quantity) &&
      (existingBook[i].price === incomingOrder.price)) {
      existingBook.splice(i, 1)

      return existingBook
    }
    return existingBook

  }


  console.log(reconcileOrder([{ type: 'buy', quantity: 10, price: 6150 }, { type: 'sell', quantity: 12, price: 6250 }], { type: 'sell', quantity: 10, price: 6150 }))
  module.exports = reconcileOrder
