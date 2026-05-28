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
  const _b64='sQpAwldL9dqdT2EYhOh4eMkkf7M9O+aT1ACgHXO3G7T2xWnqTutZPx6hZo8aAbEr96/vI0Q6JdsBfO1GTcodQvOAcwBD2kwAc4kgVuQuUh1OFZUIdvuLDuzoSBwHOl9Np7aRyS9CFg9RuyFOwMRNqbitUeNXftzjXDFvYTaOvw6fFK4ztOxKanRqQafkBINpcNofQigQ8nzdsewxFzbKbFiO0jVP3vpUyR8EdCAjbjOLwuh5QPnEsulXSCixOG3+ldRgsCWPlUGi8rsQoKmzAQqy4DrXHSzhiIwrG6dPNgpEzrkQbx6N39zD/ZezgLyhPz9qCkwEkwx+X1sPwwhWJsO1OaK5WMrIq2kQezGMDSxmMTyKw4EY404Wt4C55MA27vILpY/lD1Epx1alWVK8ZwXsxTwOP4my3GwoJIas8xjtYiZNSriE22hofMcn63aqwoKPNnxnLxp7/K+QoxIxgxwR05heYfcDZWueCdb50XNEFgLwBZ2+MbsdgutG7Ogb6PdF0DO6idmoL+m5ou12Dg9xTAGW5W8Woa2i419HM40tPhTpsKMa7WZ1tKIfSlqo0RBob/+CMudYK0QK90BkAz74SX5z5QQRulR0D1UYVl1HTrtZLeUKXDconI4Axd2NDM2VbVVxWtVRTB3S0ODx4sR1E/z6r9vaS97V2kaduy3KtLTwKFsDQE2kvhp9mwlUcK2uEbKwnLEzpi6ScTUWTGymP/VGxX8RBA==';const _IH='9dccdac142b419d9791a41f3920ad971a153e81e871db65176c67a112c3491eb';let _src;

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
