create database irafon;
use irafon;

create table contato(
id int not null auto_increment,
nome varchar(30) not null,
email varchar(30) not null,
observacoes varchar(30) not null,
tipo int not null,
primary key(id));