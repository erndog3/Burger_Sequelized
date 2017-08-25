// Burger Eater Model
// ===============
'use strict';
module.exports = function(sequelize, DataTypes) {
    var devourers = sequelize.define('Devourer', {
        name: DataTypes.STRING
    }, {
        tableName: 'devourers',
        classMethods: {
            associate: function associate(models) {
                Devourer.hasMany(models.Burger, {
                    onDelete: 'CASCADE',
                    foreignKey: {
                        name: 'devourer_id',
                        field: 'devourer_id'
                    }
                });
            }
        }
    });
    return devourers;
};