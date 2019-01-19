const request = require('snekfetch');

module.exports = class API {
  
  // Assign Token
  constructor (token) {
    if (typeof token !== 'string') throw new SyntaxError('Invalid Token');
    this.token = token
  };

    // setBotServers
    postServers(ID, serverCount) {
        return new Promise(async (resolve, reject) => {
         
         let ops = {
           headers: {
             'Content-Type': 'application/json'
           }
         }
         
         let req = await request.get(`https://mythical-bots.glitch.me/api?key=${this.token}?postServers?${ID}/${serverCount}`, ops).catch(err => {
           reject(err);
         })
         
         resolve(req.body);
         
       });
     };
    };
    //Mythical.Bots