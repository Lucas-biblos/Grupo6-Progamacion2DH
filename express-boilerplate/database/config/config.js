//Archivo genérico. Para usar borrar esta líena, cargar las credenciales correctas y mofificar la extensión por .js

module.exports = {
  "development": {
    "username": "root",
    "password": '',
    "database": "proyectointegrador",
    "host": "127.0.0.1",
    "dialect": "mysql",    
  },
  "test": {
    "username": "root",
    "password": '',
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": '',
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
