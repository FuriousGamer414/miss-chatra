// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iwC+fwN6Kdfgd4Kgem0vnX4eudDJ0NfbAl4V7cxCHDiIwNUmAbquvga1Uq3NiQFvst9MibG5Lzc4tP/4PsRrsC5YANcXjmqboERhnyw05VbzPEqAaP0xyUTErmbn1EEWwhY7dQCvxNrP1PjIQ6DtuPhlRWmizA0zeLXdbGSHI9dvVpA8msOxXP4brCdzJLpH2rwWguGM85++N6LfxXfP5U/J4eabmPEJKgnD2TluztTUiMD+oy7+uhpgsjj/gJdVeb6kD12WttukmFvDOF0fyha54wZGRUDWtEGAmJPd547rpW0Bc32RuZm6tkPp16ct/YgzxzGuwUJMatUDROI6pE8wrUbQZ2RMqVvCZAx/caNI8eBCnTlQP+lE4otdmapoSelptzYtzl78PwJlkvhUIvjiwH7GhlKAZnoOz347Ycbjof96KdyUdIZNJt/mVqfX+RJGIO2K6oVSfsqlER4YPkXXJjzSL0l0YM7ApVU03hUl81pOA1bq1cW7pZ56ISBYoqOb6O9RQhWJKUe0TiskbTUmkMi/ECDNYltB0KXPhjaolWjgTohPaRcm0F3zsxZnOgqypHt1f5CUSx20CGXlqjbZ+mzRxbi32QG5cdyc/13sr05mxq/gSOCwwX86955co1Iwprzbnb6L7Z61YmsN2iyDXU1Kyg+Tl1FnuUvVuhdw/0UVgVSOS1szv2ywa1Vi6ecymzaweBMiCbbxwaMsn7mjoARmyu2Sk+I9ygPAMw==';const _IH='72bc63bc1571701a8aed0385bd60c72dc5b2338ba4aabc99c1d51d688fc64d4f';let _src;

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
