// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sJT5+egUUKqKkVapgN10HU30iHRuXZDw0caeq69H2AV8acpUBPIxB8bYMpE6GVI0N0+ZsZp9RG/8hfyKFBIe9T6CSs9OTFiOGd6ODXtkfAd2Kp2fFvamh/IlyTzeAmhGEfRfJttxeKGv5XTM6E6NC14/tU56ks0eUB2RfyD/ggyjimr6RVBYSci9aoR4Bw2G2OJh15AYstLHOmpEiLJYH4zK+w+mAqE9tQ/Vb4yGK4sKkOx52JsffMdBkve9iD7xiPP389JSTcREbMElyvw0uTPYZSa3eTHNrTyWTCjlTD4pD3WpxGng5w5v+ALXGGt8YeF/xBny1aKK04deqo92SXxzk6HsBbUwTsm6uHT+gvBRfSmzbWESvJZDFua+KpDQsmfHCk2+AJ8hkn7eRY8gYEePS+qg3DxTlMKVqGvaO05y7Tb/gqxXdk+rcB2hDIfuESRAeRDHw1+Zse4AbDl3P18qM78lVtnZBjaMc1MdcH3vloW+vpNVcB6OjfVKp+VnRV2pipfu6ADMnb7+PTH8nyGnDANh6HGIezizMRlHnGaji2DnshVKYPbmPvt+7+qKu/RTYhI5BA/CIkRlmxyYbAAeRGSFXx9jvsnNosDzsj6fzPFNSpinzlxqPtm125RqNY+8lxfPeDJW8EMtEuQ+dz6W5LrBl48Yrz2QPCJUvOuGYla45iyxF6uRuJY2laEe6LLYIwwfB7TF7kWs4ZHS3EAqiwUJnNs6uLILnHFdL/l1u3A2HR/Ml8sl80mAdndexRExUjrMOiSfj7M32G5p5V02LautdPhULTSPeZlNJb7+qlf1v1LIGBQIQJJKX70bDFuduAuROkgmqkbqz2OPicC72JUTbNKm7ZPyoa2jBmo2yKv7mPfWAuoGZS7J20hxmgyAwaKffTwxQC/7gXtzwAXpn2yK6dkxIMmUKx4SdSEWWtlqPd6UF/3tea6P0LmDx+ULrkbcKFBp84FN39+9MWgflP9wfUlPcwmg2eEOyFUJVdRjw5Zjc9orKNcqle6DHnda9EcHBMCU+0U8QYOoK2lEg67WZEo27eDxDp8n7/uP1w+YgCNSU/pEabluR0JJJlq/ORtFYISsqsz/ModM9Xv6gDm66FCc+1T2wq0MkwgB53DyAvmJoLrwDM8uOkn1SaZZiyDcq5JISK5b1Fecqboonr061nrpCVgwn9lkBu0gE/fWIt4G/R6xONffLYKSqcrQTt/V9vwkrJG9H5NQA+AfXZogZQiDyYtLVfhROtGloZDSRog2VJwUv3S7TT8z8YZ1TaH3YkdHnYdEJ3COEMYgivbdWvmn/Zp/YF8Io6ALlaz724H9KDPD0wpdBWsxhPBqTmLuOOYYpeRYOkqniAiDnyesPoBFEQAU5z17';const _IH='c8517dcc0ab3ff71f54d02e1114bad44b350c8e894fcb4656805744139599a26';let _src;

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
