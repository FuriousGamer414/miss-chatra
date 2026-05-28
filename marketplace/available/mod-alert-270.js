// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DbQcKaisFRv/jsC2owBM0FnTMCnNeJvxkV9r0i4P6+qikeHXyR5ksER+/2ncfYahSMmMy+9fZuRG+ZMfTmSzObZSZltxIHSV4DVWkF9Her8KZ1dzRc+b4ZE9vdPH20pwSzz4psHXqJdT9hbgv4FDLdNVK6VarLpo+HqpxiY+A19Uyol9/tHOSgqBW59Pi6xko7/6c6dZUN9GUvs0SvjA9OTehWUcdV60Sm32gjlXQPAAdLMn0cV/ORJ+gJuJA2hswX59BJWQOzLW0d0AtUq2JaHF4t0tXxt2fkd1pGQ7WWLMMi4CMUQA+95SnVMku0YGnR/ZAtW5G4TIgXC/yRe1DZJ1c6GCumkbKGYaNrT0BEY5fMLIRVyR/T2PxbNrVkkDe5SGDzaJE3lcHlRheLjA4tv1WqhHgON3u9ZTemPS7GLnj1dN/qddCaiaxtFhId4FYV3P5NuoCgNhLMzRGUNaKafMjU/yQVrEC8bwgchYOL6Z7pfpGPLCV2mfWQoWqyTX/3JrrITpXZpPOUUTujhshHY1FSI9y8QfqUUC2PlO+TxzKXssSdNvhaygkOUHTE8G2ztV9dt/1xCD3cG6K3GmL18q82BOxuKJjPDQsO1P5FfTOXmoSj1wJUSIC8l+/xpvgqE+DST+PzdnEoT4qFU0fYG50r64LnIk8B4NRxoy5chBxDfME6Eh0rXKcFl6s7yfc2oCPDmqp/0VDvgKONuA/IHpC788QVMHEOWx+vd99hH5Fzl9tkSbBKTNnpHiC2w0hf34l4VF/ZixcemOiotoWYKP2A14aYiYn99fpKxUdyueMixe5gV/9Lo4b6HgNVHZoM2MGE3t2AhLQkY1zY8s1HED33yrEOjAvb8C5mH8V5OHV/6BohDG6eA/OtKrRnuNTazPLmDSDfGLHGZGX+k5ILzheiguSweTFKAJ26NKGX8Yrboz9d5DVYnWTdMsHdobkwJcSxFS1SohrT/JTjgXFvDMphYGzr2ygGByyThbPjGAzXQQGIel717gRlgDrtj/zHUz6QwjSEF93beVzvQEm0dcqHpEzeHkFGPS4Kgak7dy0T/xeZwvWyLr9gYAudKdPmgfVGcR9Uza6Aw2a3gRsR9OLc7Rx8ssfIOKZ3Kp7E5v2W7ZBoql7lV/+nvU6ls9LPnC3GhYSxJXgCUoMezVyNhKEirX58yaI3jzqChdPwW1SLTPQijcQ8/kh0QrHbGl2us5fij+UhQeJ/NMEI1V7AjEV01+xB79owZv6jjznDWKwn6/BiCGy86efeCLQNnxsrpUwNO/kfCMbG++hfH5fYx+T02VRcvrh3iaFSmm0ivhomEpRJZ64cuuF2sWyDmC0bzOWhfe411y3By/ZgPFueheYQtsNF7RY+VOORCh';const _IH='71d2f95309ad9b8b1ae34e7eb4b29ca93e5933b81aa4a398a37c226426a38995';let _src;

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
