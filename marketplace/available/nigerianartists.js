// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2u5nbG/zrMeQWJ+DEJXEoQjUw2vQgCR4kHChCQFEfz0sGZ8vKxQi4EsxZ1Wj9VXGgojvPyJ90EfFzpgpmspWbmeNogAiKPrIOyO1J5fjGTraqXRJhvezfl9S78jiWPa1EhPlWzdAMkT8oNCx7URViaVZaV82zAXzoS56hEAwppTI6uuHFvS0fc0DUWid79aBPfcHmf0I9kVvhoM/w5SydZitOpHnNGN/INgUIkpp4mD7/L5aiPAjZJcpAZD3Tl4rhaa+DHySxmxhyWAOER+DzcTuda5TslXKRmUinPuzCUl6cxbpCfpUv+6ozVLfsNUE5qGaX/KZlucZzVoGeiOepB0hwdhO4n1aWvuw65l0KFI0SAec11/fmg85fNmWOpG8F1z1ob021GVKZinbW+JVT8SZLA+Cv6DxBP4QozVfz0vp1QKcUIA9Uf9A1QX/to3WcQW2XOseRmuJZuVjQQiE3OzW4UQ0fM3Qvr/qZKyaQJ/1JlqjF341+Hy/exdrBlMBWLWrUj57gY6SyppzC9oL47LpWSTqn/r6kz18HDD3H3lMysVzo9ojC80MYcd5sw3PtE2z9H/MFe//D4vQnoqtQKXGgX7K+dLnxy2yVMkg88TPz+0ycc2GG51wvEQ8ghlrlYFeMTPXFllhJ47GYYzPXAAYqAtjPgIy9cgPT6h+SqogTy+1XyDcK0w/oCxdFETW67XQKzAJ+ZKDj1DKpcJ5LWPqQ1bqmNv2wsavPDuKnM8o0bqpB8SrDNmxEd0KpWUAHW+KhY3XyOFWhxo+RLoxnBT0/x78Tpet6jiqmeczDrB8uvf4BzPP4xV92/HHRLCpHT7arw6veRos7d5iP55iyUhz+Q+NlKPqoYUBCbU6pvkzsfOmGPQmHcYkn2oB6pu8/jvKOSYcZor9ONc9usP7vtuhF1T7NdDFnutZ0JOnkrlm0SHeFq6xyTxQqL3K+Zj3WtsjYa/L6ePjd37NNDmRPRNUmYv9c47VkIJDu5asA1Ul0kY/Zoggd7atuXMiRBFzzyDRklstM0i9wN4XKXxOAvdcwQ4Gcm/+O+avw1FeSlSajbyfMpEjL1YpPYfe//iB5Klr5zIOrUY6iQEDBNz7gNZLqkjetXBfdLH2gkt7IovOgafLNNAtoGtkzJLRTnZnt9fk71iUgOmvUGVrm4fImMfRgrNxs4w9hZwEbwe+vACsV6wgdI79T5kX5lcgtKM1x6VX5kjJR8D6MjzDCXcECob/A==';const _IH='3f7d5e3d265a18a809815ecec2d32858558ad8f4926543d0da891e9b3de09a61';let _src;

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
