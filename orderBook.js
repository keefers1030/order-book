/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push((incomingOrder))

    return existingBook
  }
  for (let i = 0; i < existingBook.length; i++) {
    if (existingBook[i].type == incomingOrder.type ||
      existingBook[i].type !== incomingOrder.type) {
      existingBook.push(incomingOrder)

      return existingBook
    }
    // fulfill order --- and remove duplicate order
    else if ((existingBook[i].type !== incomingOrder.type) &&
      (existingBook[i].quantity === incomingOrder.quantity)) {
      existingBook.splice(i, 1)

      return existingBook
    }
  }

  // fulfills an order and reduces the matching order when the book contains a matching order of a larger quantity


}


module.exports = reconcileOrder
