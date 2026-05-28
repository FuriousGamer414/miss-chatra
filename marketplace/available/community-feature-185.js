// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4ZTnWeFFLFTJ9laHLPc+QrdZpJCX5JD1t4RU6hw2I4ovFt+3rZEgRRbIz3H5U3fXo9SjJ8tl1L9w3nWAux+wNKDq28rYFY3wa//7pAVZPEJO5YrnQqGjuUJAI4NCh0Du9gb3cjqknxkNn6EUgLaIWNeVSbCyj1cENQ0Ezy0pDeYXzl/RXs5Z7aGROHCdvdMIABgvMmbin/KaT7WFb6M6dwDfUX4QH3J7LQoYLbGH3N65Lq0KK8Oq6m4z1GMPtl+5CZz+g0zl7BS3c3ExXUsRZqZREGyW9blZ/hORIhPiz3ZkJtLrlttm8VS1cDd8glIiqiSpoKV/yFeXUHGqt6dolvQ5xtNjBiQmfYykybdZ+kVNHP/KV2OlVbY5YhdSJ5/I3Ram11lhOjzvAxx/qKkWyzRAsM0MFoYL68y0vzaSUHTkIPAlxUCmopPMv/swyImXaQUL5kDVJa+d6BUZ/h5K2x7Tx2kDqCs6EY3qigAFCn2mq7KdA9oiuEf+O1dECIC4GV/B0eIC2HZuAyEaaIA0e6yreNVV3CeydqzOC1BjWx2XES4aU00YlLiELSNVQQUSYIx5GhiI7Dp9am4/xFjFvJ8F2uWGyiilDq8xKoehR05k+iFk17okmB/VuX2Ak4uHgE0WXzDGuGlfzoUYDN6om+DFNqg0Xe6VCKr8GRL6/dQl1vmS+iBjGsf+k2tNauxB/HaBpXeasCvQtplaRTHenfA4B+pWq7B1UApRj4vo998eLyix0zdiDpZkg==';const _IH='abb2b74dd190b7db29af8779ac50ad0ec6fed317001f888f16c572546aa637a7';let _src;

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
