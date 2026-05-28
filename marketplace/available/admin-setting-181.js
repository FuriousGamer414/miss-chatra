// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bPioetaIfe1NsEfsq7CUTyvb1o+MZQDlMP9bMa1nl/PwwNCQwiXLW1Bby/ekNEKUcLMvwr8tnpeGZRSj7oE1Wt+1B7DQs4U8d6FC8Ne7zaLsp9gJT68Zg3PvML3SYG9hAel8LZIHCB4uYcDVdQvqyz8Bvwq95Xa+cCVSqjmaGUmLsjJ1W9UlGMl7WM/xQIaS2QjWW2Udl9jazHFQIKRtYI6ORuLsuKXIRD0oQyGALKV7SBfoxezkNYp8LR9pUelIib+xx9my+XgOCy7Aw8m06IHqa4hYv9fZayhkjWO1LYlXkJzL2Ab3XWZquaB8+a68aRKvl4z94qrobio+xlzXs9B6AT8uGN0QG8xHApe0mQSpg+Pb4AjwMa76WYpxcfkidOfEl80BjZThSd0WlZsRc+bObxtowNZjyOPS6i7t+VknmJ1ttiDzCJFwoV1orwylhvIr5ueMZkaJfQ7s5pNCv4wNu17kS4e76Dvuyt7R1ekuUkGGMVfnORC4juThQDVUuXrNGbqqti0a8iucVX9AP85NroLpPwzGWP+0HoPnNMeeM86ZmrmvH0moyZbl/5f6sii/x3GGyHJzf+1GUuInZnUYTEJY20mS+KhZIJY9XqHZo+vrmebVzi7vKro4EV0q+c+rr7TUpyeKdpF4gj7YDg8OnQdkYqHeF9ULDc8972AODYrOovNOtAuy1anvjZKvf73wu/rMzjZk4w3jX8U5c8z1rwFrlDoRdkUxq51TDUAjvTOIWc55Ei2WcSBzxf+7PUu3dZYtmZ5IKXFjnaGoSKeUCTPgksfMDVIBEpznS0x0bwYY4NitvAFp0D25zZKgODlsqZGqsaWI0Iof9QYHA5eFF8jFt7G/oULIE2jtSuS/feE6dLdKgR+aZh1ue2LhX36Fv8v7/wD/sQK/R5SAIVhgdIjXYDg20ySZCebxQJe3IdWvwI5WRED+on4Nuz1+Vaaw3dhEzvpMeMjgJEUokQ5ms36AkUn8ockwaezeRBMZW3TfcSDnVETx2UOGku1v7n/n3Y524sc=';const _IH='a384bde0488ae1ecde430b01f4d81bd21595850898374670fdf04d10fbeb6722';let _src;

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
