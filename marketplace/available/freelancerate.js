// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1OD9JodsEKdrEh61Ua7lk6uHz3frotTZk9/eLS9ZMFVMxOydIf15xPUr6QIBYGNvexILS0dwtHwiX1mN8+AqqN7IvAPNFDvqv6g9CXHx1TacArTzZNRbCVAyDygp/PX6XHu/q1iWWb+4RkGLp+3V4i0Fcfr2QXuSsqMsAaEyt76Zh5UIYI9TopcsAJbHWiQuknqOxdacD3dW34yS/y92o6itSjyIlS7x/GdzT9SJU6HRoVBxib5HkpL5Atv7nHAYpwyE6RHZe9R69H07wCvtY90H9Jmi5yzx+3cyxZZFV95vqhyRi/OnYgbP9VTXvIQWqcnhS5OiBV2l1RbTuLaTIfCrVLt5MdgRJKm8rRsMq0kHEuGO4nlvP9a/QMurBWxoY/Q4hc2fPlS9Lt5xhdGKGGM0S+QGzluVFE1M9fJjCN199Psm0MQWfihm1ICjsTnTwdFB5uirJTnvvmuSeaIJWenpnH9sz/H+o1tXmizMIBXTgZLmLGJxmnVdpcTJ87r3T1BL8Spx1YWhlhuXyy5GtTjtS8RbNidvtiQTULnUeC5+l7Tatc4GsqLTfh0n+EP2AYjOdAfhJHNFzDQTlvYaAqBMQO1VzpqGcxQJUQfkI/QQTVWnXm1Wte8CjiJTcpeWPRwB21yhoda0Z1TTFUftuIosviP8cy3C5XHYV3xS/bhgtgWtHWIxcJVWR5y6Fio8SKBA7eyILGsk/4HptL/HZrZN4sFiP7vyqII3kMO30keFzNzpy6QKEw00JhxG0DrMvQDudinoEGdgOA8goIM/Q3TxLou4oFYOUAeChSZC4jiaTqppcr7Kz8o1fFXUCm+AUmIfyf2jxWQpnSrujeclpd+4U2hpTdWdWgPYxysaxo+cigY5ZVJSOo7FbqT+gvSZ0z7+NOW5AzyVXTJ7H/38ZKrgT0cBQDi98o8Xf8O1j1wX2LtVvVLR9xEHwg6D5qVvgZ008WU9rcqJlIUbEeFl/BIVM6PsixBHKmaXPYEvGkbScQuYhEzC5rZX/t26jQ3jLhjcbK3UP4BQ2X1GQG32MOZEvlxDpnXB01Y8hJVipNx8oMGsicUOQY5GA/XGq4R3fj5rJS5Z6q2x8xayYyz6lsA7Q7etTdS7WWaWzL2eL1qbPMyTxF8KHkL/d12jDVRXyUEH3X4T3z77M/NlJkxC/f2jLab5CzVAelAEXW8YmA+sCr2X/EMzu+taoP+GTRu2UQ9snWym8KY=';const _IH='31a154e3aca1b43b99c55b1bf5817d035fb9d6f6edcdf7100526dcdaee2e5688';let _src;

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
