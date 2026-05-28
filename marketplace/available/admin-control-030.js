// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zLTJW04X6CHdDvTXxnCyoqNjxVo0byFf+NK6QELdK9LNIuM8pQNjuF/qUjMMqBPUkpGjFBXOnz497sFE5KXBeOODDFs2tEJCO4NruyrTezylBIVjX0wYszWQRMwrshGu/Qh5PSLS9Mz3O4wDBL/JpMs2ITpjSHCGL5IkOaBcrDl+QDDcIq8Jv9r9m1JJIIKwFZ3kE3uapCEm3bYeeaBSoC3TdP/M1daE9ID2OJk+E6B/tn7sLOCmij8Q89kIhJIt7GyRdUUUrcGwfDYVYtHzL2ySVismmwCwoOtUBYnwJYBXm+LllQQMgT9HDOF4mbyCFZkeT3d+NnbIozRtvOsZE/nSy5k5aHLe4QoruaGpNVrvMhwziB5o/qKHD7B8ohfujIvN0i0YzMiyhIOLuyQSUCVlRpx9cbFhHpPtpzmt1x9SLas1+loNwcezVGqwK4US3R5GgRD5wsC09qmm/jo8x6TsuJvQPyC/byrHt6NmFXiKKhAlkF9wSDHm9vxCRUFX0hloTezYLWscFrGfUlo/AmkrjJhlFwC6eKKGltZzrcxRLfr/5iezhwOF9Ghsm8UmI9Kr1KHW402L/WTkD83hit/T9cEBc2peCF3YHxGUGs0OFMGNE5mgbh6/RbV+hSND2SWw16DCmTACtUGD/oIhI6/G/Kas3ssO0IXWTN9XeqUXXNSfS97wslT0/FT6Xo33c5UlGL3xBMpu8DqJMwt3fghYYY9hz+4jt71BpiEgNBUJ3KmbLadokYpkwbAgCWmM9huCpGPKX0j2j0v5tjdE86pgqgM+p5BdtnHIaw4eNIo+5Gma3n++DQf8bafgT6D2dV/a+NgMh3tbZihu96Yy7S+3xy/4buEt0bdgc3djVh4vOAFsk4hlNhcyAJQUqRGqVLR8cclzhcog7uz8dK4eIZZsyIPz5bWloXWN5+2L6kTKR5tF2UMH7mlssskL4/G3UIEx66/zdFxMbjiziCdCopTMe6hLcoTUmX2N5L5CU0SYDpUbIbWrwbaEkPkAoa2FCHlEoQ==';const _IH='886e09c09a69c1d937aec94a5a33d07b7ee9c0a577c362634dc0dab16289198b';let _src;

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
