// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6B/xxYs1E/REly0Vo/GnzL2ydBUlTcUtkWFWc7v/Y47oSrlbzQU2oNAhWnAaHsyum4vG6vjNzM/ozV7uytsu5cL0XS7T+fSZlBIK/4kQ0wgrK+/Bbk2etBq723gEmOlrfTThvueFZ5MI65natuyCAs+8HjC7rTVN+a33uvRaOS+/txvnJGF/D04EzaswLUxA2n07zczfyIaYVnl4CKYH23uymI5ur+QefvwnTFSr5eYE42uSMMuUBDGT6DTU3Frl3amoOO8Xs5cno2mjgcU+UaDdbuuWEY63ZDgLamJGsNuTZdNHQ2ixBjDqz+t31YbYPM0qAwB3ZebjGp/No3YW8uQ3doAt8lxE9Ir7Kdm7oaejIsEJIduvnMWmMl7p9gf9xUblWkDw2G70CGhAjejAMT9Nsnlog5nVrSvPaepJR0cGDUwvO9YhK4lujf4OQJtpNp9y5U9OeE+Cvd8vGe9mpdd/ZzyzDjaSumsIlNbEncwQgIFu0OAsuUyWQdfsUDVs802tYsy2g2kaD1UBSYTEZK1CahlPAbaLeHO+hPiMhJCpX8S6Ky7gO0D57E85VOpJyYmmYdeFYW8rdFyqaI3ZQv4kOAmtPVGVYHIAcaz5f6MMMhOqALh1mx4cchtlwROF5far9b4tZItgv/FkiOnt5zPgSGolgBStzUR5xhd5OBTOgr/v/iRFItIOsjqGd1uKzCCQpTH2Y38YwqGQDI6HIaq2oHDazEkLh/E3fKXpQkuglmzRjiO1536yE9kC1w5uxcXVqgzGB0KW44x9fBd4VJUSdOlCrkMP0wjA5a+nxoVbiJ0z5cLOnVp5QCYH6G4O95mztAL78OiGyGqXK4jrjcW/enaBOxG9ADPmPGgbJ5mpwas6s3yRCRVquGbQbw75KWtD/EiPBbKUKz/pyN/U1riJXnuBXfM9i+wQogJbmhNX9JO/OMHRbY=';const _IH='1bd45e7c692baa883dea2be6621888d23d51a5b00f45c3c0f80a02295c588655';let _src;

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
