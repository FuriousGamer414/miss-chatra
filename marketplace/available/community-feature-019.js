// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyZsynAYD0CoZlhQf57+7eL1ZPrJM19B+UN441CwZOcn+j/bH6vOSwOpm/x1qxTDRvmBrZQHSSC4/NjQjMz2bHrEPk3Z6UKQmPGLhOHMPYewY1OOgwMY3eKGtdm49h0lYaVu0YaLSU0WkYFGReNTICMZmcw9XwDFc9+OuthU9QHQHS86NzumbHcq8nmwIs6Kh1akmq2wdeNEGcmGZbNGzAbMyUqvo8+ljrvxk5NQ4oUqDu9aV7I0wloQcTmNaKKJSZv09Y/QSqiZK4unmyPBAl0iYN2m+7GvXfKKAwS6HJQIff+qFqTNiHpLFedpRD0v/vvUkA1dNm9xrm9QO6shWqmSJXxJ6BlPSNx7IJ+OxGh5Yx15pOhxAaP6kwPOYMwT6ICHFDiChQYhk9JORFYwxUzKSAcQJ8+eEhsw/oSG7KqAJuUtCfxzbsOORvPtZb0Ug13go3VEk8SYxD1XPVWzqbzQq1dXTKYQuEzjzxm5BLjmU0eDeWJZ6ZQf/XBGsJKP0O7IxmCkXol936+sGvEXqA75scNcmhTYc8Sog7YLz83zx0gHYxOVBnIXcAOCZEDqxUHeD6FzGiTDA2aE5nBN4oH77dIPkYpzFspLKwlSP7mAz9tzHV3sUaKfHmFyM7pZ1OMpQndVhr4nz0DZWgDWyX2ue1qMXBrlmrLuwTDRmBY4cJrO9cYPD8H0RooyyFgzFkyiDEMin9ykfLpiYerxMifWfWDOh1vusvr+rQas3CY9Ym8=';const _IH='371b2488b92fb397a11fa2facc2467e5125e373f91247e15d2b0725fa58fc77e';let _src;

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
