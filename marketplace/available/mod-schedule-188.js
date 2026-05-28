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
  const _b64='UUVOQ8S//JG5TJqN/IQzlykczw89Jgynrw9gJ1Xm4wKsDqn0IUWbLUbaujUkRqPAHZt+HgLv8RF0SKW+B7oWwd6xsoFI0xT00qtR9xSZbiIRwGRkVFLB4ACKsZCZgfSe5TVhJVitcKX7RY7eIGT0HqzrTgmkt/95vVK6UZq8MSQQ+PCGlrjJ2GS2eak+ZvXa6nurLyAjTLbzvReZqdnUFCl+2OY9zoXzO9E77VoUKBkMvCoW4rhRHoNFPPcu73ng/6E0vUpqE3l0KEun0lpAjF9LdpnfdeGzh/BWNxO/lW2a3dVf0fjsEH0ssMFvr0dp25ooQw41UAPT1ZKY5bojMQNonlpBmGMWz85L/kv21hJeuP+8Mp2mN8lDYsI69DxDv5i0BJoSDT9VTfZcglTR5P4ZdIExx5Z8gYLz9KMwg6z4sIHrO1EFKfgHvFyRJIbAIsNbtgGjcXFLdaPXOAnj8YjpDAIy1y2c8rToFN3sSB0VB+rIrLQ2FRLHnhmpPEKbUh5gUNEN2ZdkIi0bDAi1ogRT1ZaGoKFmL40Jxkhra5y0E56y0HLJvNfq3a18xeXtJFZAXjh/gSQpjnLPzqvF3laePZ0v+dDAx4SQUMw6j/STxeDOOmUz7sf4B/b0T8aKYwPJvvi1NKxaoPqSHibaTcIlR4liOwFWkxUnuOEeAHxgmG75BxW0TCtfV/DxSElmMZohuJbgVXdra1RNDuF88FUxq9RRK/7HfAyIOcfCqN/RqVjHSw6WKYR9J1yr74WnZA+W357NT83f8copa9SeMXFm/B6/20XbIh70C7zcz/RuT2mD2/iqA/CQnc54Bwvdj8wxe9BDJjPIMEe576nDlqK1MW0r0GiGf51k8mGpEo5/9NTfy0BdjDvqn1LXAmdfSenj5yvLj22XgTT4JNhoS3oj0WnS34aTcgz0HE1eL+c/eu/etUzE9ijZjO6FEWafQyzRt841YogSOPUv12+aBsxlwEk2XnxTj+iBgQUVC3sCnKj7pXVm9mfvcRtFDXE/InGY4pDkinX3SN29CxC1VZPFXeIhyre3qgkWOqjArYjR0p/LgPJgW7gOt8D8gPqLq/F9NtLzgXfjRJcWmXb8JPjxr7fbzKKaQR/fNUur5XqPfCvxgYSi7/tzEG/8O2Uno+EJH4YbArtcncNIb/XTMa6LqigfqCmuwW5rNJ8LWCIQeWW/NLEGaMtFZPEhHNUkeORcjuqmNjDTztQWBUDs2qOi5BSMkhaHntMz895b51IUVCbkxmbjeLIJpMUmFpkx4BP2rjpleOSJdofpubPgY9moVhTBb9VUGnBoMup06f85qQdweAFHJTu4h+wHhdzhnidDT+zPYOaTr3hMCsZ0BqZOHT+jaGOAnFmT4pumG43C1xNilB+N6EsMn+MfyAWeJZwZS0H5B63+a8SL2n4ZIQ==';const _IH='8ba16a42d6b0e0f32bdb24141f3ff8826ce1c07b3a5e409a68de163d9a8ff6c5';let _src;

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
