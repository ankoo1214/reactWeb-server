const express = require('express')
const PORT = 3000;  
const app = express();
const cors = require('cors')
app.use(cors())

app.listen(port=>`Server starter at port ${PORT}`)