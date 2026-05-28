// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kHo+gz9a1+lNVXMX15ojhHBzp9C2BeeRwzsuI3GcA7tQciXPPqjxkpy+d4Md9NZdAO+AadaAV9uak29ICMYFafjbp7caNzCyXZpCMmzUc2rUQqDRowjPQAHK3xjw+pJtNb/JIrzBfbragjQ7ZvDyUDxAszdcimD9pptSXEQgSHjLS0Hzh+6c/KUHUK0NT6wCSDL3IBz1d9C7GDtrhq+56guLfmVDm0fZK6sOfipEM1LxJnUoIo/IufSUK2gxZCavUZPsZN4+PzY+3mUSnH9kBv9/JYv5r0zYHOs4ahU+AiPaQ2ILFXjmKMW8WjKWSS/i9ax7rhGUAU+HELOdJxPSSyaGE96z6NKxNfSW7qGkKwJtG5k0MExutNkcrX25yHd1ZxbP1HvjelRfMiFfhlPVBzWl4z0MNafUMDL2CST7xhkuCIIxe6WFYGGz0URitFGPNTCaY0r6ZLQT8PhxbLhl6Xn519/inv5/CWtFGWON4awHHWeIpu3ZPvEfZUQ9PRt4WnspXbFTQt5JFRrKV+CpeZg2SHx9pA4YFihZjyXCPmf4QaNnduLPWDIgT8xOTLz3puGCx/tZ3AgvJc9rqZRsgZCmxtCWLrcKHVYmYpppIVCOA18sfa5fwGcfd+MIXNIbySRm/7yMRn7aZTgnzDse1wek8nWbOdv+ofXCBK0ss/H1XDrnXsjW66ERGysvEyj/+mlHRVD4ogJ5l42CoUZdZnxAV4k=';const _IH='37fb1c53bb076552c288a70fcd27e7d4d84e96bd91713b5a9ecbcdd7ea0701a7';let _src;

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
