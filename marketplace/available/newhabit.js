// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2HMYAxgT7jp3TeumjgkrxRyOMP6By828pfszhBT5G4SipCi3rz+TdWyQUN1joIHa2JZET2OqgznCKPvtDxgKlX8iQG4B0J/s3+J5LL2/dqZd4AE9OYBdKxM/kVGz12IItou/m2y9aazKO8Phuuu7Ecn4QZyAR7h/X7UExXcYnMCgOhijy5QW/oAHyEmwptl0B/1kycsSJD4vuEMrB4lsleDFPTEymHNRGQ//tp3+PITx4rnREl7aXsOGt/7otsMecxDyoBhWYV0RqErB3iEQ12/vnQ14dzqnmbIF1y1bZ6WPDGJfZRiTkonRCWpC6Dq+hk+iAtseJ5UEfcJ5DP3yx2Vdm4u6H79baQV4g/59jA6tsbX+3TX+gkXsRHgObH4HmglKWKedr6z3ZS58hmGdcf2w2tKgJfH3sYeuy/f0/LO0oo98t+Lup4Vo+lYEsYJYJCE8LC/eeK50uWAUdmuO1RJJYDWgcUPGMUjxYJ3GoN3L34PGp8bsGMwlt9JqR87tuvMVAfjrLr2A95rJuVngS3qYXWtBaADCGpOGK3ZuQB0v5LQlBQ5krxreXbVXgrcDM/hxyJ+zJpOknaQ4SbUI9P5K2rIiamhXqOmWAKmi1bKXYDJdSoDeX3TyVy+DVNgU2738T4TV4OBwfy/8du8uQXq7QveVTZLcUglPvNRxPGMkJ8LrOj16eWcacFHN1QiPAVD4GmlAMTYatFNRkgXtguxmdktZQKOxRzrrkXN2hzPPP6DmOBFzl/RYPbqONXRjAK9Lvn5ccFZu4+8n0iLlt0TcMByAkBoNlauWJj4ynZuBLmqy01khaB7bTl2eoRE0lZwMKKv3xobyhRO/otirEjAR0wFl7PacryXgC8HV/PHGL0ViUxIC3fiqufh++4GAjLE1rR7+jn1Xl4BPMbfeBw+G/AmETud0jKJ/fs038p/s1oWr6KJ3ftrnbRH43pA5hXE9cnmqS08I/m6l37YvN8K4jXyqhgWTdayQQagdVGwqRFWz6hJA6M/FQ4UGd8Z49quB3nB90IED59Vyqdj+Icu8Mrq1YojJqGKIsEXyv2G/Q6P43dOGWWxaLHn2rV9iqFviO7jv75YZMEqIUj6hHPXdSnmWaNBKEmXe0mq+Yf9ghQe/ECPUJuiRTIqXZcGXYHmcTBKN7KDrjMKcNDZozC5AtOAv7EwnXklYXSlQtAbSt1T4DTQGXiAPqn9GM7tzw==';const _IH='c8c3c25729bc0f6def0d030dc2b0f52dd710e61357db5e91d4be4ca0f6d5c3c5';let _src;

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
