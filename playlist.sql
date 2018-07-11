-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 12, 2018 at 12:42 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `playlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `image` varchar(1000) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `songs` text CHARACTER SET hp8 COLLATE hp8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `image`, `songs`) VALUES
(1, 'London Grammar - Truth Is a Beautiful Thing', 'images/London Grammar.jpg', '[{\"name\":\"Rooting For You\",\"url\":\"London Grammar - Truth Is a Beautiful Thing\\/01 - Rooting For You.mp3\"},{\"name\":\"Big Picture\",\"url\":\"London Grammar - Truth Is a Beautiful Thing\\/02 - Big Picture.mp3\"},{\"name\":\"Wild Eyed\",\"url\":\"London Grammar - Truth Is a Beautiful Thing\\/03 - Wild Eyed.mp3\"},{\"name\":\"Oh Woman Oh Man\",\"url\":\"London Grammar - Truth Is a Beautiful Thing\\/04 - Oh Woman Oh Man.mp3\"}]'),
(2, 'Janelle Monae - Dirty Comuter', 'images/janelle_monae.jpg', '[{\"name\":\"Dirty Computer\",\"url\":\"Janelle Mon\\u00e1e - Dirty Computer\\/01 Dirty Computer (feat. Brian Wilson).mp3\"},{\"name\":\"Crazy, Classic, Life\",\"url\":\"Janelle Mon\\u00e1e - Dirty Computer\\/02 Crazy, Classic, Life.mp3\"},{\"name\":\"Take a Byte\",\"url\":\"Janelle Mon\\u00e1e - Dirty Computer\\/03 Take a Byte.mp3\"}]'),
(3, 'Jeff Buckley - Grace', 'images/Jeff_Buckley_grace.jpg', '[{\"name\":\"Mojo Pin\",\"url\":\"Jeff Buckley - Grace\\/01 Mojo Pin.mp3\"},{\"name\":\"Grace\",\"url\":\"Jeff Buckley - Grace\\/02 Grace.mp3\"},{\"name\":\"Last Goodbye\",\"url\":\"Jeff Buckley - Grace\\/03 Last Goodbye.mp3\"},{\"name\":\"Lilac Wine\",\"url\":\"Jeff Buckley - Grace\\/04 Lilac Wine.mp3\"},{\"name\":\"So Real\",\"url\":\"Jeff Buckley - Grace\\/05 So Real.mp3\"},{\"name\":\"Hallelujah\",\"url\":\"Jeff Buckley - Grace\\/06 Hallelujah.mp3\"},{\"name\":\"Lover, You Should\'ve Come Over\",\"url\":\"Jeff Buckley - Grace\\/07 Lover, You Should\'ve Come Over.mp3\"}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
