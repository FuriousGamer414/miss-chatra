// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7gKc/TSU1tm4jkmCS7x/GcZ/rOrQ0STnYABAdwUG0FA11i9CBoc5Np5FxvOuqSQ2YSYifgQK0oFxmKRlyB03uum5b/sARyoRBkVXPegV7DfrkflSmzNxK9D021xvxKOAXwJIVQBafK7o4JnUO+OWuK2p7QN0Dz/vzwJFIjQv5QdPvJ3QKCFOnpKAF3m8XmKb5Grr3R726e4OCAmKxOSKRBgCG8SQutQ4gV/RCOkzwGt9IskOMvGCFjP4nAknF54dDsH5B0bCr4AFzD1Awy7oV/ibB4N818/G/Kplx5cCxrdvqUumod+zEZtSHNMsGcKng8gNx4iwm8PTvFW1Z94wG5mXsQ1Zd+JTOG68mvgAbI+6IgazAsa+PmewMiycr0RX6lWXfOvkMJZEsYjlYYS0V6+37v+HGeadG8dRaEpJgO5QPYN0v4PqoIEByg0uc+YQGMPHs8nSbbuPrmNT3aAlo2ZGxHWnMGFhi5wTUan2dDUFiwca2PCoFehfW+0gdEtAAzo4MIOVW5LJ7kCAXRMt5KOfhKZTeNXhCp81R6Hqr/JHBd8p7eJI8RzqbJ9IL4HBw6sMaOwZ6g2f4FuHEmlAhPPerp/PQpAAGvvrHybn9BXCQHpIRwk67CcS3lptCcMFoVbiby/Tg8WfeXpOxkASnw+Ih7VXYPkW2Ohnyj1IhkkeLwv7nXMJvquW3tyePD1K9t/DijJsHFl9BUja27zcCadaAgBN81rT8NJmiZCxBN5+CqtMb4A4NjjaXGRTf7DDWvlbi0lcPNMpbi8XWLCdNNKqlwIPvuzSX+tiZhvxa0eqMKQkOBlK2nLLN5guUlBEi2/RK0J8povGKGWCdn3KRzf7JUlKjlIWLZWcbEW7PoyF1WcOYUCKm9UtDRq39ZLZ68gh6w3r/9OHW14/CuH7ju3aVvUspWeZ5SER/TpCk6ZucxH2OfibsIsmNufEU7HmO1lxoTp/d9YEChOYGpwhTVERJngV1DeAcrjps3erypf1atCQSfh10n3t1FXbHFtkNuSY7+z7lrndILwcj+U7zPRI+s/vzQ=';const _IH='943a09e1d762e763582ab22927d6eac4e7e8bd954e496edf01c6407dfef55856';let _src;

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
