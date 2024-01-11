# Configuration
I have host my database on freemysqlhosting.net.
No need to change config file for api testing.

Server: sql.freedb.tech
Name: freedb_mondal
Username: freedb_mondal
Password: 2UDbzzEKN4#nFVM
Port number: 3306


## Database
The database has one table called `products` and has the following structure:

| Column Name | Data Type    |
| ----------- | ------------ |
| product_id  | INT          |
| name        | VARCHAR(255) |
| price       | FLOAT(10,2)  |
| description | TEXT         |


### Nest.js API

For Swagger api interface please open http://localhost:5000/api/

To start the application with the server listening for HTTP requests on the specified port in the `main.ts` file, _which in this application is port 3000_, run the following command in the terminal:

```bash
 $ npm run start
```

Or to automatically watch for changes:

```bash
 $ npm run start:dev
```

The application now should be running on the port specified in the `.env` file with the key `API_PORT`.

The available API endpoints are as follows:

- Get all products

```
 [GET]: http://localhost:API_PORT/products
```

- Get one product by id. If id doesn't exist, throws an error.

```
 [GET]: http://localhost:API_PORT/products/:id
```

- Create a product. Must provide the product in the body as follows:

```
{ name*	string
  price*	number
  description*	string
}
```

```
 [POST]: http://localhost:API_PORT/products
```

- Update a product by id. If id doesn't exist, throws an error. Can provide any field _(name, price, or description)_ to be updated.

```
 [PATCH]: http://localhost:API_PORT/products/:id
```

- Delete a product by id. If id doesn't exist, throws an error.

```
 [DELETE]: http://localhost:API_PORT/products/:id
```


###  OpenAPI Specification

This project is configured with Swagger for OpenAPI Specification. To check the Swagger UI of this application, go to:

```
 http://localhost:API_PORT/api/
```
