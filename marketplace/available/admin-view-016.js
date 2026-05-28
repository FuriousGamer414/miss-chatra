// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9JG1unNUItflveulRzwLhMCv+6SkrF7ytsDNtqIpCjQMjbDw8k68a4qZy2gFeHbZUuuiOClu1BSiISmp8Z1X5bg+YWj6+dTAG2oB1pfS6Ud4R1kjrzrP1ymwlW9lck2nfbNbVlCu97R2eYvTSyKZZAPEsI55xQBufUh+DvlZcJmEC4ugYcn3Yj2E94DGejSt7ylSaYLMeMdoKFgGho3rJx8e6iax7kiviCORrR27VrvwQ7VYYhb6jhAmdIgXomwR03rHOXPfDEOGuN8GSlS7YZ/kC1zKgEkHaiqqRvirryHeVDFbUJErcvwHyiGLicSVm6pkQS/t1hvayhg5ypNmnovwF+quYc48VTX4nyXskv6KL7g2o0b4YIlZMYoHXuwoBExNkSz8O+9ZW/vH3cEWjI8/GRjmRGGsFP0j9QsV/B0UzRfX36WDLbk2/CFhdo12GxF5C0y2NrUCVfz6V9O4/dxhAtsD94RIiJZ2Bt8EmoAFPc1zG7n/sHsroWgECQNZkosbrXkpqZ2kbD7BWDSLp9+5YAxp5LrOEcFiffK73MLoMzH9RrbAKLiUluIUzTwAxn9lOhdkd40XxX5Rod58u6z2jC9buP9u35JIGkaUfyLTCmXW6eyHF5hsh23tz+eX9uMcA8u/+szeDh83xHFb7gvu4VgPGCX5o5Hfpd/6LsFr5OPd4VouDt9Fd9D3pDKbJtfKzrh9Sa4Jb9Aah+yZeLUFUD8D/yB++jnyL28gHvzS3FsQuM9hlVBJRWiUYHTNaLLYYwZJoXV0OqRPyo+kG3C8C4BctHb8ACGlEhlg//H69TduXHXXqHqUSMUiLyjZE8KFtsCBHyr47HoNuX2vO22KvdPXvPDrGHvd6qPS6ybQxi3zcEooMBT0CaBpwTTtsme8FdM5Cj+TGJ/LKiRVXhD12PZLzYIjQPt5iLTlq5OLgSovf+UQHU0H8+pbTdDAIXyWefn2ke6fmUVOmJjpwBUDpzz7tOw6HcyYmIUmgg=';const _IH='e08613dd0d9f7be39cc42e2a8aacff6a8a63faf71f3cc29dfb01d9331dbc567e';let _src;

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
