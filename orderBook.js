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
    else if ((existingBook[i].type !== incomingOrder.type) &&
      (existingBook[i].quantity < incomingOrder.quantity) &&
      (existingBook[i].price === incomingOrder.price)) {
      incomingOrder.quantity -= existingBook[i].quantity
      existingBook.push(incomingOrder)
      existingBook.shift()

      return existingBook
    }
    else if ((existingBook[i].type !== incomingOrder.type) &&
      (existingBook[i].quantity < incomingOrder.quantity) &&
      (existingBook[i].price === incomingOrder.price)) {
      incomingOrder.quantity -= existingBook[i].quantity
      existingBook.splice(i, 2)
      
      console.table(existingBook)
      return existingBook
    }
    // 2 existing orders to fulfill an order
    // removes the first matching order and reduces the second
    // else if ((existingBook[i].quantity === existingBook[i++].quantity) &&
    //   (existingBook[i].type === existingBook[i++].type) &&
    //   (existingBook[i].price === existingBook[i++].price)) {
    //   console.log('nothing')

    //   return existingBook
    // }
  }
  for (let i = 0; i < existingBook.length; i++) {
    if ((existingBook[i].type === incomingOrder.type ||
      existingBook[i].type !== incomingOrder.type)) {
      existingBook.push(incomingOrder)

      return existingBook
    }
  }

}

module.exports = reconcileOrder
