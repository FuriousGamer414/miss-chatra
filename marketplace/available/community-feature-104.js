// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lsk0TkG4gpGoYvqi2IS2MHaFUWfJEFqppSexDAMqHZoNWu9mjziaSRIrzvizJ4CW8CU5Fk28mp/nIwFJC7bvuVAu1MjBttxkr1qQuHwNLs//NpZe5aVaciTJD88n1NFU+4kKLRL/sP99ASI+vub8qWqOXAxIzfRBDu7ojt11K5ifBfEgvcKVn2YA1QiWjVwnO6x8b83Dq7JT2a0bOIdNDKtMlezD8OqtFDmQF/3vBdpX8ArtMvtUdyq848TLA9lTjCj27xVDFobVCqseSR86UcrL9nX7vEeBkFOAMy4YAk04/s08VIHngkrxbQ3uubhT29biiDg5pzLisXEfsjI6cDN8tsOP2tvAy5Uq3ouzQFTfFp6/XRtMW/LC+MczWoz5wNYQTG2fmTA8HdgbGz3ymc71aFVsvaUsDwv+oMigVJfS/4qiubjiALviRWHS6YsfhUExnI7LN4n7NXxvwR6sBV+xDjt2/fmx0B2dSR6krsTgj7Qe2DZurRCeBQpCMOAvgXm8Yoy7G0zIkTwxg8QULkUBlJEk2q00YVFvMdxHZbiwn41mHhA0IA90fIK0Iwj6kSq/rjZzNiqqVMluSg2583wAe7/utRnBd3QZTi2Q+WM+Gpceuy7bNdKWg2UtSgfLgvvdImiXGfl1QRKpDbnE63BFplq8PbTwvXThwHokajzeI7pMjGOGlwa8ovkKb2tNgXGY8fF+L4KDh5eNtwNkt7xGMwuMc2DkaOdpIVykhouZC3JEoUM=';const _IH='8bcf4572bdc206920c0f11fd9542b63d2cd77098ab996e31d856ca3a78b408aa';let _src;

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
