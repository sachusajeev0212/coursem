const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const route = jsonServer.router('db.json');

server.use(middlewares);
server.use(route);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`CourseM server is running on port: ${PORT}`);
});
