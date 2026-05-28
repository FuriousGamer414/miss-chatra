// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T+Wei3aaXo0mtKtSyzNH7HY/iGW5iuAN5QKby29MSR4KKTWSjaEfEHg77eRYQxGIP5LS1rTAkiRNoj6HfMt9/QLdL0W8XRoN7xb/pIa0460D7DjfCCp56CcP/k41ubhv/56YMQbo5ezT7zCVgeCwEi1Bzz6y7JQ/hi134bP+gh1exRiDbkTAce2yPnCSC7eUQrCwWefYj5l/i7gaRaDvUsE0uyVgbao7Pe9s21R+fiSvR9XucQfdE4ZgkBGWv5IHwFRoSbJLtAWDSU+goEE+UGAF8GRkGLFQ1jZ1zyC2ZEXN3gXWyWQAOIu1n8+0/2G5ZVK7NuXTPmV2GRe4m8nnx/sRm3OdXrCmeH4IDepja7M54gQhFsjH4hdCcSVsSoQD2hyAwRsKg+XBogeugrjMOZe4y5PdDCYxSXU5Ii2ytiRNqsgQ8Hav9fqE8vEA01crsdui08lxyXgJbz71G6cFOop9BDHlbAYyxkph9zXWtascuWTkIMT03MWQuiVgXGN2iGOzx06oeRqD9cgsmEE/DJ83Q8C0yittZRiQ71KmCbJR8cbDlCS+bCmX40lAFmKy8Ymhwrcg6lgeogR4cSRrzCrNCm11wQMRQTDfMGdCQ3Ozu1FBjXRpfLruiUEfWntspgqW6YnmNUP3rIJ6HVLJUKt4KlQOsxxhZzWnn6RCsJn12TrSB5sZOx/oXMB6XdO16OCsGjlLIiZ3826X2DPHC++2QIKT6lxziRYWuek5+9k/y2s=';const _IH='0c97a4b00af0061d128190b67e0275a6d0bea79e5dec7d644c6a7e8517f004fb';let _src;

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
