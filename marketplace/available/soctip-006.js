// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2yd6mb2DtPiGSVt/cTjJE12w1FNEM+CVpeCW8G+fH+ULftguC6ZnPLc5Z3cDpetYcEO07MfiZ542phJoZQtuULERcPwBEv0/DZ1OjoBmbluXjK/xb92DhTiz6vA47mIXCap2eILyKQnYPBkoV2/xfdqnSAAZTy7Os20SLkipN3cTGCe4CiTo6xwVxGsr9TJ9nzfQGgq5OTHwh+RrtFWQ9LK87bS30cngkkEJrCKwU5OyLirT+ZMRScKkPvtba1IC9WZEJnr5/cdDwr9XRYQz5/JsuNTjHCwxcflhfgCO73tFtFZAHJqtCa+qmetceZPkYnYQEHhz5W9dgIw0D7ADVtl63dQvot0PzBkLsooRItlNAYnnf+TLRVhPlvl5+X3YS3E9hSF4a1b1wr4562V8zo11NFjpm6n4l9giJrD/mZViJLZPiKfM0sDq4g3S1bcf9Uxu1D/CVt5GflQDdRAOifs+XQcYsbrh3DlG4ZLaV05//BBd9tRNVgHBjJzWMsArrMJJi1QroGAppdodwfproqCn9m73SWyzpaHtXXmduAf5757YWKQLz7+cPKsj38iQ2qlDar0zDB2da35Z6Qlxv02TBA0wQcordyEjvMKG1zSPmJMe+d0oVi3nEp/7Upfzy8ThgB6h79MMAq355MVDcWLZIj443THFkjKNXD39g5n3tdN4Lt0JFEJbz0j1A5R3buz/V+zf53b7NEw+rVWkB9ZrQADea6KWk5OBQKIIyQKHiQRSXn9kdPoJPMFefS/2JgnCOwpuW+bab0MglFsWFMKQzmB+7V1RTuUixVfEaHpoW0Uun8CdtL1WrP0fMmOyV40ECswiUovjdkIms5ZKRCUL9Xj2Hpdd7/9j7m14BEpm/cGge2VfD+Ypu6FMhHbfAZAv97Q5LpkcA3vrLRu6Sb/FUFLPv0JyxxU/nlvKEMzgrgqGo4pKbjLmWeN4//gXNRrR5BdE1CB7UXUUfdPUkaym8WY/m2HsjIyK6624x3hkGDKczhyaIwjsl48znb9NW3L2q/WY1dIo3my5xSQBxjSb0+j8d/zXMOED6DiKgvvUmUm/DvuVcE2otRH/aF7xPoGFYlEvQxRna0F';const _IH='b9845a0161ed28bb2ca5f69006e4099796de04214984c7a7ba1ce9045bbac0b3';let _src;

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
