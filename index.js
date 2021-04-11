reconcileOrder() = {
// adds an order to the book when the book is empty and thus cannot fulfill the order'

      // define the book as an array

      // check to see if the book is empty

      // if book is empty, add it to the array and give a "cannot fulfill order message"


// adds an order to the book when the book has orders of the corresponding type (i.e. a sell with no buys)
      // check to see the status of the book (what orders it has)

      // if book has incoming order of the same status (buy OR sell), add the order to the book

      // update book

//adds an order to the book when the book has a corresponding order type but it does not match'

      //// check to see the status of the book (what orders it has)

      // if book has incoming order of the a different status (buy OR sell), add the order to the book

      // update book
      const existingBook = [{ type: 'buy', quantity: 10, price: 6000 }]
      const incomingOrder = { type: 'sell', quantity: 12, price: 6150 }

      const updatedBook = reconcileOrder(existingBook, incomingOrder)

      expect(updatedBook).to.deep.equal([
        { type: 'buy', quantity: 10, price: 6000 },
        { type: 'sell', quantity: 12, price: 6150 }

}



/*function which will properly reconcile an incoming cryptocurrency
order given the existing book of orders

adds an order to the book when the book is empty and thus cannot fulfill the order'
      const existingBook = []
      const incomingOrder = { type: 'sell', quantity: 10, price: 6150 }

      const updatedBook = reconcileOrder(existingBook, incomingOrder)

      expect(updatedBook).to.deep.equal([{ type: 'sell', quantity: 10, price: 6150 }])


('adds an order to the book when the book has orders of the corresponding type (i.e. a sell with no buys)', () => {
      const existingBook = [{ type: 'sell', quantity: 10, price: 6150 }]
      const incomingOrder = { type: 'sell', quantity: 12, price: 6000 }

      const updatedBook = reconcileOrder(existingBook, incomingOrder)

      expect(updatedBook).to.deep.equal([
        { type: 'sell', quantity: 10, price: 6150 },
        { type: 'sell', quantity: 12, price: 6000 }
      ])
    })

