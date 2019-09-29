# API REST to Mongo

Application developed for the NoSQL Database discipline in BTI.

## Installation

Use the [yarn](https://yarnpkg.com/) to install.

```bash
git clone https://github.com/lemosantony/api-music-mongo.git
cd api-music-mongo
yarn install
```

or

```bash
git clone https://github.com/lemosantony/api-music-mongo.git
cd api-music-mongo
npm install
```

## Run

The application running on `https://localhost:3000`.
To start:

```bash
yarn dev
```

or

```bash
npm dev
```

## Usage overview

`POST /music`

Example:

```json
{
  "title": "À sua maneira",
  "artist": "Capital Inicial",
  "gender": "Rock",
  "rating": "10.0",
  "releaseYear": 2002
}
```

`GET /musics`

Returns all created songs.

`GET /music/:id`

Returns a given song according to the `id` passed.
