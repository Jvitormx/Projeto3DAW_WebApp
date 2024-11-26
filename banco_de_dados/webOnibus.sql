-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 26, 2024 at 08:22 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webOnibus`
--

-- --------------------------------------------------------

--
-- Table structure for table `capacidade`
--

CREATE TABLE `capacidade` (
  `capacidade_onibus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `capacidade`
--

INSERT INTO `capacidade` (`capacidade_onibus`) VALUES
(23),
(28),
(32);

-- --------------------------------------------------------

--
-- Table structure for table `dia_saida`
--

CREATE TABLE `dia_saida` (
  `id_dia_saida` int(11) NOT NULL,
  `dia` varchar(80) NOT NULL,
  `data` date NOT NULL,
  `id_dia_rota_onibus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dia_saida`
--

INSERT INTO `dia_saida` (`id_dia_saida`, `dia`, `data`, `id_dia_rota_onibus`) VALUES
(1, 'Terça', '2024-11-26', 2),
(2, 'Quarta', '2024-11-27', 2),
(3, 'Quinta', '2024-11-28', 2),
(4, 'Sexta', '2024-11-29', 2),
(5, 'Sabado', '2024-11-30', 2),
(6, 'Terça', '2024-11-26', 3),
(7, 'Quarta', '2024-11-27', 3);

-- --------------------------------------------------------

--
-- Table structure for table `estados`
--

CREATE TABLE `estados` (
  `COD` int(11) NOT NULL,
  `NOME` varchar(80) NOT NULL,
  `SIGLA` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `estados`
--

INSERT INTO `estados` (`COD`, `NOME`, `SIGLA`) VALUES
(11, 'Rondônia', ' RO'),
(12, 'Acre', ' AC'),
(13, 'Amazonas', ' AM'),
(14, 'Roraima', ' RR'),
(15, 'Pará', ' PA'),
(16, 'Amapá', ' AP'),
(17, 'Tocantins', ' TO'),
(21, 'Maranhão', ' MA'),
(22, 'Piauí', ' PI'),
(23, 'Ceará', ' CE'),
(24, 'Rio Grande do Norte', ' RN'),
(25, 'Paraíba', ' PB'),
(26, 'Pernambuco', ' PE'),
(27, 'Alagoas', ' AL'),
(28, 'Sergipe', ' SE'),
(29, 'Bahia', ' BA'),
(31, 'Minas Gerais', ' MG'),
(32, 'Espírito Santo', ' ES'),
(33, 'Rio de Janeiro', ' RJ'),
(35, 'São Paulo', ' SP'),
(41, 'Paraná', ' PR'),
(42, 'Santa Catarina', ' SC'),
(43, 'Rio Grande do Sul', ' RS'),
(50, 'Mato Grosso do Sul', ' MS'),
(51, 'Mato Grosso', ' MT'),
(52, 'Goiás', ' GO'),
(53, 'Distrito Federal', ' DF');

-- --------------------------------------------------------

--
-- Table structure for table `funcionario`
--

CREATE TABLE `funcionario` (
  `cargo` varchar(80) DEFAULT NULL,
  `acesso` char(1) NOT NULL DEFAULT 'S',
  `id_pessoa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `funcionario`
--

INSERT INTO `funcionario` (`cargo`, `acesso`, `id_pessoa`) VALUES
('Adm', 'S', 2);

-- --------------------------------------------------------

--
-- Table structure for table `motorista`
--

CREATE TABLE `motorista` (
  `onibus_motorista` int(11) DEFAULT NULL,
  `id_motorista` int(11) NOT NULL,
  `nome_motorista` varchar(80) NOT NULL,
  `CPF` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `motorista`
--

INSERT INTO `motorista` (`onibus_motorista`, `id_motorista`, `nome_motorista`, `CPF`) VALUES
(9, 1, 'Motorista1', '123678'),
(NULL, 2, 'Motorista2', '098654');

-- --------------------------------------------------------

--
-- Table structure for table `onibus`
--

CREATE TABLE `onibus` (
  `id_onibus` int(11) NOT NULL,
  `capacidade` int(11) NOT NULL,
  `placa_onibus` varchar(80) NOT NULL,
  `companhia` varchar(80) NOT NULL,
  `tipo_onibus_nome` varchar(80) NOT NULL,
  `kilometragem` int(11) DEFAULT NULL,
  `motorista` int(11) DEFAULT NULL,
  `capacidade_atual` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `onibus`
--

INSERT INTO `onibus` (`id_onibus`, `capacidade`, `placa_onibus`, `companhia`, `tipo_onibus_nome`, `kilometragem`, `motorista`, `capacidade_atual`) VALUES
(1, 23, 'XLR-8', 'Companhia 1', 'Leito', 0, 3, 23),
(2, 28, 'XLR82', 'Companhia2', 'Semi-Leito', 0, 3, 28),
(3, 32, 'XLR83', 'Companhia3', 'Executivo', 0, 3, 32),
(4, 23, 'XLR84', 'Companhia4', 'Executivo', 0, 3, 23),
(5, 32, 'QWERT123', 'Companhia1', 'Leito', 0, NULL, 0),
(6, 23, 'QWERT456', 'Companhia2', 'Executivo', 200, NULL, 0),
(8, 23, 'AFGD', 'Comp1', 'Leito', 0, 1, 23),
(9, 32, 'ZXC', 'Empresa123', 'Executivo', NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `onibus_motorista`
--

CREATE TABLE `onibus_motorista` (
  `id_onibus_motorista` int(11) NOT NULL,
  `id_onibus` int(11) NOT NULL,
  `id_motorista` int(11) NOT NULL,
  `regiao` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parada`
--

CREATE TABLE `parada` (
  `id_parada` int(11) NOT NULL,
  `nome_parada` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `passagem`
--

CREATE TABLE `passagem` (
  `id_passagem` int(11) NOT NULL,
  `comprador` int(11) NOT NULL,
  `rota_onibus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pessoa`
--

CREATE TABLE `pessoa` (
  `id_pessoa` int(11) NOT NULL,
  `nome` varchar(80) DEFAULT NULL,
  `cpf` varchar(80) DEFAULT NULL,
  `estado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pessoa`
--

INSERT INTO `pessoa` (`id_pessoa`, `nome`, `cpf`, `estado`) VALUES
(2, 'Pedro', '09876', NULL),
(3, 'Paulo', '56748', NULL),
(4, 'Joao', '901231', 33);

-- --------------------------------------------------------

--
-- Table structure for table `rota_onibus`
--

CREATE TABLE `rota_onibus` (
  `id_rota_onibus` int(11) NOT NULL,
  `id_rota` int(11) NOT NULL,
  `id_onibus` int(11) NOT NULL,
  `tipo_rota` varchar(60) NOT NULL DEFAULT 'Completa',
  `preco` float DEFAULT NULL,
  `saida_hora` time NOT NULL,
  `data_saida` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rota_onibus`
--

INSERT INTO `rota_onibus` (`id_rota_onibus`, `id_rota`, `id_onibus`, `tipo_rota`, `preco`, `saida_hora`, `data_saida`) VALUES
(1, 2, 1, 'Completa', 90, '06:30:00', '2024-11-26'),
(2, 2, 2, 'Completa', 90, '06:30:00', '2024-11-26'),
(3, 2, 3, 'Completa', 90, '06:30:00', '2024-11-26'),
(4, 2, 3, 'Parcial', 60, '07:30:00', '2024-11-27'),
(5, 2, 4, 'Parcial', 60, '08:30:00', '2024-11-26'),
(6, 2, 8, 'Completa', 90, '09:30:00', '2024-11-26'),
(7, 3, 6, 'Completa', 90, '09:00:00', '2024-11-26'),
(8, 2, 8, 'Completa', 90, '08:30:00', '2024-11-27');

-- --------------------------------------------------------

--
-- Table structure for table `rota_web`
--

CREATE TABLE `rota_web` (
  `id_rota` int(11) NOT NULL,
  `partida` int(11) NOT NULL,
  `chegada` int(11) NOT NULL,
  `paradas_array` varchar(255) NOT NULL,
  `nome_rota` varchar(80) NOT NULL,
  `tempo` time NOT NULL,
  `imagem_promocional` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rota_web`
--

INSERT INTO `rota_web` (`id_rota`, `partida`, `chegada`, `paradas_array`, `nome_rota`, `tempo`, `imagem_promocional`) VALUES
(2, 33, 35, 'Local1,Local2,local3', 'RJ -> SP', '03:00:00', 'https://www.zapimoveis.com.br/blog/wp-content/uploads/2023/12/cidade-de-sao-paulo.jpg'),
(3, 33, 32, 'Local1,Local2,Local3', 'RJ -> ES', '02:40:00', 'https://setur.es.gov.br/Media/Setur/_Profiles/c4d8c6e6/9849f63f/Convento,%20Vila%20Velha%20-%20Yuri%20Barichivich.jpg?v=638641829087927140'),
(4, 33, 31, 'Local5, Local6, Local7', 'RJ -> MG', '04:00:00', 'https://blog.lojasedmil.com.br/wp-content/uploads/2024/09/Minas-Gerais-lojas-edmil.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `capacidade`
--
ALTER TABLE `capacidade`
  ADD PRIMARY KEY (`capacidade_onibus`);

--
-- Indexes for table `dia_saida`
--
ALTER TABLE `dia_saida`
  ADD PRIMARY KEY (`id_dia_saida`),
  ADD KEY `dia_saidaFK` (`id_dia_rota_onibus`);

--
-- Indexes for table `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`COD`);

--
-- Indexes for table `funcionario`
--
ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`id_pessoa`);

--
-- Indexes for table `motorista`
--
ALTER TABLE `motorista`
  ADD PRIMARY KEY (`id_motorista`);

--
-- Indexes for table `onibus`
--
ALTER TABLE `onibus`
  ADD PRIMARY KEY (`id_onibus`),
  ADD KEY `onibus_capacidade_FK` (`capacidade`),
  ADD KEY `onibus_motorista_FK` (`motorista`);

--
-- Indexes for table `parada`
--
ALTER TABLE `parada`
  ADD PRIMARY KEY (`id_parada`);

--
-- Indexes for table `passagem`
--
ALTER TABLE `passagem`
  ADD PRIMARY KEY (`id_passagem`),
  ADD KEY `comprador_FK` (`comprador`),
  ADD KEY `rota_onibus_FK` (`rota_onibus`);

--
-- Indexes for table `pessoa`
--
ALTER TABLE `pessoa`
  ADD PRIMARY KEY (`id_pessoa`),
  ADD KEY `pessoa_estado_FK` (`estado`);

--
-- Indexes for table `rota_onibus`
--
ALTER TABLE `rota_onibus`
  ADD PRIMARY KEY (`id_rota_onibus`),
  ADD KEY `id_onibus_FK` (`id_onibus`),
  ADD KEY `id_rota` (`id_rota`);

--
-- Indexes for table `rota_web`
--
ALTER TABLE `rota_web`
  ADD PRIMARY KEY (`id_rota`),
  ADD KEY `rota_web_partida_FK` (`partida`),
  ADD KEY `rota_web_chegada_FK` (`chegada`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dia_saida`
--
ALTER TABLE `dia_saida`
  MODIFY `id_dia_saida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `motorista`
--
ALTER TABLE `motorista`
  MODIFY `id_motorista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `onibus`
--
ALTER TABLE `onibus`
  MODIFY `id_onibus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pessoa`
--
ALTER TABLE `pessoa`
  MODIFY `id_pessoa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rota_onibus`
--
ALTER TABLE `rota_onibus`
  MODIFY `id_rota_onibus` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `rota_web`
--
ALTER TABLE `rota_web`
  MODIFY `id_rota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dia_saida`
--
ALTER TABLE `dia_saida`
  ADD CONSTRAINT `dia_saidaFK` FOREIGN KEY (`id_dia_rota_onibus`) REFERENCES `rota_onibus` (`id_rota`);

--
-- Constraints for table `funcionario`
--
ALTER TABLE `funcionario`
  ADD CONSTRAINT `id_funcionario_FK` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoa` (`id_pessoa`);

--
-- Constraints for table `motorista`
--
ALTER TABLE `motorista`
  ADD CONSTRAINT `id_motorista_FK` FOREIGN KEY (`id_pessoa`) REFERENCES `pessoa` (`id_pessoa`);

--
-- Constraints for table `onibus`
--
ALTER TABLE `onibus`
  ADD CONSTRAINT `onibus_capacidade_FK` FOREIGN KEY (`capacidade`) REFERENCES `capacidade` (`capacidade_onibus`),
  ADD CONSTRAINT `onibus_motorista_FK` FOREIGN KEY (`motorista`) REFERENCES `motorista` (`id_pessoa`);

--
-- Constraints for table `passagem`
--
ALTER TABLE `passagem`
  ADD CONSTRAINT `comprador_FK` FOREIGN KEY (`comprador`) REFERENCES `pessoa` (`id_pessoa`),
  ADD CONSTRAINT `rota_onibus_FK` FOREIGN KEY (`rota_onibus`) REFERENCES `rota_onibus` (`id_rota_onibus`);

--
-- Constraints for table `pessoa`
--
ALTER TABLE `pessoa`
  ADD CONSTRAINT `pessoa_estado_FK` FOREIGN KEY (`estado`) REFERENCES `estados` (`COD`);

--
-- Constraints for table `rota_onibus`
--
ALTER TABLE `rota_onibus`
  ADD CONSTRAINT `id_onibus_FK` FOREIGN KEY (`id_onibus`) REFERENCES `onibus` (`id_onibus`),
  ADD CONSTRAINT `rota_onibus_ibfk_1` FOREIGN KEY (`id_rota`) REFERENCES `rota_web` (`id_rota`),
  ADD CONSTRAINT `rota_onibus_rota_FK` FOREIGN KEY (`id_rota`) REFERENCES `rota_web` (`id_rota`);

--
-- Constraints for table `rota_web`
--
ALTER TABLE `rota_web`
  ADD CONSTRAINT `rota_web_chegada_FK` FOREIGN KEY (`chegada`) REFERENCES `estados` (`COD`),
  ADD CONSTRAINT `rota_web_partida_FK` FOREIGN KEY (`partida`) REFERENCES `estados` (`COD`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
