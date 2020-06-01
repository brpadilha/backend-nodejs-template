# GEN - A Back-end NodeJS Template using Express, Mongo + mongoose and Postgres + sequelize

# Postgres sequelize migrations

- Create Migration
  \$ yarn sequelize migration:create --name=create-ModelName

- Run Migration
  \$ yarn sequelize db:migrate

- Undo migration
  \$ yarn sequelize db:migrate:undo
  or
  \$ yarn sequelize db:migrate:undo:all

# Mongo schemas

You can create schemas on /app/schemas directly without command.

# About this template

I had a problem to find backend nodejs templates with sequelize and postgres. And I choose to make it by myself.

# Template description

This template is already configured with Postgres and mongo. User authentication is already done too.

# Why?

This template is a part of my portfolio, that I wanted to improve my skills in resolving problems and create APIs.I will be happy if you provide me any feedback about this project, anything that you can report can make me a better developer!

Email-me: brpadilha.dev@gmail.com

Connect with me at [Linkedin](https://www.linkedin.com/in/brpadilha/)

# Tips

It is better for you to use Docker with mongo and Postgres.

Postgres:

\$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

MongoDB:

\$ docker run --name mongobarber -p 27017:27017 -d -t mongo

---
