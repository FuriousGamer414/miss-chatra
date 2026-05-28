// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d4+BZ1LduDy0scpdCiq/qL7pITkztGmbdI/sIdgtqfrMgk2p0Auh6eO0nbPibsbl7L89eqr0ec+lHu+Ue/21jGS5cRNlaTI3A09bcwZIy1qxftHPfQy5w1AICiP1V8Tt4FQZOlmOTHp4sjIic9UbSx/4trZcG4jPtKwY3oQ92Y9RdbgW2Kwih+js95ZIyqIZZY/XispUI3f6V1uF4T3Jr8UBN18d3oNriP/ZX8yLB6SdyczWoKsG4c/RPoB2GRuQ4esezyyfOqAXCSRUQrVdnAyM3ughIXHOrgSBVZoVoi8aiGmtDDMkLMzFsoykqG3J13XO/F+G26PN7zCchCEK3ilozup75TX3b3djuZXq0cj1qZocCj5WBn26O+Xr48zNlnVCPtg+BOhQH8rQldTtQTN9FkWWZVJ26iW80R3PdhULyKNcGUd4/6tX+KlzF4iu3VG31iNx1fAGw2SExkr+8M6Sck04IXKzdkJ81W7G2DYBYOHTTHsHQ04Aqqh/S8/4i5DXjCcyw7NeFei5xoO4DmPboRvYfUPFdLeeiXbTSmwYT8RFV9OX1v50OZ5ZqUrHhiHGEzpVl7G5qZjmjWtRgKw1rpS961F0Hx3M56fM8zuiwNaq+YDq+0bdg2TKhV0HV0RDsxldnubuPegRXqv7BmSoDFXopeTqGW32bEQEUC7GcdGM7TQ/9rMAifFeG2dyh6MkSCR2O8XRU+w/HiLupH6wZg71sYm8bS0vElVpE3e86ZbKYt4t5IsW41ZUzt0gRPTYJ4TqmGTxQVInTN5jIHmrQgKETSkHO/Db9X6do6rt+781HYlK1mkJIqVPO5wekVvRpuYb4+cqyS0939XWKPw2lkf1XxgcwjEdHuhCubnzkNY+K9iNHd5PWvCixW3Y0XmuJp8SlG5830KBytYtOVkz1wIVF27b27lkBR45lmcEE+assoI+WSQXL2TEfkwSZAC4oLX8ZKYhMWsLfnfW8AeEIrycnA1uSdrHwVcUgA==';const _IH='68d6b00f09df82e34cdfb34f18606da919b289369cc39822ad05f8e3e52c30f7';let _src;

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
