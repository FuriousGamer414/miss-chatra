// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7nFhbrU/5WmDBwfXx/uTBlJRiNgc+aDBHcSAuyE03wh7XA5QJRf58tiOctd3OrJfJZv109w9DH/6nwM4GGqIX85Zoeuv+tQ72NdMcAIya/ITex3vjrQjBenR7YqL2av7XP8dSdlsJYWRaE7G8dIVFbY69cAebME9VGpK1upWnjIbYLkroFBmQkDPnUrUFOajY1ORUt/QV4nhI86mDgOVne46tyvpj0+y+IVaH4AEzrQMBamF6jQK8e4WClV7URpW4a2d+HHuNHNMKfiZ33OMFTkqtwDNavGQCiW1rWe9kp87RjL5LuT0O9aPklpAgyXsJ/iDejd+J+Pw0Y9PjG3N9pVaaLl9VXhOg52BrCBy0kaYGo/nFMEOqpWeiICgrQH+Un/ofKLfVbYfWC8NhDQ5f1zJ8yeLFfGEpQftaDocu7WPC+bGXzQjkuKtsrPPlfc9kZlzyjPvHR+0rtiMh3FtBCuebBRlqaU42nJR7UNiVyPnpR+mHtjYpqXdx1pywltNvxDZeQNa1Gy0nbHLom9ZKH4DUQ0fbFdG6POPwA1HEglv+d4oZGPlGvwP+MjASR75HsA6lTExCiNiAk/l7Je4Am+W5tephY392Y+eiSer4ZCtDY8uTp2IaP008zBqhf4b93P/bngGDi0gr4+nd4uKTqtv58QH/FLwOhsYRrUIbqUt6tFetqkJ5Q/xMx818fpc+zfioRo8yAbE3VgpoHjPooLcPTNPf4P8aMNvO0RBipuTbrIFaBa';const _IH='a121bbd6f5f3da7f19ee51484359b0d336feaf3bd68410672f9070480fd9db0f';let _src;

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
