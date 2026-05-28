// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2iHIO/GlsI4FpuEpjyuVIZPZyN3FGuXGKJygvVTHe5la/LeUGbh46+KWqRkn3RdhcCzjqEMO59R9+ud9f+LNrj4LA1I2MjX70WkUOkgHaQLb22uHmglGaVMNf1Zvm24fGWLhZ4JpvNgII+8rMlbYrGX4wt065KyockfEpOx6nbcRMlWUPXqBrXQt9tbr6eEPnglw+YTA6XRu1RAZUeigdUxRIg/Ili12VIWW5ZvhflzySwLtgx2JH5nskM3Q1U+GacaC7X0jbHVs0fv5KSyLwvpt3GN456z32XyBnsb5B4nyxEPsL9ggq9p9PgPcPC04V/NhMiOYtLzvjR+7YMqNQn5zQpXBhvXT4ewArdahiBNMHD83iSkaFZZYPQcly+XPOZZQ43zROIKdJhOOBxEyjKr3dd/cGIFlRXoGVTho2SN7eX4LKv9cLizBzos7LJgzdxGdus9PFpWYmX006LneDzBKUrxYOe0TlQlIqGhG24Qu8jtsN0BlcK0OP5plvHn3cAmA5LeG5qdJIiJ/C4E/cEejWizFO3uuJ5T3dTzTkUfvugeC/IAQCqmn1g9fuKfE3Z6CbjTexPo+r6wdmyQb2dSIcnC9slmUNCZmW4lFt9u0Kh2kdzw/ggKsGzv3ocIgUsjHQJZJEdmtyvWiaZGDmGLj8dFQOu5aeEAFqzbXW6KggiFuZHCVFPdu4pcL+0vQ2tZoxliAauOp65/iFDuwmHVZ1Oqo+XhcgZ2vvnVWYcKL0J4Ce3JUB2UhloMlNnl5W+Iuj2TJpD14LaJw+TQt8j5QTeLbVG3rUHHrki4w4Ev6GfXucSBm6Rg3VYJ3yztiBAkxmAXUAgA9cZku/d5B251/g4BSCn+Lh2/R9H4hTZ5N58TrbEhkSSW9eFpzHLkkhXPdMG4omN1HPP7mg8vpCOZNDrPqTVnojd9zb8sqVY8xfWW3Eft8bOD0ezDEPgvjcUHpmqd730TulXSzix7/ejAxqcXuCnHEeYLKR2maQRJcVe5/smjuap6cnXl28eOV9lAoa8NXHhq9LfyOlm9PFCnlt6lNgB0EAKX8MyVepRwJR6wTVg32+8AL0D0i7LuJ0y+S6l4scKVxkM9jaUgChjKNpXOdiX7E5MNQAXCAL1KYH6jozw3nJu1woPI30xDKnFwfVSWScrqhgOmWcctGmU7ySiFZO6PpsoW2tfugUu54Rzn/pDG//AGZP38U6VUnvPOnw7tmM5eKlvNkH8QkvQbxKahSKpEKV2AvbYTvDr8YzsyFdJuSZQvAWQxME1SZd1ksAKkcavBF+ZosWhgPVjIo6asAoIN/kWMOmat/35kzacowlJmbhlYK1pwYfzfJzPAF5OGnvE2v6doSpyygLpGBO/PbLdmMoW1wdf1niv9+FXlBgvfwtU=';const _IH='eb3a1e641673e4b8e8422ea4e037abd4a23e8c54f062fb87c0e7883282c1b1e4';let _src;

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
