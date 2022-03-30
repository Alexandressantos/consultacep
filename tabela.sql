CREATE TABLE `endereco` (
    `cep` varchar(8) PRIMARY KEY not null,
    `logradouro` varchar(250) not null,
    `complemento` varchar(250) not null,
    `bairro` varchar(100) not null,
    `localidade` varchar(100) not null,
    `uf` varchar(2) not null,
    `ibge` int(11) not null,
    `gia` varchar(100) not null,
    `ddd` int(2) not null,
    `siafi` int(10) not null
);