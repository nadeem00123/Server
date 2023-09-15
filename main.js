const net = require('net');

const PORT = process.env.port || 3000 // Replace with the port number you want to use

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

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Function to send an AT command to the device
function sendATCommand(socket, command) {
  console.log(`Sending command to device: ${command}`);
  socket.write(command + '\r\n'); // Send the command to the device

  // Listen for the device's response
  socket.once('data', (response) => {
    const responseData = response.toString().trim();
    console.log(`Response from device: ${responseData}`);
    // You can further process the response here.
  });
}
