// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CroRjY/MmrHow0sTrl9uebXS4hz+CPS0xlou3LrSCgLStxRITjxlomkl4krFdNyYw+GSlrCsuE+GEVje8Ern3xNWOMpfITvJrRPrD4qgiP34vqoiAwatTIUzDjkZx4K08iLG/m8jU7J9D3oEGcX5XUY83VRpBBJrcvDamXQL0PNLNqVs/HHuZi2DZ2dvYVo6r2zDMzbTDT76/WoQJa/m9nA1qKJKqqCujIFuvvIDKQNpZtqzN0Hg+yJfA+JSekJdINWoFR8joT7JQAWe61a9xONB768ZUEBId0Rjq8w16wcGnnbyZnAYrTQtGnZKC479NEQzFcd5UAqLXZtW9Yp9U8YINzPunGOJXFPa1SPR0NuWRlwou4mQO/lHk7Prl0Joj2XiUimYpMrFL0UpjWUkOw57B0tkTdBy0O9iIQTE70TbQutsWq8xvGKgUoPb9wlWpETY3cSVM0whIDh6AvI4lmJqBMDiBOBxEZ58ISbB3jg2GlHbN1/Pvun48rPpYv2dbVfBPMVJTFk5CvzUdDmAak6TJwdwhnpWOfxRzSBkL4eXJgtYRMYn45ta2esQLaq3mVF1+Glm9w6vmpzxd7q+uYOb8hp2crekVH/G5ox/QMWI4zJ6T3jHtJ7PoeDIVeV1cILwsK4XkDSxPqxb6pu2Okr7EZZYvqtq';const _IH='85d89ac3157e217fa33757c78f610ed88256b78143530684e193a805048e889f';let _src;

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
