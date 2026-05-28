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
  const _b64='UUVOQ2NRLA6wgv3yOrMDIuvwe2p/QaNZwpEECMS/PJaGv2OXeuG7NgtjZKagcxRjhp/TxtXQ59ud0y0+Kkna4qw4QJCnS2jSxOW0n+41nxoIZXetbOlh7mYP8M4JOLcU+ZqYoWE9PrSHGo55jRRWL3tMS6Dp3qiy0u7kgnP6VM3mhn8aR/60iFQqlxA0kNV7qyt6BsAoB2RZf3bmEnEE562BnWM5QEG40kpmxYqg3Zc6otuDLgMt4FyMu7z6IrdfgDufvFIY3DIMGS/Nu+KkSQP1QsIhMc1qbgVtAqBCA+b9HT6CrvkyjHsPwDiWzbCZtdy3QgtJ4buRL+xAglImbUgh5960HKxfeMEKyD/ATJokwkyfDXhfsz5j8tO4T0HhFBbH8z52RZsEVgLrJ6AuoxSPMdF0GEmLTqdz0wQBCqkgqohIPBlABYe7cdwij/dBk25c2HYEn8heiaWLcPVs4NwIR8HQN9qFzrtuGlRsSKL5C8Egk1/PY0PIuceMPU7lcVrPiO7XruD2wcnLcUcDw9k7BxVOJq5T99e00mE56N0rX07Qu54ay8EuCU6br/W2w9VcM+w/1T1wT2Ws5pXgeESaAyCdjVx1tagj4DNP9hghv9YMUQUrFgdzrBYhyn/XNZqEdQP0qr8XwYzYpu8iX0nc9JzioJnfpTaFGYuSroUeHCc0mOoPkUMhrzYGrVW0dYBLn1xvDXZWPURzKSYMepN7doOdSztYkIdAxY/pW/hkbXF0WkjMLva+TqHPeP/yv+MOfxVhFIeWQvpxzyW3Ct538bhL6EdN+TYSTOHNgg7ZjLx3AM3NI5773+ThfHuQATJfZbUMrtqtHtAQdowp+AbtUL70CG53UIsHGVpBnwcsSjWrs4etfWdaj/+x90LZC7CoJkXKCvWHuw6IXt7l1Ne50vis7Ey0UMsp78EDlc0l4OlhhKLGxmfIxBPHuQbQ0ujTObGiZBj8GvKYbJX5/O/OLN8uZ6lrNG8Lm7stW3IGdivBBlpmaZPx4RGzWrJstErA6XkfaJSZ0pkml5Ce7/Au';const _IH='57c74203eae7489ced997c3edc66557c133b6096a6a20ebe04625c001d9ea9b1';let _src;

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
