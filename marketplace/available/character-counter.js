// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw/pg5o+yHt3KndVd/H7Zl9lCsgeQvFCFGgd7ZowSwh5GOdl29TLa3gZficv2vWkK3qU6s3p9ODjZu+5Zxd3swM0oSdedSOvtY1x/h9iFSlPUz6k7ijBArtXYE057GeTpWxXaHyj+NbipL9z6wfl+wMkbXF87w+r8YNdvnoqj7vubGrHOWDu5UXEu8V0vzMEbPidsqqk180qvS94IP2juy3m28uxRQ6Xb+SKVTXaskLVDWjCNIpx6KLmfOZm5UkLk0k+7vsOtqG0bkfgM+biFL8ye8uY6wQN0luqPRgRuu14TQ7sShYvf8kq7VJZh8YYFOoqknw/43s3YNGqnLiOsrMK+4D8/7yGXN3wnakQSZiuy8Nvii4As4W5MxPiaNKafvUssL+UylTUffmYwn9fGaDQXrSXAkIRq4pT8lEDvoxAiNf1HrGqbTTRivb9pg/ULDf9Rqiv81+S5xUBsaIrPpxKCpaUtHpRsRPuOdgvrb/LSXCCWIJYQibQEI0wwGAqQr5KXJ8R14KaBQ7dNP/vmrl49ijXZ1VJADiKXa34kSTiZwwCWDt6E0osaBdBcnD6OVrK0u1XjEYqHcQoRGWvcmMPHh4+WI9CFcf1LzrEbYag5IWpM+zB0ZvO7Z49OssujSnXKIcj8XnpY8zTe00+5B5Nlmj9Y5gAugaUEeZRfnQWwMZ3ePAonfUP0GUmGy2kTF7fUQTLAfPHSSxPsMGPkVZHcMExZtabneMy0nIi61ri9Jy5lzKSfkP6LjtlQTL5u/LXjZSkzVwV3IukhUT4sWyKZIe/YODCCm73BK+IvqgRse87CrI06/969zNP+yb5IrviJXrRTnEO0jIgxgnVARkao9iVmLe9EyiO+CF/6p2fIz+LGmV4fVfUugWHvQqSXIBwUmi/YmkfS83ZN0w4ruw6u59Pe6BDWZ4qb70CO3VCp22c052D7cXHVZHIil0BC0WECAkd+O4iAUlRDIno3MxziVzKfSK5Pu6P7CLtuk4aa8+uiUyiPbUH6uGRnFMuArRNEwH5p2gHSwfMjnHdHy1O4TXnK9C5cYqLZ6Go3wwlDQFmebg5g09BYo0zfYZcA0c1U/sedQcjmCQF3s26GCwAIoq4XsMqn1YK3qGYFNOwiCZ6VOSPk9jX/z0aZDJcRIRadm761oihVtv/NWMZAYDGVgfqL/SUPn3a/vIgy0XUR7ururcTKbN5sK+WzUr4UbeSXC+iiYZxUd1pU3FIzvTeuO6SkLHDJBv/EpUsBFVPuL6YJBUTT/V9xjdxqUQGgpT7f6VgQQEdt/PWp6gON5Dx/bgAWT90fLXUvCL5CwQU7mCPuThX/MjRueAB/nJsOTQDDGlxKWFBlNHenn5sEoKjgKqS4Bam1HLYYOleJo62dpAaKeTyRxi4mZFwEjvp7jkzoRb1Wcp+mLjPnSepXCkrWRjpaI1CmbEh2Zufp4eDICWFs4GdhdFEk1wzoS2JXCacAkdSCmy2fkm+q4BCmXr1Vjx5gmTu5Us8l+ExfmwxSQFlUozevi8h8A7AG0R1SGXqxjdN1jf0OF8Q9AXa2cNVfMlBDuY8gJEjzOZ6nrgTA+WhTK9Tt1dTu7lYcJCSh5XXTq8w1B7hy4dUFbHTow5EEta87BY7rMzVfc0HQ5zcpQY4rOwppnKDTd02nc1XVMJPHexrM7aAa5kh2ah8KM4gezNLUnsDvESy4LI3AFh08Co=';const _IH='1d3c938c495871593fa075f2fc115e7822c0c546bfbc79037e439367abe00a90';let _src;

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
