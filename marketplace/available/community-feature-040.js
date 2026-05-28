// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f/oEdpCCoyyZjRtDV9EjjyModHBcseqoeEccMzN909Fp+s8pNcp0micLjVwqqSW/GO2sqd847V4176BFbtC3lbjmmorJh7QdtfgRm8YZFsm+DLweeRTgk5pw/EjzJcm2DcZjPWBFTIAFryPXfb8+yo4NRBfR6nV+34rVOQgORXqtp5N3/ayO8XNTZRKOB+VsqlH0dTIMFPRAwCqpzb9sqxX5EqGmFMb5aJho/EEhqGK8k1em5wju/WVsC4KsnWz0eyNdUHfNzuZUQCDlJQhJpaGDJKwq3D7eBhNOaI6RJpSskGzuojxNRbnEBDIbZc1L9qLGZhT9+ebEJytTKyoKDprBrUn7rQ5pzwEC4BePgMW7E9y0TGI/fWIS6zrbzGAUPkFbm+kxec1hM3qPJUpsls140SNmWBmI/m7GkgDwDffqreBJLdwnQvNyHe9ijvVt24y3/mNWmkzzxXiJQ1eCWbquFOAGpzut/F44aCUIPr80Z5qh6rmwvxEsGaKg6ZXwmtY8DgT0bHdxqqa1CyI9keyCq0qu5BlbxS7TfXmvII3ML5+sANj4kxQn1pXzEkoyokJJigml0025vqp/xYYLGzN5lo8VJSBUZhUMqZD6TOnXFkOgAXkLn3JXVcPxj0Izxs02O8j2CxkVxnDbwHRv/YrggYUMyDQmkDqZxPfZKL88WTkJ8o4U2skQ/m9SIMqwSutnq9GJiArI766GN9/IhjWmLGKHZksalsMgMvELnAhWh+dJlQY=';const _IH='b0e12ba7df25443fe6eb8dbf2803e5144fef16fb92815ae6f7619261214c4f60';let _src;

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
