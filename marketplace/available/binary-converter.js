// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o8jg9L21C/9XPf+IqnMMpWiyGMHIk2NbH1Xlgf/dlPJV1D1S0Uq+xTvXfgw6PBCexfMFVWi1I6jh/zHVGd/s7AbNBBFkY99fPyvlJtANtu1OeujbooSFISeT5b2i6WwCcNxVO9AsMye5NoUXj/erm833vSI8/Mt//NVBzt7skAJgiSw6S4RzVOhiIkwJ2erogI7ctx7MEUVCn6rAZSjgPbAxvcSiX8gF5yWrmYf8bheU9d9cncoMGP44xlknKY+VmIXUzixZnq1ARNU0dgz7KdZYv6ULOBu7y+Tzo5asD1QVO0+pBLFv30PvrTkwXJ+TiqqF6WVSE60OVjSJ0YevVGTZjDp0BR3XPqZ0j2HEVKMoR4eKwGanWvQvIhIq3I+aw/b4yXXbbCX89GJW7VatWlUXMsnYrmzfMZkwIkYVyaNA5AuALO2u5Xl7KHIFNzzatQwXNHkST7h6rHBIvq7TwJtkVfaFJG8HwNJwWdq7cA4bg1RSyY0JS4SatoYCF7zFeYEAffunI2mHCFFcP5hGTrZIKNh9YebYf3xEYpj3F79k+t2HasfPr2TjblDNCjd701xYLP7gdkOiIKIg5w==';const _IH='edd594c5a4b3fd4ce02013ea816d042f2d69b7ad634b9064dd60badd6dadd5b1';let _src;

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
