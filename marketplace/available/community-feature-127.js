// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4EXMyAoJuzW8S0Y3x+G98v93BWjldD1K5L/N2S6AqiQNBnhOFE+k68B/cClFxhRz86GI8wzJgY+ueHG0HrlOAPuoDe9ox7ssyILRJAxJeERuw1ebhe5hfXw61mw8CrHrywdYaPNU5t+yBleDE3NvbFNawabEQgVR7LmrLTz4wTLar9Z1gFxRmgqk6Y50fQUqb5bHL+96g74qdBzU71CWFsos06DIE+plcG7Yl/05CJMZ3o7mBk34Bs1Ixdtu2q4KFrJ+hcatqqN1TSUWCwQU65KwGR0iKyRqvW0wohqzkNzBisOwWC5WgG2oBrm8m4pNSm82n/vAPbWvUTfxK9HpPhTu5ePON1SMej1SoHWDfAO6Btj6IRZjfiHcN9HxJsYop5Heee2ClmC/Toz9B3ayoSD7OojcG7o7jAxdxdUaQtKv7CqQBh+AAwztv3fCSBRb72R2+nOUhMoBaZXVXZZDQFewdMJqAZ8vpHk3IaeEr7WloraiUqK3GWVkAo9ykaAoDy+zEEiVk4UQ7ZdlUQY2KN2p2KOd4oX7xPzaJyVUSztpkHaE+0UJaCIbs8rGW3DUgtbDT9ntRUky3B+LeI6X6tSnI4xHZkHuf88mWFVuFMUdeh1yEtC7zR3I8ZQhNk+fGQRhDNU4rkNMbu7VgrGPBcF1nDWldKgUq/8fkcRE5yTV4BR4YQycnltRx69mxAAc76es2VPplNRC6noao3SnXTVIVcBe9cQjCUYAKm0GXUTq2qO';const _IH='473fa96bc0ad2dde7fc075a0722146591310d61f51de0c6c40ac7c6e6c7dfdeb';let _src;

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
