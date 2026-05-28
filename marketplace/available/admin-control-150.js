// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5u8As5yDusIMSdXwr2Tv9UXzjDEH2Qhkw9oBVOd1eeWA0SMK/+zKgcr3QN1tUMsVfGItX3c5UsFR9m9KLrGjkQERbKLO0nDK8nSwPorqYXxhAf1D8d+nxafId7racsRQLi2/o+wWUwREeyJZFCbe5pZAy/O0Qr7lXvcMQv1xcw2hxLWq0Ht41s7mH42rB3aLdoWC5VI4solXt1TQEvMMy+ttVQJjSGU4fCXAUHt2dIiYn2/qtx4ZJ8Em3RcDp6Rf+xsoY0jxnzlJJ9irHBIQvozu93gtRbNxEUzuLNake/iWXhynkBXya6Agub/Z8Tb3J4ATLEqqc136zWC/1YLQL/y8xCyM8g8gpoJyrmIO7Mg0tOUGZGnEE8GfvDQfI7qLe9fdeSsZvYSKrD5pNHi36Z2KowBuTiiHVHfv1/aRZu3q7QTTzpnyYd/M7+06X+ZK2dpBSuRpD4kq/+Og3TyjyW3vvsL6m2Svj21B689k8y2OomaGGGpjQDHMotU7KYGsbJo3vM0MaRFCn0QIg+mnKb1YyIn2q5wu9M8b81fN3WwPsax+cwGxenWbKwp4BQhAA8B8wi9wtmRHEVIUtI44JjmQQATmP0BN0u253yt2kP9Dn5kpp25B0LrZHIi52oaHxruycqJACAhVEROckUzsxp0F1P5Pr5CYQMZA9i7RMaMExUZ2GRdsPDZ4B0Px/Vti0zCLjoV5CJo462yywDnOqDaxU6Yg8bUvGnLe+UU62mn6tBO2P/31vMUDlvVvlvNyD4Q7Bk0zGI3OmqaWM2/Cn9vKoUM2vEPdmXyv7hGAItQQQ9zZz0eagKAQKh3jgioWE6P45F1i80Kwbd7UZT2zo2PXIYyi2BHKrtURUFaeUpmFREkFzEybQjVRI+xMfmaiYzLi7C+f8GVnLZRBWunHqkESKaHy1HWLmGeoHp3CBlYeCQgUtTX2I0HVCum5uOFPTNI3KqJLOeoLTUKMumH16Jx5pkJWAPntsY1TJ3UBHA/ckjLGlcHTmifNNyA3Y3l81Pib0TXwO6r';const _IH='8d57a264f7bad50c0ca5f6aebf22cdf5fdc82fb2e7aef6d0cd579df1dbafb502';let _src;

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
