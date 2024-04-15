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
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-15 18:20:20
