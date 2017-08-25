// Burger Model
// ===============
"use strict";
module.exports = function(sequelize, DataTypes) {
    var burgers = sequelize.define(
        "Burger", {
            name: DataTypes.STRING,
            devoured: DataTypes.BOOLEAN,
            devourerId: DataTypes.INTEGER
        }, {
            tableName: "burgers",
            classMethods: {
                associate: function(models) {
                    // Each of the burgers has one of the devourers associated with it (key is stored on the devourer)
                    //burgers.hasOne(models.devourers)
                }
            }
        }
    );
    return burgers;
};