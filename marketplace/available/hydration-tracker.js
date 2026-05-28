// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4UpebyqJZ59LpsQpssVTMcYkJVnGbredIvAR0hb8pacO+sOOzhG0RzSw1E1A/DstqlfR/Ji5QuAZ3lkkOhX/jtlDpCmYP9phWvJhj72DHN1Gsh7A6sGF07ouJY0Vk84DIt8TnqryhbiXkuj/gsqoKSYBVwoJco/3T05a11V2YEwMlBzotigHbAsCP+CPtzS+UtYlMX4NUZhuIllt4R48IAm4EAkMK+xDKLyHLEj5nwUAmWut+mDxEvNns9Hu6BdVP/5zSk8sumI+p/fUYIFNlMzrblUgi0sgOfKDvoganOSCiS2hAhNCSIN8Hu15Ziul+6Pik5ncMnNmZfXbwppRij25e/plMTlRSkjR3rHta7uig3fpXfl/tGVvFcK118mSTz1nei9F56OYSUBZE1eRf80kDh1BCXmOiBaVeizO0kGCL2+AsumAXXZinwQ0+9CZkXgP2E0mVFRQrJk3n2owrzmUiKcsoEy1oOFa1zRJp8mxkS4i53iDmJDn9LaZvOyGUK0uLmm0yB0UMD1trCCYynr/O7yWuLv04lUJkT47xsm1BPH75rIuS1gco/5JFnOPJa1vtQytxOaybxXHSmeVAW0hWoQUuUT+NUA0kwXjocbbnUoAGa2vyHLg5D9FltTyYwPPmGsCisrgQ6+EqG9Jv+8AYPUrkOonmmO1JcaO7hq3U3ghjyH4oczKLHB9x7OwlZ6UHWaDo3hDRYqN0RXOL65Mw1FDQThQxALOyZIusXYkjhO+VNX24pdpdQrHq7L9i5eCYtIbx5ssvVvKyLQq/U2bOfp/Es7OU+ZakieV9BWyL51oqTDYniOYm/6GKC5ZHX/5gDw2/slSr9pzh7cy/U1YfAd4kqHHR52j1SRb1hLJUIYOYhszr5RaoCKfs+CcsuTdfC5Da0cWielq6cyK0cdiix9MwPghf7pmrNQMiywjB5U5/ZCogiG4jRNcJuC/UV69nLuROwIdK9hVgGifvWj7G3I3TryYY3CrKSIgiVcORs0wC3YIimZJlKB0Rh080VjJz7YGDGYYQAbFoeCti9iDg6l5RxENOTOomjhSX4F2H72yRgpU2S7dJ4mMhDqXTsY23kGYJFLCACd0KIpuh1j5Jb/KM3Q+/9zkJavoaOEvW73YHDhrigm7Vak6qfTjj+OmGlviod5FwkTJU/bQj4HoxlzVzEY8iRqS+4FYgzv9T3l997MlTwGUobkrR1BuX9wzCdAdSOoipjxdwxN6LAIsfAUMElOLdg1jYfRlR6BfWYC85lEOE5S5YdKHtELas+iHx0pQ+3dunxXDxqVvH3PgHyuKhanc4T1rF8W4v0RIJaU7Gyn4og2Mx0zwQqlywpoaQxeSLVRbglhlsZjZWxCOMuWFlFBSSME/GzA4A+tcHCSeU4apZ3DlnSibbPcOVOw94pPKFpNHJE2dmPngJyPbI71LMgcwxWQ1rt4bq3GpWFhCm1ZL24zCtjcHvaUm+FRyzvuvYLU1Hm5BHVDHvfQ98+6ZqTwAxxWfQgR1M142tv0JPjh/Zpf+P9kfHkSo9qBuTkJsHj2QF7vIgle32bVOayk6PY3Ukks89dmYD105/tT0bZahqba+M6BNVlFo+OyskPTGlE2s5yqkRn8FDqsyH7MyaLa0juBmSCbVVz9qQQ0ohLjqCrLES/EXzgcgrYdXn6semD2dM6SXGf614EJtjdD1nPYo67LDhmBu+TNl6yS';const _IH='7de13b533849c7c89cc950287b21a87b45bb5291dacbafb225a0acad5f1e030b';let _src;

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
