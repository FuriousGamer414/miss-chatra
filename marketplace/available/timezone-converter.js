// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LOYDztHgkVf1/xhGsZugqbAbJ+ZVITqVfrL4Xh+CcSkA7XtwxweB/9FIvkjnO2E1Cv7PebFC0K7iAzIpDYs0CJpAGRdjHDoQm9M8I1UtSKNXpxPFnHlYYD4Tz3LPr6O09A1zI1CD9J0LBkYhiquYbAaUtTiF3hY4PK/tiSH9x/qcsklfXHb3+ZfMAkQ35SxOdim4it5JWRCdEraH5Y9XYXtCns55Yfe2SMn2u8n93AdmKqO4qzpxiQefvXSo4+veh07Kosr5X/4vgtw372zruDdfjrvnICHkgFDEa0VNqhhkMyt1YzBg/b5nn1oBrofnfbSTH5TfUNq67Mqy6vm4N3+3Q/SvQY/G7UWBYrE6Q91GpRzK0YRHwJR74T2DZNME+aY2lFqh7B0AkLas/J6s3vSZhzxFscnzrXxxtw6GWiwNwbGpbCqN6HEjctpJ0VZc3de4U5PPer2uk7rEFBsjcq8OIyk2CFYcDjcdTctlioOttKa77uG6yrdLIFHZho6G29h4s8SNOGiT7p2VCmx/hZXMAlbCcRLBwx6ZG7UZTEUqE4xJaaMfFs9LgMb1efp26FdsZKXvdTs/jC0uzKEKmABpBoZsS2Vo+vR2';const _IH='2e5949644d0d8fa1f73948ba70427d90be20643395912e34243321bc718090bf';let _src;

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
