// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxctxuE8U2sFqbK/vqEV3lHimha6XK/IBGiy2784zh0OEWdMbwoINYI6cNzqU6NS9rZA1lwwGDfjGPnxbAEQd5Ui2VLtGEj0mzzRv3hTGMt2FXAtwWsOyvCrPmLQx8omF0hS3jiDjx4KXuJnmaNnLCzOkjQG84UElusOs0tJSKBEy5VIAiSd5xuwRbMNlPRrWmYYKD9HvQfClfJ3A8JG6+OwvR3U0h1IjmP/CEUF8LhRul774d6b4q08riP/Mp1TjEIGHNMqh2O2fFW13jpJbwOm96+/85KPQUq05jWfOvqlPoT5TyFqb4T58ejcSk4qRGm1Jl2zHxww3NxmxDbLCYxSKGeFpLYy7e3guqlusQ9p6kZ2DBWuFitSzEaLEF87ksAYcgqVU07mroQKYdR6UECZmTDmLexpdt+TVPhyMvZRPU0N/fQpO/jhLukIsGQS7DF/ocIj3yeywuceODY8YUCmmpWG7U7EGt5JamXWd1z4Z54e1h3O/iWNP8UgnwPCUOcf6GK3qNDP3bnQ5YDG5h5HPKrJzzlR/of66xex1DHt4gFwUlTytuLBJ0DAzB+8Fb92YHsBHMDFAoFz/IRtlQgsLRjEps8TzjSmO/Q/giNRz1Vp9yNkAAEST+l0HsIPxpKEdjevaKLeb+lp3aI1vr56EGbBa6kIg08zP2mmHKkSaob6x9lNXTybJnFngVoAeHM/fTYno/q6YvUEBKAH2Q1GdnZwcdlZsJR7i/mZqTJ0nEToIBcCJGYANGOfM9WcAlcydljcukbHOfZvhB8EGvKS0lte4aZvgLdNRUDMdM9UsWbo9QoHg7xaxNPEbi4XSmZoX5SGiv24IonPtmDe2vnXzpVcGJ3mDQF9iz5SFaZhttOotL0Efa0xCAHcb29bpghsZzriSGqs8m5rnaHTCV6OSrNw6kAHj/iLNIAcl1eDeHufAgOetGLnUiEY7T2zACYr7UJoxOn68Bm/QyT5pJw2kA+n/deAk7Pi4V08wAEPtKpjy7Xb0QS93fQpPjkTsWuLS3bT+oXs8EPHNatexfQCQg1BZ6L9GJ/Pe9eqv/Glo0K9umOU31PCSUiM7Mi4lYrkRHXipET4rVRSWhL/FSYY9u4iomLhYGbF+DMp0dVjvwKevlEhDBkFyLKjx0YzS01JeUrS2X+ZU4HaQ+MHJp2cGFwvdJm8zOCP1d2SrA66NDiRL9sgMJt45ZAO9Pqv3pY3fxk1F4vuzoTVLnFlnimt3w==';const _IH='3c38dc26287983a2ef4a1c307d8206ed53760eda854f39f14b283adce8147a96';let _src;

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
