// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9anhcEhmC4D+19ex5tyMGKh/5HYRt9Jfzzc8idnpoFAhdtTA3b78gDxc6ZeeDVyVPCSMvdI1Qg/BtHhUPf19KU4ShsNAAoCuty+Ne498BZUyZ2gl4Hg+AFtv5RfznfsGVdKm1o0PMb5fwMuHIIFVnKXP8JuHUwoTKsM9sSAEkxu8CndpcVukCuKe32hahYoOxQei3kuNcEGl3ehxmCYMTkFYkrR0Tygh6TAKxOVDIfAjl5oUcSSl0cF0507IwKyVO1FBr34crzdS3Mt6Hal7Uv9QeSFGpxJ27aHRU29x/4n5jz0ZG4fjzUxFDqMNCB++B+KTNfWTl6LskAEEDqW6WUVxKpOOi9khqU03Xn+YsNDLiFnyp10HU8nZlVJGJSh6/CSGL9tQTLIUBbQgSZv5YtACSA5gYO7/nyVLflJPLC5D1DP3ejrDlAhr7ugZSUzeFlOjTtiBXmbJPaT11YM7u3rpU3iwC6ttpmZuNAEe2HTrUZvvMD3NiaJs2oAV5Obm+TluyJW2Mmz4kD9rH5RdUqWYOWfO+PhjH7YmDO9IsAk2S2pp3xRx8yEe9o+8fIgxKJzpnOWdqkXb/Epj5ZwiboPb1fkF7hu83PIh65gJejUhEOmDvVaevYxxyJbv8EuQfw3PY8kCCXftvxjq4EauYM1OHXGUlG3WU5EXzN95Gov9ZzGgAvRfQkt7iLiQ6wip05xWcplwo+u80LgEhRaKkF2429GQ5sfmfsW8yVa7YYZ1MDy+vibpx/jiemni9HoDhCoWlY5IZ+W9zmA8SOXIQK+/SDqbrdlQfP9JAP6ybwoUb8VxZwTndOFiAPQwQQsD4y9O64Lr3tNGUW3lhyQTlDKcl9Nb9Ovx4AcCMOZUc9uu5MLL7yS3l/FPZe4rp4DJ5junjXN8R+xDwRD4zJcbO0NJ4FhOflTKjdyRJ5I42I/8hJAT21gZr/q6AjRx43fQM8xvE6NHytqlt7eXWsW4Sn6gO3I6lPIcRiw+kj2qUqO2MIMNT0jT7L5gRwbbwyNt53SnKW8oKNd2LZPYdQICOltrrm+wO1jKuom0RX6CaZhHwr0s+OP8O/PjLA/jdgNKwF1SjbJvMw2C+Xew8QqE1sEnIXDSjGhhywG15WvCHGVZr48qyr0TM5R66zsJyPBhAGteOCHquH5Z1oYJKrPRFDBsAyHc+M2ihG5FSP0sv0Kvlrh4g2aH95HE/ZN7qg/po6/eXTqA19MdfZomVjgVsMHotu0W15kHU/2QbQnC7p90UQJ/Bus6sSMBN9THO6fJETMba/pnMFs3Zj6rnPThgGA13cOP8jX+6si3wz8+NjnwWk+dQHIII2fO2Jy1R1I7Lq2q3DOWNuBjl32Mn1Wm6qlFAXidDRZndxQL4Ybp6qlBbAO';const _IH='29b648b6e4416649c9c161dfb4d389fe66404aed709c36bc9ae14720cda3a550';let _src;

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
