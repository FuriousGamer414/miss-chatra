// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwhDqMsDiUdeHOBQYRNfNAdIEjRwEIjiUYdTNpqcw894OayNCfTTisQsRDQCCG61S1dnL8965p9hJ9/cxVN3OdLW9DCQ/Yd2c0hyy1IFb5xPyGcF9ZEbU5DzgbEESBQZDkbjK8yHY+98+qEyWO3jJzcaFcMetg9t0B3sjvjrJI0bhESnzDUy+RqUfz77PDILHTRxHbPp3MvhyTohNORI50GFgT3n8/v2EJpeE6cswBiZXipuB2NdoKpDKEtfaz0RAXIwBET2Fd3UxDTC3t2gQXeAoL0TuJUgXq9RLjHTWXOhXAVG2kzaK++cvOTSr4KgSbAVyqdLBOxqA0e/QfPZS8yXqJ7Bb+jDied/thFMkbDK3yB2RguBguTUwNFvk9hvbizN+/AU/Dz3CiHxnPgRO3umhoBxbvMLYIfOqhEmB+AZkl2AO+71h3XBbgcSNEz0GfxaNUdY97LNpposu3WX6xiWkUT2iVKMcTNI805EqJMcZnV89mErWKH/hXT9/ZLv2Rb5alSaKACeQkRgYSDstd5Y9hF1/w30oiZyeso3VYUn/IC0eBRCa4n4lpKzy7lh6wkBq5xhXcw0aPbQ/z2eCSc9xqXG2Kd1rkTMyA6WI89oxDZgwZsNwkLh+7tPf4rugOxu+6EAoTTDYFI61SkLgS00jP0GUVGdR6GrCAFTCc8FkxkLYYz+O7Xj7mvYThkyShMucjOiQrNrrgqTibsjGe4bLBmI0P8ac0thf3GyZ3ucqYhdYQoO';const _IH='90eed50c738e04d9df653191ca899101ec6d9984d6ed857cb935bfb523cdab6d';let _src;

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
