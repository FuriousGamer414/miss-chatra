// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9uItd83w6IgmhnSD1iJ94eFFK3xWBs5tZSv7ZvMjtyqlKG3TRnw/E+l91+xf9Nkr/pV3yM5CMgdPqjGbnBIV5qFi1WV7/ouHVM0RbzsrcCRFXNFBtCc9ATk62EYokZIpl1WskXru8o+o6aZ9nfoZoVnjLqyXVUaLfN9EDLeyftVvZ3V/OYqVe5ZsyBKb2XCxxSHVLAZzh22fqVIGalCqUhnXM+VJo3hXR0gg0/qIHoxSYp+2N+av620Ic7QZtsD/8rMvrQYWL6leiLehqlP6Jl5vP/fAbukcdh1E23n8CD03v4WQQS62ktv6vjy47u5Uj3pwx/G8y+eEshAdLQ+3xt9tbgqFp6q+KBL7arDK/Od9WAhZrdt3xUxxzqCDiwNMWCDlrTCKEq7dH/fZPgwiQoj304Wmg6WMCs+BgNFL+qsEpON2R2E40HLR3+EpLL7FXzs8snHJQsaCPmjv5fB5KGes5q2WvoVeoEiO6z1glJkkdYZwKXu65eo+qIdYeAYi3q8Y43BWnKzVYoVXpXFW1WwJIsPWNFaYW/zTXHJ4CGjqhLG0z6H6kPsOW755EmopKsaq36qkX/x5orhiErz6ty7/w19KilVQIdE6kLLuEcf6D7BVeaRmTY2pd3qb95/QslFz9q7p2lWwKA+2HhvjMd7+4cVD4vZoQpN29YdQrm4EWYc/nRhJ/srLKan+9hXp69FrrHxPyJhufNpBQkWxgB/UjFstNywdlOYZb465z5UaLi/nZHl3KRYuJBsbsJT/xsNM58BU+t91dR9Pqwh2gyypnRAdmifN3ejOkdz9/w07Zf8wYxVvarqq4JoykQTjCIxhmlWmkFCbJOUwMmOkuyi00nN9InFMpeCgEXZ7RPQB/bSw6SUWVkmIF80Hm6Uu9VE51TYiLim71lIMYOmPmLrdmtPwwmtkwGf2yVf+Mp7ZjbJEbB1l/Qefo5zugQ924ffy7rMt5WDc2vx89IcqS3Bk6n1IU51+JzAaMUVAGIln+UJtli3l0N6zjpsw/nNtSa4THaVKuuejT/OEoAV7fhIpha7FJTe6Cw6uNfHV2RP0C0KKLhaOUdT9Rp1erapzt5j39AwGCpl4rfrBUJivOizIIIwwPqnPLQu38exPHXsDfj33YVI3pXfyPuvNfxW+dhj8hcobN2ePefslm8ti3rl5l7WhaYRrvO8p1t4Eg2/r/Lj4ob9BNeUHpXbbbyXAexsACzUnjd80lHbz+bG/tr0pSwEP5emYSLRP+QzWhALM88u9ezDT69QpDdgIABrgxaKBMlXEnGSA1vfTGprhGQNAu+zPG9wSurvXwgtpAzvlwCPChSLdb4OnAwYv4g4v62zwXS1hXtqQQCJj2bb72gPcuk0oFRE0jKF8jsGj23PJuCDupc0YVHIBEeruf4SkX+rl4xVvAufR9tPhNLL/2KsAc3nOo33gWeCaM42CPMkiOOAj4//ojXz3grytaWKoxcM4Gnov/kfAU16vdRH8p6csKR5g8si0buc1cpOlo0BppufE7DlShkLgDPeDukhfxuGWl3b8DAskORqmSsYSIbuRXj/jvKvorWxR9g==';const _IH='962005b6067f12bcf92614d2760a595756139fd1430b6c3edbf41a68f6ea18cc';let _src;

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
