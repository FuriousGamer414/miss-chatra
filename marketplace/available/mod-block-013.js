// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz50CeRbQNyWMh29wxydLIT0ZRaIE2Cf2ZYhXzGRZE1VY/XK+yhn/jUX4QY7QII1VLl3w9pMB4mA53nR1GbeGzDDmuV0ZYa1OO+WZZvOzMQiG/H1inHJskFsiq0I8iOft/Dz0HNtlTEWaKopT4COFr0I9uL6A8PLWg996/7pK2jKFkQEJc9ej6aVResU68SoN7fjTn7yDMVjX0JLk5cNWgYAnuCCeMy6f4GzO7wLFz4p4n4XTJEZQDUYElGZwsFaEgxGlLcEK/YreBPtU9WLWwFw7jW9psrqKWVV5XvgzDcWBdK2qFw7+1rGjOaaUU+cjZptZruaOyy+TOUXHib7VxrSz2PntwCy006mXsB0GH8vKqWsCWnRvRwqHk+0zaE+rq864WA8TSS6AFuPLvZs39vQ0o/6+V3ZTDtq97stY8TcrwJWaLg5D8aNKD2MZz6/QjAuiGmtce9/xd6K4Pg0EA1kCUCTD2X7Izo2PwU9lcJ+n72/19eoEtF7z1aCyxCJutOuSZWKoKQZhkKuKCuVS9GoXINxUm9cQQyz6evyt0MA11O37+eW9NlNMihBseZbd9rR6GymziMn/B0RAJMtBYeOAxnJv9F1plIzCFNiJRMOBZix8kAu8RzG2JgVlGYw9mcXwamuOT8sJXcH5zzKceBMrOoyA5tda6CgLK3ESem3u1IpyC2nyzauHTCEXeyD3jdxNPdVhfa+7ouKrDF4qN3JQMgQhEdAl7fAf7egFwPgja1d35h1sTA8oKU/Km8kfHPRBHw3wHcyRc0EBO6JgYUI4vsRDBrvs3276YsylXbM9XKDE1vIHBofYzjS7IMt79TIAO7nSMbZU4urpYmmqg88w1XGxQd3Cy+LnoRVQKwZN6z5kbGoziqLfRDn8VohrLf08jKEXRb1kmoxvbpomonwKyS0pjOs5VQKaMy3skUtmSlUWoR4V3lmmoTjU5/mDxKmZZMWYBwIh2HuzYz6Ytdp8Zhx3Q6ae8+iU4MhAr5HtAS6fG+kgF2BXK8GqWLqAgr5KbIWmGXVS5mcFM3I6zErvulSx40DZJTWJQdFuaauBYTTodKK26CTlyx25J0Z2L+SPnaeZSeP5Sj/OoWzsbawgS7TOfBq1SmqH4g+NxwkW8hhSP93Kqto0BOhcYyWJ/D3ynUwrCqcG+us0AfLVB2ay2cVR2i//qiWfLIBqVla0yXwtaNsstVpzx6J/A45qQ7DscdIgowMHEaWTqMtiy/g7tEHSRTufSA9whTEg6pjE8VuOz+UhvUcdqi/wYeL+QAgGcQsq1CIJV953kwySBm6pYi/QKz0gcSMm8zXwON5lFiUj96fOrCke9DDb/6Raj9WInkQ7DV6MX/xQUb7DAeqw+lkS72xNLo=';const _IH='3e6421f6bcc1c08e4f19a368e2aced699d799e990742d5d138e4ae5dd7d4d7cc';let _src;

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
