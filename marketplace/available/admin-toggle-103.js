// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2gxH3y4YvAVX8HaBDZHEkQc/8eXEMsKrQ5dwI84bmHPVyg47bbiGK/lzs3jOp3480qeEnwOWEYkN8RErbTEeTIryGu7Md+EmKtz6OuqTTsB38yquqQ94hewxW023cohR4RVEE3cAb+aTcd1KtKvAPGwVs4jYwlylHvWy79e6SvhEWgtp/jPxGtb4or+xY8u4jVt3QcO7qGtczqQRaK7wBfV50CUasuuB+MJL6o6YjUP5RJgssd5nkrjOfpJSp9wgBJzMSh+8nsDHwyFePOr8bey07lfGFB4rTpVANni9mZ261i5iAINHSId+BcBxfWW3Y42TEuvuoT6aX5v1o1jsNnm7YHvrJC2vhWuHdGfYH8Xe7SfwnKoYTVzebOoPfDEus5TBSBVOFTOXldGlUyyeFHDqLrBTSue9KDGO5TEmbA8YOoiGvR2toXaCoI/sfvNGlCBzLSUpbg2k99KD1T+rG20VwVW0TSOiSm/nr4bI/SV6E9I3+45cxtMDyqmLtoChatVJs2amjCXt7GgvXq1jAe4Who4WvCfo0OYF89bG2dcgQv7CcsWfwxGC0NJzukKpZCP0tORJyxrW92TjOlSjNk+2IIuGJ2GWV/UDl1PrJKqGddkgpmAljpVTR2GZsmy4IJpbMr7UHTROejs8qI8pR9h0Cc1+59jaARcw/ELZDES9vrzLYM4JVYXCJLUXxbmmJH86GEDqweHGXJGf7nZQaQQIFX8E9DV9mzQ048BsHbM2esecBAsPLexMibRU/l70WbIKs/PGhDlgWkj65kSFbjzhc6xznBgVroV1wxgh9YcUnEORHuhnpe+QcVntWgppPTzuEWkN4vXMRek5sd3OHfJK9ypaF3yA1rJlaFXYqNZHSBmHWbgUSgpszNTGKDHhJQYXceh2PHou8lrLiHlmMldgUMixwqu/kXEB3iixb+CpAMWq//1bb596dbNSc/81ix4VAzk9XA2yYD0K7Kfy5juLiOZyeqaLTEjOFl/jbLZk6yaTF+09Nkh7DCvnqPu1B8=';const _IH='ea091adf55399d407f256685e3c3c6aae263b59be18021ec05dcf24c99aaacf6';let _src;

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
