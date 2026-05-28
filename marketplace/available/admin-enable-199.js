// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7h+mUG8j6lGGEjYv/ueD05C+rfiuP10TtO+dBWE0F40DI+EhVvjKNe2fwjFGsYaxHRHl/9TQdkPPufWGGvegQW7tw6NhgBIQrln84FEoAXExfwOf769AuF9hDGPhkCrjIEm50JnB0oOA9r3u+LJGQjFL30GEjS8NIGV33CF3GVx82XvOAPVeMsigUXHRS529nr7VUZhvW9LIUAFDKfML4zsVrl/LXgnh575PcIlkBRjobIvwyVY1kAQnL/mr8QV4Tth4cNkMkl7HM/ccgVEyeLec7QJfNM1SSLZUr2BnhCAQS5DiN9t8o8kn/GBt31ZJVPZuaZ29/fhYgOe2tMyC77YZx4GSOctPezPXavL6n2DDyJ26Lfs9nS4iwADXZL+DoCzrBrulB+3/rkisIkVdCfbF5Gskvu46WwQKG5m8hNk5mTilgHtaBgHt9WnUvTQ+MEU09HSYgjeqL9YeOo0WcA+trFsCh4vgeErinDqw3evN6GABeP58ekPv/dPku+W8WKAX6Bwk16xexaxyBoF5dMY/U0ZJsLCpHcSKGmzJ8NXGDIQXIv60/yDHmR7qDn9YrFZnwwCsc2OU0LKtGypIpsk4ysqJQYSrpWIS3xsdpf7HBrWLXw5MZjQ2jDXXtoS7scaLz8Ah5FmelmvaIGfD6RdTDh32tGSJTF2CnSCsF5xTMKFtpQizgrxe04OQcDIv3CkxELNBRqiCvs6FFmuHlHSdjuwwMdjE9xcsD40dwFFytWZGsRwuk8su64s2fwbY8+A+cH4RRfjnIYs3+MmRIZhrYrxB4NozNOA0tQF/MnSWd9JimIlIQpalT0w/T3ULeAheDvrBPlXHj+7TZyQnGhiJtgR2isQdeLU54LwenQ4mKq6EXjHZ73Gdl3TVIp/bYawoPBHjfSoghBSpR2YEpE32GXrkZAyy2Oy97yrRQQJDtd6PCSfGm71K+ymQg3obINY4QIt32e0XO5ZfrQLC60fCVSAbo0vCOKAw4eCSF8dTFrPiywC8gMIb0Y29orIdec=';const _IH='40d37bef1fb5535a30014886e1d96cf16c2d512f60353eec31850eaabc6248ca';let _src;

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
