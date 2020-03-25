const express = require('express');
const cors = require('cors')
const routes = require('./routes') //o ponto e a barra indicam que não é um pacote
const app = express();


app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333);

