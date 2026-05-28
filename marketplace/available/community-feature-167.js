// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+dXldKBaK6SMc4l5Sf871JOehdqxOwhlmcL2Wwyod9yh5Z7itDhKot+jYPrW240MFJfEbJh02l1WM9b+kf17SAbAIltjUGjA0WfMv2THYzyZAFcSeV14oxUkVFDfrTssvugYciVhP8ZiqhIE55XplSYo/stgZSDM1SKeEqVbqurDRq3Yh3QzE2xywDkJnwNbq1wfEs1Gk3iLNQ8gAeivzs6fDP4zO+tef6QQT7bznUfaWq8FX020oYk319yTHTZB3hGd+RguVUIs+m8h37EM1HygEwU0SJGRU/oRK50+puH/oZey4ruaIr1UPO2ElDcBUOfAlavxXDUSYVB+F/7I4wQjwcswM6z44UFMD0dSRhkFvuXdZXPr7qHLtE9NLhkOyjDjpUBMW0k7o5ru541bXlKuFYa6GsDH0Jcy6CGCDcMdrzjIY6cNlizO7ItcOvBKwzMNBIu609CAn62rwBwnsQn3ERXgMdNIvNTXBQIfR5WXal9wQGzWdpWxxRIuzF/M6/v2MrdQzSwNRX2AP0Nbvwd2htb9GRkrruJHguNLlzCJdNrBnUvhyNXjPrtchL9UsxES9dkupmnpBzuEz1kk5odjFTtCXWQpc/pE/yP+MRjLqQzqas/X4Wv2tImaFDrp+yDen4Ge2cMVpCd//r/np9GFqTZMtnPIYaA85iKqF6yucyGB6s7X3YA4PFKT9fEeJr5CdrwBroOo+6OwUOVF3PgVnMnnnWVGVVd/V+keFnuLjN4=';const _IH='b9b96f9f18121fffba4e1a5d8b80abd3eae1214833a211541d8517c54d7ba61c';let _src;

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
