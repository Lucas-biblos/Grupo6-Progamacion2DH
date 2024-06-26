CREATE DATABASE  IF NOT EXISTS `proyectointegrador` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `proyectointegrador`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectointegrador
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_post` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `texto_comentario` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `usuario_id` int(10) unsigned DEFAULT NULL,
  `id_producto` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuario_id` (`usuario_id`),
  KEY `fk_producto_id` (`id_producto`),
  CONSTRAINT `fk_producto_id` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`),
  CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,1,'Gran calidad','2023-11-14 15:34:56','2024-04-15 18:31:42','2024-04-15 18:31:42',1,1),(2,2,2,'Me duro 3 meses y me dejo de andar','2023-11-14 15:34:56','2024-04-15 18:31:42','2024-04-15 18:31:42',2,2),(3,3,3,'Mala calidad','2023-11-14 15:34:56','2024-04-15 18:31:42','2024-04-15 18:31:42',3,3),(4,1,4,'Precio-calidad de 10','2023-11-14 15:34:56','2024-04-15 18:31:42','2024-04-15 18:31:42',4,4),(5,2,5,'Mal precio-calidad','2023-11-14 15:34:56','2024-04-15 18:31:42','2024-04-15 18:31:42',5,5),(6,3,1,'Muy buena','2023-11-14 15:34:56','2024-04-15 18:32:40','2024-04-15 18:32:40',1,1);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `imagen` varchar(100) DEFAULT NULL,
  `producto` varchar(100) NOT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `usuario_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'heladera.jpg','heladera','Descripción del Producto 1','2023-11-14 15:34:56','2024-04-10 19:44:37',NULL,1),(2,'television.jpg','television','Descripción del Producto 2','2023-11-14 15:34:56','2024-04-10 19:44:37',NULL,2),(3,'horno.jpg','horno','Descripción del Producto 3','2023-11-14 15:34:56','2024-04-10 19:44:37',NULL,3),(4,'pava.jpg','pava','Descripción del Producto 4','2023-11-14 15:34:56','2024-04-10 19:44:37',NULL,4),(5,'cafetera.jpg','cafetera','Descripción del Producto 5','2023-11-14 15:34:56','2024-04-10 19:44:37',NULL,5),(6,'lavadora.jpg','Lavadora','Descripción del Producto 6','2023-11-14 15:34:56','2024-04-15 18:12:58','2024-04-15 18:12:58',1),(7,'microondas.jpg','Microondas','Descripción del Producto 7','2023-11-14 15:34:56','2024-04-15 18:12:58','2024-04-15 18:12:58',2),(8,'licuadora.jpg','Licuadora','Descripción del Producto 8','2023-11-14 15:34:56','2024-04-15 18:12:58','2024-04-15 18:12:58',3),(9,'batidora.jpg','Batidora','Descripción del Producto 9','2023-11-14 15:34:56','2024-04-15 18:12:58','2024-04-15 18:12:58',4),(10,'plancha.jpg','Plancha','Descripción del Producto 10','2023-11-14 15:34:56','2024-04-15 18:12:58','2024-04-15 18:12:58',5);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `DNI` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `usuario` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'usuario1@gmail.com','contrasenia1','1990-01-09',12345678,'usuario1.jpg','2023-11-14 15:34:56','2024-04-12 02:21:31','2024-04-12 02:21:31','usuario1'),(2,'usuario2@gmail.com','contrasenia2','1995-02-15',23456789,'usuario2.jpg','2023-11-14 15:34:56','2024-04-12 02:21:31','2024-04-12 02:21:31','usuario2'),(3,'usuario3@gmail.com','contrasenia3','1974-11-10',34562390,'usuario3.jpg','2023-11-14 15:34:56','2024-04-12 02:21:31','2024-04-12 02:21:31','usuario3'),(4,'usuario4@gmail.com','contrasenia4','1992-08-10',45678901,'usuario4.jpg','2023-11-14 15:34:56','2024-04-12 02:21:31','2024-04-12 02:21:31','usuario4'),(5,'usuario5@gmail.com','contrasenia5','2004-10-07',46288321,'usuario5.jpg','2023-11-14 15:34:56','2024-04-12 02:21:31','2024-04-12 02:21:31','usuario5');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-24 22:03:40
