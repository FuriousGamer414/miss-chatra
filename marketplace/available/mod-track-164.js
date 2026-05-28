// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9zr7ImdrPtkmNifGLz//iskcN5ihIZ6n6BE19E8NNrOIiqbS6fhRc62VB4T8hYWIqA/yhPnqBe1x4LCoIYgRFr5n+7gdUgdJLMgAEXdoSyfMb+ONeS9ubvjuxkOQSnoZ7s69dC6wNIpxWKo/r+EtDF5qaF648OXgxBztA54esByB6qHcTpGwFj9hJepl7wFoUOD3jp1zFJfErNvbHwl/OOvM4qPXECvfhoL6CvwYYp8gn6Z3+KNlBJgpmBAKwoqEHTnmcfPH9lAIu69k7yGGIBY8zYgnnPdAX+HAIzkVM2YofwrhSp3U60ZQGr0hMlKfRTDpCDj40SOcHXTf1lY6EcaKWqWz6dr863ryLlv8YesgtN+b2SPl++bLc3VHxBHJU+9zxVEBrXGsX06BZoiR7FEa5rcfZwgQAe4ranE0EorwQAtF1kgK1n8r9qbHm9WBSqDPc0kFHQ0qycdsqzseTmjEUtTsxEh1foU4yajmuuyZLLpCInRSvgFKxy5vf01INF2FUx2VgMTDugEhEx6jtkgEdzL1cNSf0TNyI6kbo+2kvY3yWe/8VIYmImq+a5ybRRi7tWml6N3BJJR8jz20PUXH0/G6573po43T9jwaUzaHUEPub0SUIHfFy8Iw1JjxjCHL9U9fPmRFm+0aLnmewcm90SiD3TDWAkX01bGNu2uwmrwHy4Hl6R2VtrhrEBLq/FthOux3Xm740wJb2z9uggxSy2vUl4kTP0GzB41N7BfepG2W+Vk7MkcoZhQjmrLD8iILIP1n3mOxpecZ+7U8mFPyQI6CXd0/tD05ryeXD/Xx4qTm/es51PLRximf+JYppfixSDpbahEwKCbw6yVWU8MOGGC1exu9Zx0O5MuaFjTteVapf6VjqwwOZIvp2nOfeVOhA9Bj1l9hhbygTVoEWRfe13zJAKTVBlEug6r90YAxRV5gcxjrlZoA8eTaWy8dphlbAZwfQG4WvJUnrOhXQMJ2P8+33n0recBevZNjPJrspigepxjHIQGeeUYtQ11DtN61JIVcz5CWzdYlRw/FLVnQiHDKcogZd8ZLTqKViJ+WmoaiSg7pUZ9lt1rBMfJNDXGT1ID97gE/HPdUN5HCHRSHw5Yu1DnR5zlUNzr4z7m/pzVanCx4nBVF8/xHibvnBpVltt3FAsOtFV75EgfV+uA8pGYZBDaFx4206zEDEm/5UImmEdvplSssoNgPxvh0iHdyxQwlUNAXC4EcV77xZBDubv/83R1OXYWuxdUZKkcYc9nwCQgAMItEkbFh5IkdvrTdSiVCQCCKwNCEIT2tqzdqCpB9m2PH9/ff1kvYZJh6ENU7uC67P4eEv6Jm4D0NN40GPkMxTokrtV+mZrr8earMq6YJfJk8xe3JAZdvA==';const _IH='dbdcaff0a3d59fb76af1d83ba7842d8b0b398aac95a282c6892f79a038486539';let _src;

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
