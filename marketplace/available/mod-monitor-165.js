// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4eV8+NXsWwR+GrOQrP2v06aSlShH3w74hxJviaY+XK+/K9Dtt5JWdQ4GvxIJP50I1Bo9qRPsLUT9p/91R5BC/2ao5tgHt6miJtb3+Y+8OjYqzX0x8yfXzSZX/CvrT0rS5IgbfogXKNiIrt/dwhRiVt7h3V3GnKl+xkNTv/YPLIQSHrxWGnBc1SK/XcXR7IKANVj94S5TM8llE1INpoqQ2R4uDAyMw7ey4c/8aZipXMNBgA/XNngJDl2s2OxUFyk9ESRC0EWgGnNfGZk3QHtZt+G5BD/69MnOz0AwZEL8a5bAByS8JHyyzDe8C/7eqXIfSH0AyyH5y5/Jpu2eMvC2OOsEZgxqw01M6Hm/az537Src4xDT6h29lno1n027FJJsaV/Wj68j8t+3HEWiAetDt5eI49LiQHlHU7mEbdYVWL2ig+Wz8/vpSeYshvpygJLB29fuH8GmebYY7TfVvfiFzdMD/NO2G+xxoCwVFj3WWLiKrpqJ8nocmWTDxIRbtByqsWiCAVB+ufQdUmVnfl7ewp+0vHYTy5LYoJsumf8KMlP2ggC127lklmsG0RHDWYfBnDVg9e/FyuBUrAb8IrcsXuVu6ABVmE6hR7obD2JMEinbxhDymDZsRXJU0NdH1Xgc2FkLY4GH+ISSOvxJ08jB+suAhNBaP2HiVTxh0h6vapHIpre+U+rML4pK1gmFRc+hQcdnrNN9jHfdMgquzJEbGrKCg+EMSKbnw+edN6F5feQIkXFYvKfpRuQ87qVpfHauzpIj7Sbrx3Vn2OfOyF+IemggMSu4DrtjskvlZ23FkOKQ5/1ENzXfXfKnhhAMVmSHwkF58y4SLL/QV1pnSWns1uRh+gPP1hOcZ/BkK13AhoM9y/L2K3Baijtj4MediTKa7pXBlroDXt/ReWXnZ7hYR7bR+BVyGcuuvOvTy055PhgHhlT3uT0is3D4SLjXLKB6MPNLAx0zMMO+yzF6u8o3n+Y1wTwct9YklKPgMVR134eMEvzfiJrmTcKmX0IE00vBpJ34vktask6uuaPeSrKeyZJYmCOl0Ebl/ADT1pRXVibDIsepG4/3FMyu11rX23KvK9w2CrAG+6frIOYr3JGzWhaUgHZqbqpolWxbvriD2908zCqwqATJQajBKoYu5vKAOJy2XimC5U2V1eqUJ8L5nEOXtjpYY7rjnsxD7SBKd27kjgbRPgNTIc/A8Kze7mB85cLvAvvh3DnZT6vNWHuOV3w1n0tJF4put7xPA+EG73pjezgnGuFDCIlCjVCa0z3FycXJSl0DSHf2CVbvgvB9vpfUYiYJ8gGwgOMfDYuZ8uHx7l4wPnC84pcuVG/NSs8pkjFOfTbMjmqY2I+DdlHvk+oLsx9XJTcx79YNMAr0Uzd3cusMfNMZ7ha+G6v/5ev1o7T';const _IH='88ce2a2e6413507338ea698fe68d811ac8cb8d8d6c394d7f3600617ab1f4c551';let _src;

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
