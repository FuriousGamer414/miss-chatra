// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M3l4T/c8m0epYR3r/Q2meWKJSOcDGuCz+FYVTpccvULgEGRd7a0XS4iMSWgmTaxQMV1D+jgO7ldcgvVVJr3qj2xwX4B2CQSgBsO9kxp9f4Sn8pC1KW4EfpT8uMBQugjmxXH32UIHIiDRh1GULX3qWoHM2tsG3SL2xUfACRqKUEQ5CFGppkylwq43G4Y2/Jd/gktcg4gEYVEuOoLWxltje1GW6Z/+9YE40OCAW3eVBcVVPSGhrYVqT/SdmZCTymAvHa54yRj6Lebzq7ErLogAlNFOhx1dp6djbK5LCYw+72F8YLFYP33Wl8eYU4GW+QFpYugWVYZ+iErCqQVOcO5VQE+Ola9NHbjdtwaxHYdmZ6lgPnP2Q2vx+43o/8bAU/sfAXp0ONdeK3sbFaMTFmchmcZjA9OyWBRgfTXeCwc4ev5JodwITG6iRxChgp0DbOPqA6rNaRxvhEOdc6y4fkJMV0eUZyXn0IYnr2Fn/8KjrRCC/Y54BHmXnnwnezqYuTQm78UnynhSoHfWSHt8ZQ+egwspgzibkUGAEpx8/hJ1HAL/H0VWSK0tIiYXAYhTSz0/VnJgjC1ZkJcn9apg0eXZkbeQtAGmasRi4brbMfrcJ/st7gezz9JA08rsX7vrZAa/uM9Mdt481yWt+eSJ76RD/j9ao1RxX67pHvZPN3p8vFiqsnIpVAYf0EYWFVuMHdQ7Q5eEaLgWEX2WT6SImFLJGc7aydrUaSyBxYH4EwNRWZoYzVInId7UlqtKXo6yXtMtzA9HymCxKwCjAlm0GE4hR2XBBG/ny8Qded86kfalHU/Q/6wsPskwJhpJhBwxseNtv/S+KECO3SunSJyHlg7dPshoo1WI9cUvqsrI2jV+mYR4oHMrpdH9FImt+nJWtjoROSApqXmSEKFQuQQAwT9+3WmvkhHvC8IsRqCxSSFUltCEPDRqAeORhc6BV2SNk0WmSjooM3yauwGTZAFWDP6gvolxY/QOS7MaTqKvou8Ez7zPIFZOqZvPyjQuaboEycjvKbOWkS7Lrnxz7q5fTI81Vc34TYPVQfLDtZGYu16zulDJT0V5hnABALIDtHO4ePc4x3VqGvy1RxwemtwwqaGigl8SrI7gpftLZKDD4HnimACjWfpoglfiZjg9uj08XGrksKC34+0Bof4HbRJlBvJupZhZ3oLSoR6iGFdcMhf93rUfyUhyyh0cCPsFfmeWlebYly6M2Q==';const _IH='063d5c20dd011976a8ba46673d3962e6d215c0c158ea351369637410191f4f92';let _src;

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
