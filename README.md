# shoes-universe-be
Shoes universe microservices test

Technologies: NestJS, RMQ, Typescript, REST, Mysql, MongoDB, microservices

# Steps to run the projects

1-Create database from mysqldb.sql file for product-service
2-Copy .env.example to .env file for both projects and change variables if necesary
3-Use npm or yarn to install packages
4-product-service: npm run start:dev to start REST on port 3000
5-price-service: npm run start:dev to start RMQ
6-price-service: npm run listen to start REST in port 3001
7-Add postman collection to your Postman and test diferent endpoints.
