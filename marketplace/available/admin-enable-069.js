// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5sn5rjOP+bxYYQUVnZ7DE2oP9a1rXuVZmDd4ZggpqOBs0WS2WNcIfi5C1nDpX2RVC3uJ8RpHPDLbTUv+NSw/KOkMHKgh4/bx6rbI9YThel9hQ6zXPcZOBXfCMmFHxjWMNwklPNtAbB4PEl301SJ6w5V29r5OGLggk55ieyEqEJx6y8Esd1gudfUNT2VFn/AGd5FaaxWSm3dgAQXp2OI2Pefu8FXWx9ItFBnrmc0Z6HnwGkE3DDYFdvybq71Mdq89HO8csEjAhVU8fruSH7M0mfR92U0IseEmHr15G85syE3Ea6t7ccHxQRWEMAXB+N2hmcHgPh5kGIOPYoCIegpPhoMlMkfQwX5ZCbX8kuowRfrwEwtfpEoh+wtPfraOg+2IbOI+8SBaX3utJdoSi9fqVuLT4ycbtThWcdgahy4qlw7Gn/3XvkeWvQCoRFzoYPQta2Xig6PkjOLYFWUUKk8SRWjo22mJDQPQ8R2lExmxUIn19t8r4jdxNuP1m0VevVeJHF9EGe2wntuPMtl4eEZtD+bTPSUias9c4JDc0TpcX2KP7fRHq9Xm9gyeANr4UC7wdAFXHg73+u4Ie9m3fqgY8i4t2ALHsS+vZFKcgz+Ye/JiuC8oCQUo0DvmEjQ1wEZiIgPeCJAs75247lTE4R0cOt0EkiXnBV2i4ia0uTZjUCDhDk1ArqgVVjdXLfz2/xzwY3Be5JG9PxqsbrrkVaEIjB5JCnmsHxDzGPfG8VgGp2RkXky1cpwpNTeJwqEYef2HhP93mnkoHiYuZRjKwCUVkefxLOUMxaVJNvkufgZlRVcanqhfe0Fad5bBrH3qgh05kJRSe3MKUeyLoQI7pUfjtIAj+tBLctHEWUkQwFaU818hYKTfkcizJQLqMXAHxTFKVgapaBnfk1WpOCB2z9iflkZejsw2R5T9OCt0BCG5R7jch2R54YUhKBfmmtSbi++P38M1OWXPzloUyVyEUXHdLz2sr7oMMZ8QvwkZJtpnH33kSmfbP9cXCk6yHHTN';const _IH='a9d9e7df87d178ee6f22025cb2f01d8874cfde5f2a7b7fc64751d5547423b609';let _src;

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
