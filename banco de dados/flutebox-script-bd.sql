-- criação e o uso do database
create database flutebox;

use flutebox;

-- criação das tabales referentes a DER
create table usuario(
	id int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(45) not null,
    login varchar(45) not null,
    senha varchar(45) not null
);

create table flauta (
	id int primary key auto_increment,
    tipo varchar(45),
    voz varchar(45),
		constraint chkVoz check (voz in('soprano', 'sopranino', 'contralto', 'tenor', 'baixo'))
);

create table usuarioFlauta (
	id int auto_increment,
	fkUsuario int,
		foreign key (fkUsuario) references usuario(id),
    fkFlauta int,
		foreign key (fkFlauta) references flauta(id),
    primary key (id, fkUsuario, fkFlauta)
);


-- Inserindo dados a tabela usuário
insert into usuario values 
	(null, 'João', 'joão.contato@hotmail.com', 'joãoão', '123456'),
	(null, 'Ana', 'Ana.contato2@hotmail.com', 'Ananana', '452516'),
	(null, 'Lorena', 'lorena.contato22@hotmail.com', 'loren', '205874A'),
	(null, 'Pietro', 'pietro.contat@hotmail.com', 'pieetro', 'shja541'),
	(null, 'Rodrigo', 'rodrigo.contato@hotmail.com', 'rorodri', 'am234ls'),
	(null, 'Monick', 'monick.contato@hotmail.com', 'nick', '123456'),
	(null, 'Jefferson', 'jefferson.contato@hotmail.com', 'jeffin', 'amui4508');
    
    
-- inserindo dados a tabela flauta
insert into flauta values
	(null, 'Flauta Transversal Soprano', 'Soprano'),
	(null, 'Flauta Transversal Piccolo', 'Sopranino'),
	(null, 'Flauta Transversal Alto', 'Contralto'),
	(null, 'Flauta Transversal Tenor', 'Tenor'),
	(null, 'Flauta Transversal Contrabaixo', 'Baixo');
    
    
-- inserindo dados na tabela usuarioFlauta
insert into usuarioFlauta values
(null, 2, 1),
(null, 1, 3),
(null, 3, 1),
(null, 1, 1),
(null, 1, 4),
(null, 2, 5),
(null, 3, 2),
(null, 6, 1),
(null, 4, 2),
(null, 6, 5),
(null, 1, 2),
(null, 7, 4),
(null, 7, 1),
(null, 4, 1);


-- select de todos os dados das tabelas
select * from usuario;
select * from flauta;
select * from usuarioFlauta;


-- select o nome do usuario, o tipo e a voz da flauta escolhida
select u.nome 'Nome do usuário',
	   f.tipo 'Tipo da Flauta',
       f.voz 'Voz da flauta'
       from usuario u
			join usuarioFlauta uf
				on u.id = uf.fkUsuario
			join flauta f
				on f.id = uf.fkFlauta;
                
-- select usuario que fez somente o cadastro e o login, mas não respondeu o quiz e por isso não tem nenhuma flauta
	select u.nome 'Nome do usuário',
	   f.tipo 'Tipo da Flauta',
       f.voz 'Voz da flauta'
       from usuario u
			left join usuarioFlauta uf
				on u.id = uf.fkUsuario
			left join flauta f
				on f.id = uf.fkFlauta;
                
-- contagem dos usuarios que possuem alguma flauta
select count(fkFlauta) 'Quantidade de Flautas'
	from usuarioFlauta;
    

select f.tipo Tipo,
	   count(uf.fkFlauta) Quantidade
       from flauta f
			join usuarioFlauta uf
				on f.id = uf.fkFlauta
			group by f.id;





drop database flutebox;