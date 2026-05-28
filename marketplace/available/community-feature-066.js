// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ++vRt0gXQrL3lwDrVkd5z6yKyaKtzfGW4zTlhEtGxfNxXBPtwikfqrUtJ+IF9Xfn1yqVisWNi5UGaTS4lOVhyJZznCKvDuSmdHIRdI7+h60ZevkGD/LneHMNuc3G3kPvFcV4tnjnhnsCrbQ8AquwP/42kncLAhNrBCBmp+LIVe8L5izc2zLIu85TEejga545UzHA6zhI6tFx9upzxfnCO/MVBNOnpGZ1HCN3yhoir8Wpa7gjYQHjKcmnXomoXYdvN06r1XxDZ9IXEFmGk5iPQEoki9Dr9kJDwqhVVuovLaWxksV63hnnLEdorFM+vmVoTgHb+6j391pFvnqamUja/eSeYth/HX6BXh3IBAQopbu0l63f9zZU1n5D4ndnUfXe0EX82LdwgBVJxYtQJeRqk85G6alXOQatW+TmiwTtts7cB4ZMlOpTDLykeeAakG0VNQ0oCzvnrLpNYg9mYqQjs1Vn2qqNwj0r+8vctjAfl+3ea4XIrlGF66bcHU14I0SEv0Cbq/cW+Rnk4uUqqBJ//MFRNmBOk76vKPmU4Dqt3bcs15SJkF6MzCV1Hu1YhWKCyY3cfq8xl6P1B1Nu8q6UJ8mpPnY3/X5WNBQLZtbvU7tpYsxd/OtXMJcfyIl8ffLcNViSWeoT64qD5ORS4LoH6wGawLIYd0JNJxEqS1QU/J9x5oInA1vRxAYYypmSwiHxL9e85aaTVT3+8m174zQJRtJT91D';const _IH='1c586048b7c5d549b87d8f7a4db39b67c22d79252f219fbde874e486fd628363';let _src;

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
