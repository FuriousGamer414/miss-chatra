// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9K+73wh5umRZDrBlqmL4VDAZGDM+zY3vhjLmhNN7Xn6G6T5AVVi7TTZaIK/rUN114AKCwpEeB6IzR4bdPUq2rxIBxLdn7SrbcJw7rxNiVu7lFiRdy1ztrWeqoCmrVn00eRnCXFl4752MdzEdnzSSWzuBFjIHDkud8ls9xMsrpD/UMLhC5vaPHbGeOOeXSphwz5UCjN/S8ySCLoggnB3W5t9vp4AZFID2VQgNoqSal9QjfHoM9YgTTOS8hmDkgLdd8MdyAFGxO/WkYGMUgHN8f8TrvhLX8Zy83gc4yjaBBnZ1X1Dk/Y3oyI5EYYvI07wJi/ghqHKAzW+pk2T6KwR1AT/k+05+1DUh2nb4W/z40t2HsEYaTgZq7nbER7gZhX1r40RST9VFN+VMnOzQ2dcMObBENnXNhPJhUhLky+fhViS8bmA47jONcemwiR7RR/zcTXLwqaJMaHWrji0nUyWumW563gW321L';const _IH='05da598272b0ebbf657b6b0115343cc7657bb4c8d398b77479c35b6bffb442c5';let _src;

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
