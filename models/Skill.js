const { timeStamp } = require('console');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skill extends Model {};

Skill.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url_image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'skill',
    }

);

module.exports = Skill;