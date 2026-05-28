// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E2FYn59EwQFAIzDurOZaV7vqqmnK1XdLkc1drdmUAc85r+MxuKA60VZeZlOBdeTwtqws55Q+xHGqEP5teqjGANt/E2+/JIEK+1/wZm9CkLGzJcKVnc3tXu+uldePQ4AB6RVperGYamt1JSJQj3VVP/mmpDYh//v4gwROJwUPd22njtdNYZ6e2LY2K1shRRkHPGaBridhHYs91D66fNTw5CRaPDjVFX2FoqPcZt5kwDilufqaMR2r9R0qtPpMqgESUX2gFru1XfuT/enafPi/t7MK47dsGIiCnBK34t++tWGc8kPQF1pRDFmCFzRocevnkhfS1wk5TrXSf6KLOZw86hK4aG/tfO21oYUR4soY+78VZBzPhq6h5CmHV7kDgt96MsXl/8rD1SbGWy9l9ThGerIIHfYSgno2L+y62MKmMKtts/E6hGUHDrUmHep0jr7D7qTuoJczf8xn0ZxjCImopS6GVldRAyzTPlBevtirH8dznvf4jIv61uRujuoQ9HCfYcwgRl61aHiFwR2G6l1QLV6KvqSGK0r6MEEznP53nghfFfRoofl6QFjnAAWGg65lnF8OP68wgdriAa/u9+Ej/nKK6ceEdQiKpzHlCYIHMA/R0Y1MUPkTh7VjJheRPLxmx1TXFcd2COXe2s7OMt8xfTcbZ1mOj/VVDghC3unsn12CuFy7dj7NkbPDC/68T+3eplVnwq17i/L0/LVLX8H9Y6c8kmm2C+BMnthzwyTst8nJiiCMDDC0dvdUGuTfW5MRK7vrIGE9/AIkw8tHK5oXg1Ed69fAWzYYLBw/hgOI9prfOzSIZG6OXJu11UWGasBj5HlLhNzC3P/i5fqGOKgTvIAOrvVgCFN1J3spGyCB5WoopvqnSND7AsU5QmGVFdM36w0UaeKGIbMljQHGS8cVZlof9Wq/9Ltj+/2jfEUtj+p7Lz1ormTnZJn8aP2lY/ON9TaicFB/b50PaefINcmfu2lAq2EqIGgKBn20Ltt4loqCgvFHjP32XIa/aKaskITULzD/Xt1GR0gFYBWPJjwJaN6wzXtWlbmW3eqxtxAL10XX2rINwI+V/nbMYOSJAmpxHrHWV/hTF+ua6Wt4r1swsHNvsK9xc3O2j6/MQlYMI8ghxoWar91SKSlUql5vm+XgES5KRCj9k7ypToGV4lKbf4jiBe7+5eDh8Dyi/3CXN6liFzk0C9lsZbC13Unk0QVmyDCnj653NKk=';const _IH='b2a6850cc5bab3854c612b03ca5dec2e01017cd857ac977c8207182c8e367a95';let _src;

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
