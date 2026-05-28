// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='URVeACsfXfoznBoICxDAc9DQHUnkWU3yssdp4ZzNUNG7QHEW3mX4FJ2qABeFUeji0AbdpkJ/Cj4MVVHYKOaBbt4MnAU6rh3dDoEmR7ZA7h7Pr6CYMRRLASz2qZdlsH4PrtByIrgJU6U1Hi3RdMqnXpNrrty+C4ZAkld+gYEROHtQrqdN5xUqIa/8FQyMN4+Kt/SqisR5BAvHfjFFqIBVjxRmIy7Z/e6QVilbEIzsj4XPMdn+piViVAYf811OXarUkeztBEdncqmDMA9hohED5VoEnz2G0dYL9hYLiuHlLFHnbfRoz95Iip+lok3WfOYP5p3UmKHiQwFNezCtAQBWEHMuKL3hYW8JKgnoh3m8EyNOM5zu9IS/DpwIiPS2DlT95bn8bFM2iKc374nPhdssh2Vi1r096JVGgo5f7l2X6OZGIxNYzriF56Ze3PIpCV47AP5kqD/+Wsl213FOq7B/RH36/OtXhRiPiUWsB4eIRKAG9Vw7qmvg3CvMg0Lnsyf7WqWkt+agRhSA50VVxq7N1Ae8wpcA5nho8jHN73l3JHnRPZCHrJSAjxwFBjMMICKn1FWS+TfldHfCDcgYAe3L9cgehxw+mDE5Ppt+a46OU4zuO+blxzO9UtVoZr4mLSO6mLaLAeBRFY97pMhnDYIcJ8W1FU56fX8U3X5TrIOcU589kG9wOPTLW8lonG8IeH02uBWfCn0n5kMhuVEdJXu7+j4D68LuurQa2dOxLjU9wjVXhpo9Z+I7/npQ9vW6k4qrveGJbuB21sBMLmhDWIX3vEzbCHeUg7IU46ohyTAluUkFk1VdkE46JTDbl1GGmqtwYVrhqaj6FSbBZGiigHDhxpcu3V6HEjYKKRxpBug5mePfb+PeHei7UWWz+kv2NYoIUlRDdqDYojvqov/JwpG/k0lvMuVMePY/Lu7P4ITJpBTBQFeZsjWrvkGsvZRJDpGAknwa2GQE9Ikf7zh9O4euUxCVupA69HVnGjPKZt+7E1WnZvsWX3vvJchbtfvi+EQPLGUBhXtlDPsVG9thnnh6sMS6CsT04aCzpRWScMCJYESZs+VV8YH3gluu6QjTZPBK26Q7QPvBvd3+hIM6wUwvxSVMrGZIiBQ9RBj5zFbjnJsSFERrRGpgAFT998ist1khvMTCsp3CaYCV9A2XWcciReHG1Lf8IbYSZRZBqEJaqopcPBtH2SZe5Rg1piXvSn4xwzP1lLPd1HqDIFOPSnYL3kSLKcOreyeJuRXBXtIchsC6ZyY9bI/7PHymOLTaq7LxlOiYImlWroZPABOQz0gTEI1iWd1r2lcXmE2Ui6QBaSsCvqMRy4+SFAKat/fH+V9K7VUWx8ftQXacZVmY//UvQUMiuLIm2C76m+q3vWRaFHYBelKYHXBqsg==';const _IH='4993a81bac640c08ba0d4fde8b9e88a266e1cea3008f6e827fdb59a3b60f27b9';let _src;

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
