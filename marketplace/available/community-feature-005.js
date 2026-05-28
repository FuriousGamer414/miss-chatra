// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o6n8A97nUDxZENBPGOvOFFTJ0qQF3J96DQTQBChrNU3htOHoe+zzhvATcG4lNEZaiwc2P1/x+LFRJuQqUVesPn48nBuJwHLD+fLaTsll6r8P14tw/dcgLfo/LxR6Mkj8LbL8W8IvBM9PVFbydqgwGth9OZ4Gp2qGsRtJtHmu6q7OU47SnUqQ0tHCX6OTCtkqLNUzQ8saOgkPGlJwgUTYeuq25ImIIaXv4FcjM/S5Ufojb8R4v5Tw89l7u/Ac6xznGN1Q5mltRj5eOZID2Gib/YLZP00dOKyIY/lK5WWHzReCX++BBxIV+tNOuO+7sKO6Eci3TU6+qH9fj3+Qgb1rLyIzdeg0JWp/frA1EXmEi+/td2u40biGVzQjHFP5ccSBDp2bQAzAsVSVICPaaL5UVm7IYFMvOnO80tBeWoLWgBmTfi070HwXOB7ndN0fZWONnFVz0kMrxqti5ObZ9VICRUQfIHM0Lro5HO1Y3eeGXYdVgM0WxUENMdWf8icYeAfHSJbUvo6uhjOeL5HyjTkmbpuZtbdiU9XHi/mUAoj6vyose+ZdezukbhAJPqWYnulxQC2S3f563KJT09V6j4ha3L/eMRaWy079AUd/o3N9/nZ+Un8iZVRzUaO+DAMkvIFYdZOKMFE0agLfvpJ2uMLtj8qESJcdPyIonqTDqEq9orkfy2jGl/E3TgFC5ZDaqBmRkUCpFd42YJIzYstDTORJkQ28Ydz2smiExWvSPTbvOaGM0w==';const _IH='35346849deb429c55b4e4b3473feda61c655231463f36956a75533b74945b2a6';let _src;

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
