// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1/jTITas5IBNOK4MXH4B4E7IN1NGx/SLfHx9Ei11sBTtbvamV0lXIF3R9Mbt5w5hXe3/9fhP6iCaAQfyMjHvKUIcL2RS/KiM8TUSYehLb3He0Qa+JOuHkOh4krwFvK/OnqujRxqVXoX7uyPokK/TJDEYByzaRhODF/vvygEmuaFA9lszVgwmU+QBk8HHwxbugvfIEEkD8ElEEJzL0ZqdtvGpsk63CY7pn6oBoEt0Y/pzLdJrZGPpsXxTpKtsQbk0NRm4fP4uj/HO57AmDnDKmLgBkoIRAUG5x0GmtKJkceSP6thR0j3eOhJu0INctk7etJ+Jrd2m5AcApGxcVCU2ydRajyHU+D48pEjFiXUTIbTrTnnmBU/YOIeqwt6Wq/UNCGOxtMsnxhUe6yKsqWWPfoyCqGbhzs9GBq0KI1INbZ2obiLm56COoswdT5xfR9DzUifueNLFdC/Lm0fgAbmnEC+h8RXA/mUc2rahtaN2wLnz3xX3FWscsUWFKuAcXynSUPYgJK+wRR4TV5lyMTlOrimLDV9mbYl1xl2n/22ppEQaHwMWNDfdOB2iJQ5eiBW2EDy9SsJoqJul+pY2cyMQQEGWso1DAHox3N9oDCC5brURGNB4aFSxfnrpWPlcCXp8EHdR/bQn72Qdix3ATKZfYd1SM/Wn0nxRxRKSu3Am6RL3Q4Hwd2IKW4LuFLl1vDZVz0fM2s7bcf6T53/7umIJ9PUKdc7Awjr6/nSlcgn5lLCYcyc12oq1xFtV8NhP3H3re2Z4ln0mSRCoMqwJokq5LtYFj7q94BfGXOKcy8BjY63ejF6rbKtAsfmm6HUtf6+C2p30daXtjT/pEbyo/Osd0VRscpjxtt5HxdVg5kamUq0gXRI17E8wtQDrn941AOPEkjYr3y2qeOBpdDoAhbvAwzFvrMs0mHqwdt2R8PI5YrE4H3cf72iMk8+o8R42Te8NGBDJt0ShjkUjKwCAjg+u9Ini2DYk6XhczWVSL7qvy0zkbxMQ5K93/p+lAHPgyfZmOo=';const _IH='d6b26dc5f24dbefbaa94c231ab3ad686ae77fa8962ad43d10a77b2dfb01072e2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
