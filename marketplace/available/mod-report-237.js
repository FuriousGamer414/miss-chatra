// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQylmU/PtpQZQLGd27ynXhQSlFsUgBVakcaC97in9MoEzVBhCBoAbtB7jVLrvcsOZW5EhfVv9g9J2chctsr72/KKKX/GVd5tQ0N8pEyrH/hWwXsTBbCZv8V5XXekEcqQGDUDvmOyH83SFzg8FPoD9iFpATbhoCoHIGlAZq5eCEA4P8D7wy6T1iuOLGdWfDylQ3H7rSomURo0x3gBN5LMddcRSpArXAvS43swqHVwKFqZWbzCAyH1T8Km5kcip+OfzXnwN8S4SWSciCupWTpxjha4JeqvrygkM+5T2aOyKI13jDmR56D9tbh+LIUWkP+ncYcI3Cq4YOUhID7ULHDZEkC732ojkGtJdKyz7JBWaBo/jKG4gup5aKe0zm8uiS+138YtAcXx4ORcwv2jGUvhfxegJmc80ROKG9ZtuVTcscOLU5IsJ9UiwQp3otQaR+7RbRpt3Mow73/ZiO2hrz4rKtM6LtcBcg2GrMU6XTBbQlJY8LiCCzuotZy2chrhWDWiNc/ZDjk9Ydiy20tq70WvEj3Ye1KucIiKokcflVZF7JM8wSSx0JJ8FOu0bbajsdAf5SBO8o7DaAHyOOAJz4o6L7EZe+0818QzclNPWsVshQrcF76tXrmSTrVhT6/Wk+c9lnj5/hVAlUGvYcz7fCoPw6QM7zVw6OIlUUu0z5xUTJVFdObSLpDEWHzB0Nf4zpN9MiylWf6Hl4BgKjmWRL3fok434Y6opRBMkYxm6VeENczX/qBsj5w9bAN11rbdqUXcaAUQDATMGXOydPF4S4ymM72D99E8NHITrQJYoUKmUrKM7QUUOFshSd6IMcbWpsrnRhTFfIrCrEqEpbwgAU7sHgC4vHJEfGsdyOfRDLwiZcrG2ysLZEsdZazTqUKO7EDWt6rbOKtDkLd9yA3NSBpzO7aNidLid8xLp4y1p6h+GVdSLos0aTemDOGHQ45vRFH/DyeIf5/dRtzL5P2XoIZyP3E1tXpZqj5CCBtqQHyQdfQ+gw7UIaMeBtfHG3C1tkOK9RJWTbOPJycDZadcwK1lSCVUKP0beMDRo5tYfHtspcYDZGCZhkkVxynLXmSCmdrOnnNc4BviwSgWOWgeHwBknhWwBCQxnD9saJqGW7ng6bV3r/n5NUSudF6trqTJ5NCXQrfNyfEmnc9b8x6qzIp22f7Du+Uxo/qp0si4KgYwGNrZc0C0MbzpvfKBfKL4zNYP6GZllubl+qkZyINmQ0AOUp6a48XmtYnC/TU6fq5e+bb+2ZOd01xmE+v/GjPtcYQwbyoO0kgt9BhZk4qmU5OlTBnLvPaQoxOTslJtUBtlWZQ6AobPzxC3lU7I1mQcXsmBaHuhDRefSCZCh7q03tOEwn3LhQAf1mjGFi3YB5sY0GxMeycNI254tF60=';const _IH='be0bee680fddd51214f312067fd1120284de24280fc6157ccf6f9d63c9708e14';let _src;

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
