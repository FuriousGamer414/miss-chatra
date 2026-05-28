// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxG8LOZl82UmLTsj+WcwG+YWokskWtGz9xqAxJNzPt1LyNlkUn8mORw4PizWKoYGd7jy3mosRtZ7J8Js4R6Ny+ftILe7B/pWXYub4jNe3LC1nmDIYk52PORFMFDFIyVSJzPmS8I+jylklwaLjku2lG3NGHRvEq6fm2WvE0mONaEfTHAQUPU6hsMYWFHEiw+Yyi64frDNvbdeCkumgWkuO19RoSFaKTz85oKf3v2GZOPfFUsSgIuXGKCX7dHZjdIfGJAMy7nybXmFl66cXXRekN6R2MurGP4VPW8v5ds4L0l+qH2Sng/Ui7vouj1SY6EW6Kc9FHLpvjeBqWSg2Y8ayl4eix9tE6GDhru7w7alwCAb88hJ7u/sWR5GuC0taOcyIh44oLvM9u4mRPYVN5zhclva1mtjOrjzh3AWFiIrB5AmBQCLQk9PRXO7wKRqcg1e+xEYszdsj0187mLYjulVZ+g+aEAzyDSpkha/Ow40FKcIhvNd9RE7HYbjg0KiVNy27SfENd+fkoUes+y/tX7/ZLHKoZUKTdtibWm96YD6zqtdeo8QuJ3Ar1nfzodqgY/gfGNhaUtlhq1Vthx7kI7Cy6LZTyysEUjvdHo4TQQhUUu1MQ3/yGqcrG/EHfOgYEjCLcpvi1WQn2eTru5ahsY0k6bSMEEfkylStNsz1DsO3d3tDxEhOh0fejWD7f6mIxHlt1tY7cYoDhnSUxmBVJ1nNFPfKw8zWxEGwLeOaRrmjFYH54dN35Nf+fcRz32ac+mhpjN/KnCrfC1GsdLkFHuFfe72tL555dS7AY0WQUrFiD4OeeNIBLYaOcwiqQLChtlu4+cddBMJLe9KcEx2HbL7goGUB1ViGDakxvp3t/bY67YD6hh1lEPyYlSa/i0Mpso9pAor0QOZuaP17THIsvaSIs8EsR4+tQmmxPMapLrRebPdYx9cS47qlEaKKH4DVdG8mGRWZuc9Hyqybikk5dFfC9ux7uAfJj51uL5Dm2WE+9tirT0QJqWsf1oDgsyZ8A==';const _IH='73ee013d13e81e5a4543ce898d33778f45fab6eb40882ae5283bd80c8eaf6e2c';let _src;

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
