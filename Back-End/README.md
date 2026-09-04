# Back-End - SIVA

> Motor de regras de negócio, autenticação JWT, integração com o banco de dados e auditorias.

[🔗 Acesse o projeto em produção](https://siva-ig31.onrender.com/login) (API disponível como serviço)

## ⚙️ Arquitetura e Modelagem
A API foi desenvolvida em Java utilizando o ecossistema Spring (Spring Boot, Spring Security). 
Ela expõe endpoints REST para gerenciar a frota, motoristas, viagens e fornecer dados geolocalizados para o mapa.
O banco de dados relacional (MySQL) armazena todas as entidades principais e logs de auditoria, e as migrações são controladas utilizando Flyway.

## 🛠 Tecnologias Usadas
- Java 17+
- Spring Boot
- Spring Security (Autenticação JWT)
- MySQL
- Flyway (Migrações)
- Maven

## 🚀 Como Rodar o Back-End
1. Certifique-se de ter o **Java 17**, **Maven** e **MySQL** instalados e configurados.
2. Crie o banco de dados no MySQL e configure as credenciais no `application.properties` (ou usando variáveis de ambiente / `.env`).
3. Rode o projeto via terminal ou utilizando a sua IDE favorita:
   ```bash
   mvn spring-boot:run
   ```
