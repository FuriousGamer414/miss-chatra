// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3fLQcMOqfUvrzGBLjxWS02Q9c6Ta8EDQxtTvllsYuaRh6ZVkwyA65+8qBi+T5ubaiscWTEfN7eFY21aNLE2+0zo7MXwHyOyaR0PJp00z/G63/8Zey+jW0KePbhk2EWwzvTi4yQytMOrSrqyhiCJwMP0jCe+nOEBBrMUUF/ckXyNo7jC0MV40kJ8nhupv5E74khJ+zVkZ3TJcGbtLLwjAm5GGVEFba4uLoqVyw2ZwLVjknrN5247GzIKr1waH5zjxB1nXD7hyXyJCmfV5L0VwWoNzvTj+6yPl5gObF5SY2/N/Pb7na6jIkg2VwBxCP3tnNeMJy7PvvJMbajFCeAnxcVPs23SCurZBhv8uGWdwuY68I8yFbBA8Aebwme1/lucXeYG4YRQaHIeY3i1/AXZ3ZDWi+Gu2QdJ5/tr977ALmLGwYiQJXiPKSXLIRNDvgFmCRhtWZwJyVwoqnxjFNUU7Tb5ogYwCZLzbPKn9Cpn79cawWj5s2Wzl189QPVCG9CqW1Sw0FiljZWcF0X/Hv5adlNg2Z9ic3ceuXBh8KFAwIUuVQhHuLNf72V1UEiPTnrE1kaC9jCiRV81/N8S3VNesUKnIeqR7umxPnIZ';const _IH='82a2926cc0558118afe6de1066ed9f03b72e14952724cd57e55d6a236c549a65';let _src;

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
