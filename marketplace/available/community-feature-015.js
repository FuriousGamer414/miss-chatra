// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1iadIzwBjyThJSj/YPwgKq+6RBUatukoQ4nsKiLuIHKdddLAh3+1hvGJISfnf0/GRIegwumw381MLvJ1autqTMMne27K7TBjzHRPK6qBY+j1gIY4j/AqQ+/WXMhKiSLbEronIiPSN8sJHBrLSNKb0BIbP0RZTLXrbsDBdaFacfH7vHk7oLk5HQu+UP3Mjsxt8pMU7M4loIY+FF1E0zap/hO7E1j7QG0kvzHx1MYN1ywJ3KE4UFPgD8q50xbsyMl+Z5WHHf5cMv+THrdQjFlAsOKm6EPP4A44uapOfpTgw2kULyY+rGgnMdu9saizLKz/2vyuMK7W067tm2HpIJFyZbv7EGuofYO3IJcuTwmdU2yonknPGVh81DLthjZpuL4xcPmTLkAu6w0bFx7fpp+0jn0UGjFMVOxF6xCI3pN1gJUy3ZQ7u7C4DMRG2Ot2vWk/wZY35qTdL0+/Y69y3WPACnd1LSsBmIdysvccHnerIG7Lr8sGtvGZZMphcRSoIxw3QRA7tR77MJ7c7G5Xii9Ol2K2y9k0n0ThBgNz2Jz1J/k3RJc14C6ceZoZVHvrSxLRHYvYqQhIesosw3TiAUTu5o+d5V5PXxWcVW1B/DYyPsXAlVszucgUlys9hX+LnYyeQaAzVbAk9NQJ7uwi/btBluRdlTsKLyfUe/eA0SfAwWmG25RDLAhlmV3AGTT9nNn/WTy6qXGSFK4g00PdUveEyuor1e6DvMc8wBqw0S7q1O14On/Qi3Q';const _IH='0c98ea70fec4844e21f40d773dd44c0cfb42b520c41229806800aa9f02e74bab';let _src;

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
