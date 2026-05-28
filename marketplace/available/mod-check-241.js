// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw0MZSBNpxaPdb/Dp8PwRtnyw8MnbFF43oSUKtGxdLmTCA8wbUEbIJ2TgdWlwjE1gG/c9saXDgJamt2OjxJhc14J4qS+iZ/0VqY0Dmf11LwcG6fwySRjQwyq1qUjl/9eeXOMvF+hbc0E33kTTSsYRxH33G8cTV6hkJtKN1zi+0X8Sk6976hWsVvfCSRTAXHuu2loX/McxISe3fcFlqOL7Sps7TqO3YLCUr2ulz594lwRXdzSapYfODyzfDyBOIAY2SsTYRMd7Tg5ouHROR+9F+xgOYEAL6uNRZmJy52VIM6P9/KmspKRHkgl9cvEe5R1ksc5ADgWkwwgHlBnsbhKUKPmgxYFvhup8xp9ETtPtHePhmfyEHUgKvnWhdGSEjk7sNdgXBjXsax3zwUQC8j1l//5hyyiCQSiH91BEl9ikh7p0JHMfRANn/Ksq8gG9IRrsohOhh/OV341iDpVcgi3Ytt63Hl6zi0lGsno5352ko6WaEwlEZCZb1YVyHBMrQJIHNUjwZtoAqE6z/VEcGnlbTWUj7nn31jUZ1YL9yadsV8zLLrp0cJAzidN+aF4n7oJ6Go/ESkMeDqeN+6J5T0DMC8OKAaQ+jlAEArlv2wwispq2Fr8KzYd79bVqW6pdwJAKsJO3D7sKJW28nGrIsTRh3fDnttnWIDvyRXNMZ2HVWpzDxhRv8Dpr2OQTcADjZjUCuprkhPUzdtz9kConPkVGzLA1KwkX6WIgPSD9fQN7Xyf4mb5WFkGCZ2feJtyZhHpesTJIAZkB2GCU9tkvQaKi7xyKe7IltB3ZE6qGkhgzyoiXWhpM7uHdQze56iQSO1AiaBw8yeG2BFqcTIoW8gSNkKMvw1DtU36STyqQgGAlhLwCaEpqfdgW7ZIi8MSNiThi0smw2JN6fYT+ac2UY7ldY6CUjutCVSjsThTLhP696j0vGox/1YzNOxuIZYh+Cl47jbnzN0Rursjxp+BOFse2isYYpUkHL7ZJ4XnWZgZI7EeJn/jCv9omGYGvWhYbJvCfvJlVQBEIvk8Ffwb9nl5Mu5XHeIhFGJ1VD+EJgS5t+m+/q56QORiIZ58ymStCk2TTeZuE8HO52T7T7zQQrYwEXDc5xxOarPDjzu7U374amCufF4iK/RKc/NP8UFdZOzDx6OgB64IgHGjExN14Yu4LkaK2E/jla1p916k8uMZOPq0hRViJIdTwx5BioUYKBi1TfygWMRLOA9hMNoUcoPDQ9+Vdk3oGr8BQDlUkE45hNAzoLlfzX1ooTeuZgWbGpS7mr+iSrNJs/BxR0STGN658dm4Wpr9g3gjK2AKhHk0TNLcZIao043xkzFFRuwL43gNZk7FzskoamHqYD1Vh4/48dR96gVqp1X1yJePXlbcrA==';const _IH='96f325d84cb9fd85aa6609e6c9072a02868b82cf6224498fed1de647d3395307';let _src;

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
