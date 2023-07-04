const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Country_Activity', {
        CountryId:{
            type: DataTypes.STRING(3),
        },
        ActivityId:{
            type: DataTypes.UUID(),
        },
        ActivityName:{
            type: DataTypes.STRING(),
        }
    }, 
    {
        indexes: 
        [{
            unique: true,
            fields: ['CountryId','ActivityName']
        }],
        timestamps: false 
    })
};