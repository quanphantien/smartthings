require('dotenv').config();
const express = require('express');
const { SmartThingsClient, BearerTokenAuthenticator } = require('@smartthings/core-sdk');

const app = express();
const port = 5000;

// Kết nối SmartThings client
if (!process.env.SMARTTHINGS_TOKEN) {
    console.error('Vui lòng đặt biến môi trường SMARTTHINGS_TOKEN với token truy cập SmartThings của bạn.');
    process.exit(1);
}
// console.log('Kết nối đến SmartThings với token:', process.env.SMARTTHINGS_TOKEN);
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
// testSmartThingsConnection(client);
// API: Lấy danh sách TV
app.get('/devices', async (req, res) => {
    try {
        const devices = await client.devices.list();
        res.json(devices);
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

app.get('/device/all/power/:state', async (req, res) => {
  const { state } = req.params;

  if (!['on', 'off'].includes(state.toLowerCase())) {
    return res.status(400).json({ error: 'State must be "on" or "off"' });
  }

  try {
    const devices = await client.devices.list();
    const deviceIds = devices.map(device => device.deviceId);

    for (const deviceId of deviceIds) {
      await client.devices.executeCommand(deviceId, {
        component: 'main',
        capability: 'switch',
        command: state.toLowerCase()
      });
    }

    res.json({ success: true, message: `All devices turned ${state}` });
  } catch (error) {
    console.error('Error executing command on all devices:', error.message);
    res.status(500).json({ error: 'Failed to send command to all devices' });
  }
});

app.get('/device/:deviceId/volume/:level', async (req, res) => {
  const { deviceId, level } = req.params;
  const volumeLevel = parseInt(level, 10);
  if (isNaN(volumeLevel) || volumeLevel < 0 || volumeLevel > 100) {
    return res.status(400).json({ error: 'Volume level must be a number between 0 and 100' });
  }
  try {
    await client.devices.executeCommand(deviceId, {
      component: 'main',
      capability: 'audioVolume',
      command: 'setVolume',
      arguments: [volumeLevel]
    });

    res.json({ success: true, message: `Device ${deviceId} volume set to ${level}` });
  } catch (error) {
    console.error('Error setting volume:', error.message);
    res.status(500).json({ error: 'Failed to set volume for device' });
  }
}
);

app.get('/device/:deviceId/mute/:state', async (req, res) => {
  const { deviceId, state } = req.params;
  if (!['on', 'off'].includes(state.toLowerCase())) {
    return res.status(400).json({ error: 'State must be "on" or "off"' });
  }
  try {
    await client.devices.executeCommand(deviceId, {
      component: 'main',
      capability: 'mute',
      command: state.toLowerCase()
    });

    res.json({ success: true, message: `Device ${deviceId} mute set to ${state}` });
  } catch (error) {
    console.error('Error setting mute state:', error.message);
    res.status(500).json({ error: 'Failed to set mute state for device' });
  }
}
);

app.get('/device/:deviceId/channel/:channel', async (req, res) => {
  const { deviceId, channel } = req.params;
  try {
    await client.devices.executeCommand(deviceId, {
      component: 'main',
      capability: 'tvChannel',
      command: 'setChannel',
      arguments: [channel]
    });

    res.json({ success: true, message: `Device ${deviceId} channel set to ${channel}` });
  } catch (error) {
    console.error('Error setting channel:', error.message);
    res.status(500).json({ error: 'Failed to set channel for device' });
  }
}
);
app.get('/device/:deviceId/command/:command', async (req, res) => {
  const { deviceId, command } = req.params;
  try {
    await client.devices.executeCommand(deviceId, {
      component: 'main',
      capability: 'tvChannel',
      command: command
    });

    res.json({ success: true, message: `Device ${deviceId} executed command ${command}` });
  } catch (error) {
    console.error('Error executing command:', error.message);
    res.status(500).json({ error: 'Failed to execute command for device' });
  }
});
app.get('/device/all/openYoutube', async (req, res) => {
  try {
    const devices = await client.devices.list();
    const deviceIds = devices.map(device => device.deviceId);

    for (const deviceId of deviceIds) {
      await client.devices.executeCommand(deviceId,  {
  component: 'main',
  capability: 'mediaPlayback',
  command: 'launchApp',
  arguments: ['YouTube']
});
    }

    res.json({ success: true, message: 'All devices opened YouTube' });
  } catch (error) {
    console.error('Error opening YouTube on all devices:', error.message);
    res.status(500).json({ error: 'Failed to open YouTube on all devices' });
  }
});
// Start server
app.listen(port, () => {
    console.log(`Backend chạy tại http://localhost:${port}`);
});
