// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/EUUWB5YQyXc7/aZF/x5ik8C2C9OnEj2R5oSBOZGdcZ0D/UNNVPMmpz6FySMF4lL1tIVvagiNJrMMJOIQK9TQ77dYe0M9uM7SRvIjnjQPGVoLdkiuD0Z2HTy2XFemOq7ObXQoF0/7EZeNTQz7VWkA1PSl4YIAUDaCWSzMn5CAyJnDZxiE9vwuai9Bh2f3jKyh7s/daFDzDgrnUMnvygscT9yFgw6lZEOSdrN/7VzRIIYXbEMvtG9NJJhXXt673obk3OSIBg+qSzquuiqn/8ctc3Pia29nOcW5dxVL9LfU5Mt6E61zDGK6SduPZB+MMk0XrAlGu3+kh2pfOn52Uqs57IkX75crJD4nLG+Ra5UFtfCj1ChbNqP0/q0Nk/ql2RLRGuQzW5GhmJDLn2dQ51OGYDiQQQECCxHSWm/z5TncOxfsLjCIXCo955UuijuIt9pQYUOsroU5FOTkNjENXEw6yayCnoo9ax4h6WiUM3sOaMM3HewHJ5B/mQKU2RW1LH0FzLC+w+NbkEOFdTkn3HOWS96r4yeX88WIvT5q4zpO5DTJcAHPm4sP554AvRnIxB0bcRJxtP';const _IH='1a55c8705226391756fa0180aedb08f0a05be68f765a8a5c7906d0122a568e01';let _src;

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
