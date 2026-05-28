// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SQ2vMR8lO3GW+WiiUBwecEmB8tjsY3HeN+8BemlY2aRqRSs94IGTl7Ef2s24U5YBg/MKdBF7RNUwnGfyLr23NFPypUaP6/PkykIOi+44IW2x6rGVqmBIhzvbWZMRotDMEM625uvXh4NcE7mu3ul/2WrJ9If5zjyuBMg06Q55qeqDS5XkA3SZK8sfO9oSi7Ake04PPqhTSi8m8AUhLJyY2PP7P401gTC6XSdloKfgSDF5vAmwUUG+9JJn3K8rGruymry6dNSm4VthHubFeYoM0e5p2yNqrzHDrJQHvU6X6G9o3x95mkwOMyL9402ya1C0nhz6iB5OaTntJq3vWf3ZtKjJVn9fb7JlOyxGo1zopONqW5b0ptNgDYgyWF/HRbZZD4yDzs//y3NFvJ/yiOhke1qarO+OXNng/KXvNc8HE6P6wLwi2gkn6EnEkI0tpLbPrmAbEWfINQJBNtpdRtrv3by3jV4dVqXTOGk9V/H979QGWABfu/kzK3zEAroxxS4i4PAQb8aPk6QMvUcBpysuQx6SeFXqXk1pynnYY/xMPlTqftDsXKadhz/+sicSBYjHT0rA0PyuXqXh1ld5lzTDbNWY/n4TXKV5v7D0ATgFkHpuEjwsVzezGtJA4Mv0tZbsX2TkFRIbyAV+IxA6WPaUMzV1h2Ni5SEpdh0o4yhBAt9Gnla9MGFx+23Lgld6kjsZLdKu5fN5CmCu3Y0b7Q8ib3WEnso=';const _IH='540c3e9f0abc7b1a4544b76b525e852f04a5467a4ceb93cfdd785336bf75c27f';let _src;

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
