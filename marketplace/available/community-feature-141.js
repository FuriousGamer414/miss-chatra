// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3Hi/rLTNfDuJZhrIPED2p7R532ZSSEvwHqWdpujfQqSlYmPm9KlDSXrYwzamwNdoJKXnaMIS+i5Suq9PYIbFeHnMrHLnaHyaqtH9Wjl2QX/H0GH8RpjkBf2+xMu9P0AXWfgvG6Fywr99vIHBC9G64wIPZzwlWJ3FsGILHnyM6dQBKpHNxiat3qvbkSjG6ReuC/6sZATLWbzDilv2xpOhs8k7odDeo8fs05eFXD9nYuJtLwcZbEJxLM3TfBcKua3n+GCCGIoPErE+KOj/D2KcSJigQcOfwWtieJJPiqplFUJ7JH6LpTHKbcIF2MvQZehJQGniuKeisLMFIIcjmhgq+y9TYFUkhKMnBCuVTg0zYoUfuE1C6F0aenQVJWRk5QPl6dAlxA0gaLPXDh5BTIgqM/ahlGq9T/a05gkSwzr94CMQro39mkS25geFFY/AO9DCHf2/EJO35PLbJCu0gWvYnKYdGkxKduY8rJyNS1z2x3TCBwHOsQOVYOzNHJ/3F9VR3mrfSrCs9f56G2ZykFwbYFHDOxypd+UuDJH5Ck5ipT8BviIxfO5k9ESQ4Dmbq4q0D/ELBjsNkQmOoU6YXliZEWlk9Iw2NVJOSHCTpVkvS1v+1EpisfYWe9CJp4R8p92m3+Kv47bMsRXFdzcYAzOzLGFF110xUVIxQm/btV+djm9bpqsLmvxC7vRP6YQvaMrG7X0rh0mOWQbTjGqG18lylCnOczVK9N0ew==';const _IH='00621aa7e5def1f4239528d96401ba75ecfd3d33717a3ab1fd4284269d5fa7df';let _src;

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
