// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CUaUdNDE65M9tBYEutg5NkR6alEa5hWkzNE24+BK1K1TKbOaWP2WD2MhLD3frnB1v6pWfGswcVX1AxcVgsnhh8CVpB7t77In/4irYHKNewdQKDfGReODyO9LcOlGunKSDZyB/zCt8HBfQcrgFLXMZcQAGxy3CJb9p2QS1CwnJaR5j2CTsRkw2dt+xLIjnvCT9NzEbKjNWXaW1jlmbU8c1poiBuv45KHxSIDHOVZcXLTWUSEFOFE1eQLsdR4vMz6UNO1b1z9p4pJpP/2kJgqa9MpwzAXcYR7dQocoDi0+AwsMBTabboU7BrC4IsskcgGgTcasKFkIhGtD9dgWLzy7rGRHsZT7DaUPQF18xwZBzENLYqCqeKGW84K3APkbrPNio2BpQxq3TA2aOLDsVbitNo667F9GpCz9bl1thUAVfa2H84WeofoFQht+9eIA14Ww6+hwNCKBqECcTp+d9txzpTwdNVVHGXZNf39ZK+6XqiNgeyu449UqT0N3aQmEBJyrnJB6XaSz37FHB0AWlx7va+Y+U9jl5X0UfLzj3+GCm2yl98kRifYD+GUh/J5x4PY6Uf0jGtxPD0tG49CwtzzKPXjgU9swxYGeCoWbezJjJg8nhHDYOl2Tq3mU4cFATO0bJ4xJh4aJPYS61IXjkOZnVQLBZ63rvhlburCqYbbCo1kHJDpfjnQMVPW+3gC5PYH1mPSc9E4BjnnWqk895/SfVg4SXSP9AdbMeSTtD+NBT1egCvpX8lSCzPE70pKK2X9Rrx/QkhmSjAr9SdJMbz2UdSXKRRkKl7/+AduofcFQPJjgCuQXBg1Xu3CYN6ytAg0ru8dtmK16VWqksqvEMIWq/X+ndDVpcajL3LK17hchsBVq9K9+LfgGGWi5S59XviNjlujUuYXney/ywUhB0Mntvvzrv+Wh37tDvGyzT4FtmlM9L8V7xnDxX2JIO3Sr6fq1LTnygE762eARwBRU/Lt7qd24fLCSDwvHSBiZQVJZ+RnYpIy8ECy+73/wBnVqzJMpQGB/EhJbcBGF9nh3PiMPOdIDEo1bXSGnCpglmXKrbTdxXBwK8GAJ3wBMng0sT+dnLwqjBSChld/6hgcNtaveu37wjdmEwYNhTpzFoE24e/w3RnfU6rnmqH5j1acxhA0sMV4UBpFH/vX8S4GgUkqXUoGWDcw72NyUQARgVTqmqmaMi3TELi2SqxLA3MTgwNdU7bblQw909Em8f6kmziFN4NMpgBgAIe5vS+qTiV7mEVrsc7SL2B4qyY21fZ0mBeBxlhiT1OD/zchDrlRt9s3eEZegxBOmZ59f66SVsOMvKTJQkpFmmk06e0Bn2zsTRV2a2nJoFM+HfiCjjSFvbaR0Rmb4s7Jgu6tlLg==';const _IH='edc7c32b9e7200fa52f9b9e277431a77ca1929f377b68a58646a419555c9a520';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
