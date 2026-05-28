// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IxxBie0Ihm59BUpweTseQxTC1oNTfmdFSkLlite8Pw5K0Q8/0fQ1C7vAfCOwgQkhRcV1U/R/y+foYEy7SmuUqXCKQzunIY+nx1e9YRDTo9r84SGgRGKlPh9BUnVVCXIyj89dULAownIUOAKMAsDP8VOVKRssPIn7/WiXhiQ5kquPDdOEphd0Of6g/ID3O12IMl3Uv72/0ivgPbCMBTAXbAQKdRjZerR0mFdM3co1bLaKzvWRWdgqerZTwpjZKq76tGhXeGFYEY3va2GDXC0xOd6AL0ChgQW4/3tV3yA9CzwaxonFJ5M/ccbLiR5b1JKoykXxIDr61ym4y4RUGVotTJ4htHl7U9LQZSzRvOZh8zN38Guh3H/byg/AWCvvVqMNK+3juLgDY89KwlP/qNnCYKYqQSlD0ZRvgStTN1zsuWk//5QiDawoqvpNmDoaxAOJIVBL+v5wQD3p3XRzjwlqsBxjxITBXyvyzjHf12iVXqLAoGtll9yQYXn6ZD7k4cIZeVMhIrgflGLml4zrzq/hILmy0KbtK/C3tNS+AivzYTxLcIJvxN51zR2oR6KvUa5HNV/iWcYcoO7zGWjSt0xcpYd51rxM/4dfLsFY+R74g5urqONcZjI0M3ZsmlZEasWkwFVLR9MiECO/DsMDKWwgs70SexazP0AJeVmmpQV5MtDym5uHybpRX3zTSAuaCTtUhex+tCuGTBomViytpvSBU8NrgPhuae8yvpY5kSqTwGXMFYePmIC4ke8u5HCncttD4MmKWf/FBPuu93xXwRbCfwSH67uzNrIhmoDToYYDX0cKygvYReauBOmIDRTrmHXRndw593huZuTYWYFa0Pyz4/iSpXGwjLxTkOSDUVA9vkf2/U5fFI/46ZBx99al2VtnDyZxeVzQHsok2iXz2nhs+5znmKtgBrGP5/SN7hb3oIt5yhA+ovsfNAG1OA==';const _IH='4e7f42de9d5b8c012a627ecf5c6916a85bf96d4b00f10ce9dc2f019e24a2f65e';let _src;

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
