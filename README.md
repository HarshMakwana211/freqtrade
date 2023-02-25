<p align="center"><img src="https://i.imgur.com/X7dSE68.png"></p>

## Usage

### Create an App

```
# with npx
$ npx create-nextron-app my-app --example basic-javascript

# with yarn
$ yarn create nextron-app my-app --example basic-javascript

# with pnpx
$ pnpx create-nextron-app my-app --example basic-javascript
```

### Install Dependencies

```
$ cd my-app

# using yarn or npm
$ npm install (or `yarn`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Use it

```
# development mode

$ npm run dev (or `yarn dev` or `pnpm run dev`)

# production build

$ npm run build (or `yarn build` or `pnpm run build`)

# build options

$ npm run build:all (or `yarn build:all` or `pnpm run build:all`)

$ npm run build:win32 (or `yarn build:win32` or `pnpm run build:win32`)

$ npm run build:win64 (or `yarn build:win64` or `pnpm run build:win64`)

$ npm run build:mac (or `yarn build:mac` or `pnpm run build:linux`)

$ npm run build:linux (or `yarn build:linux` or `pnpm run build:linux`)
```
