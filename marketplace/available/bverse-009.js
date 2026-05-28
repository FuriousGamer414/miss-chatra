// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7xFMsUJqFqp158k8KdliQ520uYdxktj7vvUVQLmEDpoPP5SSASyGke/RWm6oEBsTaTC+wX4pozNpsRNsN3DMO01MgH5dKJHB2AJrZfrIbRqVA+FWoYh5Enm6T+mgX3JhZFmx6udBjg6iT6Lj16jAPTiBtDMrsI/VPOxjY0mzltrwQaz7f7X0NXwMKNyNrCXMqcFM/0GvjMSEO/I8OHB3nB23uGdhfYZ+0nLGHs0AshuMMuh2y0o8u0ir0cov50eYoqBtnd5XXRtApy3K5bwkS2W46zAclw6N5w3SxwapGz7PI6F1wXUUy6BGVscpD4CqEEnx/LWAD/kHyQlKMMHCvsBlilmp1n0xeMYqghWn+Xp4fvAcI/dsJm1T1o1rdoP11ROgzCcTK8HD1U+QVoTB3cYle4kaXUtd5PHiWo3o6usNX40oMKX/NuF96pwKlJdivQw9iQ+pP6HWWHOIJQYaTUKD9B+BHuawkkYebqZpbeXp97orpvjXdu7TCVsfKiPw+TG4IO02uvMmxgUtkgix4rdlgunX8u2qTkDykG6lTAhf5Ya2EyNYLH2CxCcnKab+D2Lujx+/qjDkV/h+SuHlUhZVMfXkGA6CI6lQ9ftIhq0rzZ5pU7LRM2H5ZBk/RPjV/BbmnBBtL8aWilU5hSgZZ8Ey+JU1SSEvh1GgSrl0og6xzDmeOz8xZrHQQFtirw8B7wtgwNhObaSo9DdjPdPKg==';const _IH='259e9d666c65478c6fab80f3af68ac6cc7b451d58b5ade7ba020e2208654413c';let _src;

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
