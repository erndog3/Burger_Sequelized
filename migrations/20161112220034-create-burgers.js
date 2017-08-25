'use strict';
module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('burgers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            devoured: {
                type: Sequelize.BOOLEAN
            },
            devourerId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'devourers',
                    referenceKey: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade',
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('burgers');
    }
};