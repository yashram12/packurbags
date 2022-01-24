-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: pub
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth`
--

DROP TABLE IF EXISTS `auth`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth` (
  `USER_ID` int NOT NULL,
  `USERNAME` varchar(30) NOT NULL,
  `PASSWORD` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`USER_ID`,`USERNAME`),
  UNIQUE KEY `USERNAME` (`USERNAME`),
  CONSTRAINT `FK_UID` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth`
--

LOCK TABLES `auth` WRITE;
/*!40000 ALTER TABLE `auth` DISABLE KEYS */;
INSERT INTO `auth` VALUES (163,'yashwanth@gmail.com','$2b$10$WNcmtw7heHMA4aA4A8Ez6OIGYPxYuR6hoGTzMUSIm03Q1zhb.F75G'),(164,'ekant@gmail.com','$2b$10$BCm7P.A33DaMe0/O.OTdTuNqHAmydblou9KV1AH6NBH0XqTFRrwXS'),(165,'naveen@gmail.com','$2b$10$wDZQq2znhyR3UhSsfhzV1.V5JAao3x5lywAPMO1PnBvw/tJPHcpOy'),(166,'smart@gmail.com','$2b$10$tYJFWOxGLQX5GPz9y6Rahe0yV8ebmKT/zLgq1vD20h0JJSXT9lqSq'),(167,'satish@gmail.com','$2b$10$ECl88n6Hja5SnhDosccY5u2VEGlukq2Ln.P3LIV6SZ0UXW/AVHnvO'),(168,'sampath@gmail.com','$2b$10$NmYZQaVFQugosuY/3fQx6OeV6AmiOUChxDl9ifoCkNVAe9u1XRABG'),(180,'vivek.kalmath2001@gmail.com','$2b$10$x8H6rIPAPCJASaqyNDYlOu.JnHB/JcjUy87/Rxs2ye1wGn/pP6pLy');
/*!40000 ALTER TABLE `auth` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coordinates`
--

DROP TABLE IF EXISTS `coordinates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coordinates` (
  `PLACE_ID` char(5) NOT NULL,
  `LAT` decimal(9,7) NOT NULL,
  `LNG` decimal(10,7) NOT NULL,
  PRIMARY KEY (`PLACE_ID`,`LAT`,`LNG`),
  CONSTRAINT `FK_PIDCOORDS` FOREIGN KEY (`PLACE_ID`) REFERENCES `place` (`PLACE_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coordinates`
--

LOCK TABLES `coordinates` WRITE;
/*!40000 ALTER TABLE `coordinates` DISABLE KEYS */;
INSERT INTO `coordinates` VALUES ('P1111',13.1681000,77.2222000),('P1112',12.8965000,77.5407000),('P1113',15.9565000,77.3179000),('P1114',13.3750000,77.2130000),('P1115',16.2160890,77.3566000),('P1116',15.3351650,76.4587270),('P1117',13.0098000,77.5511000);
/*!40000 ALTER TABLE `coordinates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `NAME` varchar(30) DEFAULT NULL,
  `IMG` varchar(200) DEFAULT NULL,
  `RID` char(5) DEFAULT NULL,
  `PLACE_ID` char(5) DEFAULT NULL,
  `IMG_ID` char(5) NOT NULL,
  PRIMARY KEY (`IMG_ID`),
  KEY `FK_RID3` (`RID`),
  KEY `FK_PID3` (`PLACE_ID`),
  CONSTRAINT `FK_PID3` FOREIGN KEY (`PLACE_ID`) REFERENCES `place` (`PLACE_ID`) ON DELETE CASCADE,
  CONSTRAINT `FK_RID3` FOREIGN KEY (`RID`) REFERENCES `review` (`RID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES ('adf','https://media.istockphoto.com/photos/couple-of-tourists-picture-id942996712?k=20&m=942996712&s=612x612&w=0&h=l7-bbubDgOXnOQny_isbimXdf-3e0ceCzJyIogA8rAw=',NULL,'P1112','I1111'),('raichur','https://media.istockphoto.com/photos/couple-of-tourists-picture-id942996712?k=20&m=942996712&s=612x612&w=0&h=l7-bbubDgOXnOQny_isbimXdf-3e0ceCzJyIogA8rAw=',NULL,'P1115','I1112'),('SHIVAGANGE','https://vl-prod-static.b-cdn.net/system/images/000/254/973/436ba5db2a904556e9a2cb32be311c04/original/Capture.JPG?1575098339',NULL,'P1111','I1113'),('RAMA BETTA','https://www.inditales.com/wp-content/uploads/2017/12/ramlingaeshwara-temple-avani-pond.jpg',NULL,'P1113','I1114'),('DD HILLS','https://www.threetrekkers.com/wp-content/uploads/2020/08/DD-Hills-Bangalore-Banner.png',NULL,'P1114','I1115'),('yashwanth','http://ourtemples.in/images1/devarakere_temple1.jpg','R5','P1112','I1116'),('Virupaksha Temple, Hampi','https://i1.wp.com/www.wordzz.com/wp-content/uploads/2016/09/Virupaksha_TempleKarnataka.jpg?resize=1024%2C703&ssl=1',NULL,'P1116','I1117'),('smart','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/cf/f3/ed/thousand-year-old-temple.jpg?w=900&h=-1&s=1','R6','P1116','I1118'),('smart','sfa','R7','P1116','I1119'),('ISKCON Temple','https://www.mapsofindia.com/ci-moi-images/my-india/ISKCON-temple-bangalore.jpg',NULL,'P1117','I1120'),('satish','https://www.penn.museum/sites/VRP/images/Arial_Virupa.jpg','R8','P1116','I1121');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place`
--

DROP TABLE IF EXISTS `place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `place` (
  `PLACE_ID` char(5) NOT NULL,
  `PLACE_NAME` varchar(100) DEFAULT NULL,
  `LOCATION` varchar(100) DEFAULT NULL,
  `TRIP_ID` char(5) DEFAULT NULL,
  `RATING` int DEFAULT NULL,
  `DESCRIPTION` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`PLACE_ID`),
  KEY `FK_TID` (`TRIP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place`
--

LOCK TABLES `place` WRITE;
/*!40000 ALTER TABLE `place` DISABLE KEYS */;
INSERT INTO `place` VALUES ('P1111','SHIVAGANGE','bangalore,Karnataka','T1',4,'[{\"title0\":\"Overview\",\"desc0\":\"Shivagange is a mountain peak with a height of 1300 metres and Hindu pilgrimage center located near Dobbaspet, in Bengaluru Rural district India. It is situated 19 km from the town of Tumakuru and 54 km from Bengaluru.\"}]'),('P1112','DEVARA KERE','bangalore,Karnataka','T1',4,'[{\"title0\":\"This is a title\",\"desc0\":\"this is a description\"}]'),('P1113','RAMALINGESHWARA BETTA','bangalore,Karnataka','T1',4,'[{\"title0\":\"This is a title\",\"desc0\":\"this is a description\"}]'),('P1114','DD HILLS VIEW POINT','bangalore,Karnataka','T1',NULL,'[{\"title0\":\"This is a title\",\"desc0\":\"this is a description\"}]'),('P1115','raichur','raichur',NULL,0,'[{\"title0\":\"raichur\",\"desc0\":\"raichur\"}]'),('P1116','Virupaksha Temple, Hampi','Vijayanagara, Karnataka',NULL,0,'[{\"title0\":\"Overview\",\"desc0\":\"This temple is located on the south bank of the river Tungabadra, just next to where the local bus drops you. This area in general has been an important pilgrimage centre for the worshipers of lord Shiva. Virupaksha temple is equally sort after by the tourists and pilgrims. The annual festivals attract huge crowds of both the types.\nThe very origin of Hampis history as a sacred place revolves around the myths associated with this temple. It believed that this temple has been functioning uninterruptedly ever since its inception in the 7th century AD.That makes this one of the oldest functioning temples in India.\"}]'),('P1117','ISKCON Temple','Bengaluru, Karnataka',NULL,0,'[{\"title0\":\"Hindu temple in Bengaluru, Karnataka\",\"desc0\":\"Sri Radha Krishna-chandra Temple is one of the largest Krishna Hindu temples in the world, affiliated with ISKCON Revival Movement. It is located at Rajajinagar, in North Bangalore in the Indian State of Karnataka.\"}]');
/*!40000 ALTER TABLE `place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `RID` char(5) NOT NULL,
  `RTITLE` varchar(50) DEFAULT NULL,
  `RDESC` varchar(500) DEFAULT NULL,
  `RATING` double(2,1) DEFAULT NULL,
  `PLACE_ID` char(5) DEFAULT NULL,
  `USER_ID` int DEFAULT NULL,
  PRIMARY KEY (`RID`),
  KEY `FK_UID2` (`USER_ID`),
  KEY `FK_PID2` (`PLACE_ID`),
  CONSTRAINT `FK_PID2` FOREIGN KEY (`PLACE_ID`) REFERENCES `place` (`PLACE_ID`) ON DELETE CASCADE,
  CONSTRAINT `FK_UID2` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`) ON DELETE CASCADE,
  CONSTRAINT `review_chk_1` CHECK (((`RATING` >= 0) and (`RATING` <= 5)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES ('R1','good spot near bangalore','very nice place if you r from it ,then enjoy your weekends..',2.0,'P1111',163),('R2','good spot near bangalore','very nice place if you r from it ,then enjoy your weekends..',2.0,'P1111',163),('R3','good spot near bangalore','very nice place if you r from it ,then enjoy your weekends..',2.0,'P1111',163),('R4','test','adsfadfa adfa',5.0,'P1112',164),('R5','test','test',2.0,'P1112',163),('R6','Major temple of Hampi, where people still worship','The picturesque height of this Shiva temple and location near Hemakuta hills and Matanga hills, make this temple a must-visit place in Hampi. Do not miss the pin-hole inverted image of temple\'s main gate and elephant inside the temple.',5.0,'P1116',166),('R7','test\'s','asdasd',4.0,'P1116',166),('R8','Too costly food','Ordered fries with mayonnaise...3 €...it was less than a children\'s fries...the taste was ok...but 3 euros for a handful of fries...no sorry...I\'m not going here more go...number 4',2.0,'P1116',167);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trip`
--

DROP TABLE IF EXISTS `trip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trip` (
  `TRIP_ID` char(5) NOT NULL,
  `TRIP_NAME` varchar(30) DEFAULT NULL,
  `DISTANCE` int DEFAULT NULL,
  `TIME` int DEFAULT NULL,
  `IMG` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`TRIP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trip`
--

LOCK TABLES `trip` WRITE;
/*!40000 ALTER TABLE `trip` DISABLE KEYS */;
INSERT INTO `trip` VALUES ('T1111','HIKING NEAR BANGALORE',280,2,'https://www.threetrekkers.com/wp-content/uploads/2020/08/DD-Hills-Bangalore-Banner.png'),('T1116','pppppp',8815,22,'https://www.threetrekkers.com/wp-content/uploads/2020/08/DD-Hills-Bangalore-Banner.png'),('T1117','testtt',370,0,'https://image.shutterstock.com/image-photo/concept-travel-green-field-wonders-260nw-525685456.jpg'),('T1118','fasdfasfasd',430,1,'https://3.imimg.com/data3/TC/AX/MY-15186828/1-500x500.jpg'),('T1119','qwert',452,1,'https://3.imimg.com/data3/TC/AX/MY-15186828/1-500x500.jpg'),('T1120','sdfd',358,0,'https://3.imimg.com/data3/TC/AX/MY-15186828/1-500x500.jpg'),('T1121','dsfsa',368,0,'https://3.imimg.com/data3/TC/AX/MY-15186828/1-500x500.jpg'),('T1122','testo',377,0,'https://media.istockphoto.com/photos/white-bus-crossing-the-alpes-picture-id157526603?k=20&m=157526603&s=612x612&w=0&h=RIXsPpgGBRmjA21BU5yE5Tfulz8vmzgFA9jQLj7X6EE=');
/*!40000 ALTER TABLE `trip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tripxplace`
--

DROP TABLE IF EXISTS `tripxplace`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tripxplace` (
  `TRIP_ID` char(5) NOT NULL,
  `PLACE_ID` char(5) NOT NULL,
  PRIMARY KEY (`TRIP_ID`,`PLACE_ID`),
  KEY `FKTXP2` (`PLACE_ID`),
  CONSTRAINT `FKTXP1` FOREIGN KEY (`TRIP_ID`) REFERENCES `trip` (`TRIP_ID`) ON DELETE CASCADE,
  CONSTRAINT `FKTXP2` FOREIGN KEY (`PLACE_ID`) REFERENCES `place` (`PLACE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tripxplace`
--

LOCK TABLES `tripxplace` WRITE;
/*!40000 ALTER TABLE `tripxplace` DISABLE KEYS */;
INSERT INTO `tripxplace` VALUES ('T1111','P1111'),('T1116','P1111'),('T1118','P1111'),('T1119','P1111'),('T1111','P1112'),('T1119','P1112'),('T1121','P1112'),('T1111','P1113'),('T1119','P1113'),('T1120','P1113'),('T1111','P1114'),('T1117','P1114'),('T1122','P1114'),('T1116','P1115'),('T1117','P1115'),('T1120','P1115'),('T1122','P1115'),('T1117','P1116'),('T1118','P1116'),('T1118','P1117'),('T1120','P1117'),('T1121','P1117'),('T1122','P1117');
/*!40000 ALTER TABLE `tripxplace` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `USER_ID` int NOT NULL AUTO_INCREMENT,
  `FNAME` varchar(15) DEFAULT NULL,
  `LNAME` varchar(15) DEFAULT NULL,
  `GENDER` char(1) DEFAULT NULL,
  `PHONE` double(10,0) DEFAULT NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE KEY `PHONE` (`PHONE`)
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (163,'yashwanth','nalla','m',9876543256),(164,'ekant','janapure','m',9876543217),(165,'naveen','murale','m',6549873218),(166,'smart','dragon','m',9878456254),(167,'satish','gadde','m',9465481457),(168,'sampath','kundanagar','m',8556479852),(180,'vivek','kalmath','m',9986747446);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-22 23:09:46
