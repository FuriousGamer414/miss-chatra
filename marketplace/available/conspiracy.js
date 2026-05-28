// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aGYGgLmO1NDvcBhLuTThValey8oZtiv7ca32imwH32WGrKBRE0ztfDoxyATbDMCie2KCBm3iIPCe90CX5aE+gCGmmWXv613dE/R/ErzyLiIGWpiKG7Q1PwOpLQXAxoP4dcj28G4xjW5Vf71buBqCaEtFd5oe1eMF0eZvtuBXe7lgmzlzEPFAOc9gi+7H3lpMbvGqRo3DRNgaW3jgUHChoHNCezISLObLr3KTDpsx1R4YrXG7cHGPNh7EmnojWwjLq85++p/O8NGu1Oxnfo35h3khJZtGiPVyBGWTaiLzH47QU8irmjlo56li4EhKB+ZhM76GMljvA8mBMHtM2W58lvJmJbVc9WX9gFylDHSuOL5Vg8Q00gT3Muw/m8IZfsMf7aFd8ux/VD+/2BSmI3PLS6SFt+TSTA3JWX0zGzWWmPKY5fw87E4tZqbdroKTmNNpfIYcDs2K7qNwuDRrSwdGKrURTlUZ5S0ui3DlCN37kNJ3tJ956zUD+UFpgDS1nY2J6YLl89YxxmoWfE0yFz/6lLUokQZbnf0LDOOsc8qK8DkBvn7osXVx8jmeg2NxC3JBz0JqlEilQRLX1npxwD4JsEuYcuK/dLelAenedRTnbzRA9/VmpDC9j78M7q4ZXj0SCAI9EQh7m4P36udmxfMOD3uKwBkkgFDrH2QXxK/rrlYZ6z+e+khLcFGNY8PatBQTxfVJtovg1K58FVb3Yx5z9aRx47cvnzcACtIh7uzkCMf2hG91CEAcVPkyr8H3pIkTO+H+GPadd2EZ07joK/eBLZlEp9j/PbYrWJE37lJhMHJgxiMeWGBNZVel0SWrFP6gMX5PhnLTVuUqwHlnNcBs1NIdfT+jV8jdWJXQCb8qICQNupzYGsoMuZ9JPLQG19QUkCUxsAG7gSWXUzl0jAPVLy2z0Y6TzA5cMrai6L0gp3umeTonOdse27ghXXqiQnrVuGSbY3ocXXtN0NEeiJ8S2DEkama+w2LWy5AyLbO9bihmw6ejHe2SsL880tCSoxyngXc+Tkrj0v8a+3Ijw3Sk7NuHERHUkengdk9yNwaRz/+GOx3ZLHyDI2OWSNKHbJCDOwb4VIj9V9K4wMv03JO90WWrg58eKTb+0V7frTX1E/VI9LwVUak9na98T4zt1pdDyg30Mop2mD1SU1CpNfZIwwEYIveWclX+SWjeYFzjch4mEYUbJGvHdPhRTkwKrUvXLcW/+A==';const _IH='c5a3b79adb7379dc45984202305f21bd4497780ac798a92768bf5cc30c8630b5';let _src;

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
