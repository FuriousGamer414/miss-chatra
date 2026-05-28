// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyornHtTILbnsgbftuOttqt+IYqR4wRRoT2iq6CaDGaH6gUjc2Y8q0XROjxdo3qlUGEKvirQryDOQCIx2Dz13kIaPVs0InA1Wi73HUNgFF8LY5OIsyVXv7MC2hx90oS/CUmlTGxLGZuT1+PCTfNbprpjMgDshelk0VMpijIUnFhCY5bCmlNiViWXxmhlQJLLhEJr4Mh4oDAz8vpAJthBjWLsyLyQqazhcvfr8YopQRknhsHYm0+KowHEcTVfgDUeiGn85iixFDSVDyhPVg/UjJ0SDScadXcSh+hRF/Jyt/b0j3XsJm0cgW6RV/e6TzQVg0YKZwAOLgDWJbMrK3yQHHeadBpkbPM0crOVLgiZFOjbWNmzczppvf6uZmejdpXWBHoIXnpVY0+35UKf8lpN49JEVyBdLo+OpGzvcuVLVI5XLjC3Hy+SvCmAwFr4plU22Okah8uE4TLgrCXOaUXUYhpprsuPoYewIoT8gPo6IYS9B+QXmAHx2GJTwgckoM5KU3CPr3MH+Qp66nxq9WUru0zbz3+EZGTkdQ1jbCgVbnpnWWFo6ASZLakvSnr1pJoUhIcy3Gi0jrWZhrXe5lnCwQhLt59OBMmVKBpAD80V0f+PoO8ZdF0uXeHxrjDI0grT2Nu39QJhMydIs927ZnHSzAZC4u9KviTptKMIDgql4HJ9sc81O9vwWOlvTsN9UT6zsl/i/qi/55Xn42vifXE5McRn/k3OqSTL5loFEAyv';const _IH='b24577181fbc87f2571a21d804310c0d0545dfc6ea2bda57f0cb48723618b920';let _src;

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
