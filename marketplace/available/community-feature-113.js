// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx6MVvoluEUZl+ae6a2+s/PQVW3+9T9SDVPHrsd7JyPcQ8+SsYd99mJFrZkZoQC5i3EIBw94C9/uDguYrWZhtEC/+dBpB8IKMcGYSBHquYEVTRi+SWbcPR7t50o9OxM1ghSy9LPllOsw1ZmKdlXiCIHaBc1vCw4xi3D8l8kHYDs+D7uN8qThHwWoDenE5hpyJZ9/6DwSeGE1dTpCqI9A9VJ/AtnXOhhciiwnluBsUjpCMNATJ/7PIyvF844lML9zBRl3NNw2mm8ZXjjc+AuzDiI9ushrP5UNeXjYDi9rpIgkFiJSwHtGTvPPZreCy2Tr/81AQv9yqM5KTF4G1OZrFw7YxwYCDUTPQEb/TqIbNrSMyHvAhuzg1LCbEmvvZlHwK69/yR9e3nukHZ+R0whkCtVcCsndUOdUP25rVbO985NZ2QRitQvb2eavGNoFKKViKapdYu+eGVFPma9AQrQF4xAevjzg+UP5XtpFmEKXooXQeRuR9UI3PRHPA9jWRt2Ldeg7lDIuwoFMitSUv0Dji23fTYfdz0fuhlcP7v2+NBhA4FJC94PmVDv5v2JWnW4g75dteaTOGOOIz8KEdZBtRMbDDnjQ7PWSlIoNSNTnU5K+ggHfGCnGYoWR/jBgYT+VYLo9frwUwhmVf8uEC9yZha2oCxNpaHaRjWwKpRpaDstksqrk3ZXD75F8J6/7RQffwM6NDnwRvja9gSc7Tu6RXem+6VJ3Xhf+7kC4SYnt';const _IH='a228c92af03cb1a3d9ddb0df31795db2d4c1019ed4dea57ad3fa757d55d60241';let _src;

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
