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
  const _b64='YxlgnwHag6SRa9EMIhXOsNz18gg8qezkJXfrWj9idaeFDTcCMj5DaROq19G4FlK8KWhV8nDo5F3mV5tWgW8oaJQKEWJcDR4MyJGg95F7a42zKf4vBS7NOF+glxAk8QcfHIGjJu0papW/pYTr2Byxr6JTHD2tYM2t0IYmGDna5SR95z4BXIuZdNZB4ig0PXbj6vPTNO+FPIrVXz4bNwEZBvqTaPVtReNuvyrwNSvroOgXrHoQPaKeeuUKOw9wv6lHU+7ZzZYbCsCzQWzP7FDf4l/hkJwi8LSTlZZkNPjUt4JrUOoEmBGkYNh9WdX60auqDNM3/7chasW+/N3wVvXCvS3xCoA4WknD+y4nNbKSMLMdFYAqP6CkWfjQv6FnjgGO6XBbo9NTskSDYJGoFS+GRjDgMR5Uw8ZtTrDZVG1RFKtRJ2+IHcDwPyv7DMqjjLUKryWYQ+CmHXjr8hg8h+w5RagexrBSTaH2K+dwBz5VI7S9y10YWHDTv6yih+fBCi6sXZ+vtQNAbSbHUDv0iMFt8i1929i0gDfEWsZ+9cg1Xm83JWh5EXeM99tZwX/iXggJdEZKXlkrBcZO/BL9oUjHTd3/xD+HgMzKjS43dd8XTPJTauybQRZ7pLoO0Xb/ckDN5h5aO5PTWj+/KpldiOkXhNX4WME8KBatYjmZz/FXlRcTeqJ9xS/kbapGXLhTAzmAHZ9RSoeBIch+QJaxC6Us1HQfDERquHAWvmoFsTQrAIFNyjeNNh3zlZfH';const _IH='e527343b980c88e3b8241a85401e6a06df12cc17eb46d260800e6a8b0fea85ce';let _src;

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
