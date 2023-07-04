module.exports = (data) => {
    let paises = [];
    for ( let i = 0 ; i < data.length ; i++){
      let pais = {};
      pais.id = data[i].cca3;
      pais.name = data[i].name.official;
      pais.flag = data[i].flags.png;
      pais.continent = data[i].continents[0];
      data[i].capital === undefined? pais.capital = 'undefined' : pais.capital = data[i].capital[0];
      pais.subregion = data[i].subregion;
      pais.area = data[i].area;
      pais.population = data[i].population;
      paises.push(pais);
      }
      return paises;
};