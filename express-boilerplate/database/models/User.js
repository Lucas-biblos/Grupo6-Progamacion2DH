module.exports = function (sequelize, DataTypes) {

    let alias = 'User'; 

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        usuario: {
            type: DataTypes.STRING
        },
        fecha: {
            type: DataTypes.DATE 
        },
        dni: {
            type: DataTypes.STRING 
        },
        foto: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        remember_token: {
            type: DataTypes.STRING
        }
    }

    let config = {
        tableName: "usuarios", 
        timestamps: true, 
        underscored: true 
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id',
        })
        User.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'id',
        })

    return User;
}
}