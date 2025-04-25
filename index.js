const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("🚀 Hello from CI/CD Pipeline!");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
