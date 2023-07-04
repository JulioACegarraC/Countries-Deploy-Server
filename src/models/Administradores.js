const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Administradores', {
        id:{
            type: DataTypes.UUID(),
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4()
        },
        Email:{
            type: DataTypes.STRING(),
            unique:true,
            allowNull: false,
            validate :{
                isEmail: true,

            }
        },
        Password:{
            type: DataTypes.STRING(),
            allowNull:false,
            validate:{
                isAlphanumeric: true,
                min:0,
                max: 999999999,
            }
        }
    }, 
    {
        indexes: 
        [{
            unique: true,
            fields: ['Email','Password']
        }],
        timestamps: false 
    })
};