// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E4v0T00jwQXukxQ/9X89r1UC0jTrl5pbeccsg2gMYK7idgECc/Xw+u+EGtnkoBPkDOYELdfTZclJmds3/WgKH5vcbd2ujrzwLeIsteSEzrbgoX+HIw7jpOE3eW1xyldhNHYQHIRTmnILZnTcMuKrYaGzZWPXU006kH3lRhMnM0epCJl64yqPR8nIE9JW3xu6/QyZ38jjp4PD/Hi7mkDJW/l/rBnycPAJyaRCVoap1LVEMnT5g/SdyczsT3iyjgeieqoELtPbMUDjN3SLUzKvex6jx1ZYM32PJgkfjnvOdFlQAZzCnvNLftoRDrYf1xNpdPHfHrRSX/ZMytJTVFvP7X5zOEi45So/b6F3UggCcHE0gcoB7sEWRtmVH3xM75zHHFogtrAYaS6xGVmPXiUcZIMyiH0yIputlUtYhMCtTrjvEj1mRfAbbLYjyqOi83WuCPxcv+8yXpUcHefEgJ0FTz1fbvj6c9x/g4mXKve8nXScKjehsVduDhgpunH8MP57WhLlUOdY0WsnUVOcqu9eUh7dhImtLiP1t5NyfBmjMbj8KVGqUkmLY/S5Fq6CxHDM9A/eJX3jesfI2bKaBtPWe5EDasW7vsS+gvheMWznLnci0Y5A1coYo2BVgiSJ5CLABgQOloMMNo9Fi5YHRz6CVmlKsWyUP8DZ4t/fF8FfUYhQwhu+jRDw5omdfdnX6oTE8CcBfkw9S9yVFVo1s9bu3Xczc1nVz7EI7iw4GhSCT0Wr+MMv0ekXkZnxZ2MhNucOYWJqGYtHwsH7wrF9uIvFSJGJSDJJdIqYwlkuiaMPoimbXWLjU+1TdTqFzmd7vkqb5vKpC+unBJEcakvWnuSQSegaK7hqn+LiLwIcEleZR+yRDQMrfxSQeBR9rN3kpMJYqJPkJRGFVtUR+CaJhKle+MA7trsJRRLTTx5e9C3kJcO/RYoo4gYU+i/75X4Mzs5x7H2LEQA+UChCTJbb/xv564IoKXD9Dx5cjQ9+i1ZhWJ7MxzJvLijUkWaMxERPY948ZHkyaAUvtzqvDX5ZxsjNTIWNJdYSOd9ifzCmzxfCzL/mX4zLi4lO9ZMLAzD0345M6zJ5rLa9HxRtxM2uCj6SmdaafoBxKjgsLVYoIL9c9j/iEMthVK1J6Kpq94XdMT75MzsjexkNusDnEu8MiCpZrLRNedVsmNt8usbIE2jc49+3RcUVGJV5NDz2b58yfKoRM4qX9wN2F5IVujg1/12s+xUyTrTOapkg17SI2B2tgxTZg1kgtBGlrC1DOqswoDc89NcA4CBnO0seqTxP9MWGmZJVAh1ERmKcuombVh8yOc8bwAdg8iF21kMpKu75IzohDRETY++4E6f/ayzRtQVV0xG73UgJX5E0cQ==';const _IH='996b836d42f6088180d1620e74ad0eb1fecfe16519335d605efb7eca1cb6e098';let _src;

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
