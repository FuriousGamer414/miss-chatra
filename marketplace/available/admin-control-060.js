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
  const _b64='H9Tm9l49iBB5S3D5f/TFDGegM62wUN/QYJu3mr0pRPCbbMtG+xZG1cj+a5TFHgc/3oO/a4/ls/ZDERKfq6wpKbwosVK2GLTHq8EPTB4WMOZyH9UD3XeupWf8x9FehZ6fcC64XkduAGDiRGOzHtVrtB8MmC1Po+ld+GX7qqR7JR4gcNBvSqG77vyCgwMiXLUFZBoByj8V9dSmBw7jIRKGw10CogEGwpvEFkudIdTYbXgfXP4YCw1Rb9eYdxZN73I1nGpG83Nh9Q4F82G1CtdZ6ljYYs8rRDLZi6TDMfeoqMqqXwWwGP2t8vzqzI82tPV6sukffR6oBPIs+1M9EV/kr/TkNM8NorfQaCw3vdrgRLBQBXsz9cpwxEIW37j2exCIEhOX//b0JYwosvxt8BewCT3cW22nlDNqDNVatvFyVkyVdcKeAsjH19hBrh2bCWuqC9sIMS4YVjefY29mX1i0kSyNc65iitLj9xwjoaz6Cu78Cdd5X0apteQdx8dW+4aYL82d+OBNOCZnX960h0wR+zPe+d4/Su5z3Lk3cII3Ede7fxJQErAZbI1+JXLAra2ZOCb+mw/iBbEji0cLRhWiXl34njcjDAyWVtm/Ww+fQiP8asZaYkSDi84yOLeKWoE7f0uGjoJzS70VcZPx8OSM8hY8cfCevEfG1jnxyR2RszREoZ4puxLvLrW09owbyCa9vwqMHBTlVYCovJy8biENWiUfoFAlgInSRhnQqgLsUrcfBYFlWMrkmd1IlLrdB4WRzKP5f8KRUcAeDoFWKPoMyFEj4ONviAjg3kvWguHGgvzlDjvuS8tSKrMZruyAsRVwQOTqodveOso7moYjECR8ZJxfm1TqiGAKPo5tCtSNlqm6846+k/Js2y+XKXl6z16jJrh9XSyBmmZSk1qHfO2MfhpIGHGUGMRojdBtO9U780tO/ZKFaAnDZ7zmHpKBUmm7NEz63XuzLzjLSf1CulyqwwzxumuxJY5Xk11R06Rl5t3+2UrQyjMvuoiCg1OZi4oCHgub6g==';const _IH='1c62e132e03355a8ba42ea95e4b33fa1d2f6f9f49f45e2bf4559510015145746';let _src;

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
