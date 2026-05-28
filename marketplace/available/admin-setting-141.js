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
  const _b64='i1ikd5sQg1Q+TBy9k3s0ZAP2s/Gbj9V/uXVCtfndL2h+z4sqoW344PSDhNbIXYzmlYhRYBj++tBpkLYFhFBV3BAHNQ9fZU10aktqY2hxgQ3S8jozPSWz9ApgEyeuCTCKZS9Qmc91dUKgjUCx5/Tg8G5Pa+TVNzAxZGP63eLU8TD9jKyx06QNCa1kMeuQUzppm6JA0tS3bcWEg3cUVKOoOwaSkuH3+loBnc3+Fnx+eLoTlMdzTmIJT/nzwuFtUWYOxe2F8osNnEn429RCqM3wqnSCAZ6aKlGi4MVmS/91Jk+4LsyqMSfMTHQEjPrDrn1r2hyuTXwP5pBIw0RBC5vMHwIaOYDSDgkpJP/OpsajpVMNlKqjvPtmcb1gBkXQFdaHTJ3GegCld2lui3NJCcjNZM805hUBVexVNLNnN78zqgR7rKM8UlX6hwsOzJtPJAs3HqtItVTNi/rPg+U8HvMK++fqt+wqvkOXlntiM+00+hFSVrtHdDdmLuztFAL6e4JfsGCb7GRscQPIqFxY90bzI9j5/JTVASOZD7OzIpAb6w4csIdy86RVCQJ6mY6vsVnvsuABR11wx0xwbR0KJRYbK22GW3YJik/KessMZ7Ln8UXEerocHF6axfG7kxwS9ojsYiuLykROjoTj+Q6SUO3nPV54FC6Rd/18AHe6Pily0xtk9yPo9YYu43HQMIIHz62ebWcSBUVEn1aCdQPBGaTiqqpd/45uOGYfYIa4KIdm4EHF+7fb7ahW5PvpTy3RfnZiRKZ43B59V3vdJMLxsc2VDjNH1e/wBthJdo6vOokR4LCUteXutkDIRlosRBhNAHEPqCF8wa8+WyIUC3X4c+M1dUuNwcQZMWET53t9e+3XkGK77Of72OEu3Yr8urQitU4egsvkSKEHF2I8sYQ2eILDdYqkPXQ1AzZxrgw8kZllG1rpGXb0d0RpbVaX/vtcVcZ+BD3E6w3QqC2aAIfZ8GxvYTcFR0NmV3JmDOsYFKzmOkFGDmxLv1X9+05291by0BMV+wIxkE6rCQg=';const _IH='4f3c5e69ff0b84311c075d93bcb0dd7de178b55564abf0cf48d45bd57136ddeb';let _src;

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
