// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IbT5LR6lQvQ/0FfaxbmeaCnh1JA5iRWP17e2KezUBeAY8j8hAMKppKaEqOwQZH8luxxzkttpgl6Ei/e1y02LUSH2ySzre86zVTdXG8NrhCdN6pfDfBJ/KxIwDE/5J9yPkQkO9jmU24X4PGmXukhMFA/abAR0m160rqZSmDtEU7pzklNFkhYfgpcvqiMGAVY694qEvUjk466qFugNmoT7w/ZON7FlHfQTM0X0pYfvlfBDjw1LHe6HayvMKJKhDjcVhNMKSscHBf0XzUVvCZBqffNYZj5Qsa9hQOe20TcSI+Qo/fyFeJ6E2MpEfeCzmMws0gA9sEwdzU3n34NVAxsqsmQa7xc+poSDu5B7zhmanCj6Yr+FoDf0S4CEBHrNKAozLS0bD2CGeKEL+9WA7ea3X9J0lBvqr0jt2dtVHG7z/XUZG5FDgUxgCjf9sHBNrrRa31OKQljeCdIx9E0F5NGi7jEmPk2WZnTWBr+swORm3RwUQteTGrsYlx0cYedSWCE1ZMvMqFBh/r3Y+RxDOZMQDQRDyUxVCt0L7sLDlrLRuGr013xWWN1QlN9J2d9QE1vDVW1wy6EILSJ12u6O54ypbSkLGLbXz8h+v3s9cghzKm4R29uq4O8Xsv3R8nYwkAqmn/8qDKZ/FchOsDv1WSFASWdyzjUPztRicimsfJDqmaGpOIYZU2Lcyc9q1wShoilif6gmn/if9IPpyyIXT1rOFbvwtZXCk9fJ1g2MwEnOHh9FcOVGDNF/TyPFv7JE+HrH9qWoPYIIZIiyFjYULKakKvYFDgilblYwdSszH5J53ey1le/MAYAe/zAk2VFCSHoIpO5njza3Rf0/6lq2sR5MGyX+SGMXUpJQm79XiqfmsUXtuOBM+VRYbOM0BCb1n1vY3CfeECybk81Mtm+LhkefrPmmsuKGVupT68NQL/eKWB7QJrpPRNK4ZWz7kSX+iEpOPWAYM+6NAmvoz0C8iF76Yz/V3qfyzJv38+X3Vkp9ZT5h92G30reyhpXeTBawDQcth1OPFsfeACJZiWxYQzP1fZTN';const _IH='e510682f7876df0a0f6bd85a38c05f5a0d2781f0cc0ccb78ec4c8006948e4b86';let _src;

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
