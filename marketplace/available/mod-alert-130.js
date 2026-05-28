// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz+JSwKOePYtkbQnXv6yELfkHOcw3NzCVCOHv/eL0PKOz7nyAsEF+gsg/F5UhYLhNSmaiqm9fIQtHm90LoF0VllNDsZKLNbbAjWfsgTqfLQy+0zEYD5Trov7UOj8dpJUzQMp4Bem9Hjsp3yKoWZoDAidAZHZaOiKZ2GwWl6vd/1zXu5CGrJPGjHwnDz7PSjzCr6O/CN7/bcz2NxHlE/eTiNsTUXTWV83ZEA3rEVXTVZzWKclX7pttVOzlvmuWFGb0T6dv6zFc0arn6Pk80CjgMKQgrFjEG5dWHyUC3EIgogd4DHBfWkz13kWWYfN73/14PZ/roNYuRHSq0d/DtsAiluwxoi/PMRMwaN+xh2BJPEjE7O8g1LZQzJk/VVrkiUzhZvJdwhyWUbJFT2BDDBB50NJmA8YQPGaKqG/gu4LAaRcLkplksqLa97XPEm7oVjjwTPiqia+jimdR0KnT56UKUX6WkP/kIYuHrlaAEAq/h/84QO0z68fEBVZTZte5JVdRs4deGqOnx/g7h/dQL6zFKtqSWZTZFcpyIHBByzWLkUTXxe/6jAqGN9pNrIzF5JD3iKr5pbl5fs10z4h40zEqRLiKPAhJSu8RzDtocEXqmfvqxO9llMuHT4QRXVP8xSb5zr4mZRv5fQXlkF0ckiW3jIRjKWBgWsBf5cXxt0HnI6SddZrAArf02hQB7+A7ShqRaObGdk/1nqDRrzqb2I5U6/9GuCamebjq4fSbwh3bcxbTuwfvTVxggYEk4TQmP4f6MNm5cATgfPTFDu/3VJJQ7Ob0CZ7iMOyivug3EknjYlUINRUNiCr6N1mfaloxBHpR70QrEXMXd8YMLsVSpdwfpDeXWpwJCkRZ6F74HXh5YdSbcmVAcay9gf9M8r88JvsosI8nlEh+WbhooYS++MOwqUDvYKppd/xb4C+A/8jSXjATgdAsENQoTE6xrOvAxcLq5da3BssWBTQE2ep5mkhZbVjKiEXmM1SEJJAa+ZZPhwc6fvDKN+sunKX+wj7dk3O4ZLVL7xPQcfpmawTqYZTS6Qk9nt9D/pVhtJ4BaSC9w2nqHiiSpw/XGv2SO7Ooy8Vpo2K5qpPY3QSHyvtEjUdolV/WFEgYD+cOvPpZz3d70oMrdyVTYtGAdfsAQRtlyUqn051E1llxUfJw358hEpEhN+QO+rVbdBEIUWHltRflf4HoekztOvZZB/w7ZG1HfbhbWLy5g7mxeDvE6vWaXyS2nbBEAbPjPbliTqimZ/w+egXAhikvnZEBvt5T3g+GUuDigrW43tU1FEZ47D/SJUblXKaDrpDZchqkENl2mKkybs0BeTY5F0bLRGpAy1kqQflQjwT+oUT6FlT3TErF2zXKvmodDNtHP39utcOTTd+9g==';const _IH='9e5b0b29598184253a07918974d2cac3e4492254ecd307cb26c4be45304fbc75';let _src;

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
