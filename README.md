# Ejemplo React Redux Toolkit

Para ejecutar el api que consume esta aplicación se debe crear un archivo en otra carpeta externa al proyecto actual `server.js` con el siguiente contenido:

```js
const cors = require('cors');
const app = require('express')();
app.use(cors());
app.get('/', (_, res) => res.send({ value: 100 }));
app.listen(3001, () => console.log('server OK: 3001'));
```

El server se ejecuta de la siguiente manera:

```sh
npm init -y
npm i cors express
node server.js
```
