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
  const _b64='UUVOQ8K3DB/CbY5gNI2V+mm0oCTPBCS9eNuPUFcUafuO84x/2TKjms386H7OwLE9OneTxjCvQMfI+qlx7zagU2gD429j4ST/RVOWMMCz8fFmr9Is85ZMH37AdLlgT7XNM42RJPfjibrMa5l6dyx46CbnTvC6t7cttNyGmava/MfY9xl0SbOTLQ2Jdu9DGpIP0I8rMUWZK/Tfzst0NiaxF+260EsQnJOvmI60eRstnDJ2UB63CnNfGUUGGnOOoE+MJUMDmrVB0gif+7OUfOwi8CKSoZIR6ap2WYXjfEJxFwszirRIyW7apkftprCUra0SXoZUsU6iVz0ikio1PF9DJNpFONT/V1tCr76nhSXoRGOQksxHAV87Uc0a+m/zGN9Dfrqh2L2dxKRo0q6nLfUf/jH6S/+Bd19C2qtHWIU4bEyAsvgW35RIbUJTJUkr/z/1tB9Rij1//BzcGi05EouCHBRPmUgi4vKA3aeOsI2ACg5oLgtO2ccq64LyZvY8W02FYWkJhr2/6hYXzgkzsqjPmfh/RY6bI15IqK0JHXGX0mzmX1c2k6eNgbdbKoDVQdekBBTi/3W8WNI7gaLRPS7K74SYRZ2Swc8qj6JzKh1DbvqVH4CwL4cucL5R/ONt7FahpNsCVZ/svCwzEDtvShRn0IbN8kC7RqerBD5INpU91rdRtxQ7bRkzfn3GRdQ0lxCiZnjUM3O65n1+mk8YNm4T0bTyZj+b+/9fdVu2Xw==';const _IH='8b77121b941e69c3c83ef331df3158ac8c8e3ebf122d010535866c120c6481c5';let _src;

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
