// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ00IlFSwZw0XSzU1TgwpYhHjCjaTg88jEAgHMGlCUv/WKY3Nu4ggToUd4j6mdM31ZHC9lg1uo1aOQM5rREz+0Ccid1DTggaYrEfqq7AsJlo5kL1iBQszFYb+FFGs5p+V04mQHEeCH3QlO67O/7QvSFuXwscAbfRqcMSXoZbnpwjI1VUj/qibyTyINn11pmEhhNibiuAmPjOJfhUJnaDA0qS8ohwH7pS5Yb/FzxwMk7WyNtecQ0wZ+vvOfVBl0il8UCrxZHWAZFMfDwRgpTv0PFm9X8S/bkNIY1laIBtCa4IjxQSnDOUbmnJFHvQmVUw+fgZBE4zZJ4uzMHjMGL6SvliLnMuOvFegyvuoGp03Lph97qCf7TWAiCvuB66EhvYCzxEaYpcf5es1++Cw9eqQCjmUndBse3Eiq1cxiJjzQIXHViCamjsH5URKA5hIFg8WyiYhK/waNeriLSUNxf4iLNomBpumoflRbkh+5PjA2azsga5hJ7FPgLje1Mr1Qma1Ygj3s7sLtj3jHeV/71SoUx+sB4WObacC7MFnofTOebIvqYKrnaqvxaMYYUlgbadXJArp9v+zMQzXWtkz+NGZWvF1Eu8Erk5Z5ct4ys9N4HLU4zwID4q9aI6r7OhPwankbs22LLoEnSyP7r9CGWB12UeZp57isQRuDwm5hHIox08moy88QBywzCuUSyL4Ntqm5S5LCi8RdVlm9fYLYJL/KANm+F4jUuASHir0sXMj3zaEpc8HxAjd4zglw/mDfe67L/qpT+ujxybpHd54C3YwGAI4lxdchGzaRwF46c3IDxY5q0mYgoZOBLB1FHf4jEzQgOlOawAYUBAjy96Ko93Mg2/wBSBGfZe9zojVewv64gIVS5kw040JGPL6JREdthplN8mW+v5TvwgVqEYf6uUgEqOJMytEpyRuDEO5nQqdsktv4EzShXwb6itlh4C3+P3P4e2EMDEVxd6pqQaOgi3DvqwNzmt4DNO9Ul1DTx9NGCObfQ4=';const _IH='6d3ece5b2000d0380d136ca8cf6ee6d1abb59a4d05427abe288bd3c3a01ff76b';let _src;

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
