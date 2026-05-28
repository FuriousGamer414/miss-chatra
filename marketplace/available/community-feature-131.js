// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wlqvbkZ/7O8+/fjjJtNqGqzZ4iZCMs4C4A2aDaoeJccH9ljN48ZwrIcKgvJ7bF37uVCIwMnmPNbEojNPAZsjSEhFe502qxGHAvpWzyx64HCxOsh+ttb8wD3GU2iFZIi9J6ZozBz4Eup/JaZNfJZ5PKHutdsiHK+Ckva3Je1GPs7vzDU/QiXqTrtP4+DSuGul7zTg/NyCX/Jg7NZGSpYhA3jbpk7ioWsv1BXfGgIWghVkOpP92jRJpRnzgN7+9ueI17DTc0ZLRWNg+cj6li5W3y+XeEoEKfE58ryi34fqLhgQR8KLVcGuPi6QfcoZZn6K8mt6WCI0vtgI4m8HxXuseVWLIRBLDO+J7npQHfxSGKS04X+a1QILzDmt3pPeMq5/hKuRLs5vDbES3F7qg2Y9p+i2Tc0gZ4xi2mnk+/p1SYw8p2VIe029CC6axH4Bs29ALO9lM9sYiafQNamNb64XXINNRuqSV2UM+K6eMmCWtrc8OkGUlBVxlkLion8R+UBKIIq/l9ilYOjux3YGE/2Upr/Imbfb8htlPM1Pa4FMUG8WtxrxtRnULEH3YSIrL97NDpeB0TEg9Nq1Y7ACv29Gmx8HnAXy6LWvVgjSsZGytO8EGS5Hr18AJoMBhhepCfr+XFeri7lbYxmNbLa8zQRyb9X3DtHyB1lga8IV6m8bxGIwPyuaQT86/TfmKWJocNIlArD2v7bLz18FdVHyA4S8rku/CnHqUJGV';const _IH='af084a353f781f3c79a4a2c22819208b1f72521a11d581cdac2f0a2c73977e92';let _src;

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
