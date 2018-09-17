const { SiteClient } = require('datocms-client');
const client = new SiteClient('039314cb195c9a01c8ed1c476c4ca7');
const config = require('./gatsby-config');

config.siteMetadata.products.reduce((chain, product) => (
  chain
    .then(() => client.uploadImage(product.image))
    .then((image) => client.items.create({
      name: product.name,
      image: image,
      price: product.price,
      itemType: '39123'
    }))
), Promise.resolve());