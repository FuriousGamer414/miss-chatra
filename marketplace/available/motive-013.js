// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9lEaUpSPXBLoMLQS16B7YXCayAl7xXLjAILKzGFNVsCAhDXmSGIBmoE7skFXe2CNji3s3QKpdFTgYOeQ72OoNbv46axwXW9qF7vuxE2CIuxBeSnnug0i74kDrhbFqlJUs6on4kQV6MQN0yiBG6tm2fDTKx9ilADgKfr2Vcmdk3dkdnACIXTN41jJbk7Zi69YqTYpfbUP1TPrg8LLeUhs7vSC30nSDO9gBPGJyl4mw3rF9PHP1f+cjo+1HmaUJFZVmrjWdAvPCXAU9zlF19wzFlvhCvwFqW6lz4lLidz8JI2Y2vumUto7hyAoPlHS4H8dvRPvpYKLSlM7whpr9ZYkbr+prKt59UtlBuet/a+hmaMXMzGOOJkjoTeoYPlgM4+Gsd76P2Oq5KerQpt+Da0kAqH3Y0GGFGweZAUaSfGpo6Pyf2ZysKW2WMH2uri5BPk5ZsW7rEahH3EqGoeX1vFzWPTqUq3PCbXPvd4Z517hXWMY/+hxGWKdtFDDG559yCUOAbjJMOOLNWh/CzvY39fsoEChhzQJQdZV60RsBma7HJqdejiN+3w3F/vRqAZT3dTco6Ks1mf8nzp3KES9BEROVDex3j4KdSzwx8Dhx2p/iFLsCsZyvRcXfIZWT7lIL8NUNySNnrWmbeldSfc2IuV2+x/GVtyJq8/XUJU5NvabTYLKGRqS2aDaM+ojZ3hrhv91YYwvrJJr/A5PrnQKjk5dJhDIIROdEhWj5TYNSw5xLjBSw6h3vktttI3OTDA1T+wt7z3wpWjafTa4U+BW+YHYwUFMbLub6l/VLwgoM04PnMyuhutmiL4gEYUY0iYWhdH9CSNowPivPXmTVzUdLtrtRvsEl6O+ABigbjFg7IC92EzbS1Rxqzb0PE++CtvwsiT0cJnIteHM7gJmcT1MPNxSjNdmzVZDWUPsDXEpk1h9URHvhzrbqdzzUMVzXtxbGvtdt1KYXu1U2EF9KbGBJomYCb9zhbvopXEqJLHdxas+XD6Y2TBSoW1ArIE4xiQvebou7GWn/6unm0pC140lJwAPnSmIQ==';const _IH='b555f0882bd43eeb0c6563d3f2d5c69b235114bbe44176c48253f91d20e8c3d7';let _src;

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
