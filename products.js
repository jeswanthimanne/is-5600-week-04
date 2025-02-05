/*products.js*/

const fs = require('fs').promises
const path = require('path')

const productsFile = path.join(__dirname, 'data/full-products.json')

async function list (options = {}) {
    const { offset = 0, limit = 25 } = options
    const data = await fs.readFile(productsFile)

  return JSON.parse(data).slice(offset, offset + limit)
}

async function get (id) {
    const products = JSON.parse(await fs.readFile(productsFile))
  
    // Loop through the products and return the product with the matching id
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        return products[i]
      }
    }
  
     // If no product is found, return null
    return null;
}
async function updateProduct(req, res) {
    console.log(`Product with ID ${req.params.id} has been updated.`);
    res.status(200).json({ message: `Product with ID ${req.params.id} updated successfully.` });
}
async function deleteProduct(req, res) {
    console.log(`Product with ID ${req.params.id} has been deleted.`);
    res.status(202).json({ message: `Product with ID ${req.params.id} deleted successfully.` });
}
module.exports = {
    list,
    get,
    updateProduct,
    deleteProduct,
    
}