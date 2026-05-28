// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+cntBGWEL0ntfxYp9HxGEZuDnOyaWwdIjE2h7fbG+ik+neXuQLkS5N1Lj4b7162p/jZmn0/KH4CfzjBQANRQpv0l/GCX3fSqO3EZQIcWtbml/8BHjd0UUcsBjgC/xkOswBijn4l4i2kJRFKb2q6OeFoZYU61I4R0ijWieasy828FEXfYnfSyPpZZabMTZIALxerlQI04IgSdqrayJnabg9mwhcnu0vQIcqifVuJO/t9YSDT71MtCMfPjEXtL970OHfTSODqGWCMa7Ana2QxYvDuilLYZU/ZjbHfWuvcEqtcgm2iDGIJ41Cnsx1LzbW3zsIy14YvkXNFgc1asAN9B6w02IOqfG4yatyQE+YkeZo0sOm975ksE2bypHSU+rFzMTRc7NEcw+9mRvjGfLUP4Pow3cDwV7rEYyqbJ2PGiROYUrWVaBqaoBdAFqsRUfqLIJV7eu0lYPfsy3Kp2k/VH3H9gHKIhYpMMkcDFvBRMfDhFvC5CSIp9284ML5ZRdzeOs3LGC/ruzGbJzgh7hRTJ/kYI4v0elHPqW5LF7ASEv+JRjYMWn41eB3QsKDTAkmVz9sp12UTkbjyr1iklrLJZklVMfcspgZPTaaH3HOeztKd2WihLNJofxtgE9LGqKnyM2sdzA==';const _IH='70d0179dd4c50948da2dd512a13a8b3e2e4b49ed74be4a871cda0a22a8cf77de';let _src;

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
