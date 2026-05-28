// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yTZNq8ep32ZSWbvXRCNw0AUM9cgfnFlG+AMWcUQL3VVliW1L3XWuA3XcqeCMalV1wCvyQ3RT4Ogxkbe1t+mP6FQoCEileLIBJvMMQkWnTVMBUV8sUkPsd2mqWBLkQgSpvepg1nRed3NclcU4J+SXVxjDD2SNCE6Pg/ZXTHpEZfSFIxw9AOqsSwqz+gz6zAXn+Aml1vCfilJyCx3WxNOz5vU7Bm+H9aSUY6pp+yWKCS+rv8RrMbRUUKUd4DBMI4NxLURSdvjaIMAxJuQD/M4J56WubzpbK/7t+5yKX791ETNLWCUFAKZ4vMSfcGKjAdyYRLGKWZPjDrGy+g7aTVOt55EB0dBgiv2QWIbM9/A31jIERCw7uwMI6fFkLQVOcwauCId588e1MgJ1/ZB1OEWffXvfuqWp7lNjKyCGn4x6peywKkX3DJLvCdnwn3xZAOa60M6nsHzEbKiMeIJe1iBaHLmHxRaur+W52L6nwOpZuOEZFX2q+SfjryRkb49tIquWvTt5xI0S+ZKDMnbvWATm30Q41tQibXbpli/+n9Bx2hxH4ApUv3nTlsZY1l9eXjvoewZvB7uPQJoK9u0p01R5U9NmgA==';const _IH='d5650ea8b9a7a846571c4672528ca640da541f6c8b6714d366598dadfebae840';let _src;

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
