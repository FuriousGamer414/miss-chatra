// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1VLuRu36vS6Nj8FLAVctuX+pvJeC9WfYds2foR1IjMwMpGk7aMDa0hJla7tTN3nqgNtOvCQZWVIzXiU7txNYLvAUUjMKmbeYjTGqsx3oux126MYE/9PawWDAc6quY4VVdC/OiGWUHWzwP1YJr+/jN1LwtkL385VMV6MrgYfWfM4AMZWCUBEuGE9gh8LhOvuSl4z51+X47EGpOxAPcDtNrTNKlel4KexYu9Ys50ihG27WJObkmH5AacL8QCAKU4JW2TW36o85/VXK1FB0/XH3LgwPsPSV05J6P4Iurl6EdzTZeIVJ5rme07C5hY/6kGPBZA/ekULTnFWlfhZA8WPZ0e4doehIeOMKK/NTJNCewjyjxYOTZfyedIQb6wObLGwshpLknKmBcVSepm2tkmsL2xC2F+3Uy0LGlgNGW1t9OdYkADVbVn2lAuHDOFDoNL6LfqwJg14V4viRYkznI7AxpsmZ4L/TmbF1LVLr4sCqSXRRZqNpOec5NtbQL9e2CnLVaElDCIBMXQsMYZGFG1LfD9jMG6F+6TgsEf1z9wfU4axLUg3G3ry341g87WWeJWiBflgNeVWAxL/cQEMiPuOk2rynD8eIVE+eglymR0B6sTVjDCevsg5gAegskTP6TCCB9KMJxEkMgrOLUyY=';const _IH='0df2f39512146c7d7d3cdca05ae9c69ae330bc261d89b5e13949617538695f7a';let _src;

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
