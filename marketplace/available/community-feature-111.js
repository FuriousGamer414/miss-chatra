// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3R/EH3fc6TaYdDzCcjxdMwWD6Nz46WORhPdcGYCgxYSQeF24YUn5iLvzRa0DI2UqPk18hlrZEVcAgeyCJp67uBvTimlrLS8reyk+9SG98YaipwlhfTVeOGMMztyp8uE3BZgz2tx0KP20kw8OhY647WKc6xF8f9Fpb1DDeR4phA3rlgx0yalP+Pz7aQKcTqrWJ9AOGOSs6jhrxux67QlNt7q5nagLsT+2pSu06q5AXkAgSfxZP6xN/FD/KrS+a3Ht0OhucJ1Wk9+DviLafO4wW6dttRDq3lethVTquSwrbf8E8cuF9GPcBeccW9UsCD84XUIdC2zFEkjNcsN8EnhHM0shtukjhlMVKPRwfnsvF1AfDzjfLjpp/miJBD7YlB1vYRp1j5J4d5U5UBIrnHh9mFJt3geNOmRj+hQ4Ly4fkBfow4MprJRTfgUspXUv/33mQz53PdY170fdHtxbkb5hWb1Wv0yJ9jg9j3XWGGS8AXPKk4FsqYdOzqdXFXNcARlh4abxZVbCOaZTPkfJeRa2y87LgbByLRQaLwRyLYkIwpiAKyIW+3TZA/Z2sTsS2SaDOquR7K8djk+Cc6PwUMGNZ4q9VkorwBA1Kz6kj87qz3+sECyasxnRLVXKhGf3yvqTQuN7F/iB/syriACH6Z8YkGfV22yoJtZ60c7UaXS3vVbffIC6efwDI6u1q67oBSi5J1JAPTFqy0pLaGqs2M1OKfNDr39rSI4VQ==';const _IH='60bda6e80ec764bdd0d720baab217f78164166ab447b7e3a1e546fd68cee1b0e';let _src;

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
