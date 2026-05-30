const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, ObjectResponse) => {
    // Configurar cabeceras para responder en formato JSON
    ObjectResponse.setHeader('Content-Type', 'application/json');
    
    if (req.url === '/' && req.method === 'GET') {
        ObjectResponse.writeHead(200);
        ObjectResponse.end(JSON.stringify({
            status: "Online",
            message: "Sistemas Operativos II - proyecto final funcionando al 100",
            timestamp: new Date().toISOString(),
            ambiente: "Docker Swarm en Azure Cloud"
        }));
    } else if (req.url === '/health' && req.method === 'GET') {
        ObjectResponse.writeHead(200);
        ObjectResponse.end(JSON.stringify({ status: "UP", check: true }));
    } else {
        ObjectResponse.writeHead(404);
        ObjectResponse.end(JSON.stringify({ error: "Ruta no encontrada" }));
    }
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutandose en el puerto ${PORT}`);
});