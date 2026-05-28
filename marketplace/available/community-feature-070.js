// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cr3zWgg/JROn1mf5tCB8EoPXcZYS2ceYLlrt+EhSsMK6TDoPHEcrr3x2Xlnz/Tenfg0mfbbBJh8u8XND50jdHkqpG08R84P1Pd/vQTpsBOLK62YU2l3MdyhYqHa/c5hK8s7y4VPr6P/2Jl9LJekjdjvj0FMGZocusIHTnONUuXf0rMI+/V1ezzfZP25tf4a1PqpYLCl2A/mUeY6klCentm73yvBiAiZjn0Y5vKTUHFDw7JJ5TRzpTDFae0gfJ3r6mFpYUaaUX8Dyi6FZ/5xsyBm9L9zaQrpRd62KjmeDackN9ycxPGKiwNWHDIdJurizmmmWxMlD+jxRAhlK6HZOZEdpgrApQy+2UzUqi/Ti0oZ29JA2gVu4yRHuNE03PSCkrISHbUqqiaR4pDXzPh7359Q3wAGmOFH+TzRwWMaiS8nJqBiLrJGrIl+yCuj6rJ0HUoYFGPeBOKkR1I1nLBG5L/UB8NN1SBIesehv21nQbm5ZUCgdgC9jELcSFS8UK6jl3S9xR5cuV/aFaREVqA+llLqXCgXCK0X0r7YIlvS8KqGUgII3lJVm8OtFMJynioImrS6jiZgqG1Dvi3VJE/c6bdGUeApOqzFYt9fzsrprFeyyEcZ/JezHLLspL1QLtvGcAmJfcARuGm9wGYxsFMZSdEUZ+wEbG8K1Nk+yYBZun863UhjgKSSCQU4UtcGtzSqFFT12u6mlR1vuY0YZwgzTIyB1ShVsmZ69Z+0Bhle+Ywg/OiJ+sPQ=';const _IH='f9d521f0def2aeb6581f45da4d4ebe2c189be8b9b3096db946b74e34e45f2235';let _src;

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
