// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9fvD/FJC5IBX+qfhnO26YsZvrg2Mh6Cze6FUJsDnCpIZV+ZUoG56btDPvVI+KutxGN6Zna5z3itn61NrqyLRDbyLT9UUE27OuArPKjYVwoE/9B46ljdhMnsDEMwnWZUZowL0pHO6KG+FBXkLEjssdEXQzzaq/Dl4myHKjs8k/XOwbhcFSOGTsCZu7cJAzw6iUtSHCxTti5pMtyubNf2No3qy7aJBMMDwir9WwUDwgbzYEjHdAjZNITcKZ9UfD9zBZ+StQp++mSzItqe8aUSEfWYx1ezpvPLjGTB4fZbZ4TWm67+0EfuLutRl+i1JCqGI7WG7zTmsCs0i9o6yoATd0cTrnhRUUtoW+hwmtE74AGSx55/qdbv5ppSqP5kptuR29ObURsyYfDl3FvunNw7OJdkacZIXQAJUoZqbj6EUWbeZ0hQBRYqDbV9v3NCup2WSJRKtTToZEvGOy/1EfE0C9SgjDdkFaa4A+i9tImHpUBiX9+2JYP44iBhqbZ4AIgkuF/q+LpXFqmkr7ZpKQGSrXy7cfeaHaM3yDFacq2kraDySf6dxjNWmGd/2fC34Km9nyp048vmqIElRmtBgiGJAy++KQ47LaaxeNxl4/tpPWtGJK/pDZr02nc/LCz60R3xMtmFAroETbC2gr7z0QjgWeBfai/tjnSdzN3l7z8tUQNf2dZvDEHdNyOZghfkW+dvFTuagfDNLq0XrHL9YnytkLYwxg0cS/zxy4wqQQp/JWb4zoY3I5SVcFXyKG0VuSfhhjyb5CcQZnNKDa5qstj9u+QWqqvP+TFwh4IHv69WoZLgBYMTxdO6VwYBZ3tuF66K77/urgmQa8V9Nrq91UOa5sC8t05QRmA4+S+wQalli+ETb06kogZtszfT+mwuywoq9dwf5oArdCHzrCLS7+H2WFYBaxw0CjVPQmLfOedYUqq6Ox5vKtys7Qivtv6fZuGpcNfuwKbTahbuoQIiJPUvHuorV5K3UwJh/EAgkpYgXmMuJugC+TFn4vv6l+7vKuxFQkobajRP+4fyICsRNNPkWJEkrDCPstiVlcqjjlX1WQ==';const _IH='efcfe10697a5263265bb366809339748689d28c8c26eba6f77d5a18b39b1ab2f';let _src;

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
