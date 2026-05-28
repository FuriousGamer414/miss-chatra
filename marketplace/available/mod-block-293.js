// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DPonIQ+8whDxnb+f7+WqGm/q7iDVI+UHZ59DHEBzpCrQ8F/gq3ZXIOMXVv04fpGfomk/be0xDATKXyde1QyToz5lpm70C+3GKpOfGsAcGDH5y6QclNd8Ah4UFpkKZdEHxPGKoSuyQF13c03tTYnHf5UibJEu5HEl75BWUVZyorhpIRXBwUN3JoM4l9lD5v2w3hOH8HpLi+2SNWtz7vM4eNBe2vu2UhfMnBFHEnAhKD9sXiGfTAPzdOyW8lPXZ3u036jlWiAQAcCmLQmwn2NyV8b8F/waFZePcwWPHJCpISPEgexHpJQqphj9jVCW03nIqCu0yVHGJrX+yBHPPYph8RVty3bmWHawLAY8fxHZPh0koiJTSvY/r8dniAuv3wdLgst6z10ey4XfYLXPC0dOV6uikBLpa8mqTQ6jrXpu94ZG7PM+5/ijcMZG5qqRDNCOi/Bq7P6mtc42uLyDXH90XtVj9WtUqFGZaFMmmPc4U8S4QvAXOB4hLrk7fUD2HJ7j+b/M9IxfSxhOht65jQ2adeAG255d5sJlpOnOwGXaX75ot/ziDEUxYHc991GvtbnOQqqoGe03JmIpWGB7Htb5SVcUnfFNqgj3hegrVMdbjomRBvvdlsIbRXhWYFnZatFcgyhN7bcPeU2D0e4PoTYCEerBBpnEkIaVhstJoOwSUqImgxVXZyhu/M8bxAeV7HJKEm1XUXQrpxPInpNwy/KIMbmE4f6MpBHJ2E+EF7ZdZsRjm/QHJAfAC8l1GACn+ddMIzc0ArGTUE/I+jSDfCvrZD8PWG1e6KzX4I00TZ6vArUX10sWP56s+JgPPnk/mzstwHFQ/qmzjNXvYixW7L2+XR125ccQQknBMme3Xqv+O37J0djM1mRJIdQ1SoRB7OUAMFH5wcdpuUbYaAvQYYVItx35KaBcBifTs/88nNay/86DKi/lADUm5QBPRVDKHXpz5n6+QPCYAT/9XnLxh5s7lIwwSXaOQck7Egx+/N5jf9F+GVBto6d2VafpzClMwT5Zp0fkDcUniYMqifffhIZmZivPJKHfx62TYiTqCLIJwQw6XMKmI+nRzcyoopZxM5V68s9QegjTnDWODwAAFT0TOui8wdRQEtsJ5zBneHVdMe+q+WJv9m/drki2tjdnw6RDHWCp3+38YjHHRLFna0DYa3/NX6Fk9kVjqyoKq5ZHGi03zfG/S+zNklMLf2iAPeWykkFeDVfTReS9bUrTs82uPOSCVUzEfP9yWNv8o0BuaxHAvrPTkE68a8cnb+TE/L0a8ON1tUVp+q8nE5/lAAnthn0IDlmzAXJpDJfkdxPHZyn16fJ+BIfz978E/QzswLPGJIHk+qkayNL3ElkOrcgHLd3M9L0tW79XfLFUUml9';const _IH='954aaf7e6ed7a4bfa90a6172a257b2edaab826ffe2ccb51d27f17b8b834949a1';let _src;

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
