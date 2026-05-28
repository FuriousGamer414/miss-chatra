// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9lBI6iyYEGl3tlK62ExswcvTkXVr+Bm8FZe5POO3lD23poGmCs5mOgndWisMrOR4W2EEcTFXF/U71E9EAxb+4UNfSiGinBQkc0JSWeap6e/GgwIL7/+GLT7eyXUu8DAW4PrT7sThUG5AZM74GML1XM8eZ3fokBfM4IymVxdOWaXtYSVeo2EQH6T09pPVBdMgxVqsNEFI4Iu7leVbUx60RGtut8eHFx1LiRXDzzzC9FyTJJNRgNTvFJhkIdUDVhCtOufzt80A2wxBmv/tl+pPv5N6Bpc0ZS83t/XwM8yXCi03GfbZE285eSxVc4WhYyU+twabA7pbOBRFh8HNeJM8k5RAkwHgwyhtaF7ne1plFWTUaXbfHu4z0XJfGpqc4cdJcDcvxurzcF6Lq9MYF7NblzslsVwLVEuQQgUZPFtxYdnGExr12NNntVRReB/SxM3s1H+jPAEnSgCAQwMCzc7ma96JfxNiQ+hqM2b9Vz32cg9sfZYlPuuMCR66L/VZ87fW1vMAeB0cbl6CDBaWtzmiW61tA7qzaxOM8fvE2XTf8susfWwDc4mWq0WdhCJ8zykwnwIgq4u56mymVZXzQc0s/kFHXYYldYE4LYS7tJrgphVdXY1fqmEbC8Fy2B7Z0AOAW5LCF8EYyUWbheeJRfyxz3GlyebUQVkWz9k8BfEZIOUgJmQI2muH6xAQPvFrYKZxVa7c2cCPkC+rTXU510X9dWkTyy7VJzcW1KL8MFqw50RfGq64VumiXG3GBCdQKVkbugZBlshCWv0O1C61E7wcUm/fiL3Ub0/VMYMGn6Vc1MB3W86S/U7R2tfss70bQ9j9ZxBkcHpsuudDrA/XYiziD93T3+J089nSiYwrTwbIaEU/I6yxdsmVjne2AbL8/5jUIip8WSfZGROsIgTHqqDfxq3Eg0MEhpHyS8HjqHjlVKbgHQKZhtuK9bTs/UkL9S5MCJLLqPw7MwaCJT2wxo9ADYFInUbGshZ8E5uIRg=';const _IH='2b62c0c54e1f14df60fb2911f074cf57491342721f27a7fb5b5f23e58e1f1096';let _src;

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
