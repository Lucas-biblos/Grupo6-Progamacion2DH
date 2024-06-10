module.exports = function (sequelize, dataTypes) {
    let alias = 'User'; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        name: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE 
        },
        DNI: {
            type: dataTypes.STRING 
        },
        foto: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        remember_token: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "usuarios", 
        timestamps: true, 
        underscored: true 
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'user_id'
        });
        User.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'user_id'
        });
    };

    return User;
};