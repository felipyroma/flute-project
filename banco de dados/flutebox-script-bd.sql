create database flutebox;

use flutebox;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(45) not null,
    login varchar(45) not null,
    senha varchar(45) not null
);

create table flauta (
	idFlauta int primary key auto_increment,
    tipo varchar(45),
    voz varchar(45),
		constraint chkVoz check (voz in('soprano', 'sopranino', 'contralto', 'tenor', 'baixo'))
);

create table usuarioFlauta (
	fkUsuario int,
    fkFlauta int,
    primary key (fkUsuario, fkFlauta)
);

select * from usuario;




drop database flutebox;