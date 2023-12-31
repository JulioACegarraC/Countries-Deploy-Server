const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Activity', {
    id:{
        type: DataTypes.UUID(),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4()
    },
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    dificulty:{
        type: DataTypes.INTEGER(),
        allowNull:false,
        validate:{min:1,max: 5}
    },
    duration: {
        type: DataTypes.FLOAT(),
        validate:{min:0.5,max:72}
    },
    season : {
        type : DataTypes.ENUM ('Verano', 'Otoño' , 'Invierno' , 'Primavera'),
        allowNull : false
    }
  }, {
    timestamps: false
  });
};