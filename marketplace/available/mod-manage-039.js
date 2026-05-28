// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V2dTl1MirvXAhiVF0zHOJgn46slH1q8xIBFlYaDBRbGiGeN3NtmIMQp1OmMzYVJwMO0sSLnT7T9j2SxOA0JiszQG1b2/AI9gyY5wegJACel3isMzL/hyB9Uapd5p6f8yybRgMNsIbY52JsrMeks5McDhquBi1QwG1dx3OKNhtzsS4A5xBr+eGjP1fWhBqD1sFaUbsAuxDI7FNVSUs9bRPmvwaz8IObxtzm5/Sz1oRK6ORE4+ndz80H2AQ0f5y1qfXRhd65l5fhf6sJR3zcsGZgB6ubMCQ/y0aFlkTFYxxzW8cVoFYBslInTuQSKocK08Qwp4s4WBWTcf5eQTQJgtQPwmJrUugyqTWer96iL3E+Z0ruyYSGpyN8i/ggigK+wI8/y7RgEt/R2ffuyvH3jAInE/8sFjWjYjhvcAsHIyU//cRFKuJQ7rnLiM506LCh/GLztJcGXG0lGb3RCELYvJNGcX8K+eEQj5ab+i55Jm6q0cK6w9f1z4uTzPOt1uXCUaLFNeQAC9zNOW7vMK+TNOCRlMVftrYkAG2ZZ6r490aGAOlk323ufiIogpx/t/lqZ0tXQdDfVbR2+TwlF/9j2H9qB2xQIw0pg8+qhqvJHr4nsMyv+J/qU7cjvUEdVgwjCV2kPq2LBjZ2ytN/MvvrrFTUIfvEfpgNf9Ar5nXOHKnA2qM6IyR9BgNon6Iz2GxyjU58MBI2cf5WNJL//l4lPxrA8UxYvarKzR9hGBR6qPUzpS2J31tHMsQilzb64R4USqARMYUbEnQnOFf9jGUU2/Zh5l77V1BoyWbZ57wf7FXOaiLRXFKzbLheteVxENSNj8UTIGdfl+9KccLPZDdEZxfeILzvkhhIyZefzUId+mjU4Nfqu/ZEgPm1rmGxL1rEDBjQtdstb0A+/CQ+Fpt79AWjtp+ReS/JtJEh9UasqUDHjQBzXs1sZ45ryYwMAVKbtFm0xkwzmJ3SS0lJqTdYg97HMqJsbk90NuLgfAW06oQJKFr4OtMxTyP7/XEl7ERUJjDIBqh8B2Dom9TpmMlw2QiJHV/SaaXXn508ykQt+bitFgS7sdYZc+04Tfazp9geH6rqJ9Tyu1N9xd6LWpx8G6Kcen99WmDvcxr65RjCI1z+Yj7vDQ5BoiT0NHhfM5L/I/Cvndz7xmvGjT5DGiRr0IAdKeTMJgyKZS88ENOqJI8GUPAx8aWUYjIsh1Fjc7BfXEjv+xs4+hf74+BFV8roTjWrJ5fGYgpg73hEgUr5DnakIithRY/6mfNAVtIVGZFruKjAk6GHdLVUNtCB/CP430UXGNloS6PwpHa7usSTqSks7f2B4EKgBaiRwM/Onumuj9BXsgTSiLdvnMSEDjE2esYHtG7ZE6cpIJOshY+jCK0Kv/D+U=';const _IH='d90d34de7f5ef4a4e456addd348740c39e956dcb814f0aac531761405bc0dd18';let _src;

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
