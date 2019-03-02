Hello there Mythical User!
=================

- This API is for Mythica-Bots! [Found Here](https://discord.gg/NmNB7CK)



```
const MythicalBotsAPI = require('mythical-api');
let api = new MythicalBotsAPI('API Key');

client.on('ready', ()=> {
api.postServers(client.user.id, client.guilds.size);
api.postUsers(client.user.id, client.users.size);
  setInterval(function() {
api.postServers(client.user.id, client.guilds.size);
api.postUsers(client.user.id, client.users.size);
}, 900000);
});
```
[![NPM](https://nodei.co/npm/mythical-api.png)](https://nodei.co/npm/mythical-api/)

