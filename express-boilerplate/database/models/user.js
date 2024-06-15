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
        deleted_at: {
            type: dataTypes.DATE,
            allowNull: true,
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
        }
    };

    let config = {
        tableName: "usuarios", 
         
        timestamps: false, 
     
        underscore: false
           
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'usuario_id'
        });
        User.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'usuario_id'
        });
    };

    return User;
};