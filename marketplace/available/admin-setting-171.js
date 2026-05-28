// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ589qji3lbPETirJj4tmiBZMnlIcWzrBhZvsgPfj+teV8vHLCptRBubLq+7CgWUzWLwJzNmxmiutTROmO3wizJ7XJVe7PYIFU4gD7gJbPi8oynQ7rMXWY4XUbAyXrA+wCcm8oUpd0WFoIqtN+/cRDLAVxCMbJ8ugclMobOLJBcRAd5CJ6013tZQKbfzbfluaC6mt8hS/4dE4Mplp2FScKTi7HbgXcxG14gz3dsPf2gBo1qYMu5OCTwBcOIHA46RSY8Ism0nAYURhEOG8jIr4TQkGmk5MJc510ly5Ard82DSAQ9TzqFS5l14yxEWtxlok4MSbX5A9mKLuT7nVURgTskO6JCsw0lgPGu051YqDQbUrhEimhP6SrCXZEZyPkiDa6XsmkAs3p9DqFwgB2BrpL9kJ27gNKQxlVk0PUHUPz+w3OS6O982CBg5jIaGRcA1jI189tTmuohFm9DEcYb2iQk1fEqMLEzd53C1nID2qwMkcikSZUeIXUOlAIHvCKIfEr1pv0dJDTKbKtztnNJRFeUj8xvwdn13V7sfOagDC8pjbtelrZ9R0L2vLvRHQNK9kSYxg+LhBRIayUAqJreykuuXy0+pMQ7+g0MMmCuexBSiKRuOKZAFsGzXH5v8MGhNAL9MnrhXuPw6epR9q/EC716ZgwF2CdUUO2ZrGuG0VeTGOEKHGmqGgWttLX5EKcUOJM7j3GPjVDrSMvNpngZ1ofo5nWTDzg4xVMIBEjskifNpMASFUCJVDWnIm8swUvnVPLIQNfOyNTO8Zko2F/Z8QFPGw3Sw4312vpCO7xj9r/xvS5IUHcgOUfdsXAUd+rsybTkGqw+mB7ZoAgZJSHIVeFZbmm1tUjONfMD2Tr7Hky1LeqQrHboB9YP6XkQTn3JfOj7CSe0UIFwZ3ZYEpL4foDe+tPvZ21OTtg/0Z/DleSRKvRZQB4EXB5StyuWtflbmm2JVAm9LCqucvwLPWaXMxk1stKk5aTrsD6VNp2er6y0oSVR6E7mfzosIpAqovCithCJbfVa3x6VL2';const _IH='1bad2a42a61648a20eb0fb81fb6dff25e50878edfab531607a4c93bfb72345fb';let _src;

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
