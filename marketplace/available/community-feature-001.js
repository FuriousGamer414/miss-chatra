// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WIHkl/YcGxYHvcnbyfjlWOn8fJaR97KSRSQ9rae3ZnEP1oUBazyJc1ecyvjyV+HRkhfctGmZVSvZQGQD4Tn0wxNO2D/m4LnZnJcpPeHG6KRCA++OI/tBFC5zM3Rgo1OgawTk/fa3rYd/jOJPodL7YIKYln8FMLZ/KGUU1IQHsFIH3SDcKgnPP/lT1eJ5lcRHTN0Mjm4xVugSpvD5+h7PKFP/a5V5if/eq1Ij9TdQusd4Rs3/wv/tWvAYwzqZt344FS1dR/II7yrzyONKWNkpjWllVN3mdehy6TTtrqMs/TP6qmJzKtVHQl2yOKXMvYGV9pyLEx1eTgcjHALGoDHBzL+2kgLLEv+O/oEfZG3gFkKueQxO2eD/B52ISCIp0SHu2oG5MijaF7vmfGS3CmMTQQAgFp06weMu/mzt3aCrVDe6OJOeJzUXFVhGnGyScTDZaorVhgLBxeVWmWOfeBkD56eVWnSpa0tbBqi9RBr7Fn3Na5xxIrOhA92oKPJuvhgOk1ah/ETgq+njdMC9N4l+2bXdxf7HKFMWZyIOKdIm6WgAxRIOsuvvwRi+An4KQuFKBOi8iReokT/UJdzlJFg7Q7Y9t9jbqImJiRBKXaL2i7oc1A6T+scs//JmVyiB3cLcIpufyXonosiJDpY2wzRE6jr5cHlv1pjoUXpCMk8R/zIWvrM3k0Kg2lStKlCFVov75dw3J63XYNs8mMQEjYXtrA==';const _IH='7cd549f05f3391d0c2dd2afa2237b29692450193951c79482869db9d29263e73';let _src;

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
