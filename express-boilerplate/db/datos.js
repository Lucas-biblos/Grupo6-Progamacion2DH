const info = {
    usuarios: [
      {
        id: 1,
        email: "usuario1@gmail.com",
        usuario: "user1", 
        password: "contrasenia1",
        fecha: "1990-01-09",
        dni: 12345678,
        foto: "usuario1.jpg",
        createdAt: "2023-11-14 12:34:56"
      },
      {
        id: 2,
        email: "usuario2@gmail.com",
        usuario: "user2", 
        password: "contrasenia2",
        fecha: "1995-02-15",
        dni: 23456789,
        foto: "usuario2.jpg",
        createdAt: "2023-11-14 12:34:56"
      },
      {
        id: 3,
        email: "usuario3@gmail.com",
        usuario: "user3", 
        password: "contrasenia3",
        fecha: "1974-11-10",
        dni: 34562390,
        foto: "usuario3.jpg",
        createdAt: "2023-11-14 12:34:56"
      },
      {
        id: 4,
        email: "usuario4@gmail.com",
        usuario: "user4", 
        password: "contrasenia4",
        fecha: "1992-08-10",
        dni: 45678901,
        foto: "usuario4.jpg",
        createdAt: "2023-11-14 12:34:56"
      },
      {
        id: 5,
        email: "usuario5@gmail.com",
        usuario: "user5", 
        password: "contrasenia5",
        fecha: "2004-10-07",
        dni: 46288321,
        foto: "usuario5.jpg",
        createdAt: "2023-11-14 12:34:56"
      }
    ],
    productos: [
      {
        id: 1,
        imagen: "./images/products/heladera.jpg",
        producto: 'Heladera',
        descripcion: 'Descripción del Producto 1',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '1',
        texto_comentario: 'Gran calidad',
        numero_comentarios: "5"
      },
      {
        id: 2,
        imagen: './images/products/television.jpg',
        producto: 'Televisión',
        descripcion: 'Descripción del Producto 2',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '2',
        texto_comentario: 'Gran calidad',
        numero_comentarios: "5"
      },
      {
        id: 3,
        imagen: './images/products/horno.jpg',
        producto: 'Horno',
        descripcion: 'Descripción del Producto 3',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '3',
        texto_comentario: 'Gran calidad',
        numero_comentarios: "5"
      },
      {
        id: 4,
        imagen: './images/products/pava.jpg',
        producto: 'Pava',
        descripcion: 'Descripción del Producto 4',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '4',
        texto_comentario: 'Precio-calidad de 10',
        numero_comentarios: "5"
      },
      {
        id: 5,
        imagen: './images/products/cafetera.jpg',
        producto: 'Cafetera',
        descripcion: 'Descripción del Producto 5',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '5',
        texto_comentario: 'Precio-calidad de 10',
        numero_comentarios: "5"
      },
      {
        id: 6,
        imagen: './images/products/lavadora.jpg',
        producto: 'Lavadora',
        descripcion: 'Descripción del Producto 6',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '1',
        texto_comentario: 'Precio-calidad de 10',
        numero_comentarios: "5"
      },
      {
        id: 7,
        imagen: './images/products/microondas.jpg',
        producto: 'Microondas',
        descripcion: 'Descripción del Producto 7',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '2',
        texto_comentario: 'Me duro 3 meses y me dejo de andar',
        numero_comentarios: "5"
      },
      {
        id: 8,
        imagen: './images/products/licuadora.jpg',
        producto: 'Licuadora',
        descripcion: 'Descripción del Producto 8',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '3',
        texto_comentario: 'Me duro 3 meses y me dejo de andar',
        numero_comentarios: "5"
      },
      {
        id: 9,
        imagen: './images/products/batidora.jpg',
        producto: 'Batidora',
        descripcion: 'Descripción del Producto 9',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '4',
        texto_comentario: 'Me duro 3 meses y me dejo de andar',
        numero_comentarios: "5"
      },
      {
        id: 10,
        imagen: './images/products/plancha.jpg',
        producto: 'Plancha',
        descripcion: 'Descripción del Producto 10',
        createdAt: '2023-11-14 12:34:56',
        usuario_id: '5',
        texto_comentario: 'Me duro 3 meses y me dejo de andar',
        numero_comentarios: "5"
      },
    ],
    comentarios: [
      {
        id: 1,
        id_post: 1,
        id_usuario: 1,
        texto_comentario: 'Gran calidad',
        createdAt: '2023-11-14 12:34:56',
      },
      {
        id: 2,
        id_post: 1,
        id_usuario: 2,
        texto_comentario: 'Me duro 3 meses y me dejo de andar',
        createdAt: '2023-11-14 12:34:56',
      },
      {
        id: 3,
        id_post: 1,
        id_usuario: 3,
        texto_comentario: 'Mala calidad',
        createdAt: '2023-11-14 12:34:56',
      },
      {
        id: 4,
        id_post: 2,
        id_usuario: 1,
        texto_comentario: 'Precio-calidad de 10',
        createdAt: '2023-11-14 12:34:56',
      },
      {
        id: 5,
        id_post: 2,
        id_usuario: 2,
        texto_comentario: 'Mal precio-calidad',
        createdAt: '2023-11-14 12:34:56',
      }
    ]
  };

  module.exports = info

