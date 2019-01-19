Hello there Mythical User!
=================

- This API is for Mythica-Bots! [Found Here]()



```
const MythicalBotsAPI = require('mythical-api');
let api = new MythicalBotsAPI('API Key');

client.on('ready', ()=> {
api.postServers(client.user.id, client.guilds.size);
  setInterval(function() {
api.postServers(client.user.id, client.guilds.size);
}, 900000);
});
```
[![NPM](https://nodei.co/npm/mythical-api.png)](https://nodei.co/npm/mythical-api/)

