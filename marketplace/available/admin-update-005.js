// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5P6TvJgpDF7OABB/vux6liOKoqidsbONITN3K3s70pP+m57v4FSi7eLvN64tJkEWj//2NwP81FOqBLCJi2SL6HKE/+8Tmjc784boVEvnrQu6KBQaL+zcC/R6vcjkE/kEsecjNCN3h00NSX/wZV1CoLBYlLypEMQw6ahMFRd6rsQGVLiNGtIyz9D1n9WAvcapNIPZc8o/ec1CEtTjlDVciWHisdwWd1Q9B/UBVIanloxkVHwKQHIDqLMr1qwNbdfNwL/7oMpDLYO6s3wEbz/K7XHFPVvyFCsfrSjfPd31cG3VU6u16Imk4pwywLd8kZtYtcVqH6XrEZE1X0HKyR+2clwcmqixN8N9L3HAIfsNhgCW+lMbqUKkIgc9s90ZdHXZmr44EEWf9nK0UD2NuYT+eAKy5W1HCsAlsZ//6aVOREBgryzXRsykWUAs8Y7RYpppSoe7XwbnLLWpP2mkyC3XOxcz396LY4/7SWQtX43/GYmjCwMeVaLPgMh0TqS5OwXjWpoLdcsqD1w7Bp2G0UvtvNjPfF9pYwc0Q8rgmPxJsLpCA4re4/XN5g7n72ll7CYRJXkH/hPXcnP+eHSQOuPMMaGgD9Kv1T9I0Fc47zhfF6ZR2jSCLh4Y7YP1E9Q4ZN2jNCwgHMzCG/lioogLbNeksSo4Hx6op45pqS4onYGfPGXs2qvVy+zCqq1xzZ46BAnPp+uCi9el4qsPHxPpPSGZ8qMziURvqR8aQZxyyWF9ZhK/UDOrxV5rq1eVc1pU4MkOCa2n3dzxr8224JGD75bZsbSnkRZ4YRBoyN/X96KK786S4GvlhTqz86+ypNACMzh0gAv0m7JHtH4Jb19hKcqZziUIzdhW5k19fKMhdmyBtAgvEsCU+lI5b+MvWBTPZq3Rbckmd02BfjgY4pRVg6qk9v3g3OMMQFuYiGXLgx/yj5IvoGKReomf91ulHK7GhzsSdkwJ1S7wR9jZHJpFEiu7SHAnEH4Q3LTM6tgYc/6CA7WsnGoTvaqX/s9';const _IH='f2bec674bc7e25760c913083d7010ef8ff45087ed16537a6de72f51d6ae73330';let _src;

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
