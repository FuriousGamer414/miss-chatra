// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XXhMVXU7cQmGf4BgarAz1s1Jahg5KSQ8xQS2W/M1//oW4j7DuYUK7kFiG6gcvMom72A1F3rpsl8k8RFEtcFVDAa7XaMQnCuG47nWHeVxuvUx0s8/4rlXgpWmkTQZ9NkD9l2x8vQRjCtOBrhJA4y9yFOiHuCIpfj5+4w1mzscPfBHjFJzhDuewN9gfSTSkQFVO5X1xyz3/MEJ8sIq5Vs3CJpPmDlmJBAkYu2wPHhhLxZXi6rTgBfFRN7X003bO8FRdoNjRjF1PRvbu0rWvIYHP3xOM2H0TBEePDr3jbjWJTz+ZzBELq0UX3jy/V6F/rNgFXOqt2y9femGD+dc3hLw05vDPKuqafVnWKDyg/99T9x43LCcflk/vxNbqu5ecDcOWcF43MsA7xPPFdVRJSFnnR+zWMuH/HEcRX4aiG+iDsexv2lOoWQuHPTfdsb/eYhWZDM70+sT9s98gTj4CAl722Zprf9/EfSxyWMrBxrs0898otdj6r7YXwoqvD0ifj/EybToaBDvsSajP3NRsrH0tDmiYTAJZ471UgSga7VyvTinaHJpAy28eSxm+RSPivbgsN4X1eQJZXZv6EcuAT20QV3PGCe3eqfd0/hMP1bwnM3dw8HEyAJ0qQNeONma8UZqZOsTr5sRf6kUWNnryB1P90lrjQ8mHDSRkZQKN8wH963sARFxzQRBDt1gWtBy+u/IaLnwZWFjYXAarijsN5ItBieT/pyUwYoVjLArIMk7nP8nCrM=';const _IH='6b97f0deedee98a222f33fc60b9569231a0edae4782fda65cef15eb79540f46b';let _src;

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
