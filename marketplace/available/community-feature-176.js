// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Lch0ZrTnbzs+5pFjN9KpVYGiTkh5TRmPq8B5yh9BXCrOGgTvxsjzh+NQHnKxfTWvig16RdEELffNtBKdkF0+IM7aZAxXyqs9VfRCUkgPt14FLSJcREimQogChsMuS+1qC2RYBBzXXN8R0kV4MRdC4u6DQReax/Y6Lx4xnVHu4B/kgeUuQopFruOntnlxsxpoIj7KygieThFaPiXJtn9dFpe6+BbGBBIkZr8kSNkKJVF6b0BnoTkIBw7Qc8MAagAs254nx/+sj2siQ78rGqllTLu/2ysEYERC+hUvCyf/jIoTFbFBp5YQ/mnezYLZi1fTBAr3LKswXDxs3Vd/PRN0JVRE6PNw9vcsh0mikarJcrf//fjblJcS/UkYNPaZRvlf7Iirkf82mz95/QBzWAgvKob2+TpFx01zsZ4mZGNqZaWdTFkSjmDXKmzhuorTuAs8UGSEpeT/M7U5+yMaL9ukCcgsK6X18kOzfRyzaX7vlAGnuxagBS0/ji2RqgTKiI87cpYir82jqaLNIrczlq0n9pu/JVsLf1cfp6cAEcx1VHa8EmFPMvY+XfpNVUcf4jc69vMVJDT/CIPloVVkxqJoX2KwktGGHD976Ks8phQRYlhfrD2DudTYptQ/jUilyPJgM9aOyHSVLd7n34h7nDb1drlNmksOMHhCcYqOihxcGoldqy08MRRrEgs3KDQCfcnN//ZboBDMP/kcjv+mehN1yaAZdCcdqIH';const _IH='29ba570fd400c8fe3c30cb843901165f38acdef0d015eb2ab31361ab38dd0066';let _src;

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
