// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gnz2rpGCyLfg54bITJiUjDc2hUtm97r0KLwOkZx6NSVMBE0tHI/dkFhuXDkrcbY08tPGo9s4SihsaAKjsgfUrun7TBd0DXTlLszwkCGgvZCr4SWTCIfkSh4aiVMu9m83iFaThZCMQk7GbAVm1WH4xJDxME2SC0av4y0Fykc7iwQSdcUwV9gfyANhrQbiohj19egH3dmWOjDJcbiFqi5NYcdlHyIvBfbODXsFl0HhrT77CPbPdIIPamY6vzTtQdm7+ou4MFsXU4fGke/6tBDOv7GIOgfu3GoJBvdbXVJBYjeL5zqmWQ90IqrKTYtngEOT1RhIfSzu+tmBLlAqpejdPER+I3X5oKHIASHd7nUWS4FoYf5sE3mXCphqvgt8nFc3uX1vFEb/ClXdOwDyV0sgoYMWJn0iwddV7mbtW0ynvWplO1db0QOY9cMC2lRTr0W4TeKUVjoTNURe1pcFNaTfUsldDILnDeBCTVXVl28yYyko8U2bhGIVl5EAR2paFvyAAufiaqaT87Q8TKTfEe/c7DsugLc50dwWcnnegiCpAMgAWo/8FhaPdQe7DIdV6d462O7cTo5uw4ZzY2aosCU3nOX10US1BKqB5pd1/Illm++p78V7+i08hhXQ2fieGoRhASDDfCI1s2wNa5Pb6xxRdEs5sIdTdIVg4gGFw5ZqNuayrHTbJyQ56kdhZx+sSpvgUQrlmdXfht6Ke8xWH5M/Gb0YzvHEegDPI3IGWMZr4iIMzeAEQV5XWGjKnKtWdHt1hHlkcxJmkBuzz06WTFomclwpR3mgg3RXGfCinQQMF88+BebBM85S4rwO/g59qEc46JaPtGiYY2tEEXlMx4Nq55qgpEdfpn3BG5AMS90YQg04n762p0xlWmaVZSVHCUi3ooBETDby5F4S4f/pq4lzRBJJvIxg1ysBBiRfh12LB5ls8BLIgH3v02U8weyRK66DQUd1wRSIRHWR6rttVLAc+FWyhZ/27kFuWZLevVxpXvYQgDA+OGU4f7GJLoZwvEVZPcI//VUGqQE=';const _IH='4d4530d20e845ac146c905b290aaba1123632b6ecfc8ea4578051c7ad5b9a951';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
