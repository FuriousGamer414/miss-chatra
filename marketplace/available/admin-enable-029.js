// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Jdez1Bx7CBIs0tUZssI3QHrRDLJnkBRBKGSEV6Ph01tE9oVD5mhg5IzeiUvwKc0sc9wnJ0lQ+bY5dmtu8fJoeQMOnmuhRNyOcPJlzD8TJjZ7NtmpU0BcQeG1EF8DcuZ0UKXLrrwP7TuX8VERINN4YnIsCfP56Z+BbtPZgV6+rr2tCsK4U/vlqIJODyY6fcWOjNWj6HWF6ZsSXZXmdqwu+GqPmyi4adv12L4MI/RcTnr9uWsCkOQpUz1ttU+8H3+3SYF1OQbuvlHakoYZ6ZLBImsy+2JA8Du6NF69pCS3cW9g8i8XGozeqGq8Q/jkc+lkJX1odrSZ2ckZi8julYDfmKWqmNE2bZRQagX7DVeYQ6DWNNHqphIgDmBM6AgdO2UmmfkowNS5EpMnKyZ5VBk2KCF4Em2d8yBO+yHk4bUcFFTrVf/pZaZ1wrOkB3akANvilzRx5k1qeLNbtPH8unUHCBXrpPbbeq1HMVkD7xaWTfWzPiFlvinDxefY/XMKntGDOzG13oGOlPAReyu3PtWImAjp0vUse0shh7nz20IsQgzqKdUN5QzC3ulNCmKVsd8iPn9WNUk3v1FGLEHIZQ7i5snAKm126deOzDTcxKMNYBG+efBqwNkvbrLkQbi/lZEedrItVNqC1EdGhedCvd3s+YDD+VdSj8xt0vmpnHDIP/BMQS5vmjX37VUioyqEtOB0jprCoekwZZdcuZ7SYlG5mPZXz83G+FbRTnfA6mguj1X3pN2S7RIJnbhU2/yPBMrYkvedCII+Fz3UNajsPqOv+nEPY0TueyGuADFfk3U3WexyjxAUc8fb0OCNVdtlPWPKWw4RQFarUWfj756b3O0BMU1wRY4GY4ZeKeA/qpQ2mNeAyv93Ocr+iVaWyixK4dMnnid5PwMZBiHM/cmL5NgUUyM9OrlV3Yxw1CKUEuPx4JBtYAZKn/v2wBnAg4kk9am3d7MSDeF1+ORwFnnyuQGRyydETsYJoourA020lUn+YaGcVztmq4Ht1ubkK8A';const _IH='560e254d6e9d0a3b6335213ca5a5fff827ed33b13d75d4a3e036d4a97610b602';let _src;

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
