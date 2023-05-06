# AliExpress Scraper

Questo progetto è un web scraper che recupera informazioni sui prodotti da AliExpress utilizzando la libreria aliexpress-product-scraper. I dati vengono estratti da una pagina specifica e salvati in un file CSV.

## Requisiti

Assicurati di avere installato Node.js sul tuo sistema. Puoi scaricarlo e installarlo dal sito ufficiale: https://nodejs.org/

## Installazione

1. Clona il repository o scarica i file nel tuo computer.

2. Apri il terminale e naviga nella directory del progetto.

3. Installa le dipendenze eseguendo il seguente comando:
 npm install
 npm i aliexpress-product-scraper
 

## Utilizzo

1. Modifica il file `index.js` e sostituisci il codice di esempio con la tua configurazione personalizzata.

2. Esegui il seguente comando per avviare il web scraper:
  node index.js


Il programma recupera i dati dal sito AliExpress e li salva in un file CSV chiamato `output.csv`.

3. Controlla la directory del progetto per trovare il file CSV generato.

## Configurazione personalizzata

Puoi personalizzare il web scraper per adattarlo alle tue esigenze. Ecco alcune opzioni di configurazione che puoi considerare:

- Modifica l'URL del prodotto da cui recuperare i dati nella funzione `scrape`.
- Aggiungi o rimuovi campi nell'oggetto `data` per salvare le informazioni desiderate nel file CSV.
- Modifica il nome del file di output nel `path` dell'oggetto `csvWriter`.

Assicurati di seguire le linee guida di AliExpress per l'utilizzo del web scraper e rispettare i termini di servizio del sito.

## Contributi

Sono benvenuti i contributi a questo progetto. Sentiti libero di aprire una pull request con eventuali miglioramenti, correzioni di bug o nuove funzionalità.

## Licenza

Questo progetto è distribuito con la licenza [MIT](LICENSE). Puoi leggere il file LICENSE per ulteriori informazioni sulla licenza.

