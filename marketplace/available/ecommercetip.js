// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tySrmLf0bxIz8ddDwLbwaiASUDcOkWDbMcajbfbJamEtIdRdnhBPGCaZDKGoJnQwzLM2WU2ZMmwJiruqw27sjMS4tzTpCcdCArk68moKVPOJVcK4pRFDLvYTeXcf0q5T0VQH26bk8yWc5eGjRxXdWEJyufK86XiM/6WMrhMU0KQ4681Ha9iH2dtGrd8ZJGHvXktDirE0QlqByZgYEGu9g55qMdpp53PqNzB4YFyhM57f5ID9V4hIFzmHh2/FxfFNI6TrnAz+UrrCxhmqey1TxPKZ+6rq0s7OKhJIADB+nGAdDUk4St3p3dLSziofXcQo7HwFYCvnydyT/KuetEu48RbBWCP12v2mBQ/xwdXFZanLnV9pF7o9tHqqtLgW7GKVQOOZNfWlPyC1gNamUWqj4+Y5C0h0MvpRFU5onPDt8KRt2IyWqoOQ+u9SgSCApTjersv+2wnPAj38r/ZPBuzx4b+YgVw9fRdWeXOCMJBo809y9FILpkjAnaKeHa/lhvTzDgYl0zAG5Ka2llVvjqCeUJToOmZj94cuz60ywYhEGo+7q7DYCRRMfTqoUyaZWQd4CGOOhXhyLeoR1toasaGbtj3KxNRxn54/FaWhn+ocplTDh5juCsRlWt6z2JdTy8JwsiLypxWACkwJFNPcCaD0HA3qooygYonjV/OpgFGQ8exVCKnEAFepdH9I6nhj2WK5ZIZ/B5d0froljSWBfIoa69fVtHw++h4gNRo39fNm6Fq4msqOg5ylj31W7kujPJ0YhML6qScrHz1n+vNQTrs2caE+ayGB2RSY4E39WpbRACxe0i4FDTto00c64806cR0mKL9DF572EQlMrQ11yb9/WdFa98G0Wz7hjDa+OwApKmkTNhv1rAu4D32Q9gAPq64SykyqeovqdHwrSb/lYybfSUWA4wkRo7iaqqd8x83jIR0pgxuPy/eMpVVAXgR+AlFcHLYACSzmrrQnepO9AL2zT1yXYUOUNsgcF6yi91g4BOXv1VChkoTUobIG4MqKtnxfCEVSDzpCbUgcwW3WB7BGU1OHsYD4UjSOYw2xPn7QjN244pn0DlTYd4TCpH5mi9Wkj5WYQJLL+u5Ro7w9gKiJqqQfbcEWNh4X5RD6SSBAAEtvjKdAsDB8AGykhugA0uhcnPR3GRpxRYEE9WiPevN1QJfHsebseQygHv/ga0zrW1YhNgsXZjrr4ANbWG92GPE+094HARgS4jY=';const _IH='9cde84d7623f0392b7841970136da015c12e908555742617316661ff6ce96e5f';let _src;

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
