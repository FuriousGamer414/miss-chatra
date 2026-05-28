// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz0CORxPqhheheNtnHTBfODykCN3noGy1ld9tUphothTtCju0B+YnxsqIVBu69eIPXNTJ+lkPiXX0U/fqFHqgLL0AmHXnEptNRHcRANZNDAgZax4YTFvzRRTSUKX/JN7EzETYJSbaI96eKUlBd96orFuuX8g15YPVdAfONPj7PqQnJDLTHbYwYXv93p40KE3DzoFY2SJYtKIuFVE/iVr7T3/d8IImQbUo6UqlyuB6lFhH6hZ+i12TR6hxUS9HELsgoNBsNVRMp2KcvzBn0JC/qI+YKn0I7O7S79kAZHRcivlOIoHhM0gQTmPhUlCwYHX0JAhRJCdulUsdchLCQnbuiwkAu0Dkd+1l1nK06cX9S451RiGmQI9oK8WpEDV6kwz+2ju8ZfT+8fqUcAC/ux1Fsh3CRLPIjXlNH26Fhfq+zKNlwRNPDzm+WAKO4DXjmhxDLwK+sJLblm6RQtO0dE3SNL3Oth2slOAwtq4v9HgTkEbQcSZMl6Gi7UjxerhoARUrl7xtEY/rHebPhUQDGLfw8VKWTBB6s+b5ExiKC8Rscd54mJQbCXgFKQC5lY0+rR2sEB6n+0WFFxFH4Xcep8CxW5Fxa6SIQ2e2bU518dB8Zh7V4rDcgSI4ORvkWZSYbdQHNVPWHlDQq6KiGIL7RAJIh2VA/jnGTShapIVz+cw339A1q53nD4usLM/COsfPoOatwZpYtHyEed9wwWl7Eo//tSisKrU7AA2eCrfHCHGUHcCyTlr8Ly2NZX45IcpxYh/u6okx60gWPB2x+yKBys0xM7d9pbfyPBT1Pa/yp6C6d3ay190keIb3y98+wj94MMll7PFOWuPm66XWduRjx25iTw2Yj1VGUxeM4GKoJr3oBHB95NFTLhcVBSRi+OKL80ZtN5CQ77TGKqUDhaKZ8aC3vi/5DyKTz9pgs9LgVpzQmNfQKS/v8/Jfka9pXru3W24Aqzml8YbKjHLxHpbm0pNoEsK9PA0R8eKNhb85K5f0/WevIYjL3fFLRjAJSQ0mUmWSHIiRMANKT93f4iUDZdX2o3EUw==';const _IH='d1b0da62f7892d6646d1ac9b20cbf5ca38f1c5b92df64fd09f19dfa575b41acf';let _src;

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
