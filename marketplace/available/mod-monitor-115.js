// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Id3H0A8GHJdlDteIXBQg0AKTwI4gv282nlW9ILDa9r4KxNoM6RSTONmnf5TnTAvsUhk8mVSDlaVERCIz/RhTd2ey5onHgNF8hM9iAvcUw/aO+p2T9Ws+G/MTtSy4uzY3oc4RJ7dwhltJaEIsAeX3hlvoOUmzwg+3W1hocQxVU6UciZoToqEC6luPBcdTXLDpz3iCnfGhwTLtcTUpgmPQbldIv3/J2rhbYxOL3aZCFgpQgbugQ0vB5rogvtDIvMsFtsKrdsMv3/jZtEbbHPBtcBAI39ON6gWFGkWk6P26FQ0pD7QCKfzqguu2U9dPhZSK1dVZDeM8D63dhVw7/4vCMreX71ltciYnoe7fe6qsxCCxYTYDAAQx/v+Nj3i/WOzKGJhqqgfgW9BP9ExtR56zW0U/LrAF7o37+bFPPvaBkOy3V5bNmvHry6WJvsTTtAx65niArhFxL9qyH+IaZ14/BqBPPZDEqvp3qgnHcRs/f/yvogGcNP4jeKbVtjs5fO0b4n1nf9BjBKf5D6ByqyfVthFTFNXd8V+j6QaoNspEYDt9vmdJkRRs1hHmkAM6ngcmi5NwJWVQxUrUcK2athc62gjFlF6xksN3UnOm/1LxoQWYGgXZmkmE5vlrRWW9oM5b13M89DuHu2bi5F+g5WgFUIsrYM9+2MaNiIxuNFiioT3jNZq1Uyi6NZ5mgVusJRxM8lY923emvNNTTSiccQkY/fiCuKY6gb6FUb01WHJ/PtPMdLwl57yejR0JnTXCIX/2X1uwe68aVV22QyXZree0MAnSMC6E46k5ZIfqNOISaxsRzEWenVHj40ChO3gWsN9rcYRsgf4GdRCaLV2frM1YiQjLa1C+TUJlKuoRSmkkHrJVXmNYcvqTPB7MuUcTEYbnCo0eRR5GOPUb8RGrEnaieTdYbiJsPP16j4iPSbSoIWaDG8rlBpB2EbUoCnl0q6QCyIvIe4r4DGPcBx/Xtx2MlW3U360/8tV0nY5vTT5MWbwQcY7DN6hmOsQlS35Sc6TCJML8V9Hg8mhmt+bGPxrlY0pkftFNmYVqp9u5IktPUzLkmtm7J4dXTtYbDEJEem3NAxSrZoKP/Gsy0UaqSoGSIolACVqO42BgsLVrpoYusqe9UGvE09w3jQSsdhdz+XLdLUBQTt6UWQu/asDHOt9QfREkumaQqVTlNWL1U3n4mDygBfGS3FKHeEuzV945q8TwdIVOK9G5Q04ii3mT1ZPEidzvxB0mOcKPZ7si0PhANez+87aMZKb8gFKDaDLOnXwY/o+AkusDywdnhA4HbAvA3Z7zesqS5YWqn0UH0Gn18BVK+OqzaOkYArm5LPolH+RfY0M3j49PudCfR7Zwmve0p7cGMYksAZUWP1PVAerzsf3pfKSI72K0VubuIfk25v9uS8Q=';const _IH='84d5c41bad8c25ef29947ffd2e487a031051fe92d1e75c7a63c38cae1666e50a';let _src;

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
