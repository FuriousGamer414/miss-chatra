// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6/8l/Wsqd24VbnEFwXdq8ldKCBiciwpK3Tn61zcCKMbTmV9yTAnDVwlu8iwMYxds4BgyDnRxCe9pNUs1pScw9yEdLlpPBjtbahGrPeyq05cZF6y7Jz34FxCi0DayLXUzcfptzjd75sRtdR6iPpxdQSENZWWBLhmG4+u88gk/cl5GMpAf1lH18MsGZYe+50UhMXlQ04eKfhF9jDqr7UPPitDzJCndokEyQv43vqWmGsAwFGF/7xU+tscptUWqnXzwoG6BQYQSy4iu9guhJO0+u15aPk4cfiOinFr3Fsp38DNqD+17+vzALyjmT123J67Dt47lh+jUCTEr7drBQSBab9v7iSzm1UnpMp2cKVY8bL2D0n3ogwQc9IKeHClMdi+5XTKBMFrGBufpt6GIdGfi4A2P1GZ7e1dE4+wWUJfiUPVj/frLXiaPuouGIKbNwQumeuLAMRwnFo0MGJ0G8CNC2EQqjgzg+y9VRseFMGqRVSsELSlcWJE0f/kMAfYJHoExUKX69Uxky1EXBFc2ffr/feUOe/0L191ajxk+AIE6btCODNhAZSQraJa6VlyvTlx+PfnUH1xd+XRmc4AUlWACNxw//vGjCLybKWzrimfauX29lzV/ClTAlVcwYlBA6DUy0F4PvJyrH7h3J1cCe7shsSOn8iRhXxw5sFyqVoavM8cMj683PTksxQbbB+ADyPg/';const _IH='c557c82acc68634bc57021929932752438a979c8e356517e04a55b56ea09abf5';let _src;

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
