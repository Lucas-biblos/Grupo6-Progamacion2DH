module.exports = function (sequelize, dataTypes){
    let alias = 'Product';

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        imagen:{
            type: dataTypes.STRING
        },
        producto:{
            type: dataTypes.STRING
        },
        descripcion:{
            type: dataTypes.STRING
        },
        created_at:{
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at:{
            type: dataTypes.DATE,
            allowNull: true,
        },
        usuario_id:{
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName:'productos',
        timestamps: true, 
        underscore: true
    }

    const Product = sequelize.define(alias,cols,config);

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: "user", 
            foreignKey: "usuario_id"
        });
        Product.hasMany(models.Comment, {
            as: "comments",
            foreignKey: "id_producto"
        });

    };
        
    return Product;

}