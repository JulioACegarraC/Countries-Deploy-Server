const URL = "http://localhost:5000/countries/";
const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require('./src/db');
const { countriesDBGetter } = require("./src/utils");
const PORT = process.env.PORT||3001;

conn.sync({ force: false }).then(() => {
server.listen(PORT, async () => {
  const data = (await axios.get(URL)).data;  
  const paises = countriesDBGetter(data);
  //await Country.bulkCreate(paises);
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
