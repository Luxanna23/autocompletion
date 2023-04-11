-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 11 avr. 2023 à 08:01
-- Version du serveur : 8.0.30
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `autocompletion`
--

-- --------------------------------------------------------

--
-- Structure de la table `champions`
--

CREATE TABLE `champions` (
  `id` int NOT NULL,
  `nom` varchar(255) NOT NULL,
  `categorie` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `champions`
--

INSERT INTO `champions` (`id`, `nom`, `categorie`) VALUES
(1, 'Amumu', 'jungle'),
(2, 'Aatrox', 'top'),
(3, 'Lux', 'mid'),
(4, 'Soraka', 'support'),
(5, 'Caitlyn', 'Adc'),
(6, 'Garen', 'top'),
(7, 'Galio', 'mid'),
(8, 'Zeri', 'Adc'),
(9, 'Evelynn', 'jungle'),
(10, 'Pyke', 'support'),
(11, 'Gwen', 'top'),
(12, 'Syndra', 'mid'),
(13, 'Ahri', 'mid'),
(14, 'Zed', 'mid'),
(15, 'Kalista', 'Adc'),
(16, 'Hecarim', 'jungle'),
(17, 'Nautilus', 'support'),
(18, 'viego', 'jungle'),
(19, 'Katarina', 'mid'),
(20, 'Sona', 'support');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `champions`
--
ALTER TABLE `champions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `champions`
--
ALTER TABLE `champions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
