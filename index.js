require('dotenv').config();
const express = require('express');
const { SmartThingsClient, BearerTokenAuthenticator } = require('@smartthings/core-sdk');

const app = express();
const port = 3000;

// Kết nối SmartThings client
if (!process.env.SMARTTHINGS_TOKEN) {
    console.error('Vui lòng đặt biến môi trường SMARTTHINGS_TOKEN với token truy cập SmartThings của bạn.');
    process.exit(1);
}
console.log('Kết nối đến SmartThings với token:', process.env.SMARTTHINGS_TOKEN);
const client = new SmartThingsClient(new BearerTokenAuthenticator(process.env.SMARTTHINGS_TOKEN));
async function testSmartThingsConnection(client) {
  try {
    const devices = await client.devices.list();
    console.log('Danh sách thiết bị:', devices);
    console.log('Kết nối SmartThings thành công!');
  } catch (err) {
    console.error('Lỗi khi kết nối SmartThings:', err.message);
  }
}
testSmartThingsConnection(client);
// API: Lấy danh sách TV
app.get('/devices', async (req, res) => {
    try {
        const devices = await client.devices.list();
        const tvs = devices.filter(device => 
  device.deviceTypeName && device.deviceTypeName.toLowerCase()
);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/device/:deviceId/power/:state', async (req, res) => {
  const { deviceId, state } = req.params;

  if (!['on', 'off'].includes(state.toLowerCase())) {
    return res.status(400).json({ error: 'State must be "on" or "off"' });
  }

  try {
    await client.devices.executeCommand(deviceId, {
      component: 'main',
      capability: 'switch',
      command: state.toLowerCase()
    });

    res.json({ success: true, message: `Device ${deviceId} turned ${state}` });
  } catch (error) {
    console.error('Error executing command:', error.message);
    res.status(500).json({ error: 'Failed to send command to device' });
  }
});

// Start server
app.listen(port, () => {
    console.log(`Backend chạy tại http://localhost:${port}`);
});
