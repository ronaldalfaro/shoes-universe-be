-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 13, 2022 at 02:33 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `shoes_universe`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `description`, `image`) VALUES
(9, 'Shoes X', 'New Shoes X black 22', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/985d233692f74f62948eaba50012752f_9366/Swift_Run_X_Shoes_Black_FY2116_01_standard.jpg'),
(11, 'Shoes Z6', 'New Shoes Z6 black', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/985d233692f74f62948eaba50012752f_9366/Swift_Run_X_Shoes_Black_FY2116_01_standard.jpg'),
(14, 'Shoes ASD', 'New Shoes ASD black', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/985d233692f74f62948eaba50012752f_9366/Swift_Run_X_Shoes_Black_FY2116_01_standard.jpg'),
(15, 'Shoes 123', 'New Shoes 123 black', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/985d233692f74f62948eaba50012752f_9366/Swift_Run_X_Shoes_Black_FY2116_01_standard.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
