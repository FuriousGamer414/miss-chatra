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
  const _b64='QWPJY4GHAPYIZxO8rvc4hYhNtzMaHauFJZ+bwW8/hXJ8/XG1zKrjpCGnvY4GTQxvNdJ3FWZillLbVbuAtELfCbORlfZCqJivbPSRUZF88UDVUCA65sOQeTb/hfJZsd5WfWA7dJhatSXEtDwj+N0gkNY7PRjhBwxpfLusobbipTiVfV+OiVFgf22l8FyWn4gtJjLq+RNPMxm8rLKuIaC7lHUIPssYCM+Rpkux/oNCOeddOJNb1EdEGs051GkobrgNSdnb6FAs/xanv12ruByf2oQkXLHVnteL1ySIHi41pcGq6ntKT4++IwHDCS/fKQVjYIBS1gOohPUZ0I6RNZfcsUVF3qgeFmG/AjfnMpkrDvIyBjT9GvFTJA5OUd+ttXXTpoCNO5hMOQRhNI6c2pRSUVLoPRkxojqHVvwXNaLA6D9dibO7229/E7MIDOnB9Zp9yIX6TRQ3D7lEHB/N6N+0cmf/7V70u73MiyBGrPP7/pzGwRg9AZ60Nc+gHSZMStCYrxTcoPf99h7cUpPJFW8xB8w3Amim1l1WfX6XetC918vV5QC7TJpB+gHUXOOZfCb7Y1nYYF/BRFPtrQURFr6iRJTNbcb3N1D0M/og5V/Yb80KQo/NgkSFHF/Lyca7H29mpNvW5qLI+dcIoy5IWBoNyQksohg6S9WtYxbqdp0/sZt/J7sCfa/jmTzrZ6fk1y7FZj8nt4LBTwrroDY7ZhAvIf8H1e4xulLumkVg66SCpnEG4tyqzJSKLEw71dSgAOtAYbNeI/v5zzBjMSQXP6vrRM9lISwZ5+wMxiOrhCnIPja9qFSaU1wxeLMeSsq6xP5CTSjoy63DN0KIujbe38aLDDFqEPj4lEKha0wLK5/iPK5OmY7dKDxUeN18zhL6fbxkG4tMJ3j9f8TjNIBQCWB02js95Wl71sahjc20/ifXDo18JPkil4NJdHDVGBcSrKVE+9cJg3b29QkKDuH1VQLXmh5M0xXosnEZjoyQWENytQn1akEEOp/fAmMCgiP1JHlIKg==';const _IH='cabcca432f963adee84e1115e08bbdc50714a8d172bad2696912145c420649e1';let _src;

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
