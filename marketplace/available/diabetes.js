// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/KhctJ5ORlMyjpsbl3Pm8K1Sm1e/j18cR3VPFt7frESE2htOfwUF6U7wPs+CVRge08CbIZXzKSZjSusgzkgGiUr3d0xfe/0BJYx1VcjI+r6j/4JpHqS5PwdT60Kgi9fENkEd/ijkUFG9vF1KcFuyDf2ZbK/4P4b5CmU+Rmz5dzZQ5j518HHjgzzNEZyOrWf879YmU3d9J+Fez5ecCRpusBWbK55/Jc5guSW4ArK4AVglMQEayWglFU+u6+pHBM0n1u5exz/5XocyoZt+w0W+7w0CfXnoI2sFkiOpbmohl+746zPowxylVO3iX1NkKpQC/JJYYwLE9unM0niUG6/0TZEZuyNHHVHreIlzNpgh7VY3uWUSrk3fGnmXqwjCnqd3vtu5V3+vl2G6Ohg4xNN2cmDH5MBSnS2qjdvTtZ4aMX5Ab6k4t6vspcImb6HcO4OJ63PGPexuvtYuL2GFqHH8eTGJcNowCDkODL8LOyk8ef6cChPDc9RAhcinBVT98Ed9hg340pUW3jsLh6GcrdA2ljIQnAQXlU8Se3AN6IM++fQV81KJfytS5ArA/RfH4QL4lJmbPC2ZTGftHzhAYwqjgRVrYM5VTof/PtesE/IFd/SRMZk30XVeyWfSgu3vL1/pL10hDA5lfCww030ReBF7yBrVAbphSFEF+AaKRtEvDTt3IT6DKrvQ6XxpuMKxJWYmKTGEordcO6m2GWGehJSjkVLKdITCZX2v7Wc1d7Bs8K26AHwOx8gfwG4H75j8zTcBtIIW4wYNLasTuIeIRk0mZnh14a81Yzm9gqqad5N61ma7asOQ2jLrSD4+BXYWx/Sb44abbiAOIbkEncizjgl0vhLUwWtzjgGBjdNlOGf1tSiu5fSdRCRk19mETGWl8aQzmeUAkCnAS+kebyaCV3h1Bl9B97hLhz5/Mu4zsExXAc6z+7jyQqk12mMilbO2Re3E6uIkmJTxfltpDEm/3hO6GYT6M4JqmNaJf8pq2H/Het4ImGISh+ecPfHjiKkUGX7FE9PssgcpfdPZNp+mv8teeqWoTXtyqHClvjpEM30OPehRHNWpNQ3C76CxPH7upG786JiwwPij8iO8Jlvd8aKBNJHfQ1TIk615xfiwXhpPrY0Aaxm6XoQuUsywIT6YN8TazjzoSpNry39BeMdyHD+g5KcRhr74mB29nM9X5wvcRi3nrj+mPIR2zBkitXRWF3/4se0';const _IH='afb8718ba91df8f634d57dedf71f460d86b9bc57088e21eebe69eea2c72a9018';let _src;

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
