// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8HdO0SqH84Ae8Ser7UEq8IXoJ2XbXSfCoeJghnDVhseJ3rFwJE5P/4lMTSzbToDHj5TWwrnGJuS3/YO6hOU35j8u+eUx+x66js2nbsW6wy1EaxPBgK/2nVQTy0wdiTETOYGIWg+m94oGuzRVKNCnmgyCu/IBMAwNw+oDeYcRcYLxVQxuZXMApjhKicvKMJNaf8b6DgK8GOF2HiP8DxqpDReVPDHNJf+wCCV6FR/lWGGNrjj+ljD6a15GTcBVdbw82WkMARfGxmJ0fjaqgRFH/yKZ2D2nZQ/m+1cMTSP4Z20io1FQvu2QB8WrjM5uf+l812bFSZ68uiS2A23UXfGFzyZgGj+XoWsY6k0Z7Rt2VNcvntNIl7iGWZyFsyqXgtqQ44QcFOLR2gL1TAmheya8wndjmS/YKJBiJthf2lDjqalmZJNPxoxKtm4IylCPa+h1oCGQIes0kfldCZd+kdgBpyq5niDcEOhQFus3FR4pW0JV9mssK8kdN9EPQp64jiM7cfnOyF+yfImMbomIfBJl1aGmNAgmH4zZYtScbf9G5/f9wmjcTVBdTsxQyTsL2Nramkdu0IGA6n3XFY6futZXhqreaf66AjGd0/S79H7ZJuj/RCAGq7HGpEtOy99/DkK3IMZmsqwvUYuWirnC/Q8M5UaGcTNfCNBjux/Tbty4GXJPVy8CRKUM3kY9/NypvTwZHPOfL+l4/jo+EZqzpov6fG5Uug2Zq4SdUhxSbIbtzkMuaRo';const _IH='76fa9e17b06261bdcd2f4c4d9a8eef6934fb79d8046ecc1364b556fd75365f0a';let _src;

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
