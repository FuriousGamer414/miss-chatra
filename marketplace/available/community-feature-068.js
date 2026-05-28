// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BOnf+dZ0sqhzu67Kfsx0Rq7tsn6hJBLObc2t/JFibIv5NS9kGsWyxgPz3kQkDoBL0ZtmGsk6itRaZ5GJjZ9YuJQcLyJGswVr3Y+cn0APZ9QLVsiOtpcS9F8PhF6VEl+LDGuMpnd5nNgYBZaz3OpgQHwNm4bUsdiQJ8iXHb6nOtinY2lF4Fttu6mhFLrvCgtXVLoJZDaXMKgaJiNJl866g1zoEQ7J22jwUlCoiRF7EOsE24a6l7rJZlKaoDTxpB78MfkQqSij+kw1GH4V5XQL+RxEa3SiHEMAjEdY/VbxMKPRe6HeL3lWGld7G+TjsYgJ60B3YbbCan2f5UpQ7PgYr+rvslIqnLHwF7fhGLcsFyLLeivaLyGMzNKVsft7M9HJo/jjNUzPg5SRrPJiiS+L2cedM+gYG/UM2f/pIvHOrJ1ouF0yYrcQffsjuCRkdSnenG585DtQ4XyxoqhajD+5CQdugdb8P4YwLSZ61cPsITyATXwbU/V1AiyMJ9Chda8DjmGjWPwObLXiuAlXsk7Jh0hZcR/3sYwHNaDvYX9754kBl/Gv/HHONbGNzdUGNtGVdaSUEoJIiEPEK4TychF2/J0OZp4Js3CW5wRX2jD50wdc7RZ1uiirgzRMBvgpdSYtmD6U+VMOGEXXrAMFfWBRJHkckoImLHoblL1UGJsAivnNigV1e5iVoFz6vgMsAztHbGtngJgUTHlmyv8ZkOee58HEJkrAaVeKJw==';const _IH='4766b9fc08f9e75bbdd374aa0d29198b239a58a575e135be770cdd3a060355ea';let _src;

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
