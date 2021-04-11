reconcileOrder = (existingBook, incomingOrder) => {
      // adds an order to the book when the book is empty and thus cannot fulfill the order

      // check to see if the book is empty
      if (existingBook.length === 0) {
            // if book is empty, add it to the array and give a "cannot fulfill order message"
            return incomingOrder
            }
      }





// adds an order to the book when the book has orders of the corresponding type (i.e. a sell with no buys)
// check to see the status of the book (what orders it has)

// if book has incoming order of the same status (buy OR sell), add the order to the book

// update book

//adds an order to the book when the book has a corresponding order type but it does not match'

//// check to see the status of the book (what orders it has)

// if book has incoming order of the a different status (buy OR sell), add the order to the book

// update book


let existingBook = [];

let incomingOrder = {
      type: 'sell',
      quantity: 10,
      price: 6150
}

console.log(reconcileOrder(existingBook, incomingOrder))

module.exports = reconcileOrder