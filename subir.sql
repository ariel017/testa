-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: frave_food
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(100) DEFAULT NULL,
  `reference` varchar(100) DEFAULT NULL,
  `Latitude` varchar(50) DEFAULT NULL,
  `Longitude` varchar(50) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `nit` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `image` varchar(20) DEFAULT NULL,
  `persona_id` int(11) NOT NULL,
  `delivery_id` int(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `persona_id` (`persona_id`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`persona_id`) REFERENCES `person` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (13,'test',', #, Colcapirhua','-17.3895016','-66.2366208','Cliente 1','4577755','456764','test@gmail.com','without-image.png',2,3),(14,'zona',', #, Colcapirhua','-17.3896405','-66.2368356','Cliente 2','45688230','72766450','testeando','without-image.png',2,NULL),(15,'Cliente 2',', #, Colcapirhua','-17.3895228','-66.236744','otro','457829','4678293','test@gmail.com','without-image.png',2,NULL),(16,'test',', #, Quillacollo','-17.4240626','-66.2864535','Ariel','5575488','575444','ariel@gmail.com','without-image.png',2,NULL);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Drinks','Description Drinks'),(2,'Fast Food','Fast Food Description'),(3,'Soda','Soda Description'),(4,'Juices','Jucies description'),(5,'Pizza','pizza description'),(6,'Snacks','Snacks Description'),(7,'Salad','Salad Description'),(8,'Ice Cream','Ice Cream description'),(9,'test','test');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imageproduct`
--

DROP TABLE IF EXISTS `imageproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imageproduct` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `picture` varchar(255) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `imageproduct_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageproduct`
--

LOCK TABLES `imageproduct` WRITE;
/*!40000 ALTER TABLE `imageproduct` DISABLE KEYS */;
INSERT INTO `imageproduct` VALUES (1,'image-1629821931703.jpg',1),(2,'image-1629821931725.png',1),(3,'image-1629821931706.jpg',1),(4,'image-1629870138818.jpg',2),(5,'image-1629870138832.jpg',2),(6,'image-1629870138806.jpg',2),(7,'image-1629870179686.jpg',3),(8,'image-1629870179668.jpg',3),(9,'image-1629870179673.jpg',3),(10,'image-1629870261732.jpg',4),(11,'image-1629870261705.jpg',4),(12,'image-1629870261720.jpg',4),(13,'image-1629870352886.jpg',5),(14,'image-1629870352860.jpg',5),(15,'image-1629870352878.jpg',5),(16,'image-1629870430590.jpg',6),(17,'image-1629870430603.jpg',6),(18,'image-1629870531978.jpg',7),(19,'image-1629870531950.jpg',7),(20,'image-1629870531968.jpg',7),(21,'image-1629870638120.jpg',8),(22,'image-1629870638087.jpg',8),(23,'image-1629870638103.jpg',8),(24,'image-1629870722161.jpg',9),(25,'image-1629870722097.jpg',9),(26,'image-1629870722142.jpg',9),(27,'image-1629870861994.jpg',10),(28,'image-1629870861987.jpg',10),(29,'image-1629870861988.jpg',10),(30,'image-1629870963896.jpg',11),(31,'image-1629870963870.jpg',11),(32,'image-1629870963885.jpg',11),(33,'image-1629871015906.jpg',12),(34,'image-1629871015857.jpg',12),(35,'image-1629871015882.jpg',12),(36,'image-1629871040235.jpg',13),(37,'image-1629871040124.jpg',13),(38,'image-1629871040218.jpg',13),(39,'image-1629871070308.jpg',14),(40,'image-1629871070269.jpg',14),(41,'image-1629871070286.jpg',14),(42,'image-1629871097936.jpg',15),(43,'image-1629871097906.jpg',15),(44,'image-1629871097926.jpg',15),(45,'image-1629871137001.jpg',16),(46,'image-1629871136311.jpg',16),(47,'image-1629871136326.jpg',16),(48,'image-1651116638865.jpg',17);
/*!40000 ALTER TABLE `imageproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double(11,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
INSERT INTO `orderdetails` VALUES (7,6,1,2,30.00),(8,6,2,2,32.00),(9,7,5,2,14.00),(10,7,6,2,12.00),(11,8,5,5,35.00),(12,9,5,5,35.00),(13,9,8,4,92.00),(14,10,1,4,60.00);
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `delivery_id` int(11) DEFAULT NULL,
  `address_id` int(11) NOT NULL,
  `latitude` varchar(50) DEFAULT NULL,
  `longitude` varchar(50) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'LEVANTADO',
  `receipt` varchar(100) DEFAULT NULL,
  `amount` double(11,2) DEFAULT NULL,
  `pay_type` varchar(50) NOT NULL,
  `currentDate` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `client_id` (`client_id`),
  KEY `delivery_id` (`delivery_id`),
  KEY `address_id` (`address_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `person` (`uid`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`delivery_id`) REFERENCES `person` (`uid`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`address_id`) REFERENCES `addresses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (6,2,3,13,'-17.3894649','-66.2367659','ENTREGADO',NULL,62.00,'PAGO CONTADO','2022-05-06 12:13:01'),(7,2,3,13,'-17.3894578','-66.2367643','ENTREGADO',NULL,26.00,'PAGO CONTADO','2022-05-06 12:14:51'),(8,2,3,14,NULL,NULL,'PAID OUT',NULL,35.00,'PAGO CONTADO','2022-05-06 15:19:35'),(9,2,3,14,NULL,NULL,'PAID OUT',NULL,127.00,'PAGO CONTADO','2022-05-06 15:20:39'),(10,2,3,13,'-17.3894114','-66.2367087','ENTREGADO',NULL,60.00,'PAGO CONTADO','2022-05-07 00:07:12');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `person` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `image` varchar(250) DEFAULT NULL,
  `state` tinyint(1) DEFAULT 1,
  `created` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'Lauval','Lauval','986587000','without-image.png',1,'2022-04-27 17:51:37'),(2,'test','test','65566365','image-1651098659343.jpg',1,'2022-04-27 18:30:59'),(3,'delivery','test','89635247','image-1651114477292.jpg',1,'2022-04-27 22:54:37');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nameProduct` varchar(50) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `price` double(11,2) NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Heineken','heineken Beer heineken Beer heineken Beer heineken Beer heineken Beer heineken Beer heineken Beer heineke',15.00,1,1),(2,'Corona','Corona description',16.00,1,1),(3,'Coca Cola','Coca Cola description',5.00,1,3),(4,'Pepsi','Pepsi description',7.00,1,3),(5,'Sprite','Sprite Description',7.00,1,3),(6,'Fanta','Fanta Description',6.00,1,3),(7,'Inka cola','Inka Cola Description',9.00,1,3),(8,'Hamburguesas','Hamburguesas description',23.00,1,2),(9,'Pizza','Pizza description',8.50,1,2),(10,'Fast food','Fast food description',35.00,1,2),(11,'Salad 1','Salad 1 description',45.00,1,7),(12,'Salad 2','Salad 2 description',38.00,1,7),(13,'Salad 3','Salad 3 description',28.00,1,7),(14,'Salad 4','Salad 4 description',39.00,1,7),(15,'Salad 5','Salad 5 description',59.00,1,7),(16,'Pizza two','Pizza two description',59.00,1,2),(17,'test','test',5.00,1,9);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `state` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin','Admin',1),(2,'Client','Client',1),(3,'Delivery','Delivery',1);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `passwordd` varchar(100) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `notification_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `persona_id` (`persona_id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`persona_id`) REFERENCES `person` (`uid`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'lauval','lauval@gmail.com','$2a$12$oENUlUoV7ZMDHwPB/am7NenwrRhNu9Opq8HwiOtfxt3R8fpcvaVjO',1,1,'c6hRYE-3TBe11XwnvsqgJJ:APA91bFJGR6-Jhzy3hLq_qB1W-IMwacbwZMqH3hSrD_hTb5_67prEBjZtpQx9OQCZMoaClqxuWIwfwFHO4JJ6Zi90gbyDKkRR3LztDTxP_kNZbPZ6lYaFVcyWXaSZ6_GRETJPS6YnSab'),(2,'test','test@gmail.com','$2a$12$oENUlUoV7ZMDHwPB/am7NenwrRhNu9Opq8HwiOtfxt3R8fpcvaVjO',2,2,'cTCaH49wRXeXJgrWM8eIJF:APA91bHhiPF569hn_eFkitVthfykZlHdj4YG_d8-dABvX3eH3FvzOeNTvytuTlDdO2aufEzOAH0cT0lQvs6-axgHhZBmVj4EAL9xoKBGcC_2TgsVALMCAiMtarBsfIpArc3lw4w5gm2g'),(3,'delivery','deliveri@gmail.com','$2b$10$Ehtwp97R.XHmbYCNvvzGs.IRdhITYD3P/2hnLgCTdheyfWKfiTLPa',3,3,'ezkUp97FQuWatj1rk1PIu6:APA91bFcqfrAsnkOXLWCr-wP8wijqo22r9pad6KcaIUrcyrQ7cC7SjCtrRNyOO132Rz6F7Dyvr8gK6qFfrKfnrBoS1pNdlItGWiDmzef2umEfR4LkqM1s7Wq36h4k5fW4do3HiLlrHCM');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-09 18:40:17
