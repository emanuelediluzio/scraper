const fs = require('fs');
const scrape = require('aliexpress-product-scraper');

const product = scrape('32958933105');

product.then(res => {
  const jsonData = JSON.stringify(res, null, 2);
  fs.writeFile('output.json', jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Errore nella scrittura del file:', err);
    } else {
      console.log('I dati sono stati scritti correttamente nel file output.json');
    }
  });
});
