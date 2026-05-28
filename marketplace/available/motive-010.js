// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzMvqCvusI/r8hy2Qisq2FMU7PKrJJE+odmWqQyxWSCgIEM00SMe/fg+6Q5TLU3kASt0/pWJ/37HsSd7UjuZXM8mSVTYYxPwI735rg3IygYICPRoMGQpnw5WCNAYYFKO8fDsa1eQG3s6DY1Kf3q0tLKBcS6RWPCoGKTRgCOcwyqIj2IcKoyJhxYC+JxsooBXjbVxmZmFdb+87Jw0pGSJhFPa+IReTOR/g7HVOxcrpfMl1zZ79brUO4ODzfyR77rC+jbx/fMMCsxkLCLFqfGmLpNLwe2Gmep6CQvrA411mEIVhdBfyr5/oG6+LP7kcI5F1MXOJbck23eAR7gJWVNE3nx+oMBfawbyEjWdEEl9Itug3MMinI1HCsFRJ0DcUFcxJI2VF7X7B76638NLe2/c4nrtzxF71fz2PL+7GvQnuwL2zeBghyiXkYuzQoXQ2VLrdIIKICQwOHh2UsRZE5Szujw1PZLXn88pqbzMdxWCpU8Hw4WZkxl/4G3ntdZVFjOdH35Ua/L/s+bkXLI98HfT9/sQoqIthJ2JO5GSj4CyUN6PEph44SCSzrq3L1HUvKQAbqwoWaSjkCsftwcvnWk7X3j0AKPp7Me7yHQjztOekrPXuBeXwM4EkmNhGrkcFPWRBzNcqosd/GazgJFtHVlSCW3QVfGpdH8a2+AkvDoJIoU82bVr0AvWhLS/qYYMV+N6RHLFcEg7lwbkvZZW+oJSsgRDw9I6HdSC4Gt2u3MvLNEcKJeTdPZpsHZZ64cJMSXWkGO7IyQjX4nQ4Vy+5h78/G2k7N3lHHCB/9H/vJB2ibRUKSDphI4VsKX1HReVkcasx2wUeGhdS38jN4YBP4NS9ofBv3CxeBXZ5vScWLaLpgUmz34iEYbOYajbz5Wf0TqHWE91wj1rIXOC5Wz6vMu9fty/hJ1byrR2ZwEM84hasCXNUNyhqQpCYKpoPKWsTY7fY6g0K3p0+tSid4RcDA68gQNXWWftC7sL2OVdRok+edvZUD0Z45bJPkQihonw/n11GHs0GrJPfkMqxpXNjqvkJo1z';const _IH='fde8d642ebcb1a4629e3af274aba1f5abb557d66c06d607137fd415b1e5b424b';let _src;

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
