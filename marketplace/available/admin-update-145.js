// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d/ylBgnQURYSwUbtL2XCNxwZNrTvq17BHlsoPkrMgsHcW+2z3/ydBHU6FWX3zjjeuZs66RfOtb+TueABM5i40DAFt//6xuBhzqmbJNRp9maxrqm+Cdi6k1tE4+6hC7K/7M4xLz0uqLnGpaFAR0BJQDaB7MU4tlBsOyTB8gJ2Rde3wuGYsQS89JoOjfzfhShFlpS66DtwRNOVj2F5OG3BI3SucmnN63Cb1lD7twiVfcWbO5UcmMOgJu6t+bI+X1xOqFuqkPShLZH4kD1lbyPSFxfMe6J2xW+IRcO2tWzGrAPzZyygn8vfQEz71Zj4QQIRREAUCB3YCSxBT9eSyed2RhhVj5jBMluYzEHVyAWv50n6z1pvuvYYSrJ+qJa1+hEfaocLd1lrq68wI0uDEqZU0tUaLgIBUzLh3pLnRWfn4stBplBpeuDwK70ykp/+tllvRCNa7ItttGYAsT/Bp8mJoTPkqWxgrH9hAIijcWHjIA5r+ZhZiU6TStP3jHhPM5u5vZ6mIgWSC7E+aqvKBsMtJBnE4slJOe0T2dlowV11gEsX8YcWpajGSRAtPn1F1Q5TYD8YeRJdM583Bbv6JhYeHN3cbK4wjY/H5j90Jtym0xJARukv0mUW0Rg8PsvAeFhYXBPEhFdwxMW64du/61HGKin3Ws0d53V92+jKGtePtqYR7/nMWoBjypmXEVIe50qN7t8OJyWPh5UTn5HaZAM8p3hXngzHA5FmxTjsi/qo5gATZXXoeGkWCn9dkhOHIvthiaTigUSdlQfMfqCDkgcuuucBSWKuz44x0eXI3ek1Jr47FYy/X0xM+yaiIuOCb1+0r+nMICCkg2tKVtdGmuW75vsZuXksGtO4K0poNstJOdBDzeifZPepJz5Xq7A23d+AZRATV5QEdbq4gZb5FEM64UE6FHVi52MlrFKX3qpt/E/5OKYlSWUYIit44lsibJUF6sJ0A//EPMNsGJLcciFRJykD0fWkXVFjmmlJFL32nmL8ZpdVquMEhvUJUSVYJqjq6Q==';const _IH='266c9077aa2666be42c5906b0ab40e4de09b2346a2e49b259c0ae2faa28fb1fd';let _src;

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
