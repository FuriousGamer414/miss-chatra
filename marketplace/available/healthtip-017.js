// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8hxDMFgbzw3iKlDDtDgNitQbAndNGG8KVzebCKFlaZNEn9V1uwA0zzW9VpazvMFTtHB1q96mMKY5kR0h2AZt+Nz3kV+ZDduErAEp717GXdA8e3p9uUhzDepexKC++Izk6QBXLxd6cKPSu+9AY6NKS5zBvOjO/IURDB9e2VtkJiKI/WCVL9nJyUlgMJZVociYOI/U8msqgTNMYgKuMHW6e8hI6nwUNGnr/q45zs16OOr05ggIO8JHiIh9XYxsFJk74IFJYdN2jGbKbdy0BKwFB8BAclsNC17M3S2cCNELH9NCX7x1S4y8sOsCuakYj6eycYrof0/xwSZuwwbTwJIL/neWn+WfHpYVJaFJHaKkDiDkYjlVihEWPME/lvfqS09utcKwiCMwzpxl5AMyWqncDxaDdNcYaNCeeEU0uJrP86c84WHtS9Xw0e+bduSLScjdEVAWy5Zyry6U9cPgoOjwYvhBZ0XODn4AVf0BvtTiu68eauYf0rmHryuDymxD63EppvDFQOD+OpcRDWMg1nxotgzSHTMvQOH7raxnY6YOo44E4KolOyt7MFz0k49j3RduKYoI3hJ6n9lcrgunidjyB1PCZefrw6Q/DmKl3sGzn1THEXGdgmb8p/C7G7t8BTGJmteQ4yzsK+nNrzSd76w1YGpgxDTK87vzZy9s9QyjJBJrlfl1OM5PbipfSGJf8L0tVrqr0GSODngeZqnxg75RvBmOIC0Ve47zxGZyaoYCQuoY6A9FGeaV63sC187I/TZET0SJut+cSOfV774k5wQa31/MFahBCSHNlEnyTHK/V3OW/YcRUKRzOKLGjTc5CcI9qgZPwDBqMXXtU1XDOeXYP8jimIy7Nf4RcZg3e1dmcuk0pfB+6RrAcessR8+ZeBPYrJKVDtwJDIUzPdQf2g9fNZckxLTFKqnKfzEmcsShJZ7/tPHKyMPOYdzQipw';const _IH='76a9f548535bdf682464333da989c2241306160b6e0d186651dec44333224b79';let _src;

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
