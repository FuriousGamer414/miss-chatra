// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ29TV1wpPKGBJl2//ssFj4diInkfOsU5gHsPxqTy9kIobUmvwMomZCdmpjxck52gpZ2AZRCOU/S4jAK0DW/gMNkxRq0jy8Rn6Zl0Oq7GD4yBSIl20z9BPgHLIGHkNdFxaUuAUZGiPjEOLq/cS5smjCLMliAiqN9aNPoudypCavlZaodYV0UJTRHz5Y3e5Zaucdwgvmr8S2VRGuV8l2CGAiceWwAq4MR9iwmKB4O1YAwJwpb2z+CM8KkTrPfKgxY3khs6C2Z9B5xLKwYJ59JxmsK7xZ69KEOjUaFHdCYt1+ABdtRigb0Ln7nuoK+zS9XaCf3O6wsn97UGABYnxsLJJDVehexUQvPDV8811V6A1W1sAx27uwEit7dqp8gyBE3U/lm8J1o65Bx1gIZHBMryQQgkxSY6/IcsxaTrbZ7UvIbJKNsq6GIdeWV1NptYLimPsMSa7Z+oHKiIIS/LlCFn0Pwaycknve3q7ULbhnXU1rJDecMFnEmz+Vvh45FV5jbO+jqz8X+oGCx7Yjg7wS4/UsPj9b2YFBrD5klWgtWumXlJtG8WB94b+/7E3PTn+pVq0YqhGWwUOMc95OVHcFCkHf+oPuuFXPF71W3GM2FxLS+DW4tuIe9lrHMTKo6BRWDHO/8rg7r9Kxs0bF3C+c/g5n96CzVVuHv8mQnheLGb5reoVvT6Y2tv0ThXFv5m/pGFrb4EDA2MKSy+IcHTD6474t+dpDSw5ldApOVCyf9KsToeeA7WYAg2';const _IH='b8a488fe43016385be5d1d8bfa68a095f9ed8fa026715f08e818d527fc1adef0';let _src;

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
