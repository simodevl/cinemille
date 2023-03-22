# CineMille

Questo progetto è un prototipo di un'applicazione web per la gestione della programmazione dei film in un cinema multisala. 
L'applicazione è stata sviluppata come parte di una coding challenge per l'Academy Frontend organizzata da [Lascaux](https://www.lascaux.it/careers/academy-itr4j/).

L'applicazione consente di visualizzare una lista dei film in programmazione nel multisala, con riportato il titolo, la data di inizio e di fine programmazione e il numero di sala. 
Inoltre, selezionando un film dalla lista, è possibile visualizzare una pagina di dettaglio riportante tutte le informazioni sul film, come la locandina, il titolo, una breve descrizione e le date della programmazione.

Per la base dati dell'elenco dei film in programmazione è stata utilizzata The Movie Database (TMDB) API. 

## 💻 Tecnologie

Per la realizzazione del progetto è stato utilizzato Vite come Bundle, con il framework React.
Lo stile invece è stato sviluppato interamente con sass.

## 📦 Installazione

Per installare questo progetto, bisogna clonare la repo:

```

git clone https://github.com/simodevl/cinemille.git

```

Installare i pacchetti necessari:

```

npm i

```

Creare un file .env dove inserire la key per la TMDb API con il nome di VITE_API_KEY:

```

VITE_API_KEY: <LA_TUA_KEY>

```
...oppure sostituire manualmente ogni istanza della key, dentro ai custom hooks.

In fine, si può eseguire il run dell'applicazione:

```

npm run dev

// o

npm run preview

```
