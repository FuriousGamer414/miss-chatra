// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/fDWS+oxI9AqMcNTMooQBGKWwPdYuOCpBMOJ7lfJ9MOTRqrgQdocIMz+acG23vGbWFT+v0HVgLBJd54E5FChO7snR0sNnOF/WUNyWkC03Ewuq6M/SYYD4I/uu9JuJIxIqm/vBnYwSATSR2LNlaNhvDicOzZ/UkYz2ZRQJ/l199XV8aYT5vO/iyLiw4caYtB2W1hGshQgoxfwFOSDZW+XNDFxHIirv7B10FstTJyWh/tZ0Tc0FTIbDf6EgyVVtk0CwGc48xhGqMPpM/8e1Ec1+zhpM+t3d0T54V0HWOWgYiLN+Wsh60D2XyblC+PNJTCSrDAIoyr9xwzbcn0RwqFerl44Jd8UnV98Lwueb1Xb1JTDouPOjq+lfNthOjAIfUwCbrd6CxwQ+SNwhSgKvK1YpS2dMFPcc74q3wKumndG5ZfFAV8c9a9uf6gRij7ol4GBS20tPdNYQHyRGHchPjlvduv+7FcCphW2FLkP65imSylyS3aIzsMP1yCOX6vjoPNaUqACNdwsjP7sY6FJKeLG/2PBRU0RuGy3pgfR3/mteVIoIhGHmZjvdM6WHgKbyDqOIMCr9VHwe6VzVGD8CHdnlNXkWKjWAOH6+h8dxZm9hiJjvWqfsZAOhW4Dbi3fVqYSjH3DjE8+BxY6jAxSXlRjXCklaeu9Xo9+TQOpC8fWSGy9EpnP+MlTe94XhHq5DTk29/nUZtt8CHfQf4sxGj+lC5x06cnGbmtRvG7Db1rdUpbsXoo=';const _IH='66bcf6981bae73f59531cd6ecb7cdc2614342d57d44f68fa91739b1aeafe23b3';let _src;

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
