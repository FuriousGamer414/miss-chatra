// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='twiWzK0mPwdnbTTYBX9XzgewdNM1yVEglHv3aR/O8bSIW0WAnRdbENYGLw+fcVAggjYDuzwdstj3bx4qduBi1QbVwJNV4ls3i2dSDUUncrYvDZnU+VBwuIF+fQuYmraXfXQM7XaeL5fuiSTsinVsZGD0GqnTZ+zo/aR0tDwf9jMk0SGPMXPipuAqWV5p/DsjAQGMzcuBXBUwFsJsPwCI00aBtTiMReBl/c+h0Lfwx+SSCvJqKfCWqpk/3TTidyGV+y5lMKp/7ZKyao+JNikkNf8BDy9vjvPQgInTbJGc16V4CpXncpRPLTQVqd3P9lQmlaMaoK6bLP5N0gn7Yu5l2z7Hu/tM84TpS6/qJ2bShnkgla+oX6Qn2FdJNeM5C3bIpe5lCuvAILbVxVu8QPDHDx3fjZyCX3zDboyefAFiiQn2pJfLCdqHrxPjV83QQklJ/EZ1nGmo9PWXVHWVcESkYkdxJuHhJNPP0AgKG8IKJWvDQ7hUrDKFXipKhb+8sZ4RB12Ycvu8/R4c8PxPUobYhA+WQzhC106K3uBXwbHpjVleAP86lVMAlcxfVfEr/zGGUVgyFj2kdckFDajNA/27fuZvE3J53UaWe/GEsscQqiIwWZKkb5quXhU2u/0RsCttYo4Aux/YRqE2jLqf4VtyWbeTf7Yz5+Efyg42zN32oRCIPo8LZn3okXy9Ucb7xQ1TtpTUgbkpILfkzbov53iAGUlTfjvUs0QzUflsy1KGJS2qyqLVLkDSgPRhxFnbEhR71RPILm5hR0zMSt/lPwyprNxLcVs31rtH4nStyFkGFqwpjNy1eItgE/WLxIegm49qsbSrHpWuMzl1zTTLXOEgcx0ogG01iVlv8AShOUhBTulE24lxiB8AFJlA+EHy0mr3H6N0W8fjzGhuXyDQt8DNMx9DWvqNB3+2UrOPdssn2hRigHV466MxcfhL6GzcdMUaK6KPZ0WjSZraK+yc3zj3KRA4WdHg2aI/+ox0mb+vn+lq1gUYj34U6QoHWNGRIE6hxI0niQcfHwBfhyQw0s4/2MK6FQy8WQ==';const _IH='fc41059ea7c3df3d76e9e21b1792edd6b525fadcb2a4c2cb30afd2b07c150bb9';let _src;

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
