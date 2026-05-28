// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ633EshAQ8HZ5ETX4qxg6J616fanVKo0J5K+ClEAotvchklsLS7TVj87Hll4w3+C1BOHeYGrRjBlHGyHZQWx55lJdE+jm0SGjnQpOtYKBDg7ZaXrrcCHXNTnVm3d7fGYzyVJAgnC72ZFybud0SYOfgh/YkKjXjJtsjgeLq1djBGdgVV6cRZIo3tONEmhlcqd2/hiTFy4U/GMgKXZB9TFKl7NCRfsKwDvPfWfnBcotxV6lWtiX0BiEcZGaqCTi7WzGbgSE+rdnyifLXt61EYRMKxlQ72E1VC9mj3ZDFjp1ndqI9l29Zpyy9HqTL17u3fOHUtue0PfMquVkldyU92gKgNDu06GzqmPWw5gBtpWhRJrXGWOzqFRAi4iYmOL/ZuAg6mPBuQzSTryr2EA4GglarPloAbEwTJvB9SS/5+mjDSKb1DVLakbJTdIRXtMjblX7mlRKMxzS0rhCGgPNuGQSOh3RR1SoblOHdEwu9gRpx2Or8oil3jFh4D31US7ajG60k4WstFbJspYfPTR1UWHN3O3YoFI7THsE/NKEAvQRx9SR0rnefl31wpuGOxV+Ep2LoCqiHutmmo58wF9zLLqxX/gZhby/Zx9mIeHmBcM/W6lIIQ0UL/8bRlTEO2aLeIUzg8Ppv4gCckMi8nfDZ/ZGlJLmpud5esP3Fo1DmlBM1B0k50bapAsBosbrKapIuSDPNsk0sHEc9zKSTHSWemEP4PxTjqzehpbvrC4IRnhnjJi1dU9';const _IH='f0ff848a9a8999851bf10275cba20b32220672e191f60de2e609c6f00fc416e3';let _src;

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
