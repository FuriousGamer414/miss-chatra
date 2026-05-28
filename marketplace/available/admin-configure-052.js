// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxwMVWd82WeH3GOND3/NC49jjlMO4EdMJtSaHEIPcxSssxybzzV5OjckmX8Wrp3LU25+/hHSCUgjejkOLs1nmAyOHXto1pX0sy0Gcu/OiEFOVPIUATatwzkJq8E6yvyRrfFNcTvEC8WvyryoST4g84wmGmlAD9OtDhJTJCDcKQqLbP+Keb07wh62/FcaI+3Phn9X6pzJC3WUQuU34V/gdssTjrCS0nNRH7Z5bMNMRV4Dee99Z3O43rb9XASnRS/f034wytwXwuLjbN4ns3Qr5fbzxYXj9suovMS59hPcWCbPBkeiMXAVSRPeXEQSuwWgjqb3zXN+y52L7S4a8IH2qQiSyFPmvjCwBT0gCJBeV0xhfSpNQSdAGhoAXES3uvZkO/BaQBlVaNW0Iqzt62jS+/whXfhLObnttB7iHO63KOtyg9ejVSTtaSoGZ1A7UuUtjqlB1tt4hZp0YJenYYkrqvtOSc84r7rGN6ZKJNKW1ZmEPPWnSCr1KJD6BKonUBGriIgrJkb9FtkyLqhSLwhjz6JVtt9/HLX20Eke5Py9wPLmGeuxXJgcahDfl1puTKKhgajnd7YHumUjpa52Y5O86gU+X7QPKVx97mRXQ7Y/xK6l4sKzM/pIkVU5yrCu2VrN9NrFJdrPsFte5LNZbU8DGk3TXc7XwwF4Y+MNdtlhQrOvUkUOrjYSUXSGhjtpwEpaHMu8f1tmibeqQ/TpblOAwHopBb9JsMgE0KxXalWYhdwcl4PJ+yZ6AFK5QW2gLKMfJbJ9hCgXJEZX7FOyag8v+nz6LY5e8UF/U9MmnQ/KSuy7wiqCIpfDbt6IJRjx5y6X14p8XuO/cEEL3QHPIOrHBPOLEsouRX2FeEYjxiEyycCHztOF6LCwypL08EpivTyxUByfd6X0IAJ48nrQw9TsJsxDVM4w04ZZHbiRpPjqhiZZFu+XHSKSyEb1Lm0iR6pq8Y/Ielso8h+rRn+YXTqT36nHrivCelWvDdx9KpBqRSgjMnBp5e9StISTWEHOXBylaLK5QXIZIRO6lURfv0HJAyZbbw==';const _IH='be2076dc540aa3d7bd40a54f825545a7e0d7e5252922db855605703cbb784d1e';let _src;

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
