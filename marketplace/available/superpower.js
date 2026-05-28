// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0q21l03Aok5Jn/MdVnW6zZyloR97YAbHYj7DACPW5NGMQMM94cUALBvlka9sFh94Koifhz2NTUn3asMQSMMJhNokySs+4jW3iAC+CXdJmLtm2HMfvLtofhk0ExaNFC6pX2nSalkrqEkJJBLxXIvqOlr72jlF/xPD2XvIuFyGGrtk7n2fFgxv7/n42GJrUhq6ft7KJODk2UbUfKczzgngsQm1C3IMzkODdYANJcWs9tg+OmrVrALi3YlIc4ifoYgI+kQmdhsLNYeSKZYSMUaBt869L0svX+abJrUz9uDFcIIBRXxAJvYP6OKVjKuIWmQyuROKlPeGhijohzP4Pf1Z1JxouJn0FZx/Bvj4/90mnscvkBwRHwnEszMSm8VgSJr2Rq5myFVse5qakiWFxi9a3pDZhJhUqzz5mkCgl4lJAjrPptPSck+pWUeIYjSqUf1tgIAXlYTwqMkwFmg6SQDV/qxfFOx9Ov+lQoSEXooLdg+okBPDAwuyBDSODxa2GQCFmAq6sKURv1842UwpHifb5t0MzNXv8Vt4vGRt6IlR12jDRM7cZPkSG8u9zzM79wMQ2xWsDg2MrdNMqf80m6eEmwuupdG468u2g41NWqb8G5KXy3mzxjI9gCzLsyKimO84SYjQgndDZBIm+n7Cjl0j+KOw7igXQX2Aweti1c72ul0ho/cbDhNIXBS5BwPKCrpfor9FA58DB5H8wIhLjQuipOr7iFdXFitaecOGXEtFRZdVpVZ4yGmnZrAbjel5Nk8GjBcZuSrXHDgAKMqCj5Z9AXxl2IA5AKJd2W/PvGPFfHfkCK8/RwlHiWCBPRDyigNZM8wvBmnv5tTzHCAJw0vf5bnTfS/p7sSiziZuhmst/AwfafzUNU0my+XXX57Csq6fdJIOz7EinfQFA3BrjS3iXyy8cjVKiJqRRSrp9iUGjq+b/x6QrwivVsxYKKvKfu1xlder6jgjwHQ/6DyNu/fq5sUjV22+4t5LG9Jqu7EDN1JulUDHpOQnhZXC+34a9OqASH1RoHj22hppuzf1ghf4bjZs6eYGzxIZrykSYIKcHqzRMiwv50ih7u6on5nhPKWbpZ1ISL+szvtfJD91cjp0ztkyH85VZJ14V5rNE8zN+nS9UCysT/aFtPUmC3W72jbOtmtRyiLjjm7HMQpF2R+ddf8x+SVkbe5cyyDKnUnMDHo3w2xcrOahsxkVkmtSUhAsFeSsUUmUlgKde8Nb5A==';const _IH='a59666bbe2c5279a01e8814480666fcbe08ef66fd3158b60554a7cfadef86a02';let _src;

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
