// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyaaRNqHoX9lomfiWbplcLdSaWkpJFZcYwsu5nECJY+tQEj/4mOnZMaqFHdfdq78HenTHPR4KCXX4UObDooDvKH+j1k/O9ECXhnb7TJytTi8metuORTBkzPywDctA0bTMAf+DjJqdmxz3PBjeYTGAXL9YF3HcPl4Bo0KmM5RCREyoadyrzQqvPQ4iqJvvMDsjkz+9IrX2EBEQeoksU8Xrjo9tCgP2Ywvi0KI1osZJ682dIyHbODgESSJx2ajoXcsRe1PBSmqsqx4bAyVsdBUYZBKM7yaRZfI3Gbca0fIqrvwA2DzLICCYdDyYrJTrz0iWRCXGA7FQKVVSavWWuK8bBzd0oi9w+qQZL0yQeQqyVC2ZYinsjdM2Nh0E5SSbY12ICUmg+j7CMSv/XK4hZRKAzlatU8YE3AynpimUJHrlJDhYSfJfZhdJYHAWvjlWWyYGOyHPFGDtTKr8oIAY8GRAk2HemhEDuee4tM6KfD/gixfTWfhWpqNgcSCedUO3iT9Z4JghCXHI9geG8h2X9pWMFFcKMUiLIGQ4hcpGB/Gr54yempOGZg9PA2j63AjJfr7/mDfKNH8/69aDJXinDtIAfVxMSxvLqjjtOwTTFrOOo//QDfPr59mWqIZrfKPL6qjR8RKoTKRICvPlSla0H6Hh/2SpyZWVpqiZvlUiGkJvQQ+Bvw8kQVzZqLz9ssH922DUM4sHiNFopZrq+dGYM3mp5o0gdDW0R1jKddY3cVbuB1sXwPcj640RZkdRA==';const _IH='d80c95830ba79293efec1c287236e156680e39364fec885c78df44b95d3337f4';let _src;

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
