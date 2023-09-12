-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gym
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `actividad`
--

DROP TABLE IF EXISTS `actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actividad` (
  `ActividadId` int NOT NULL,
  `IdrutinaFk` int NOT NULL,
  `NombreActividad` varchar(45) NOT NULL,
  `Turno` varchar(45) NOT NULL,
  `HsActividadSemanal` varchar(45) NOT NULL,
  PRIMARY KEY (`ActividadId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `asistencia`
--

DROP TABLE IF EXISTS `asistencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asistencia` (
  `NroAsistencia` int NOT NULL AUTO_INCREMENT,
  `DniFK` double NOT NULL,
  `HoraIngreso` timestamp(6) NOT NULL,
  PRIMARY KEY (`NroAsistencia`),
  KEY `asistencia-persona_idx` (`DniFK`),
  CONSTRAINT `asistencia-persona` FOREIGN KEY (`DniFK`) REFERENCES `persona` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cuota`
--

DROP TABLE IF EXISTS `cuota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuota` (
  `CodCuota` int NOT NULL AUTO_INCREMENT,
  `DniFK` double NOT NULL,
  `FechaPago` timestamp(6) NOT NULL,
  `precio` double NOT NULL,
  PRIMARY KEY (`CodCuota`),
  KEY `cuota-persona_idx` (`DniFK`),
  CONSTRAINT `cuota-persona` FOREIGN KEY (`DniFK`) REFERENCES `persona` (`dni`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `dni` double NOT NULL,
  `IdRolfk` int NOT NULL,
  `RutinasFK` int DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `contraseña` varchar(32) NOT NULL,
  `NombreCompleto` varchar(100) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `direccion` varchar(90) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  PRIMARY KEY (`dni`),
  KEY `persona-rol_idx` (`IdRolfk`),
  CONSTRAINT `persona-rol` FOREIGN KEY (`IdRolfk`) REFERENCES `rol` (`idrol`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `personaacargoactividad`
--

DROP TABLE IF EXISTS `personaacargoactividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personaacargoactividad` (
  `DniPersonaAcargo` double NOT NULL,
  `IdActividadFk` int NOT NULL,
  PRIMARY KEY (`DniPersonaAcargo`,`IdActividadFk`),
  KEY `actividad-PesonaAcargo_idx` (`IdActividadFk`),
  CONSTRAINT `actividad-PesonaAcargo` FOREIGN KEY (`IdActividadFk`) REFERENCES `actividad` (`ActividadId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `persona-PersonAcargo` FOREIGN KEY (`DniPersonaAcargo`) REFERENCES `persona` (`dni`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `idPost` int NOT NULL AUTO_INCREMENT,
  `DniAutor` double NOT NULL,
  `TipoPostFk` int NOT NULL,
  `Titulo` varchar(45) NOT NULL,
  `Cuerpo` json NOT NULL,
  PRIMARY KEY (`idPost`),
  KEY `post-tipo_idx` (`TipoPostFk`),
  KEY `post-autor_idx` (`DniAutor`),
  CONSTRAINT `post-autor` FOREIGN KEY (`DniAutor`) REFERENCES `persona` (`dni`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `post-tipo` FOREIGN KEY (`TipoPostFk`) REFERENCES `tipopost` (`TipoId`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `idrol` int NOT NULL AUTO_INCREMENT,
  `NombreRol` varchar(45) NOT NULL,
  `Descripcion` varchar(80) NOT NULL,
  PRIMARY KEY (`idrol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rutinagenerica`
--

DROP TABLE IF EXISTS `rutinagenerica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinagenerica` (
  `idRutinaGenerica` int NOT NULL AUTO_INCREMENT,
  `ActividadFk` int NOT NULL,
  `DescripcionRutina` varchar(45) NOT NULL,
  `Imagenes` varchar(5000) DEFAULT NULL,
  `TipoRutinaFk` int NOT NULL,
  `estado` tinyint(1) DEFAULT '1',
  `fechaActualizacion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idRutinaGenerica`),
  KEY `rutinaGenerica-actividad_idx` (`ActividadFk`),
  KEY `rutinaGenerica-tipo_idx` (`TipoRutinaFk`),
  CONSTRAINT `rutinaGenerica-actividad` FOREIGN KEY (`ActividadFk`) REFERENCES `actividad` (`ActividadId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `rutinaGenerica-tipo` FOREIGN KEY (`TipoRutinaFk`) REFERENCES `tiporutina` (`idTipoRutina`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rutinapersonalizada`
--

DROP TABLE IF EXISTS `rutinapersonalizada`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinapersonalizada` (
  `idRutinaPersonalizada` int NOT NULL AUTO_INCREMENT,
  `IdActividadfk` int NOT NULL,
  `TipoRutinaFk` int NOT NULL,
  `PersonaDniFk` double NOT NULL,
  `DescripcionRutina` varchar(5000) NOT NULL,
  `Imagenes` varchar(1000) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT '1',
  `fechaActualizacion` datetime(5) DEFAULT NULL,
  PRIMARY KEY (`idRutinaPersonalizada`),
  KEY `rutinaPersonalizada-Actividad_idx` (`IdActividadfk`),
  KEY `rutinaPersonalizada-tipo_idx` (`TipoRutinaFk`),
  KEY `rutinaPersonalizada-persona_idx` (`PersonaDniFk`),
  CONSTRAINT `rutinaPersonalizada-Actividad` FOREIGN KEY (`IdActividadfk`) REFERENCES `actividad` (`ActividadId`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `rutinaPersonalizada-persona` FOREIGN KEY (`PersonaDniFk`) REFERENCES `persona` (`dni`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `rutinaPersonalizada-tipo` FOREIGN KEY (`TipoRutinaFk`) REFERENCES `tiporutina` (`idTipoRutina`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tipopost`
--

DROP TABLE IF EXISTS `tipopost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipopost` (
  `TipoId` int NOT NULL AUTO_INCREMENT,
  `NombreTIpo` varchar(45) NOT NULL,
  PRIMARY KEY (`TipoId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tiporutina`
--

DROP TABLE IF EXISTS `tiporutina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiporutina` (
  `idTipoRutina` int NOT NULL AUTO_INCREMENT,
  `NombreTipo` varchar(45) NOT NULL,
  PRIMARY KEY (`idTipoRutina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `CodVenta` int NOT NULL AUTO_INCREMENT,
  `TrabajadorIDni` double NOT NULL,
  `NombeProducto` varchar(45) NOT NULL,
  `precio` double NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`CodVenta`),
  KEY `venta-persona_idx` (`TrabajadorIDni`),
  CONSTRAINT `venta-persona` FOREIGN KEY (`TrabajadorIDni`) REFERENCES `persona` (`dni`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-11 23:48:41
