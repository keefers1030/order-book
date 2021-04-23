/* eslint-disable no-console */
const reconcileOrder = (existingBook, incomingOrder) => {
  if (existingBook.length === 0) {
    existingBook.push(incomingOrder)

    return existingBook
  }
  for (let i = 0; i < existingBook.length; i++) {
    if ((incomingOrder.type !== existingBook[i].type) &&
      (incomingOrder.quantity === existingBook[i].quantity) &&
      (incomingOrder.price === existingBook[i].price)) {
      existingBook.splice(i, 1)

      return existingBook
    }
    else if ((incomingOrder.type !== existingBook[i].type) &&
      (incomingOrder.quantity < existingBook[i].quantity) &&
      (incomingOrder.price === existingBook[i].price)) {
      existingBook[i].quantity -= incomingOrder.quantity
      existingBook.push(existingBook[i])
      existingBook.splice(i, 1)

      return existingBook
    }
    else if ((incomingOrder.type !== existingBook[i].type) &&
      (incomingOrder.quantity > existingBook[i].quantity) &&
      (incomingOrder.price === existingBook[i].price)) {
      incomingOrder.quantity -= existingBook[i].quantity
      existingBook.splice(i, 1)
    }
  }
  if ((existingBook.type === incomingOrder.type ||
    existingBook.type !== incomingOrder.type)) {
    existingBook.push(incomingOrder)

    return existingBook
  }

}

module.exports = reconcileOrder
