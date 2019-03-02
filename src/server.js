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
         };
         
         let req = await request.get(`https://mythical-bots.glitch.me/api?key=${this.token}?postServers?${ID}/${serverCount}`, ops).catch(err => {
           reject(err);
         });
          console.log("[MBL] Sent Server Count.")
         
         resolve(req.body);
         
       });
     };
  
  // setBotUser
    postUsers(ID, userCount) {
        return new Promise(async (resolve, reject) => {
         
         let ops = {
           headers: {
             'Content-Type': 'application/json'
           }
         }
         
         let req = await request.get(`https://mythical-bots.glitch.me/api?key=${this.token}?postUsers?${ID}/${userCount}`, ops).catch(err => {
           reject(err);
         })
         console.log("[MBL] Sent User Count.")
         resolve(req.body);
         
       });
     }; 
  
    };
    //Mythical.Bots
