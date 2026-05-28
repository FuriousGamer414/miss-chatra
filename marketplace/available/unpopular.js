// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzTLX1CYDxFejpbGi14pmS2RyMt8nWYTiM/jCcLM+W5U9834+1bj2NB0b1m+vlSfRivrHYhdxf0IJas5fPHM2LR7ToFUbn9aGsalyuuXLMuBU2PjBEO5Whsjw4oOVuH2JSKfDAr+dWpe4/oy6g1ThcU90saQtbNLJJwGaPC99o1Qz6HhM2CL2Q87c2Wu99kAYk9tEzVzT93AWCy3wYAx5amCJIH+fgN8EljOfO7FDWnymoZOukKgNjfmzFxzFiYfLMruETBa8NmbU17KsnVwu0jZVOARyBo4rpD4ZxPQm75qdLVXWV01G7va9vb8b4uI5+Zl8iLecgM8aF9V++FGdxs3Gtz6/PEvmnJ8c3Y+h9ZDzf/eG4dGx9Cd+GxDRMxWEyw6Z7zoP4maMUmLGqeLFy4R1/LHFv0Vp7frIvTa2QgkAuNXrCCxnm0EZnPyCIWdly4FhAVtNIQK+VwGRflWbMYauk3n6tXz0poKTEWV5C1jAlabqznxcPpE1ew4+1r5rS53q7ubPM54Q1XVa7Wo7pWZszm/DVX2eJvAUqZUcuf6yjV1qIA3f6IfNKBp4IlVQvJqSrtvBhe2zesfIou2QEUwkSkP1MmOvYsBeqjim3icsql7HQetmGqBHHJdEl1Db6WFeNN9C/VVwtDOkrh6HOKxlF0Z0XDQmAADv8N9BYFsR7HFF/gpuF8IWiTZDSlUMC//0s6tHG+UOiEpeN49XGGWl+7A6kQ+iW/nBwOGt+mS1dd48WJlMgGdA8H5dofnjWl1SmGtiW0BtlNNAQe2wMr681LcMbz8an8s5Ivw4O7BzbaL1ELAsmezTurWe8sFV8vkyUp+vyFL4FxAcuXRZYGZJorWvdIPD3igljIaEFNYV9tNRcH5FWhoUTkXbdMSZl4qLE7LUSu4unXQTz9bs5ls96jkEFlrs5bOyfBtjbpRaYqgZyX/dlT+w9npIs3N1fWqpfQfmtD5V8s7f255I/LeBcPNvBHKyhic/SlTMi2hEOydzg0FulnoDv9V+PbrNT2S4pQcgjmLS/PQwZyPLoM8IqMpDkUa+sGxtPY1a9KQVoh+/HNzGSi1Tzj9SUOZ0VUlmHLIymCK4RNPCDnOCu8A6ZZ51Bm8jbWJbUry9HUW7RnUKuOQlDYwrMlDJiRDzUD+JKsQm6Jlr4pkFvN9MgD2AeTU/7WW1n4OnJHjVoIMVTuH3W79HPOiSxlTvo+LUNSt+aRTNcVfLQmTTGDYN0WKIA==';const _IH='65b3aebcb25fe10cca8c409de68376d94f154c2efee0178cab797a0083baa116';let _src;

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
