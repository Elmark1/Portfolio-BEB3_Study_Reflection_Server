# BEB 03 Study Reflection Server API #

## Get Welcome message ##

### Request ###

`GET https://beb03-study-reflection-server.herokuapp.com/`

### Response ###

```
{
  message: "Welcome to BEB 03 Study Reflection API"
}
```

## Get all posts ##

### Request ###

`GET https://beb03-study-reflection-server.herokuapp.com/posts`

### Response ###

```
[
  {
	_id: 61ffd66cf2522073192c8d5b,
	title: "This is sample data",
	content:
	  "# Sample data #
	  - The content should follow markdown format
	  - The con...",
	writer: "Robin Kwon",
	createdAt: 2022-02-06T13:55:28.931+00:00,
	__v: 0
  },
  // Several posts
]
```

## Create post ##

### Request ###

`POST https://beb03-study-reflection-server.herokuapp.com/posts`

Request Type: JSON

| parameter | data type | mandatory |
|-----------|-----------|-----------|
| title     | String    | false     |
| content   | String    | false     |
| writer    | String    | false     |

### Response ###

```
{
  _id: 61ffd66cf2522073192c8d5b,
  title: "This is sample data",
  content:
    "# Sample data #
    - The content should follow markdown format
    - The con...",
  writer: "Robin Kwon",
  createdAt: 2022-02-06T13:55:28.931+00:00,
  __v: 0
}
```
