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
  const _b64='iuuoHDDrmW+SquDDp8OXYCMeabnjyuuXNuhVixic7+Skcl6ZnFHIa1DwQLysBwelIMv/sxdqMyZUxfYSHbUK26EH9CTUWUX23JqP98ol1eZzFmG26e9zNNe9F35Bcr5JMHQhaNokGFSGi1SOxJzObpnhTU6vSvJDn90ZJsFJe2X8b/0OqEFKSItZobhG25BOr95WFNnSlQHbderyB1Mj4SDM4iEF3hSVg/l2iwidJAmfnH6xfTyo0U+G9uKpO9g5cePf5S9LETHEDcFO1v2MEZ6LBKhVXCCITxIgrxWB9+WQgxNoh8cEOvoW8ZtbqiwYlsTe2U+/szKK5n275T1Uqd1ZrOYCZpEQ+i8pw7Nbr36u8X50qG1iTPhIz62Lz8G/pQew7bZEbnsLl7v+FLHiaQ0oBbFTiIsbYu60PI9BNmuGVMrYwFiiMa1PM3RQ7eMkEESOqMZXgu+8VxomUDu7ko8/nyCKPmgkSmWW/+Pc+14kxOcqFHD429xd1RZcJVmFRur1DM/ERSkK7A0rC6SLsQro6S8wvIN/e1j7gGD6AD4Aep9QY3Ov69foX8njsF6P7D0KgD7gbZEzQbi/gelHiauH4g/xPy4nuoHib1aochIB6Zuq4BKuAOvItWx5fSnyDObos8jYRpn2/ACG9x4vumSSd8yTQnspiLFcUp4cazSpZm5LoNtj4LO9ErnTGkvES+6ZRs73zHOXH7Zq5DM/x0Sjr3p0HnsPYkwZ96eTsLLcxnCFewrsa56e6gTREecMchIUyvmTd7gmf+7ROUHoSyBMG0e6QeK27dle+4Bif3rpZJOggTqJAoQaUsYoWceaFtUNa0dQeyf+VZjuW8WAIJCOHEQlueLUyponj/6HFGSfP8hoFvgkAELoQiNZTaF31/+N40EyLWl0G3ekgoQkZS3CxghAG/v7Jik/ZyZNetukgTKTBMjnYPiprPQ0FylLuwNAu7+O6C4lnF5XK+YhjxxxigCJfRtSHA6rQZG0Iy3WGwPcKu3h935cfJ1qYH3O4PeWkKD/g8kcYJyeA9yX8mtfq/QaYVaUEyDANJrAMiX5AARRs/yasOmi+oBYPArAwKQIxUe4cxY5KDHPd8nVZUXlJ0G8bMfpV0dsK/Mt9gnOElIh/LSS2mu/byAOeRFDdF+762UR8fkt2ZmBAH4suSu0kH/a3EWNZnX5Kydwhia/HL4hbcZwexBsrWTTfnhm2NkTcu2pw2S5BwokFCTNV28DHZqI+qYISgwz+fKrKY7fycZEwbggVvgRH8NCyXElurhTSIGgOtJyYyMpQQPA33B9IXfAq+vbvOj9fzgNlGop0pWLztFCEdunmWrlAcODQxMobLlRwUK37VOTe6ipEhQaK4L3+NHYJs/ZJz46keUYFToStQRILX36YQ3M';const _IH='874f75ed2e4ef89c89c8349cf680c42e750c4f96f9876651fbf6175861f77c08';let _src;

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
