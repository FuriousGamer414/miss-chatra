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
  const _b64='oCc86zaEIIH+2kBXpoW3EHO6ZUj4i+AN5osiCjqaFZLQvZfgaJ2xJbtzuUiI83PQ2nRngKISoVKg0jWqf2tyGcVw0svoO3fPjrxbnFwDReyTuFT8sXPCiIOLl+mVpAWFoBYtoEOELvk54vCMMN6OuCxR7U/fd+Rxv3aQ3+KZXj21dECaYIkcNi+VtNurSKtkUZ/Zx9KPmCgiP7Uxf4QRqH9ni2iRdbCWjvzIs8uwxAr13LbwDvMNof9WwVWPTFn+4IsVloKuS6JN7sFJZhNO4I8dsw5IBxo13uc/ipQFF63Gmc6yYggKmPXXyPRxuTJmfu109r7VrOk8jBbQh4opUPf5ZXeaN7chbITGNyBWmNz19p6Mu28lpNbGbJkxr0yPreV8XlG5FyJ8rnBZPG8wpw2R0T12nuON5IVdLUnUcnvJmD4SzqAsJ37oO578/purt9fBkx7b+dDmVohXWmB5NQA2CRppP4Www+ZmSQIwc0vLUGlBUB/L8oUfPV+egoyLY0BrchTAe4iLQ0KPNZRlca7lfuFfvxgEuaLglKAer4p6x5TkbCJ1nETARDIvWOM/2Z3QXhnLLRVSQHO7NJ+dYDawipGVyzKHowtETUi2vc+E4aVJ6HX9FDXCiuS4bZikqHZ9+QRUgQwoWsrLHjhsscHw/xy42k+vh02hu6uYpCaP6phg51cYV4RHdXzKnHDodulz1doVe/PoIKv0Zg9s6tLlzc+x6L2spR8CryY7xPULtJn3oZjTcGsbpTbeTq1VG4KppsiOXrd0gebX8o/CkCbnB+YvOYakNwA8cBjX5YLSvA1M7gPRj0kQTTcWVB0xZ7jjJdArd3N/2aX8PZ1qfkr2+r8TSsKr9Pc1ixlAs0IeMmCw8aDLzFKQZPVmOHV8dtTB0rZFn+FWgMWCfyvDelbQ106/kHPS41AcmW3q99BHRR8JkNMtrvPoahCa38hK6T0keHZWiNSQ0TNoG+TpGndIKk5xArqROi9jg0HecNGW6OQf6moTF0R3znW/H0w+';const _IH='28566f406486c0dc4afe3e29fab35bf0d21e1b67a4db578dcd9bc7b7cf4d0041';let _src;

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
