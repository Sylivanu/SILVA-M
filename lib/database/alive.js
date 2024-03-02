const mongoose = require('mongoose');
const Alive = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"1"},
  text: { type: String, default: `*Silva bot is online* \n\n_𝕏🫦『••SILVA™- Bᴏᴛ®-Mᴅ©••』𝕏 is alive_ \n_Cʀєαtєd вყ : Silva_\n_https://chat.whatsapp.com/BFLnaC9ULR02UJI2TbnciD_\n\n\n*_Any query wa.me/254700143167_* \n*💋🪄love you all_*` },
  get:  { type: String, default: `*Silva bot is online* \n\n_𝕏🫦『••SILVA™- Bᴏᴛ®-Mᴅ©••』𝕏 is alive_ \n_Cʀєαtєd вყ : Silva_\n_https://chat.whatsapp.com/BFLnaC9ULR02UJI2TbnciD_\n\n\n*_Any query wa.me/254700143167_* \n*💋🪄love you all_*` },
  url: { type: String, default:""},
  image: { type: Boolean, default: false },
  video: { type: Boolean, default: false }
});

const alive =mongoose.model("alive", Alive)
module.exports = { alive }

 

