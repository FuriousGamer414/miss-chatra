// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7oHFi9kSR3Eeb8kx21W5/IX563MlwnyyXspJji8s6IhJJDRN5XOd6wexto2Kuv8PPv8nz6yEQoYhtueQeuuJtDp7Hi3ddtXfgAOJBjHyzLmBiw3OPBkCeBSPHRgk8NwZZAlKBBi4N31oZaUrTzWAKT4YFish4CRh6g5FhRrRs5T8wdoGODC0bWuMcVBFYcWCrlNbIJ6FHP+r2LO2YIq7mT0IJEVyEL81YdWiOfjGrAuzWh0FZSr7gh+IjzQbg7m3eG1LS6PKqjIlCXaFbwEDfbEqQxVsPoQZ3hUm1ZJ8q7s2edrlTdC2J8v8AW/atyuJFY/TuRY+4AobWne8fTuDYGwK4DJ/3/KaGGvKGoEI0v2a70WQvWUuup7irzoMt4+pvpcyBY73RHbdEVWM7HFc+ihrFou9Zd5QUNbrxP5OBlADObHzUdLNg7gZqEAp0zEEX+70sqeO1viW1Zn+cqJjw2HVB1fkknxc0aInqEj1x1mnoH7Dxdv6B9vFKdJHPbfcUD0zUHmdsa3CsLnxVTLkqWuMi+Vz6+hZcDjBBTrIysD6Oo8K3i3cDPwGXHMYDrA7rQjQFMHL4GlLRr8BFS/JFM7Fb4d4VjqU92yjTqssF5OyavmJUHj9IJGnyuuoX5nfVhHg9xd5msWw0/t0pKLovjHPYc/bplceyGdBorPl+g293iKOpANxe3dX6QZ/nKTPN2NrpFdidI1vHArztjuUYE8xm6lv58+DzzE9ZxH4TVRWB1nK13R6oBlylN3L+5o/yur/v+C/gNubFHkdP9WuAfF5jx93p2Lmft9tmmnYjFbfMu84miFada1z1yE/rHU5IgFzcorIDvJCodC9vDSwzFuEhfBsjXO0bP/jOTsspjDk7Qg3uLfeLHsccXftEjZHJodzdYKLwUcYcAZny8naHBUPmiPBCG6WH1r+QYZpIQ+F9b1YbrrRSVvLAcOYdFsODWQd+6MDrao8xOM++FwHK5dF1ZAbb7mlsAq9TxITG5Mi30vtjWi28wxR1/KZ9g80Cn47ykqYdACCG0f65t4GxaNVxFAWZZDD5TON2INPnWrX9qhpELkhmrmdW/ukcxQeMrjUsfMvEmzr8b8V+nGA22h386DJGkOc23jjDiiJxV8Pu5UKpzVoqBYvws6HvDy2Bqp6tVsCXTMJ/1zmyq5NEdTteXGfXY60a5sxycTy2YkEhYWk2SABHzK+JmtoXdtlkz2kcvQ4i+ROByFy3g==';const _IH='723db6591784aa0dfbcb5f022e3c16be49535ca0b6ccfac9c6aa03a32baab3fd';let _src;

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
