
# Api Rest (Backend) Store 

Server API rest desarrollado con NodeJS y Express en Typescript, obtención de productos licoreria

## Tabla de contenido

* [About this Project](#about-this-project)
* [Getting Started](#getting-started)
  * [Prerequisites Local Installation](#prerequisites-local-installation)
  * [Local Installation](#local-installation)
* [Usage](#usage)
  * [Get Data](#get-data)

## About this project

Esta API gestiona las peticiones de información referentes a los productos de una licoreria online, se conecta a 
una base de datos MySQL y obtiene por el lado del servidor las consultas, filtros y paginación. 

El deploy esta realizado en Heroku en la siguiente [url:  https://demo-drinkstore-server.herokuapp.com](https://demo-drinkstore-server.herokuapp.com)

## Getting Started

### Prerequisites Local Installation

Para correr este proyecto es necesario tener instalado previamente

* Nodejs 16.10


### Local installation

1. Clona el proyecto

```bash
  git clone https://github.com/fquezadageldres/demo.drinkstore_server.git
```

2. Instala las dependencias

```bash
  npm i
```

3. Crea las variables de entorno .ENV
```bash
API=3000
DATABASE_URL="mysql://bsale_test:bsale_test@mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com/bsale_test"
```

4. Inicializa la bd con Prisma (no es necesario migrar los modelos, BD alojada en servidor externo)

```bash
  npx prisma generate
```

5. Inicia la API en modo desarrollo

```bash
  npm run dev
```

  
## Usage

### Get Data

Una vez montado el proyecto se pueden enviar peticiones de información con la siguiente 
estructura por medio http

#### Example / Obtener categorias de productos

#### Fetch
```bash
  Method:    GET
  Url dev:   localhost:3000/v1/categories
  Url prod:  https://demo-drinkstore-server.herokuapp.com//v1/categories
  Return:    Json
```

#### Return Data
```js
{
  "data": [.    //Datos de ejemplo
    {
      "id": 1,
      "name": "bebida energetica"
    },
    {
      "id": 2,
      "name": "pisco"
    },
    {
      "id": 3,
      "name": "ron"
    }
  ]
}
```


#### Example / Obtener productos

#### Fetch
```bash
  Method:  POST
  Url dev:  localhost:3000/v1/products
  Url prod: https://demo-drinkstore-server.herokuapp.com//v1/products
  Request:  Json
  Return:   Json
```

#### Request Data
Solo los campos "filtro" se pueden enviar como null

```js
{
	"filter":{            
		"category":null,     // Filtro Categoria INT : [1, 2, 3, 4, 5, 6] *pisco, ron, etc.
		"discount":null,     // Filtro Descuento BOOL : [true, false] Filtra productos con descuento
		"search":null        // Filtro Busqueda STRING: Busca segun palabra clave *Mistral
	},
	"pagination":{
		"page":1,            // Paginaciñon: INT Pagina actual de busqueda
		"take":3             // Paginación: INT Resultados por pagina
	},
	"order":{
		"price":"desc"       // Ordenar por: TYPE ordena los resultados segun su precio [asc, desc]
	}
}
```

#### Return Data
```js
{
  "count": 57,     // Cantidad de resultados segun los parametros de busqueda
  "data": [
    {
      "id": 33,
      "name": "RON PAMPERO ANIVERSARIO",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/ron_pampero_aniversario0311.jpg",
      "price": 20000,
      "discount": 15,
      "category": 3
    },
    {
      "id": 91,
      "name": "PISCO MISTRAL NOBEL 40°",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/nobel409551.jpg",
      "price": 19990,
      "discount": 0,
      "category": 2
    },
    {
      "id": 88,
      "name": "PISCO MISTRAL GRAN NOBEL 40°",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/grannobel9104.jpg",
      "price": 19900,
      "discount": 0,
      "category": 2
    }
  ]
}
```

  
