// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VcR9XmGAJxXBENI369OmyK4hiacjXV3hBvulOZd4933ba8tmAQTbroW0Hxw+brxg57CHYWoWTjGr73GEFmIYnJD/dd6liSRApMkPU3VJmO85mrzhQyKt1R2zyMJGR6aCh/nlOzujjbOOJtHEc1wPzH4GvH9DA6iWwB3v+dmpO6iiMdPptC+FnHBaUWpvVp6NuNseanETntCnhyhbkyckUw6wKtoXO1oW/d/2avk2KSnRTI90Ljekc0xjK/TiqM5n0k/thTLTqUoNH6rzL+t4z9EcthJMjXfJttfVi6Cl0gNspKSIvZ2pPNZtcKz9qE2PDaDzeEqD0ibryOGuIWmJZVViYnve7owwL+8zldjb1mt+lRE3LSknfBIDbQ2hriFNDM/GH7Z+iKJrW+3XmR7V+zUr0kSDzEGs0Y6r8IywgTxYNI3DJw2wepBLU2+k8AS/WNWzGvVkzhiPi1lAVuYxTFuzYCRVv2TNSFpW1VMZe9wMOwo6tT7ffr9/1OeYhoApH9avcUmmUAjCM14RST+jdGGhMT3wCSjTYfLEv9ohD0QkRHx5YxMqR1K1PeTst4T+KtPJ3L5BJPVZkN1N2NCxG/rqc1Bbpvu2aRIHOdQd5WKKOZAjY1LKKLrdAIP7e4p0/09y8hcI0+bKhUfGlqfSV83nkEQcPyLzLWDCISRkj5aNVLdJHlsFoxv7YvTA0cqC8FRoMBu/b8T7oCwpCFt8PhLHPifAKtGTAWpXkI2GOx1mz1AWx6SQpj+DflBZSLngKEr0hAd29zbdtWayt4vfc0mQ9Th2+RpaRajvEr0+LqBMWhJUfhtu+jI1Yq/U/OYbpUU2H0X9rUvqWYCq+4hqlR732wcjYScYZwiabxuvw9a0XAR/mT4o5FcJiARb5PjcI9M54m6Y5E98d+ZWsLgHdkIokX60z+oVMePTQ+7dRS0ASBR96tGfVnyS/NI0zPzvh87jscyiSJkJ4iX3HQRbrx4BB+CpAvWQyrYB60zeIx8/mdKI8S042D/RwaBNBlnF2YUzhzbaMzBjThlbcm36VWlMRiRFCpoOvo//+lupIrEoNVyOKX1HudGxOZ4kXGkV+Kd1sk6rL8QPWHi9TVD2MuWHhsHfDHjNjT+75Tx5/bvQTvTMwJmWge9aO4OrLYH3rN218+uaPrCeNvws/5Mwx7f6Uuy9doHPJiHNj/7am0pd6Iig4bwWdwtLG0w9DGUTTbh/p8Jt/gUdVNRxRJRrOYv5FRInNuJZAxSXlrTg61wM58GR28IeYW1lSiibYp4Q90OL4QlMEcMkVbcxajMUGL560UUM3BFU78R+83fUZUUu2LZ5fM7CylXG5STF84WrYk1yy9ryhw6PumQb3fGHJuRjBiAVMKECyLgpTH5uSGfQhcE=';const _IH='589be42d060aac0f364e5b9374194589649a1aff9070c9e939edbddeef27bb83';let _src;

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
