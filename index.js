const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const scrape = require('aliexpress-product-scraper');

const csvWriter = createCsvWriter({
  path: 'output.csv',
  header: [
    { id: 'title', title: 'Title' },
    { id: 'price', title: 'Price' },
    { id: 'description', title: 'Description' },
    // Aggiungi altri campi che desideri includere nel CSV
  ]
});

const product = scrape('32958933105');

product.then(res => {
  const data = {
    title: res.title,
    price: res.price,
    description: res.description,
    // Aggiungi altri campi che desideri includere nel CSV
  };

  csvWriter
    .writeRecords([data])
    .then(() => console.log('I dati sono stati scritti correttamente nel file output.csv'))
    .catch(err => console.error('Errore nella scrittura del file CSV:', err));
});