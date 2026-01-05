# Kovaja template project
- node.js server with rest API, using express
- react frontend
- both in typescript

## Quick start
- run command
```
  npm install && npm start
```
- open http://localhost:8000/ in your browser

## Dev start up
- Start server
```
npm run server:dev
```
- Start client
```
npm run client:dev
```

## Publishing new version
- Version will be changed
- New tag will get created
- Tag will get pushed
- New tag will trigger new build of docker image
```
npm run publish patch|minor|major
```