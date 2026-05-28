// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ci1jTiVVuQRo4Nun+dFgj4VZlF+CKC8UcjrKtvP6nWjRXRrATJImdQ8g0vTIOl/Hu8v1CTF2K7+adA2/lpHDj1mEGGilqqvxgSVO0Sv7fD2vuXsVCE4Y64HjEdkWktJHl0vQxUcadbqQfvbybYgU220GB/e04tmbSfJ5NCbITCMZmnvISN5AZeN4othNBhVAdeNtgwW0xl4XiX4lHyWNfFoPK8f9NK5jEmpp4YO044urHmTFjlonCoFRdq/PaYxpO6SAc+5i/08YrQ8LnxQotdwnH8/TLzkqHcKDKmCmSTmBGlCCeXpnpRawEOVOlZsV5u34PwJpilucgRQH5+qoUG8vkIR5mgQAzDr53ghX+IFNzUJPieKryAvx0J97xzPiBZlNB1kxAnIA/vlJBtKC+BK7vYKtLxd7rLzdRqRKT0ulYfQFcf1f7t6OKWwapCQiMBmNZnsqYT+b03uADUcCnCwinKz85ply00Xcy1x/V/sGB/KFvDZx8DInhuWg1xLImwbzsvONfIQ2qKWa337kPqXbwV3RuAO8ztRQaKbb+TGDaFjZcM//DHhguDsFh4qgNYexbX3gG87cxhsQQ7gqLfYGb5xaaJFmBGpeEsGwaE3Nmqb1lDYOf356g+AW6Z61rHgAKHtgJOahqXX6UMk797dd8tPHR4zWRrWWesVlpcUOe0U9d9lmg32DmiBS7Rl3t5lP8e/SFA7Y/ARTDRaogAPkCZnijIhPpg==';const _IH='61743caa0cbb3513366650d849b58620d17120a2c2d463c184b13a49c9fb5908';let _src;

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
