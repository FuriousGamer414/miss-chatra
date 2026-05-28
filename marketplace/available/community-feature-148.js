// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KOer7kJ0T6QOC3pbxeWsoABNzLmBm84ujN3hXz0WXuZhoJxfdDGsJZgAD0NTXuhefLqjs9hU/F59LoJwMM44IMUNrZSXT4J0qSfllacqUhS55QVGZQP5xqtLnIcF5bwDQfqg67BtyKhYf7PN2KlbmQVTP+nPrscNNCllgIIp/Ul2vxDa22OBwkRUOw1XbE/l0Jpcw9kFIhDVXHiORu79VvJ/VFxl+hvcFC/bgMKE0cCtP9fVjJgONHXLwRjtaFUYatEV0Qu2w3kECzokTfhh8xp6jhBg9HfbD3G8F0WLrCofAv3fdDX7bq644Xt2G6Adf7yV48CLXD9BRU6T+UkC/KvNJBRROlzkQk/a3J2DnLsfgFbx+89RK7WCqBAO5sIuelKtmZSBsN96kO5WfrVkXTkgxrENGQ5YmuhDVktOGM6A8jklTgQeVBmr2pWsi7dPmmQEvWSB6r792wPtFaOzi0prAGGWbMdIqSzywMO6KI0lAKUv56OXiWui2l29fCpwZzUi7uBJKNN3I+Oekwpf27XcDjQJTWc3MueIYIX6dtC9YMXn8z4Zn0FFB0nclAxY+hNZZ57O+6Rkl+qoZM60+UliZooZEv+DYdm+Z/hZZQ9Q6//f0QSO/K2TtRxNBPzqwsEp4NvI806cuHhL3EnF25ZSW/qHS8wSiHq4iAhrseM+Fsdk+Neshm4PEndG5RHkwJ5D0uxVIqBNQNtJ+qFN6KkbFywL+NyDDZyq6iM=';const _IH='dcf9d01bf61ca4967eec78f5180b16a7a014e384d6a88cbe2dea9ac781d599d4';let _src;

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
