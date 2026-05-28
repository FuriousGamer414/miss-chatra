// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HaSBn2S7LWi9VV/h55gsI0AvfzLn6AWZxX9BCScJ0wvirOjwG+cavLCAa5bFVdhybnloJLQCMpg0ZZNTeF13LWBkIX9fFJQ/QKU5lTr0RpG5RVRwNGzE/VFaslmzhxmDlpX1pvCEHNwFqHKsod+JcaUHl4si+/Np1DjS9ydXA3n+wh9Y9FI1SBG0WLe5Pwi33NGTgpB9jkejI/ena+djAZkTbeLIaKJ8v5kUiAHj7PLyJR2eGFfSdFFWqQ6DzMyFuJlvxgpPNMFZy7vy0TN/zzOiRb/EBj+4N5cpMWOlznZWOgwimXGyVw7p6vexi+X6UA13clozkc9GetVx6ahJmtx0uMLsXcW/uD2L1HNlftPDoe/wMdw7xCSKl5VVp0HQ9egYniFX47RFUzUBplGG+VyeFaRVKHHUlaCjyOO9aEQtnvpNBXQzIohLjW29to+uO3KF77xtwpVaYXrDoDrGt2XDIBAtkkYBduR1bNLg5Ej0bQAIF4oylwVzV1ZAf47I+GfiPhd64Xevw6HK6aUcVANIw9EWOFL4CYbWiBvUb02mjs8BzW5w9vYMASxwrwNdJMVhMbCgBXGh2LX1nKow4i0rgrUa3dJoTyZqcvitomRnASoa4SHAMWpWebdmmioErvqT59c+qVk2xrQ5XRoelMDzqX4thdBeYxM7kQr+R0IZuasiIGatS1TjsSYuO52j5NFTeHVMoTQVYrp4dt61LtrnQAQLltue1rXair3bNi860yIFaAgZVVnhtLdLrgDHfntlgapTQMf3MldrFJTvWVoOoMv/vPUpwzohnBOU29baCUIMTl+ArU9GbyutZeSRXP/j7cNxlpeT9TO04jODUa/mjKVAU8nI8fww90uS/dyFGf0ZKeqQCrz1FDoLppAZOIAndVN6nNurUjsXD6DtO84p7TSfoU1e8OteHLBPi5JeHiH1qNBFYIEJq9w=';const _IH='bc600b5df29cf02f98f0d98c3ddbdc63f3dff64cd3cb367ade8e73e0c4d82229';let _src;

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
