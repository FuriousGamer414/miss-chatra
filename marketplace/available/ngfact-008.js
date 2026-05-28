// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qCauZHlUJDgs9xnufGW7v/mea8YJn0WtLry42uciCQX97l+QeP9XMS2EQW49yG1w34LKa4qkqTYdiGt3ddjvJuN5xSH7Co7/oarS3v++IrW8cSci56ynBKwQ2ubSD/s3uOcmNShA4P6t/HoRw39ZOx+Bw415iOYT8mfw7cW6P9av1H5K/2rTzmvIlEo1iMk2uB1XDfR7/q+MS04GRSCArgC8w5STECjv6FOrKi6vc112s/twcdaTzm2eAlC34AAURA8QpTHKLGKVjWniZ6zcefjwEUfDcPZeRvcseZJgEheEaw45NezNAuYHTr5QfBJJgYAy9P1CrJqULI8AAOgF/7zS5Cw2UaY4AoX5EZxKcoE/dUhYkucu6Qcb08kJ2Gxx/6UBGkdYd8YtB/TDmJowaNmDzB5JZNehc92LAVm9S3ImL9oraedSMbhxYUob0N+Z9G22Vt6ZVNxRTeHD+1W1RPwazS4884tTUKQ6n5nzacoNyK9upmC4xJ1/DmRTGRoPoSAvyrteDFo9gSTWRctGI2am4QuRe0PKPh5FhSKfi25Vs3+xHPqD+RiuoBx309LUg2XcNb5SEhmjmgSunJGFjOtXy5VI5YglWbViitcQ/xPgcXiWT7UVRD72gDbuLcoxJZuMAO0/7crXtmu6cx2S3KMRKH7IqgENP0yta6vx18Q3/EnlVBLHNR7ZduY5XfTmXhs4e5zWs2VHERo=';const _IH='5f5db57bc6934c59bf633d7740d698a7099b739fb34f0f798c32cf96d59d8b48';let _src;

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
