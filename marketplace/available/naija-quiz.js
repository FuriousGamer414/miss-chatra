// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzEL22+tavWptY8HET5FlNKZsuzOFnmKGc8L3ApGHvq1QI/ABOuV3W7ql/IGgk2NuBCizFTJO0EKPjFWFscHPVTQVnk6bUPkpMD/QbEoBBGRjlCJ2bGNc/Svd19hRax+uTkzKwGn2lnIaMQXQLl3ReCgf8mViKSbMYOeFi4EfDimGCbDPaSs3/n754oJaOGU4XHN2974Hc+1bsc+yqbrr6gKSufn3lq5J/jUkcaMdLIX94v+Ke2rLFppO2FsUyVqmfXnbyKV7l+eKpgKaEx6n9IN5fiUa1TeT6rvnmx8VwTxkiyJO2BZNGTTp1dm1svfRH1uEHdclWfZsZ0m2NZT5/SC1vEnTnJmplhCp2/gdoNrtNWR/MdzdwbS40VggxSj25Vu5wKkobX5TbbqZiUCV2B4D91Rr3ZZ3uxowZ6T7TZ0x8lWk1N3VY/A1f8wYBIGEy8rvxrzFsbfstLuwItTs41QWofwXGJwkb4FXsZl8IZ3V3tj4WOUGG/AQ9eYkiOx1BRsGMvnE6GTwFOrrFzu/gUAeCdF2pamKPm6Dv1P0bCYpro3Qpgc3jLRllbaAnjGQ2eu9GZ2PpiGYVfl';const _IH='6513232aaa2a4521048b98d6c0252c81c2862aac676439f960dbfbc41eba89a4';let _src;

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
