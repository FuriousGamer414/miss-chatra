// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1D0EHDFqckd30HDCHvL7Heb8kcfoV0s3QBetIQwVDpsVefCyqou6s5WKrVrI+TN0P2PEdndh97I8fq4cdCEcOoz618NwCRosTvUEqD3AuJSlFEK/a0aL3nfoz8cMVQF5TUTQIXIKYX8SwV721RlAn7UX7msSA85SC9GDs0emB+p+il7vCIbInN18puV/2jPhduqD+AllwU+QTLrqXDfbWOfvFvg7OD+aD2bDsEcaos8uA2IddKkEjP20IGr2x3fnMbF7LSK0UsnQfYT9I+6Kdv/xE48PZAPL6DBk0LpKi1Pq+t8wYDxxS6QGF8hkw7fcCDhptNN/88Y9RN1L6Z6e9SBNYeCYMesfv99D8tB9+M02OOGzatxepLTL1FINCXBYG7UJfGs+bVIurGdgbLk1pqHnW2eQO3o2QrVfY5SwGmaUVTl7qrlGDbUcvMHdMf6Bu+jDHaMDYSyVqbdlo49M0tkayM38zPH7NO6I0Vgp1pIy+lhwMSrtxHEyd3US/bI2h7GOgJmZVdlmtHSW2V0KzV4YZJ1dsxKATjR86pl1BKBBbnF2AErWi9VDvCNGmcRYQc1WH3owKsN73tFmttTewdHXzOQVvKyTfOJRU+Rvksm0fyVuQODow2eBvnpMmCDzkukuJmTK5lOM/IHgl3D1N3G5ggIRVxpbUaamKrMsBHttVQEVv9scriHKkVbVlYCOhqfe7XsB8vpvz2eHcxY2Jk4gMZGaIr96P3Y6+79H4zNaIJ1QEUDcrVMYQ668BXR5FnvRvG82K9QdFvvqiG4v8TU9sP7SYlr6rp5tRN7E84/5XGIP3pyAvzdzqfn+kep61Awh9Ylp8W/92LGjSc88AZMuyFRQMjxphnQ21KZamYufH7Onicj87Lh+IaZg/ZCa6Xvb0dbGPx5syYpZRc4zGBfFV5jHfVDef6K2w2pZFu51UWMfYAISu51135Mc/Ex5h60rK+0WE+JqKlhhYl4/XxegOvYjzmfUwsg5rnxXXUOAfXZEGhNn6WesQr22DMcYJq/Emhdt8/OgNG0kAgzIODKqErN1fDc3C7RWkOxCa0Ql6I2u+BPb3JRyZuQoMicIWIqtvt2fegEdLuwfsxP3BbcmWdq+bAHDtR/RHF/vVZUkOSjj8DmyMgYk6Y8DBI0lnRDrYpA6r6q5Gt4QcpiLdIYUyOIv+7B2Dj8zoNRcA8Eevm4gMwi2QhYIM9pvwWxjstmw';const _IH='f42f5bbe8cbb3cc48e110de6aa6d1fe54bd7ac1b9ce234fe8c1b52755cf5852b';let _src;

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
