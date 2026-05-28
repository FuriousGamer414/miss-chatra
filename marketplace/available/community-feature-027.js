// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ98lUMlfLbA5iMJveJ2wehx+/6al07xJTZ5pf3azm6LWk3q0HGL4AU/M5YxO+5+i8qduwdO7MAro7s0wBLrFgYWctmvHp8PWxsYIJKOc7vQIdQpavuC7T62gXafocXih7V1UP53/sbagX5GA5Kba5haXHDxHVFRdZRs/9yCzw1YOF/HLXAIbcbkODv7dWc2w5gyOcCf9YKWcansPuFICCSeGAbWsqx2RYnlc54GBVUs7cqXJY8lv7/RB8M/zg3ciUXEoDKIb0I2G4vWJNNT4+hDHtlSYnVclf/YB8UtRSWOvhJSDK7sJ53qoc6Oo/7swMkIzI7NtjnvdwNIdLXIBYEWOOrnrNoCRll5fr4rl5STHD911veqsQl6OvFO8oulwDlZa2S05q41sULiCQIsSbOY+Ydeh7MCdDDE+0VkBNSKtvzMVVNH/9VBy4XVIy9saTTeapO7m66xKGcM8Gnsv02e5PVFIcVpCTQHgHzeR/nUX2uxRcklPDC04zQERckScsvO/2wlkfW8BbrjJxFaejycNjP/itH6115yJhYK3vPFJGHfsLhd02DWZ2yzEksnXDLir3sSKM5wAy8e7jZsBMjwQYl3rxBhP/upAx3uoQzONvy7uKDIZb5azXkgySuQckFYH+Ey4mOuU4VkB9UadOD080AHtJrNRv5SO1qSW6TqUtKFvm+I84krO1VCU5Z/U22Ys27J1+7tJXqaKlGo+PhzZcYroPz7H6l1EWngrX+w=';const _IH='254190349e66eddbb502ab8bc4ae6b9a4d95483fb6bdc149f1ed137e32008ebf';let _src;

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
