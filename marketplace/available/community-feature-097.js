// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qHNWZvuKme/AUXOAuErcyeOznvXnTj56AaqhKT/cYmFGjUnfKSniVPfAYSe9ngO6iP8imFL1uF5oh7iprUboihCOXLO4LcsdlMO3wQeP0ZnjyEnJWE1+nNRJQZWZz6Ju+8FMTj43Vws3Z8Cholso2Wo7zWHhbeXrUGZsLo4UXo+l2mZDv8a4pw1dNeTqSmIRlo+QHWBzAkkJFi5vJeR0Nn9jp3jQ3fFF6KWkTVdYgoqV6PKjt0y1vdQceI8zDwP79+yAS3ehP45LDZPagdedBuFMfO82i6RMOoSpgFxYZVtN84c69mNdRJIo/2RLLxE2txsYomD1AANHej+2+RFEZOv3D8ZmReGi6xkbyhuBLNt8uINDI9mtdY5eMrWm+08wrTinvQMT2gcw3KFEKVdo9vDNOS5VCEdO22gsJHxdIALgSN6ADoqQk5lABiD5MgOmHUOHWVw8KS6EBVQGF6SHQ+NCNbPHZdu4IlOb3eGD7M2xC1HFuq0DMGJZDAu32LljmUXL1zJdU8F39D0NSBEKACAEprS/jn40aLO9TOG2bCyfYT5Ei/PKjvigbTwaW3TGJsuq6IwlmKtd8j51m3W/TmTJz6Jbgp9hs+DU5I/NLB2YXrbmncPr0yYpzTXv8ArPJAMG3stzy4LHmtT3jd1lVQ3dJ+AxsFIweuSwRnHz1Swx9IOPJKLuUiYvBQSbifcDVzVvtqli6IEs3kffhgDtXQ4QS+hAaeOwwqZoV9QRWw==';const _IH='a6e345ff6245b81e078e1c34498cd22d64a8d1a7b5b10d0e4427a184f107d75c';let _src;

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
