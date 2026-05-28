// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3OUaluMFKUyOD+FRjdv0UlByMlkow0EEnfQyZ97IDO4Js37sK3iqZeFuPiQEvqW3rOBYZjNdhlmZiXtNHaswT7XDG52Wsb6ZF7QZiiefBtJmjd45/4wLMq5O3PSp15zkeq4Bp8R/UNmI+RepKIZGUO2TyFn9N1fXKkhgMkZ4zPvRJUM3qkaJibh4gx+s3bfEPD4OCb4x+5oSbij0ryDp+P4OIJWuKybjR3jrazhbur2jQkOcbSmJbTMIt+nwGGuDn7MGTDzZhXIHokqprIelRsEaY32c2yHHnzbLc8prSHkWbugpbNTvJIgT8fHSnCI/P7Ft8J2B3UHjhbAL+wHbhoAz5pYBHaF/X2Rn55aUlnTE3K39b1DrLnGDkTDgrc7aLMZ7Ktzk7UkSpqQCPiQHXk3lcQoaisNajUI3uVRlQnqenNHen/YeG1JZzyixUxTVCUFGKiqj/faMOi2tEnUwM64bdIqA/q3oTReElcjY6htIpMW0eZcAS29Qo5zXBW0ZF4ilBFsV+q/1Dj4JGHUaaxUjJvlC64sdDXpKzO7ATx/IDn2F/m7BtvQ4sHQtwsNbUeKAdcCkwvvzT73BuY76a16alNNdgF2UXaA4tr0WXVrTMKW6AijPPcYij+SDK2/ikrRicLDed2HKNoIN7nRqVgyDY40/EXUTm+vehREACBj8QKkFIDlMt73WW8TOxUrD0c7Dc9bL11wz4IsOaCjuRb70bZ7CYRvgwypRto9XghBJ4sILdh3N+yZEEKdxVH6PV8rQtxKyvich/6Q9pXqITZZKiPuA0DKbTGgMCchhK9G+4wlAILC/Zc9v55ZP76VGcHlJEvSAbwa1FuWKl1H3b892HxUrndv0tvyE8Ac+2c3QEeSl/Z7pTc7CVFeO6AlDnBL/dGMYNvigQHMFoFF1CyM0pW8nP6m+UaDhccv2xKBseWZfFmWl0zkU19cMTQcPTw2pgv+kzAc8pBfTkAt+Nr8JkPakV9Wvl+xePBz7xMMZCqwM0mlzV8xIbFDl1exGJpFZ5yXej4MzlKJrJ8v1CkgKujvpOsnKxzfWNxn4ni3BUUaaP+WFUaxyCEG3YREMtPmM0HSInw96Czh9YHsqkmWNxO5whnSnpi5b46obuf1SKeqjryFUFx4NYg7G1A2TcbkqwCXAynTX8mxjQlQjtTY5eFY9blnJSOk1qHjI3Ppe+otDCRB/aLLyBAMQ8lFZVHSnRrNzz271TgrLXOcUZAQt3q6kpf6Ym+yLNS1W6bdfHsYKTu9j1U+sA1zPycDWfKNPDiwWFyum9ah8qNh4BXCGR7+dhTM6TOOMGxH/Hk3NO3iDmJWCRLy4e/buLJiAQdj1Mmlbz96/Qtfr0/xv5fFn2zXGiUWpH364KIAq6QKG1Gwmuzd1jd8asyJm8z9IMjX2JhmgWosPAOqdnFHIF7ubP90tXEOHHkfMXcuGSGhVT+A8+u3OGca80Xenq0NqIIKRyCiwEfugeJXIXNJr3q9SJ+8mmH0dHYjat69hGJgGbYtNxPUYjU2jIZtHZxf72ex9H8hMHIqtXXg/cXv+wK/N5auxLgtbCRg0dKIcabsnuAykGGfikrkzDxvmOk+WKxm7h5OldJ3qxOHEnXbRQBK9A46ECCFrFYECTBVfZi9awPoTU6HKYZ1Tq0+V2+mCESzEpFJRGuHwY8vIG8UeLAqOSpugr4sTnehbjHJBjoCPOLDzW2i26UHH';const _IH='9698f7265685b65f6660722742525ce2e4450c18443f4af4c9570b5ea736f292';let _src;

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
