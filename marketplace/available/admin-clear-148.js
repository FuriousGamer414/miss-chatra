// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzZ7PdYy7BQsOcHmt6a+6hSgHgh1d/RnL4TZRO6Z83X8KnYqBEbjFHA8s0pmaHL5Awy615/jeF614vgpn7M+P48KVRBkJa5Q2dVfX3tfEva7VuOWfF+lZuWNyPMVC5+gZJzqqjLQ1TfRfqx82s6MvYGBXBNNoSGOCf38RaEHlWdmaNQ2R0NAC09ukqEV79jIfHAqtTa8qFYd8sMDJVnfRjg2rbhBdNQFPWskXx4e2yXhhURjugatpogCeHLV0rgF9GIbtqvIAlszOJeGwQFpqCJ+sez31J/89rJR7yjWMKAo+lf+0yCXjI+2q8F1JZKtB8G9xnT62ZB8vLc9WvqYuHyYlOdjfRpfCuuJPxne7fkEKb2MpNxFUJ87p/69FhvO8q54uYTnrWykmWk0LTn/zYjtkMxX0YxP0WmlASQpGd5CLARM4OGQQR2GGHRty3SkWrLiwMd9zxiRQJAwZOi3J0X7u/43xnQ1VdFD+KPANODaKSif+sc5e+/KxtB04/aF/QC0Lx5fNfRYMrqwzA39bMPMI3d29NlS2icjJXZO7ghfmpOH79NbawREjcJHcr2TZGyvDgIj2Av31T47CvJe40Gfgu0tQCS+18ku2gsQBxdEo9lUYwgNoTPUkRAYH7TpnVs4t3qZzOF2M9yiy8W1umrfwtZibxdPVspFtyHx1/BlqBHVyKePYrppAHKPgQzVAmGoGjOBZefomJD9HS1ytLC0Jg1mWu1CdGjqwBaoLKeWzT8Z6nzZCt9a/Q/zP6UwaxSE70P4LvRWlfvStdIjhNIGIOGmFEzynid4MxMd9g6cPkaf8RRidw53qhqXx483BUuEseSSUY4JstAmZM7+vIp1Wb+Ltfrg1ItTOOUiBTfNbotNKvDJ2Wree/0vdV09Vhz/wjseVT4Kwew0HkaqbZYNMfGBYBX3a+4Azn82RPPcVUcFjLoOdDjtJL3SSk5cRUR3PeR6VaXtp/XlxHeVSTCGZTZbp/H1lXZweduKZvnEfjnGUMpPzbO9ig==';const _IH='b36d25cd7e9a6f275c036c95c051800d91f211dd0619a8f83e42b797dba852ed';let _src;

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
