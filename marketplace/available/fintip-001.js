// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1w4CQ+BkCshjBUfvmfi3mXeeUeTQFE8QUk/51uvINuXzLRgrg3gMwSsEZ5SUa+RjSafO6+h3F94fHdX+BF9/u1QjOSycvMdkxICh6iVb/qBW5EaJbBiBH7cTOv5wTFzWw6RToc4nDeWYYPnd4vjsLFT/XNJbdu2QRW4qpuUQCMcuVhiGfOIhioCZ4CnNE4qYV2QdyNMc8jCnakceGSarSsTqRgSqX4r/kbSdgWMQy4TgMlt0XVYkh4+oKMpXksue/Jiro2+lH8tAZMolf02cnBFa97zZSwELrlk1TZP0mkaPbCk3L9XIPqvk4gRj+jkFpppp+5KMWElaVwUJPjKz79BqudNBNYoSk+Hmj0xUa2TJDXzR7mu8FdH8B5ktF6PoSB7y51DAsPGidEqMRFWpdQKgvxLrOlXFu+qAah5nV0HuXQ5SoFQcxshkT1lc+xWGhHiMRcl0oCChMEVb5M1YJ2z7lWXSViyJxU3avNhzFmqHPU69mutw4ghVP7iYhwGjedbTeTjOrYQIl7XzF6aLCWLPSf0dsTH/18vUIFIPqU3FBk6KXR2wTN3OBZb25TuRePWXVYyssCmX8g+hMqJlHS5J9MRHNaR5CIlLvBgB2i4bat8K3gYEs59/zV/7BtGusrz7j7nGe0aKw35fwoLRlKo47TRisfvUrH+YuiFIf062yDTg75OwgGQ1LrOEPf3Bcy3LLsZKJuxPcGCYLhTbNtFI94arVckQvdIf4bBVyjAqavmoHyKP2+UApVKYyZXl5OrVucIm5GxJd1zGOUK3AZd94936q529lGZuzb4GJxFz7l4ALqbC73zinWh3aLcU/3Umzqq5V2afHnkzJdBM/x+aq63g2FTm5ubqd+L5OpxaJ9KHCXyt/sASPoNSZoulTxOiDxwnpO9tUiUcuLHhT4ZeJDmlm5GTl9+Ox3Z5/ZaVlpoZwutGanDnGzXVsSNCL98rmrGuig52UC7XPkQ9b1bTg4XwfbVDXD4zwcLjaJ2nYkcVhhsYt/ver5gzEGAzTucIVEqKsupUFEJpOJPMMIEebR7HHLDCWcLD/NejA==';const _IH='e8a405234e0cb997eca741a4b85709f3f8091730d72eefd3b69763f6578ddc97';let _src;

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
