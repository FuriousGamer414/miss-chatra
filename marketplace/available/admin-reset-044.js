// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4b/xv9J3uTg1IL7/V4xVqwBjMZCxhU1JDzU8SaEnhk0dWpShVlKUr4Dk2idCQBI+IaCIq+ogARAlsPtngGcaUaqvI5pbcd3FyFvhf1o+uor/5xivhS5ycxDHZKo8Spwh7Ffq0sD09wthypLXh1iGp1kVsQ3H5nJhGP57EL5QK+V7/k8xc4dETOEhy4QGQqvJxf67QUUbI7bufbxntVWeFbkLW39dkO6pJBcnfjuWIZJ9xanyKqfEQZ2r2z5Qmk+V6qRzdchgR645dq6+8JK+Un+HapWDANheBhX8ZKg+E7KEGHogyPb0VUd+wdVyHxNYqpqxD0edegtA3ZUghOPlKLDA5i+NCO4Pptp8WltRiXa9VfHa1HqKDK20fGuhJ8eIG1z2mNIAb4uRynawf1TpxSvUD+k6xtlNprneb5F4u6bXlKL2n60hMGZrxnF81iSnJS2G7iX8vPDTDPmBHr3snSuO87o3JvCA0DFedRP4rAiEpreULH8ox7N81f+xMtbHPXb/WKYMEyRAcYnA/g2tP0O4E+TvCyBmduETMo5WfuXLaj6+vcytn+AZK3YTt/1CEVvdrwvtvuEz5kPEWHFTYc/CJUAbl/iM9sI811y+pF2DPLWyfJujfD2yn6JtIAkZfb6KGiEboZFCSUcm9hhsrlu9dtskfxmjt6LtatRas1CbGpD4G7OD5io0o1v+/blH4DZ5DpgH7aIQ96bcRJ1pMnqI+Ua4GK1aXDab0OcRDLBaVZnEQPSUqu4UofrdfOzU6Znorav3tGW5tVe61Ha3v5iJDhj727nk+Em3UAnd9FPyiGkotWnH4U/VJMT3qvMEWkGkoJoq+ckuKTBjgZhc5YRbO3p1YeYXYR39QOVVHWMrfOaz4LuNNRD//zJ2npZnGj4X6GYBVZL9Cfg5MW6DGXbsSCwYbaxk985usOqed89Y9Xgunen61y5cDNfgAJjoidgLqzsfaAPcUGoPcd5ALgHPF/a6+W0BqyeGgYPIm7A3iZ7jmp2';const _IH='a1238c4fbcd73d885bbd4ae9a008ca1463b5d455ba071d1f3a89262339c18c9d';let _src;

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
