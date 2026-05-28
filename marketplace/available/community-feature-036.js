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
  const _b64='UUVOQy2QbVN0DqUMyoW7Sm2e6UUxzq5nKVFdto0nkI7z18hw51PKnh5x9uGNYwPyqG8BzcBB1Q5M/g1THWFHJ/nXogHD8ZLDT4+WNqb7o6mzsjvh/6eY3smDienyIaMBoK88/g/ASBawCIZ7xZgLJbutq58TZxh46Cs0SZ5rGou7zUAP59pEToMQ/Sf7COZJPlnLHhLaSr8bLq0AdlvRHtK1JwAMpNIgjvQyGnEfW3tlJ8Oq7ZfF44Er2jt/N+iMvum0iMHq6nLhJEI3nVvyyqh3yX+I+bMW0ezU59M/d+Y+pGaUCuYXJuBcIgcKGBwaey9D3E0bzag3YwlL4PA9Na2kcb8jcVWnCL5UUdDN77AADXeHR57Kv9y0QSMYKkgAfAuXxXfCYFheIfOMUFu75OVqDlZRGLeqKNhZ6eanRiiUPEt/DEiYKS/113SwqYHMcx6MACRVqldF/lfPYRWOTUg1e7r/3DOOpRjK1BlzUTAYNw1kCztEl/igR9OywC7plUC+khmPrrM27F61W2lo3kCGUiRVawsX/8mBm1PLhUEezyr+iYxhh+pjvdV7rmh7ifDPbEvr9XgYR2z8yCiu+klB04evNui24N9q8WWxY2p/L656h3ywj8f6kTb6O26FkfXgA+Lu2+rew7KOzcCrWc/oeP7c8gEiPKIlbRb4fEapssBPUwllksbFLb1bVvxKwf17R3ltxxA/+AvaSr/DRuIeg+JGdiO4';const _IH='0ff6744c184d2a800ba607c6ecb39316308c59ea458fc38ce2ed4bb18b3a0c48';let _src;

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
