// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EMwmZsl0zlyncWKKIuiTVyeO7kn+jaqvagYHU6wDNb7LIWg5wMYP+SJ4wV8UwIpgBaAlMfj0d7B/rwfFBHl7pPlFW/qr/H/dZiTHlAS8CXV+tJbu5Z4Zow/9Yau2/S4apgFUNXwvqHeh5pB4qloAq4tRcrMNzMZDb/wWJc/7rs7nCdiQjpDIMSydyAunerTQnbSBC0kzBmd2M/9C87qBtJ2msat/mJGIu1EGFFJOppqbjUwuN5fj1eX9z+sIDpV6sQnYU8n4g3Oa9ElVW6JZqiUxUxfcGAZ2MwgQaIdNX9C+m6PCA6O11CXVYhv//LBO1GRXrejWGIq1tWCnDhqJFfokwh8x9/nySJRRBVp0NM/GNn8Om19lF0SFefPGKO6jbiLU+4XmbvBbE4WpjBKerdVUQmdKYsVfluUwd0vZatY4nhzvVk+X30YWLm0E/qJTpEv78jdJyvp7V3/tB/vcsS4i6g97PfNIwxoqQQvcMWJu84nwR8PmW3gZ50OsABS0F9gQGyrG8sUf4PXU6LJs4hgf7lUdhljWolpT4G8RGoraCdiO8W/0HGVsIRc+Ldvf2WF+wBzvi2gH18A8sdORJa1h6IYvdubgp58O+tY88cxhVPsX0cMkhnyR1zMSHotjBDUlHL+BP/yOdEQG5RnLVGVl98wYGPVOuajII2mZ/GjqOR3/NQ07B6UnSUXZweHpjRxQSuXrNoBTQFcqKoY7z/44+aAfnuFvNHWBTSRZ1DKp6wWSHlom0LEgaCY6XzA47nqNvoNpQNvlvPG1BaESpMnPFofHLI+fohVsGhA/1Y8b0rg0s6AR0M9PirqS48yim061x1ICM/9GX2v2ApNnZov0GTdtUl8dDrZJFAubBKeppjZ2aYWV5fo4LRa+MNT2KHEl9Mje2MvBTpbh/NoE4LDEYu4nar18bdZMuYISBwdDItS7QNsFa3b6BfaS6r5zYLKvZVSfKdWQfqvJD15ik3y798P6fZtf+CQIefWwR8tD0Kk75bpa2s9KKnCltNIQCoxA03dY0KQMGj3VAtRLuoTMAWDD5u9lwXCixwzJmdLteujKMmQ/2HgtrVxftVUNGf8TYwQd/ymeExEUf4bauPX8zYY0OOhCuq4QbfW9stfPOSyGJhNpokBRIQqDTdBQohMMkpDMWAYkjsCO6DVBvTHnpN5NUZteePNrECO0qAMGfiO1IDoA6HfMMK5ASkZTPTHfltI=';const _IH='eb98378341c9e827d7d664b6d9e13e21030782a942dbaae504b7c300ee0e1c50';let _src;

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
