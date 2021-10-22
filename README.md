# pencil-test-api

Test for Pencil App

## Quick Start

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run dev

```

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run compile
npm start
```

```

## Try It
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/questions/search` endpoint 
  ```shell
  curl http://localhost:3000/api/v1/questions/search?q=<criteria>
  ```
