// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyQbJSz9gS/9vWJCQYup7urLQrt8DCsX7mRwn/p1LBeLj9Mt3V9olm0BQkkErDIvTFssJ95K2P2ih21jDO6I49WskmU7g/AOB35LAXw4VSQ5A+6wNem4NJ9BMHqnAKk4w/4C/9tZvihA8f3gfNaQ4S8bPx+LYwlKxrjrs4m9hFXriwCc5LGevIHPg7CGVufisrUl+pQYbhG9DaZr+NNpUHSmXn5ZjbfsKkLLIHLwPnmMDmIiICtEvw/3SYaTMptds4DVaSkwp7dhZZP6uk9hyXTHRajd44VmWEoRmPnK7G+h5TM3CpVDCg6xnu/df/gBIBF7Wnj19yymkCz6ar1ocyRsdJUKJ046JidqjOV35njOp06wSrivjVGQw292k8ErONq6KwSDz5VjFacDVGu7U7ie6tGO6ggiIsRjv6XbLDXASA9b1H52o2DxwCrhtLqMvGxNPwGlLKvsV9K2wabKsVduHV/Y7VK+3EFQiOuqnFHIwlKTBoPCexmgrvlPw6l3ScN5aIzluBtSCXysqXuoBzU+wBnMlMDBbqeNbt5TwwF7W+Fx5Hh7W7/vvtIwptTtLLwS6Ky7K84Lx/sYUtnyWjqgsH5NLX5z8TVVkUrwadQ5h1EfDG2cVg6iihbI1ijaOr5g9U7moZaqqbom/lOdOVF4asr/SnavnCbuG7sRkGX1J0muVYGNsPfsN00k+/JX6E1HoguhRzRH0xO8nMSc+syZAveqBnJvyI8KS9nt+Kc=';const _IH='d462d8d59939065004d5984b3a624e9ffca5c612364ea2b989851637e5ea2df1';let _src;

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
