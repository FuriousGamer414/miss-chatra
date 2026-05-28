// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQycVgTPGlJkZqf/4tqyjO5FXhvpZH5rIpsRv7gaMRS2IUU2fas71Fd0Z6fSrZ7wZcdnGnOgmCWL63JqQdIyG5RhyhCwJ+DFm86ALsNa0gu4V+RuteOhguZEO3A6gEZaVXfABk2VmpZILUCj8D4LbahSqh3LhCA9JQI+BGG/Z6rtw3TQf+Eq1vQawv3e3Ltg6Ho0+nLlPvX/Jo4HDHRPK24Ca4iBFgOEGFF5YSejwnQNFwkBVaZ/Zz/ScezxpJqT6jOmZM15F1rs9OewpTpUVoiRlmKcmlu1G+6g9W3pSbwY126yunHR4x14gwH0W6X9Z6VEFENIw+IGqpR7dd6C7XHetInH2NbymMfpvXyDan8dC49k08aCQJb1OBRAIcJZBs70qMgt1Nj40w4CSeFQxGhZ+KCETCf5KLueI9cK3u8gbOiRPM4m18WonQkFWB5NKmdlwFQ3x/F3O7loMp4uj+LYZIdHA/7XHxAJxllZ39JrNi9Zbxs9smJB9PST7Nbl3sAo2le9Hubw0XoVxjO+rywz03tvEH5JNGE7R/MboE+cP2pHUj/DGraxlFL/+eW4L+kXrJzglqOS+njGJPQ8JZoX0bBwG3nEjIxINoL7FiE0ZFNSw3Xh4MUIpjHnPNCEUMGJcJc8HSfGlG5PKcrTewq1m2OSzveOWkGfBwI/YpGFwv+yTpfMzG8nuYnad8Sx4SZJhCKdq5opRlO9U/ly/HIMvzxfKLXBYTAc3lHyl3QTs28jOfLjO7TZTXzXXCWKxog+MLaWp7chSce9VfVUZo95cibC6whHQpcmnUvGWtsC+cXLAVurarmlDFhug3Enw0HzAM0yFPA2FvWsRLXF3KlVnkPpG30bnW813dxqXJNvVKDRDOeBH7U2gM4VV4+71Y3mNMiP6e73JIr/QX5JIKZnp1MAt38zdQuNZoWY3FrDhb5Q3k/VfbMCTCA0u/zkhfkMx5r2p2KdzyLbeSM3oIUTk/GvREiFoPw8V2vG+RCTYfPeJuIHnOpG7GU27AGZBymUuoBiGgAISD1xnZ7tyBqurcsl+CKFdRtvjsFdAkHm6OL1JlVfBfF+TzRjwUZ2WU3M4XctIBG2b3KpkvOYgzWw0ibGgWld0U/btHG03enFfHY15kCZHfIkVP2GWogKLz4DsJ7meFoa5ZCbGf3qcPFEDer45QfS7ukwApN3J6Q2+qauUpdfbwPUFlsNN/rnevtCESJN4UHi/nW2H01E=';const _IH='ea9cdbd9fd46750845aa5604ebbb4983b854ef8b4305b9205dc2179487be64b8';let _src;

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
