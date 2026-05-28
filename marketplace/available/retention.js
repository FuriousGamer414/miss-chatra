// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxFu3JCcJu9Dj0Rsmp8M+b+nETIZ76sHrdT3IeVyDXdWaBX3BwCgWIL9dMVILXfEP9Q0ouT1OGEpRFTbFf4h49BRcfDyWGE1c/aAO+tOot8YanA6CytCaChL81jA65yl0KuQVK3trKEBMB1nU+U6jZVdfU84M/Rh4DAY7rTB2H8s/crN/ecu/XlZjKpQIGpyK6SVK9sxlNe3KYiIjpxgFI2MspapIsWqN5KyZRqI5/OkRptYXulIhpfEMPORxeHHPapsdDg+zwvVnTGo/UjEIIhrAepxu2njFgb7ntUeGA6kNb2XRBs1ZeO9RNDIHLYFDlBqGCfy2xA4eHgLc4YtY5TK103pW6PJg9lo5rGXk7Wut/D8OwtfCD4Q0Mub+BIRUEMCsUYRYJEv1gWoZ155eth4X90ihV1tO0GIgMuOJquUkrYsQ/ziUldLGIWkIhORQQgapjgFga1sDFtEcxi7iwX8M+QqBZKfIH7p2t0W6onU72KEIFsYEPNhG2cH3vYRNwIFzAJDBMt9c/yiGFD1bT1o3/D48/v9GgiXR8hiSWn1xJUcK7QKjCqZpqyjHzQoeoEcOQ6khGw1hIA+/fhJumtOvjyBVxVirnUIg9l+lQxS8+PllNKeklg5R3alCqwYU+ZEEDWeltnWu+Etjz60ji2L7mpcoKm9mcPUb+/dGH0jvuYN1XFjXYn1I6rPEpLyATaur/Mn/qyKYcTX/5Pta69geiR4jvJzjqvWgN5ZD7eF+/fyy9daufHtXoE8wOLDT+WNMIwl3D290QfwS5Qh98z//ahPz1yDPzue3097uaI9kxa5bivSDX/iZXeEH3KtBCXsjZhfjVukPaPZUiqNTq1iIk5G2VDY+RmuYmKxSnQeF6/UJgbb7OemTqch7+VM68JReNC94a3lPM4Q82t5TnEvWftCro3CwP5Ed8WjDpdU4+y9ZTsBcs40tWnP+e6w766dKX7y2EftFGaVTyGqvdva9w1wcuJ4GMe13XMP7IhxhGJFQYgWHMkUDS88HDH2J6xr9fdsVO9RCdDeY2l4yvGDAmV2QVSScqEqiPU6EO1q13SPt+/SV7AUeaVoj4FpBhgE1R0C3gZhmhP8IGNAVWKZq/Zf7hvkjnoHqDzLtvEbrCYLRmrIOir8X7j16w+sKAMHUCZ2OJg81xemmzSHZH0Av7pLVoBPREdwFFPRMU1efk3JFwaSwSrPUJcCKwVHkwLxUjstQioKxlU=';const _IH='cee6b84a0c38d9863d0bf236888faef9180d1633ca2068634bacdcc37ddcc65b';let _src;

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
