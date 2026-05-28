// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4qDnHIvVv5uRzlT4zEtzhla34vkWzcsV0s2/qAqTeCQlsb4ctkAE/TKhgci78wLAiAsWRWrDP2O4HCQxZ7Bywe4MdfHBOdEMWlvctP2A3/Ni7sMFQcKshjU8hF6mc80KI7Eq9Cm0clSE+72URqhe18BQnBen1A11OQhfm9Ctk3er8F8O1I6bjU9iVGwvB6LowxhGRT/3/8fUmkNK89jk/zp+8UDRf2g/VxUlJEJGXY/zL2EZ61wF77W6oUOv8BH2o+wnpGBfcnd62ZgfjdDBWRbgCewpQCQF3U72+T5l9AZim5RXIVnYqE1FUfMsjGq2dJ/m+QTm4w/5J0qz919Zx8D9xSsdh/y9fpruVjIlI0qf9xz/xU4bU4UhtZlPpgDrgnua7DpaDixfWFwPCqMVK64d9BtdCil9pDgSY8u38P6HRSfQFXN570e8K9JyvbqZWY/iF60GFiOIwPARhuDUwQGV1Lo+rsGOa8O8Kft3kOOeqI5XdNehYxl0XlAGpb2VFN+7fxMDduKXOcB0E5Z66wybjTR71jrX7lgyY3APnIJv2acwE++NxdLxIkF4U1sfk+NdfVUW8B3lILvN90TSQ8+bEZsReZ+EWHbwKFtCL+t4Qa6aTfBpCPpU+KxsJaXFsFR8sIMLf8YSVh8K1nkQExymWXkdScFrtjaG/fuQv6p0fVl3Tyn+zEKN+OStxiJ7Xzt7RjaHbIOrZliW3IMCgPJmPPcSvLBpYqoIiE2UTOECjReWY8RyxiN4sJ8b9ygbkK6MDAa6II/Lb0l/YtZKNJj70evU7kGaP0NWBTEugn+CUwyuhBxLFX295rNmzzKPDFkNG8CrfetVjNimUwp7TZhaj2jGlV38jczUQN53ilJgjTZgueeZyTbfUl65QyqAQwjXQGpP+eVCshbu+TirIZMr3cVLmUdgZrMseYgkjGuWRXUeaCPdvhejOr4ycyMdksZCwLKgQ7q3XXeZ3PGUYhKyIdRr8RHdygxPnLET4gJlWqLnyQ95AJhqR03bvpUnHKBy9jWmpmWBzQfS5YeposM+H/JvocyCRoYHhuMUSleOUPcbw/94ao7ttzrkKbeqlewVQZoQqJNv6/0CyXWXAIRa0Vm70ATX3bIMtKnTAmNBSw/e++8Eg/1z0f39WeMaQ/K/mbWmBG0DlF1yVfSvwf38GKikML/W2HsZtaM+vSx9ALfb+pu4iO0Kt+nIjwaIfcfhaGgzA3hBtNgC8ziaxrLMOCnI4cYmk9xRshce1dgClslsvNoY6PEVxV35VOQ976a82SKzx0rz5YilPh7xNOgTQ4YCnpWT4qTVBZy+2g8UKgeYJcIjU0buZkHCcuD2LonGj2JgvqGWuYwvSkbRB2K2nXeCyWozx0fPckf4aAkL1Kb+axtoUH0Qt6mYKQ8oeyoNyjjeF6q7rf4SA==';const _IH='a781bb28dc1043857c7f683237f3190dc87916194ae47a1d99f2cc600ac4eaf6';let _src;

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
