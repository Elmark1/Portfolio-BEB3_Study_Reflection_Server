# BEB 03 Study Reflection Server API #

## Get all posts ##

### Request ###

`GET http://beb03-study-reflection-server.herokuapp.com/posts`

### Response ###

`[
  {
	_id: 61ffaa36ade23c1e45f2f7e3,
	title: "TEST TITLE",
	content: "TEST CONTENT",
	writer: "TEST WRITER",
	createdAt: 2022-02-06T10:57:43.283+00:00,
	__v: 0
  },
  // Several posts
]`

## Create post ##

### Request ###

`POST http://beb03-study-reflection-server.herokuapp.com/posts`

Request Type: JSON

| parameter | data type | mandatory |
|-----------|-----------|-----------|
| title     | String    | false     |
| content   | String    | false     |
| writer    | String    | false     |

### Response ###

`{
  title: "TEST",
  content: "THIS IS TEST CONTENT",
  writer: "Robin HJ Kwon",
  createdAt: "2022-02-06T10:57:43.283Z",
  _id: "61ffb3dcade23c1e45f2f7e6",
  __v: 0
}`
