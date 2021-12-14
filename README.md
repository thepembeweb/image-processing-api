# Image Processing API

> A REST API built with Typescript, Node.js and Express; to handle resizing and serving stored images for you.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/200px-Node.js_logo.svg.png)

[![NPM Version][npm-image]][npm-url] ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

This app showcases an Image Processing API powered by Typescript, Node.js and Express which can serve properly scaled versions of your images to the front end to reduce page load size.

## Installation

Clone the source locally:

```sh
$ git clone https://github.com/thepembeweb/image-processing-api.git
$ cd image-processing-api
```
If you're on Debian or Ubuntu, you'll also need to install
`nodejs-legacy`:

Use your package manager to install `npm`.

```sh
$ sudo apt-get install npm nodejs-legacy
```

Install project dependencies:

```sh
$ npm install
```
Analyze the code to find potential bugs:

```sh
$ npm run lint
```
Run tests on the code:

```sh
$ npm run test
```
Start the app:

```sh
$ npm start
```
Open your browser and visit the below url to view a resized image:

```sh
http://localhost:3000/api/images?filename=duck.jpg&height=200&width=200
```

## Built With

* [Node.js®](https://nodejs.org/) - The JavaScript runtime used
* [Express.js®](https://nodejs.org/) - The web application framework used
* [Typescript](https://www.typescriptlang.org/) - The Programming Language used


## Authors

* **[Pemberai Sweto](https://github.com/thepembeweb)** - *Initial work* - [Image Processing API](https://github.com/thepembeweb/image-processing-api)


## License

[![License](http://img.shields.io/:license-mit-green.svg?style=flat-square)](http://badges.mit-license.org)

- This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
- Copyright 2021 © [Pemberai Sweto](https://github.com/thepembeweb).

