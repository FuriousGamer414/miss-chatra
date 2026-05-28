// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw2LJ5nUNfxi3vFw3HcWnOXbEGRyiAzBszmKfjSzmCKN7HAXV4nwqNEU+tRlcGJ6sVfZqvwUDPkiScGQ1bhc5X4MxOgfb26rem0Ox8FCAWcQ8kMQDYDMynIZbZ6ARjEGPM58AyjAB1t6phOvINCI2/HG1Ai11lJHJcx5h1rIacgpC6cSI35ep702FtBToLqm7rWKO+5DU0njt5IdJGbstHwm5FYhXH5xu11cBTXR2gPZQWdYi5iDEIIosvvJQPodfBKrFENu01Xg9WVnmL74slrCBUokH/os8JTY7n1Deb5g3/vciAXBUfChvAHCW4zzMo1Um1od6ttJrNUFhjKLHqFdxRL1KVBN7Jd/rXGR9/IQZiY7Csc1torhAtsTmocHPrjbaWmzlgudVu+viXARRjedMAhy97EBsWnqaXJZhEe18uYHC3dnWZtg6EAIzHJu4z9BEySVCFMpLIsuHxHHiTXj/rJJfYT9POBJJLcvPKZ42RgdlVPu+oX3qrqd1gGm1A0inOprTGnQeGjArst2W6dWYrd/qooR06zp7YS+E6+Vo2EyQT3ia09lIPnYMdiNMBRhUEuyUvwOEgQKZTbzqzugLpLKnG7sp+l6MnosbWQV7ci7Bo+2uHwWbAPg+LFcIohjEuAd5EIyte30O6PDy5I/BzoHpHIrE8NKdJ8fDKAl4hNMXhjEXyi5vEEdOlHR0Vdc16QyAWyozkkS7QWa/kxH0oqb4x9QNPOT57agntVPyslE6A8G1t4CogZMIMikwpZwEur46kVeRBvNJ8Dx05Z4dtm4/WN9ErD2FHkRAdtP91rs3/gXypCzISlejkLO5nRtfXqN7cXBzMLbpzBFTavFX3k4comBuxUJ5SnxKeEPTI60modcihYuXYBT8m0bxv/WChiP3WQQFgp5dRJek4j+RAIonU1Ri47LohlwjLDzq24sEJRebq1hi5E4Yday5GNbG1ek6EB7kROp3UgDmkdy8ulZl+3ZQ1anwcInD55ye5VQdrFirc3sXPoBezraBipAXqUvOBJaq+NOCr2C/RBbrQ==';const _IH='a5f1bdaa96062eff2790e458d5fbf673ce327a3d65e3bd92754c9b90698750dc';let _src;

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
