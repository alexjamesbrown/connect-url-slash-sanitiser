# connect-url-slash-sanitiser

middleware to remove unnecessary slashes from your express urls

[![NPM](https://nodei.co/npm/connect-url-slash-sanitiser.png)](https://nodei.co/npm/connect-url-slash-sanitiser/)

## Install

```
npm install connect-url-slash-sanitiser --save
```

## Usage

```
var express = require('express');
var urlSlashSanitiser = require('connect-url-slash-sanitiser');

var app = express();

app.use(urlSlashSanitiser());

//etc...

```

This will replace all double slashes in a url.
For example, if the url was:

`http://www.myapp.com/something//more/`

the middleware would 301 redirect to  
`http://www.myapp.com/something/more`