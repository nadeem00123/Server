const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  console.log('Hello World!' + req.ip)
  res.send('Hello World!' + req.ip)
})

const server = net.createServer((socket) => {
    console.log('Client connected.');
  
    // Handle data received from the client (E840-TTL-4G02 device)
    socket.on('data', (data) => {
      const receivedData = data.toString().trim(); // Convert the received data to a string and trim whitespace
  
      console.log(`Received data from client: ${receivedData}`);
  
      // Check if the received data is a command, e.g., "AT+CSQ"
        // Send the AT+CSQ command to the device and handle the response
        sendATCommand(socket, 'AT+CSQ');
    });
  
    // Handle client disconnection
    socket.on('end', () => {
      console.log('Client disconnected.');
    });
  
    // Handle errors
    socket.on('error', (err) => {
      console.error(`Client error: ${err.message}`);
    });
  });

//10.252.2.15:3000
//127.0.0.1:3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})