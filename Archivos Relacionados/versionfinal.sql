CREATE DATABASE  IF NOT EXISTS `gym` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gym`;
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
  `ActividadId` int NOT NULL AUTO_INCREMENT,
  `NombreActividad` varchar(45) NOT NULL,
  `Turno` varchar(45) NOT NULL,
  `Hora Inicio` varchar(45) NOT NULL,
  `activa` tinyint(1) NOT NULL DEFAULT '1',
  `Hora Fin` varchar(45) NOT NULL,
  `Descripcion` varchar(5000) NOT NULL,
  `Cupo` int NOT NULL,
  PRIMARY KEY (`ActividadId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividad`
--

LOCK TABLES `actividad` WRITE;
/*!40000 ALTER TABLE `actividad` DISABLE KEYS */;
INSERT INTO `actividad` VALUES (1,'Boxeo','noche','14:00',1,'16:00','El boxeo es un deporte de combate en el que dos personas se enfrentan en un ring, con el objetivo de golpear al oponente con los puños y evitar ser golpeado. Es un deporte antiguo que ha evolucionado a lo largo de los años en términos de reglas, técnicas y equipamiento.',3),(2,'Kick Boxing','tarde','17:00',1,'18:00','El kickboxing es un deporte de combate que combina elementos del boxeo tradicional con técnicas de patadas de artes marciales, como el karate y el muay thai. En el kickboxing, los participantes utilizan tanto sus manos como sus piernas para golpear al oponente con el objetivo de acumular puntos, lograr un nocaut o una victoria por decisión de los jueces al final de un determinado número de rondas.',2),(3,'Musculacion','mañana','7:00',1,'20:00','La musculación en el gimnasio, también conocida como entrenamiento de fuerza o entrenamiento con pesas, es una forma de ejercicio que se centra en el desarrollo y fortalecimiento de los músculos del cuerpo. El objetivo principal de la musculación es aumentar la masa muscular, mejorar la fuerza, la resistencia y la apariencia física.',17),(5,'Muay Thai','noche','20:00',1,'22:00','El Muay Thai, también conocido como boxeo tailandés, es un deporte de combate y arte marcial originario de Tailandia. Es considerado uno de los estilos de lucha más antiguos y efectivos en pie. Este arte marcial se caracteriza por el uso de golpes con los puños, codos, rodillas, piernas y técnicas de clinch.',10),(6,'CrossFit','mañana ','9:00',1,'10:00','CrossFit es un programa de entrenamiento funcional que combina una amplia variedad de ejercicios y movimientos de alta intensidad. El objetivo principal de CrossFit es mejorar la capacidad física general, incluyendo resistencia cardiovascular, fuerza, agilidad, coordinación, flexibilidad y equilibrio.',10),(7,'Calistesnia','tarde','10:00',1,'11:00','La calistenia es un tipo de ejercicio físico que implica utilizar el propio peso corporal para realizar una variedad de movimientos y ejercicios. Estos ejercicios se centran en desarrollar fuerza, flexibilidad, resistencia y coordinación utilizando principalmente la resistencia proporcionada por el cuerpo en lugar de equipo o pesas externas.',10);
/*!40000 ALTER TABLE `actividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asistencia`
--

DROP TABLE IF EXISTS `asistencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asistencia` (
  `NroAsistencia` int NOT NULL AUTO_INCREMENT,
  `DniFK` int NOT NULL,
  `ActividadFK` int DEFAULT NULL,
  `DiaAsistencia` timestamp(4) NULL DEFAULT NULL,
  PRIMARY KEY (`NroAsistencia`),
  KEY `asistencia-persona_idx` (`DniFK`),
  KEY `asistencia-actividad_idx` (`ActividadFK`),
  CONSTRAINT `asistencia-actividad` FOREIGN KEY (`ActividadFK`) REFERENCES `actividad` (`ActividadId`),
  CONSTRAINT `asistencia-persona` FOREIGN KEY (`DniFK`) REFERENCES `persona` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asistencia`
--

LOCK TABLES `asistencia` WRITE;
/*!40000 ALTER TABLE `asistencia` DISABLE KEYS */;
INSERT INTO `asistencia` VALUES (1,43349281,1,'2023-10-20 18:30:00.0000'),(2,43349281,1,'2023-10-20 18:30:00.0000'),(3,43349281,2,'2023-10-20 18:30:00.0000'),(4,43349281,2,'2023-10-20 18:30:00.0000'),(5,43349281,2,'2023-11-21 18:30:00.0000'),(6,43349281,2,'2023-11-21 18:30:00.0000'),(7,43349281,2,'2023-10-20 18:30:00.0000'),(8,43349281,2,'2023-11-22 18:30:00.0000'),(9,43349281,1,'2023-10-21 18:30:00.0000'),(10,43349281,2,'2023-11-30 18:30:00.0000'),(11,43349281,3,'2023-11-25 18:30:00.0000'),(12,43349281,2,'2023-12-22 18:30:00.0000'),(27,43349281,1,'2023-12-08 00:29:39.8240');
/*!40000 ALTER TABLE `asistencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuota`
--

DROP TABLE IF EXISTS `cuota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuota` (
  `CodCuota` int NOT NULL AUTO_INCREMENT,
  `DniFK` int NOT NULL,
  `FechaPago` timestamp(6) NOT NULL,
  `precioActual` int NOT NULL,
  PRIMARY KEY (`CodCuota`),
  KEY `cuota-preciocuota_idx` (`precioActual`),
  KEY `venta-persona_idx` (`DniFK`),
  KEY `cuota-persona_idx` (`DniFK`),
  CONSTRAINT `cuota-persona` FOREIGN KEY (`DniFK`) REFERENCES `persona` (`dni`),
  CONSTRAINT `cuota-preciocuota` FOREIGN KEY (`precioActual`) REFERENCES `preciocuota` (`idpreciocuota`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuota`
--

LOCK TABLES `cuota` WRITE;
/*!40000 ALTER TABLE `cuota` DISABLE KEYS */;
INSERT INTO `cuota` VALUES (1,43349281,'2023-09-28 17:30:45.000000',1),(2,43349281,'2023-10-21 00:10:25.294000',1),(3,99999999,'2023-11-07 00:47:32.128000',1);
/*!40000 ALTER TABLE `cuota` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `dni` int NOT NULL,
  `IdRolfk` int NOT NULL,
  `RutinasFK` int DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `NombreCompleto` varchar(100) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `telefono` varchar(45) NOT NULL,
  `direccion` varchar(90) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`dni`),
  KEY `persona-rol_idx` (`IdRolfk`),
  CONSTRAINT `persona-rol` FOREIGN KEY (`IdRolfk`) REFERENCES `rol` (`idrol`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (12345678,2,NULL,'email@email.com','P@ssw0rd','Juan Sanchez','masculino','3435684816','pepe',1),(14725836,2,NULL,'email@email.com','147852','marcos algo','masculino','3435684816','roca',0),(42349281,0,NULL,'ejemplo8@email.com','P@ssw0rd','Hipolito','masculino','555-555-5562','505 Calle Octava',1),(43349281,1,NULL,'labarbahipolito2@gmail.com','P@ssw0rd','Hipolito  La Barbas','femenino','3435684816','san martin ',1),(44843132,1,NULL,'labarbahipolito2@gmail.com','P@ssw0rd','usuario','Femenino','(343) 644-8814','san martin ',1),(87654321,2,NULL,'email@email.com','147852','Irina La Barba','femenino','3435684816','san lorenzo',1),(99999998,1,NULL,'lauraaguirre013@gmail.com','P@ssw0rd','sdsdsd','Masculino','3436448814','san martin ',1),(99999999,1,NULL,'99999999','P@ssw0rd','Hipolito2 la Barba','masculino','(343) 644-8814','sdsdsdsdsdsds',1),(111222333,1,NULL,'ejemplo3@email.com','contraseña3','Carlos Rodríguez','M','555-555-5557','789 Calle Terciaria',1),(123456789,1,NULL,'ejemplo1@email.com','contraseña1','Esteban Quito','M','555-555-5555','123 Calle Principal',0),(333222111,1,NULL,'ejemplo6@email.com','contraseña6','Laura Martínez','F','555-555-5560','303 Calle Sexta',1),(444555666,1,NULL,'ejemplo4@email.com','contraseña4','Ana Sánchez','F','555-555-5558','101 Calle Cuarta',1),(666555444,1,NULL,'ejemplo7@email.com','contraseña7','Javier Fernández','M','555-555-5561','404 Calle Séptima',0),(777888999,1,NULL,'ejemplo5@email.com','contraseña5','Pedro González','M','555-555-5559','202 Calle Quinta',1),(987654321,1,NULL,'ejemplo2@email.com','contraseña2','María López','F','555-555-5556','456 Calle Secundaria',0),(999888777,1,NULL,'ejemplo8@email.com','contraseña8','Sofía Ramírez','F','555-555-5562','505 Calle Octava',0),(999888778,2,NULL,'ejemplo8@email.com','contraseña8','Sofía Ramírez','masculino','555-555-5562','505 Calle Octava',0);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personaacargoactividad`
--

DROP TABLE IF EXISTS `personaacargoactividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personaacargoactividad` (
  `DniPersonaAcargo` int NOT NULL,
  `IdActividadFk` int NOT NULL,
  PRIMARY KEY (`DniPersonaAcargo`),
  KEY `actividad-PesonaAcargo_idx` (`IdActividadFk`),
  CONSTRAINT `actividad-PesonaAcargo` FOREIGN KEY (`IdActividadFk`) REFERENCES `actividad` (`ActividadId`),
  CONSTRAINT `personaacargo-personas` FOREIGN KEY (`DniPersonaAcargo`) REFERENCES `persona` (`dni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personaacargoactividad`
--

LOCK TABLES `personaacargoactividad` WRITE;
/*!40000 ALTER TABLE `personaacargoactividad` DISABLE KEYS */;
INSERT INTO `personaacargoactividad` VALUES (12345678,1),(14725836,2),(87654321,3);
/*!40000 ALTER TABLE `personaacargoactividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `idPost` int NOT NULL AUTO_INCREMENT,
  `DniAutor` int NOT NULL,
  `TipoPostFk` int NOT NULL,
  `Titulo` varchar(80) NOT NULL,
  `Cuerpo` text NOT NULL,
  `imagen` varchar(1000) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `visible` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`idPost`),
  KEY `post-tipo_idx` (`TipoPostFk`),
  KEY `post-autor_idx` (`DniAutor`),
  CONSTRAINT `post-autor` FOREIGN KEY (`DniAutor`) REFERENCES `persona` (`dni`),
  CONSTRAINT `post-tipo` FOREIGN KEY (`TipoPostFk`) REFERENCES `tipopost` (`TipoId`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (2,14725836,1,'El arte de entrenar2','<h1>Dominando el arte del entrenamiento: Explorando los entrenamientos m&aacute;s demandados en espa&ntilde;ol</h1>\n\n<p><img src=\"https://images.pexels.com/photos/5153960/pexels-photo-5153960.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500\" style=\"display:inline-block; max-width:100% !important\" /></p>\n\n<p>&zwj;</p>\n\n<p>Image Source: Pexels</p>\n\n<p>&nbsp;</p>\n\n<p>&zwj;</p>\n\n<p><br />\n## Introducci&oacute;n: La importancia del entrenamiento y la actividad f&iacute;sica</p>\n\n<p>&nbsp;</p>\n\n<p>El entrenamiento y la actividad f&iacute;sica son elementos fundamentales para mantener una vida saludable y en forma. En los pa&iacute;ses de habla hispana, cada vez m&aacute;s personas est&aacute;n tomando conciencia sobre la importancia de cuidar su cuerpo y mejorar su condici&oacute;n f&iacute;sica. En este art&iacute;culo, exploraremos los entrenamientos m&aacute;s demandados en espa&ntilde;ol y nos centraremos en el famoso y popular entrenamiento CrossFit.</p>\n\n<h2>Tendencias populares de entrenamiento en pa&iacute;ses de habla hispana</h2>\n\n<p>Los pa&iacute;ses de habla hispana han visto un aumento significativo en la popularidad de diversos m&eacute;todos de entrenamiento en los &uacute;ltimos a&ntilde;os. Desde el auge del yoga hasta la fascinaci&oacute;n por el boxeo, los hispanohablantes est&aacute;n buscando formas innovadoras y efectivas de mantenerse en forma. Sin embargo, hay una tendencia que se destaca por encima de todas las dem&aacute;s: el CrossFit.</p>\n\n<h2>Explorando el significado e importancia del CrossFit</h2>\n\n<p>El CrossFit es un m&eacute;todo de entrenamiento que combina ejercicios de fuerza, resistencia y acondicionamiento f&iacute;sico en un solo programa. Su objetivo principal es desarrollar una condici&oacute;n f&iacute;sica completa y mejorar las capacidades funcionales del cuerpo. El CrossFit se destaca por su enfoque en la intensidad, la variedad y la constante superaci&oacute;n de los l&iacute;mites personales.</p>\n\n<h2>Entrenamiento CrossFit: Qu&eacute; es y cu&aacute;les son sus beneficios</h2>\n\n<p>El entrenamiento CrossFit se basa en movimientos funcionales, es decir, movimientos que se utilizan en la vida cotidiana, como levantar objetos pesados, saltar, correr, arrastrar, empujar, entre otros. Esto lo convierte en un entrenamiento muy vers&aacute;til y aplicable a cualquier situaci&oacute;n de la vida real. Los beneficios del CrossFit incluyen el aumento de la fuerza, la mejora del equilibrio y la coordinaci&oacute;n, la p&eacute;rdida de grasa y el aumento de la resistencia cardiovascular.</p>\n\n<h2>Programas de entrenamiento CrossFit en espa&ntilde;ol</h2>\n\n<p>El entrenamiento CrossFit ha ganado popularidad en pa&iacute;ses de habla hispana y, como resultado, se han desarrollado numerosos programas de entrenamiento en espa&ntilde;ol. Estos programas est&aacute;n dise&ntilde;ados para adaptarse a personas de diferentes niveles de condici&oacute;n f&iacute;sica y ofrecen entrenamientos enfocados en los principios fundamentales del CrossFit. Algunos programas populares incluyen &quot;CrossFit en Espa&ntilde;ol&quot;, &quot;CrossFit para Principiantes&quot; y &quot;CrossFit Avanzado&quot;.</p>\n\n<h2>CrossFit vs. otros m&eacute;todos de entrenamiento populares en espa&ntilde;ol</h2>\n\n<p>Aunque el CrossFit es muy popular en los pa&iacute;ses de habla hispana, existen otros m&eacute;todos de entrenamiento igualmente demandados. Algunos de ellos incluyen el entrenamiento funcional, el entrenamiento de alta intensidad (HIIT), el entrenamiento de peso corporal y el entrenamiento de resistencia. Cada uno de estos m&eacute;todos tiene sus propias caracter&iacute;sticas y beneficios, por lo que es importante elegir el que mejor se adapte a tus objetivos y preferencias personales.</p>\n\n<h2>C&oacute;mo encontrar recursos de entrenamiento CrossFit en ingl&eacute;s</h2>\n\n<p>Si deseas profundizar a&uacute;n m&aacute;s en el mundo del CrossFit, es posible que encuentres una gran cantidad de recursos en ingl&eacute;s. Muchos de los libros, videos y programas de entrenamiento m&aacute;s populares est&aacute;n disponibles en este idioma. Para encontrar estos recursos, puedes utilizar plataformas en l&iacute;nea como YouTube, Amazon y sitios web especializados en fitness. Adem&aacute;s, considera unirte a comunidades en l&iacute;nea donde podr&aacute;s compartir experiencias y obtener consejos de otros apasionados del CrossFit.</p>\n\n<h2>Consejos y t&eacute;cnicas de entrenamiento CrossFit</h2>\n\n<p>El entrenamiento CrossFit puede ser desafiante, pero con la orientaci&oacute;n adecuada y la t&eacute;cnica correcta, puedes alcanzar tus objetivos de manera segura y efectiva. Algunos consejos para tener en cuenta incluyen calentar adecuadamente antes de cada entrenamiento, escuchar a tu cuerpo y descansar cuando sea necesario, y mantener una buena t&eacute;cnica en todos los ejercicios. Adem&aacute;s, recuerda que la progresi&oacute;n gradual es clave para evitar lesiones y mejorar constantemente.</p>\n\n<h2>Historias de &eacute;xito del entrenamiento CrossFit en comunidades de habla hispana</h2>\n\n<p>El entrenamiento CrossFit ha dejado una huella significativa en las comunidades de habla hispana, y muchas personas han experimentado transformaciones f&iacute;sicas y mentales gracias a este m&eacute;todo de entrenamiento. Desde la p&eacute;rdida de peso hasta el fortalecimiento de la confianza en s&iacute; mismos, las historias de &eacute;xito del CrossFit son inspiradoras y motivadoras. Si est&aacute;s considerando embarcarte en esta aventura, t&oacute;mate un tiempo para investigar y leer sobre las experiencias de otras personas que han logrado resultados extraordinarios.</p>\n\n<h2>Conclusi&oacute;n: Abrazando el poder del entrenamiento en las culturas de habla hispana</h2>\n\n<p>El entrenamiento y la actividad f&iacute;sica son esenciales para mantener una vida saludable y en forma. En los pa&iacute;ses de habla hispana, el entrenamiento CrossFit se ha convertido en una tendencia popular y efectiva para lograr una condici&oacute;n f&iacute;sica &oacute;ptima. Con su enfoque en la intensidad y la variedad, el CrossFit ofrece un desaf&iacute;o estimulante y gratificante para aquellos que buscan superarse a s&iacute; mismos. Ya sea que elijas el CrossFit o cualquier otro m&eacute;todo de entrenamiento, lo importante es encontrar una actividad que te apasione y que te ayude a alcanzar tus metas de salud y bienestar.</p>\n\n<h3>&iexcl;Te ayudamos a ingresar!</h3>\n\n<p>Si est&aacute;s interesado en comenzar tu viaje de entrenamiento en espa&ntilde;ol, &iexcl;nosotros te ayudamos! Nuestro equipo de expertos en fitness est&aacute; listo para brindarte asesoramiento y apoyo en tu camino hacia una vida m&aacute;s activa y saludable. Cont&aacute;ctanos hoy mismo y comienza a dominar el arte del entrenamiento en espa&ntilde;ol. &iexcl;No esperes m&aacute;s y mejora tu calidad de vida a trav&eacute;s del entrenamiento!</p>\n','https://img.freepik.com/foto-gratis/hombre-joven-fitness-estudio_7502-5008.jpg','2021-10-12',0),(3,87654321,2,'Quemar calorías en reposo luego del jercicio','<h1 id=\"porquelentrenamientohiitteayudaaquemarcalorasinclusoenreposo\">Por qué el entrenamiento HIIT te ayuda a quemar calorías incluso en reposo</h1><p><img src=\"https://img.freepik.com/premium-photo/latin-woman-middle-aged-resting-regaining-strength-eating-drinking-water-after-gym-session-burning-calories-keeping-fit-outdoors-by-sea-wearing-headphones-smart-watch_272959-163.jpg\" style=\"display: inline-block; max-width: 100% !important;\"></p><p>‍</p>Image Source: FreeImages<p></p><p>‍</p><br>El entrenamiento de alta intensidad por intervalos, conocido como HIIT (por sus siglas en inglés High Intensity Interval Training), se ha convertido en una de las tendencias más populares en el mundo del fitness. Y no es para menos, ya que este tipo de entrenamiento ofrece numerosos beneficios, entre ellos, la capacidad de quemar calorías incluso después de finalizar la sesión de ejercicio. En este artículo, descubriremos por qué el HIIT te ayuda a quemar calorías en reposo y cómo puedes incorporarlo a tu rutina de entrenamiento para obtener los mejores resultados.<p></p><h2 id=\"queselhiitycmofunciona\">Qué es el HIIT y cómo funciona</h2><p>El HIIT es un método de entrenamiento que combina intervalos de alta intensidad con períodos de descanso activo o de baja intensidad. Esta alternancia de esfuerzos intensos y recuperación activa permite trabajar el cuerpo de manera eficiente y efectiva en un corto periodo de tiempo.</p><p>Durante los intervalos de alta intensidad, se realizan ejercicios que elevan la frecuencia cardíaca y ponen a prueba la resistencia muscular. Estos ejercicios suelen ser explosivos y demandar un gran esfuerzo, como sprints, saltos o levantamiento de pesas. Por otro lado, los períodos de descanso activo o baja intensidad permiten la recuperación del cuerpo y la preparación para el siguiente intervalo de alta intensidad.</p><h2 id=\"elefectoepoclaclaveparaquemarcalorasenreposo\">El efecto EPOC: la clave para quemar calorías en reposo</h2><p>Una de las razones por las que el HIIT es tan efectivo para quemar calorías es el fenómeno conocido como EPOC (Excess Post-Exercise Oxygen Consumption), o consumo excesivo de oxígeno después del ejercicio. El EPOC se refiere al aumento del gasto de energía que ocurre después de finalizar una sesión de ejercicio intenso.</p><p>Durante el ejercicio de alta intensidad, el cuerpo experimenta un déficit de oxígeno y se produce un desequilibrio metabólico. Para restaurar este equilibrio y recuperarse del esfuerzo realizado, el organismo necesita oxígeno adicional. Este proceso de recuperación del cuerpo requiere energía, lo que significa que se siguen quemando calorías incluso después de finalizar el entrenamiento.</p><h2 id=\"cuntotiempoduraelefectoepoc\">Cuánto tiempo dura el efecto EPOC</h2><p>El tiempo que dura el efecto EPOC puede variar de una persona a otra y depende de diversos factores, como la intensidad y duración del entrenamiento, la condición física individual y el tipo de ejercicios realizados. En general, se estima que el efecto EPOC puede durar desde unos minutos hasta 48 horas después de finalizar el ejercicio.</p><p>Sin embargo, es importante tener en cuenta que el efecto EPOC representa solo una pequeña parte del gasto energético total diario. La mayor parte del gasto calórico diario se debe al metabolismo basal, es decir, las calorías que se queman simplemente para mantener las funciones vitales del cuerpo en reposo.</p><h2 id=\"cmoincorporarelhiitaturutinadeentrenamiento\">Cómo incorporar el HIIT a tu rutina de entrenamiento</h2><p>Si deseas aprovechar los beneficios del HIIT y quemar calorías incluso en reposo, puedes incorporar este tipo de entrenamiento a tu rutina de ejercicios. Aquí te presento algunos consejos para hacerlo de manera efectiva:</p><ol><li><p>Consulta a un profesional: Antes de comenzar cualquier programa de entrenamiento intenso, es importante consultar a un profesional de la salud o un entrenador personal. Ellos podrán evaluar tu condición física y recomendarte el tipo de ejercicios y la intensidad adecuada para ti.</p></li><li><p>Calentamiento y enfriamiento: Antes y después de cada sesión de HIIT, es fundamental realizar un calentamiento adecuado para preparar el cuerpo y un enfriamiento para ayudar a la recuperación muscular. Estos pasos son esenciales para evitar lesiones y optimizar los resultados.</p></li><li><p>Variedad de ejercicios: Para mantener la motivación y evitar la adaptación del cuerpo, es recomendable variar los ejercicios de alta intensidad en cada sesión de HIIT. Puedes combinar ejercicios cardiovasculares, como sprints o saltos, con ejercicios de fuerza, como levantamiento de pesas o flexiones.</p></li><li><p>Intervalos de trabajo y descanso: La duración de los intervalos de trabajo y descanso puede variar según tu nivel</p></li></ol>','https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=1024x1024&w=is&k=20&c=f8HwvGDXjnvJfkLK7_rjEQjh2pum4hU_Xniy_EZyMHk=','2021-08-01',0),(4,87654321,2,'Un titulo2','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod. Volutpat est velit egestas dui id ornare. Diam maecenas sed enim ut sem viverra. Nulla facilisi cras fermentum odio eu feugiat. Fames ac turpis egestas sed tempus urna et pharetra pharetra. In est ante in nibh mauris cursus mattis molestie. Neque vitae tempus quam pellentesque. Tempor orci dapibus ultrices in. Aliquet enim tortor at auctor. Dignissim suspendisse in est ante in. Massa tempor nec feugiat nisl pretium. Sed blandit libero volutpat sed cras ornare arcu. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum.</p>\n','https://media.istockphoto.com/id/1277242852/es/foto/sosteniendo-el-peso-y-sentado.jpg?s=1024x1024&w=is&k=20&c=R6PmaKHE7VgrnaU7HWU5ZcorP0T8mX7KpCjaE717boc=','2022-11-05',1),(5,87654321,2,'otro titulo pero un poco mas largo','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas erat imperdiet sed euismod. Volutpat est velit egestas dui id ornare. Diam maecenas sed enim ut sem viverra. Nulla facilisi cras fermentum odio eu feugiat. Fames ac turpis egestas sed tempus urna et pharetra pharetra. In est ante in nibh mauris cursus mattis molestie. Neque vitae tempus quam pellentesque. Tempor orci dapibus ultrices in. Aliquet enim tortor at auctor. Dignissim suspendisse in est ante in. Massa tempor nec feugiat nisl pretium. Sed blandit libero volutpat sed cras ornare arcu. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum.','https://media.istockphoto.com/id/1028745644/es/foto/j%C3%B3venes-caben-hombres-en-el-gimnasio-haciendo-push-ups-en-pesas-medici%C3%B3n-del-tiempo-en.jpg?s=1024x1024&w=is&k=20&c=7IjLFxmntRJus0bVNIG0ngR8Pn5_yPKHy8I9_6TiL_E=','2022-11-11',1),(6,12345678,1,'ssd','<p>dsdsdds</p>\n','sd','2023-10-24',0),(7,12345678,1,'Como ir al gym como  sin morir en el intento ','<p>qcy</p>\n','https://plus.unsplash.com/premium_photo-1664884631757-972b8a8484bd?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-10-24',1),(8,12345678,1,'Como ir al gym como  sin morir en el intento ','<p>qcy</p>\n','https://plus.unsplash.com/premium_photo-1664884631757-972b8a8484bd?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-10-24',1),(9,12345678,1,'tit prueba','<p>lorem ipsum qcycomo siguie</p>\n','https://media.istockphoto.com/id/1418188730/es/foto/perrito-cachorro-recibiendo-una-golosina.jpg?s=1024x1024&w=is&k=20&c=D9-8Lvpmzm5Z-Qi5wITy7C9knU-krwDn9eSzMOawIw8=','2023-10-28',0),(10,12345678,7,'ergrgereggeregregggeg','<p>lorem ipsum qcycomo siguie</p>','https://media.istockphoto.com/id/1418188730/es/foto/perrito-cachorro-recibiendo-una-golosina.jpg?s=1024x1024&w=is&k=20&c=D9-8Lvpmzm5Z-Qi5wITy7C9knU-krwDn9eSzMOawIw8=','2023-10-28',0),(11,14725836,7,'erererererererer434r3r434r34r4r3','<p>lorem ipsum qcycomo siguie</p>','https://media.istockphoto.com/id/1418188730/es/foto/perrito-cachorro-recibiendo-una-golosina.jpg?s=1024x1024&w=is&k=20&c=D9-8Lvpmzm5Z-Qi5wITy7C9knU-krwDn9eSzMOawIw8=','2023-10-28',0),(15,12345678,7,'un chino','<p>cuerpo</p>\n','https://media.istockphoto.com/id/1159728560/es/foto/fuerte-hombre-asi%C3%A1tico-guapo-haciendo-ejercicio-en-el-gimnasio.jpg?s=1024x1024&w=is&k=20&c=VOXDen6Eo78UaDm5oGna2M9lfuzlTzWNCFczMubUVwE=','2023-11-09',0),(16,12345678,7,'un chino 2 ','<p>otro cuerpo</p>\n','https://media.istockphoto.com/id/1159728560/es/foto/fuerte-hombre-asi%C3%A1tico-guapo-haciendo-ejercicio-en-el-gimnasio.jpg?s=1024x1024&w=is&k=20&c=VOXDen6Eo78UaDm5oGna2M9lfuzlTzWNCFczMubUVwE=','2023-11-09',0),(17,12345678,12,'un chino con otra categora','<p>otro cuerpo</p>\n','https://media.istockphoto.com/id/1159728560/es/foto/fuerte-hombre-asi%C3%A1tico-guapo-haciendo-ejercicio-en-el-gimnasio.jpg?s=1024x1024&w=is&k=20&c=VOXDen6Eo78UaDm5oGna2M9lfuzlTzWNCFczMubUVwE=','2023-11-09',0),(18,12345678,12,'un chino con otra categoria','<p>otro cuerpo</p>\n','https://media.istockphoto.com/id/1159728560/es/foto/fuerte-hombre-asi%C3%A1tico-guapo-haciendo-ejercicio-en-el-gimnasio.jpg?s=1024x1024&w=is&k=20&c=VOXDen6Eo78UaDm5oGna2M9lfuzlTzWNCFczMubUVwE=','2023-11-09',1),(19,12345678,12,'prueba con  otra categoria','<p>un cuepro&nbsp;</p>\n','https://media.istockphoto.com/id/1198362485/es/foto/fitness-mujeres-asi%C3%A1ticas-realizando-ejercicios-de-entrenamiento-con-deporte-mancuerna-en-el.jpg?s=1024x1024&w=is&k=20&c=AHKWikwvp8x7a9ON2Ay-Wte7hlrvCyjpji0gjYpD5nI=','2023-11-09',1),(20,12345678,1,'dsfxxxxxxx','<p>sdfgn</p>\n','https://media.istockphoto.com/id/1418188730/es/foto/perrito-cachorro-recibiendo-una-golosina.jpg?s=1024x1024&w=is&k=20&c=D9-8Lvpmzm5Z-Qi5wITy7C9knU-krwDn9eSzMOawIw8=','2023-11-10',1);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preciocuota`
--

DROP TABLE IF EXISTS `preciocuota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preciocuota` (
  `idpreciocuota` int NOT NULL AUTO_INCREMENT,
  `valor` double NOT NULL,
  `fechaActualizacion` timestamp(2) NULL DEFAULT NULL,
  PRIMARY KEY (`idpreciocuota`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preciocuota`
--

LOCK TABLES `preciocuota` WRITE;
/*!40000 ALTER TABLE `preciocuota` DISABLE KEYS */;
INSERT INTO `preciocuota` VALUES (1,2800,'2023-11-16 18:11:37.80');
/*!40000 ALTER TABLE `preciocuota` ENABLE KEYS */;
UNLOCK TABLES;

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
  `activa` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`idrol`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (0,'Admin','hace cosas de Admin',1),(1,'usuario','haceCosasDeUsuario',1),(2,'profesor','hace cosas de profesor',1),(4,'prueba','hace cosas de prueba',1);
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutinagenerica`
--

DROP TABLE IF EXISTS `rutinagenerica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rutinagenerica` (
  `idRutinaGenerica` int NOT NULL AUTO_INCREMENT,
  `ActividadFk` int NOT NULL,
  `DescripcionRutina` varchar(3000) NOT NULL,
  `Imagenes` varchar(2000) DEFAULT NULL,
  `TipoRutinaFk` int NOT NULL,
  `fechaActualizacion` varchar(45) DEFAULT NULL,
  `activa` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`idRutinaGenerica`),
  KEY `rutinaGenerica-tipo_idx` (`TipoRutinaFk`),
  KEY `rutinaGenerica-actividad_idx` (`ActividadFk`),
  CONSTRAINT `rutinaGenerica-actividad` FOREIGN KEY (`ActividadFk`) REFERENCES `actividad` (`ActividadId`),
  CONSTRAINT `rutinaGenerica-tipo` FOREIGN KEY (`TipoRutinaFk`) REFERENCES `tiporutina` (`idTipoRutina`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinagenerica`
--

LOCK TABLES `rutinagenerica` WRITE;
/*!40000 ALTER TABLE `rutinagenerica` DISABLE KEYS */;
INSERT INTO `rutinagenerica` VALUES (1,3,'Día 1: Entrenamiento de la parte superior del cuerpo\n\nPress de banca: 3 series de 8-12 repeticiones\nRemo con barra: 3 series de 8-12 repeticiones\nPress militar: 3 series de 8-12 repeticiones\nCurl de bíceps: 3 series de 8-12 repeticiones\nExtensión de tríceps: 3 series de 8-12 repeticiones\nDía 2: Descanso\n\nDía 3: Entrenamiento de la parte inferior del cuerpo\n\nSentadillas: 3 series de 8-12 repeticiones\nPeso muerto: 3 series de 8-12 repeticiones\nEstocadas: 3 series de 8-12 repeticiones por pierna\nElevación de pantorrillas: 3 series de 15-20 repeticiones','https://media.istockphoto.com/id/1479094350/es/vector/sistema-muscular-cuerpo-humano-anatom%C3%ADa-masculina-athletyc-fitness-trainig-gym-workout.jpg?s=1024x1024&w=is&k=20&c=-fcfeAsjfVJWAfjDNBxa8nRa7j3lKJJzK-https://media.istockphoto.com/id/1426397787/es/vector/la-tabla-muestra-los-m%C3%BAsculos-del-cuerpo-humano-con-sus-nombres-sobre-un-fondo-gris-imagen.jpg?s=1024x1024&w=is&k=20&c=vTCXqxpeYFgKISKdQQvL5WcUu-0yHXUu4PnwmzFFLY0=',1,NULL,1),(2,2,'Día 1: Entrenamiento de la parte superior del cuerpo','https://media.istockphoto.com/id/1479094350/es/vector/sistema-muscular-cuerpo-humano-anatom%C3%ADa-masculina-athletyc-fitness-trainig-gym-workout.jpg?s=1024x1024&w=is&k=20&c=-fcfeAsjfVJWAfjDNBxa8nRa7j3lKJJzK-https://media.istockphoto.com/id/1426397787/es/vector/la-tabla-muestra-los-m%C3%BAsculos-del-cuerpo-humano-con-sus-nombres-sobre-un-fondo-gris-imagen.jpg?s=1024x1024&w=is&k=20&c=vTCXqxpeYFgKISKdQQvL5WcUu-0yHXUu4PnwmzFFLY0=',1,NULL,1),(3,1,'Día 1: Entrenamiento de la parte superior del cuerpo','https://media.istockphoto.com/id/1479094350/es/vector/sistema-muscular-cuerpo-humano-anatom%C3%ADa-masculina-athletyc-fitness-trainig-gym-workout.jpg?s=1024x1024&w=is&k=20&c=-fcfeAsjfVJWAfjDNBxa8nRa7j3lKJJzK-https://media.istockphoto.com/id/1426397787/es/vector/la-tabla-muestra-los-m%C3%BAsculos-del-cuerpo-humano-con-sus-nombres-sobre-un-fondo-gris-imagen.jpg?s=1024x1024&w=is&k=20&c=vTCXqxpeYFgKISKdQQvL5WcUu-0yHXUu4PnwmzFFLY0=',1,NULL,1),(4,2,'Día 1: Entrenamiento de la parte superior del cuerpo','https://media.istockphoto.com/id/1479094350/es/vector/sistema-muscular-cuerpo-humano-anatom%C3%ADa-masculina-athletyc-fitness-trainig-gym-workout.jpg?s=1024x1024&w=is&k=20&c=-fcfeAsjfVJWAfjDNBxa8nRa7j3lKJJzK-https://media.istockphoto.com/id/1426397787/es/vector/la-tabla-muestra-los-m%C3%BAsculos-del-cuerpo-humano-con-sus-nombres-sobre-un-fondo-gris-imagen.jpg?s=1024x1024&w=is&k=20&c=vTCXqxpeYFgKISKdQQvL5WcUu-0yHXUu4PnwmzFFLY0=',2,NULL,1),(5,3,'Día 1: Entrenamiento de la parte superior del cuerpo','https://media.istockphoto.com/id/1479094350/es/vector/sistema-muscular-cuerpo-humano-anatom%C3%ADa-masculina-athletyc-fitness-trainig-gym-workout.jpg?s=1024x1024&w=is&k=20&c=-fcfeAsjfVJWAfjDNBxa8nRa7j3lKJJzK-https://media.istockphoto.com/id/1426397787/es/vector/la-tabla-muestra-los-m%C3%BAsculos-del-cuerpo-humano-con-sus-nombres-sobre-un-fondo-gris-imagen.jpg?s=1024x1024&w=is&k=20&c=vTCXqxpeYFgKISKdQQvL5WcUu-0yHXUu4PnwmzFFLY0=',3,NULL,1);
/*!40000 ALTER TABLE `rutinagenerica` ENABLE KEYS */;
UNLOCK TABLES;

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
  `PersonaDniFk` int NOT NULL,
  `DescripcionRutina` varchar(5000) NOT NULL,
  `Imagenes` varchar(1000) DEFAULT NULL,
  `fechaActualizacion` datetime(5) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`idRutinaPersonalizada`),
  KEY `rutinaPersonalizada-tipo_idx` (`TipoRutinaFk`),
  KEY `rutinaPersonalizada-Actividad_idx` (`IdActividadfk`),
  KEY `rutnapersonalizada-persona_idx` (`PersonaDniFk`),
  CONSTRAINT `rutinaPersonalizada-Actividad` FOREIGN KEY (`IdActividadfk`) REFERENCES `actividad` (`ActividadId`),
  CONSTRAINT `rutinaPersonalizada-tipo` FOREIGN KEY (`TipoRutinaFk`) REFERENCES `tiporutina` (`idTipoRutina`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `rutnapersonalizada-persona` FOREIGN KEY (`PersonaDniFk`) REFERENCES `persona` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutinapersonalizada`
--

LOCK TABLES `rutinapersonalizada` WRITE;
/*!40000 ALTER TABLE `rutinapersonalizada` DISABLE KEYS */;
INSERT INTO `rutinapersonalizada` VALUES (1,3,1,43349281,'Sentadilla con barra','https://media.istockphoto.com/id/1479094350/es/vector/sistema-muscular-cuerpo-humano-anatom%C3%ADa-masculina-athletyc-fitness-trainig-gym-workout.jpg?s=1024x1024&w=is&k=20&c=-fcfeAsjfVJWAfjDNBxa8nRa7j3lKJJzK-T_a2Boxa4=',NULL,1);
/*!40000 ALTER TABLE `rutinapersonalizada` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipopost`
--

DROP TABLE IF EXISTS `tipopost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipopost` (
  `TipoId` int NOT NULL AUTO_INCREMENT,
  `NombreTIpo` varchar(45) NOT NULL,
  `visible` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`TipoId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipopost`
--

LOCK TABLES `tipopost` WRITE;
/*!40000 ALTER TABLE `tipopost` DISABLE KEYS */;
INSERT INTO `tipopost` VALUES (1,'Alimentacion',1),(2,'Musculacion',1),(3,'Calistesnia',1),(7,'prueba',1),(12,'Prueba2',1);
/*!40000 ALTER TABLE `tipopost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiporutina`
--

DROP TABLE IF EXISTS `tiporutina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tiporutina` (
  `idTipoRutina` int NOT NULL AUTO_INCREMENT,
  `NombreTipo` varchar(45) NOT NULL,
  `visible` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`idTipoRutina`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiporutina`
--

LOCK TABLES `tiporutina` WRITE;
/*!40000 ALTER TABLE `tiporutina` DISABLE KEYS */;
INSERT INTO `tiporutina` VALUES (1,'Fuerza',1),(2,'Volumen',1),(3,'Tonificacion',1),(4,'Hits',1),(5,'torneo Kick Bxing',1),(6,'torneo Boxeo',1),(10,'dsds',0);
/*!40000 ALTER TABLE `tiporutina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `CodVenta` int NOT NULL AUTO_INCREMENT,
  `TrabajadorIDni` int NOT NULL,
  `NombeProducto` varchar(45) NOT NULL,
  `precio` double NOT NULL,
  `cantidad` int NOT NULL,
  `FechaVenta` datetime DEFAULT NULL,
  PRIMARY KEY (`CodVenta`),
  KEY `venta-persona_idx` (`TrabajadorIDni`),
  CONSTRAINT `venta-persona` FOREIGN KEY (`TrabajadorIDni`) REFERENCES `persona` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
INSERT INTO `venta` VALUES (1,12345678,'Cocacola',25,5,'2023-10-21 15:30:01'),(2,12345678,'Cocacola',16,4,'2023-10-20 15:30:00');
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-07 19:52:02
