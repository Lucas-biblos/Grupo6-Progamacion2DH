module.exports = function (sequelize, dataTypes) {

    let alias = 'Comment'

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        texto_comentario: {
            type: dataTypes.STRING
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        id_producto: {
            type: dataTypes.INTEGER,
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
    }

    let config = {
        tableName: "comentarios",
          
        timestamps: false, 
     
        underscore: false
           
    }

    const Comment = sequelize.define(alias, cols, config);

    //Relación con productos 
    Comment.associate = function (models) {
        Comment.belongsTo(models.Product, {
            as: "product",
            foreignKey: "id_producto"
        })
        Comment.belongsTo(models.User, {
            as: "user",
            foreignKey: "usuario_id"
        })
    }
    return Comment;
}