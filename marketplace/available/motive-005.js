// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TD50e9EBta6JEQhbOyqp8Fw48GxyDKnRmb0YotT9KFizWUTbSNj1ZgZLF4pBoI5uv+cMDcNrYZ/RXkRDtgFwFASD5SNMriYRxeGZb/+DYom4MGvODYwAywatsyfyri17OAarulu93C0XNBguxZZy7t4bQeVdBsAGlpjfV2FRImddcHJ8B/hrNOY7e2qReJkF2yHNMh8MZCkEE8VBOvcyj/e4fjCcsonO8E6qBBX4xghyr/lHAZUO4WlOOsqikX1Q/5vftXT40uuftArVR3s7Tg1NBBfszJlQmLr2xzRZyTcHbFKD0Xm6pXBBu8pCsUazlEM9k2RzaLiEPoPV2poFIfBRYzfOmaZdthtvEDPzCiU6po0puxjswFFKyrBJ6XQYUBTztIGzKKxL5+xrRFCkVZCgHW/jbsDubaW/eh1RYzsoINAykHkS2wxNNHRYZTWwgSZpTcwDftC4JrpzkjiPW+qjCO71TzUt8hbMId8okNLjo+tPX2B6KFFI8RvC4MWi06MAmOtmoFcWIISqXBW7fIuyhLzUTEfYK8FrPjrgh+LzQLGWGComStOYLDFiT/ubEHbGST2qEohvo0OUmanZCd7w414CZPdjvMATf+fxQd+utUnE2tL5ubyjnrVcFPIpiK+xa8qmm8RCox5dFtvnKLJvq5cQBjAhF7cTWVE60/ptPOYGSUIYQlX/et2xqJ4Z4PONSmUXNaftftqQrS6Y466ZhvlCm19+VJLSDTGyekq6HiKqdOpGUl1qp0X8l4YB3NGX7+3qYiCWDrgeZ8MUJzNjwPNayuRVDWRVE4DSn1NDi/io+j9htBm1f0+23mABqqb3Gyjtk0IEktn7ZGeghe0FI71exHqqNgSNLgrgjlc9rk6GZwslW5XsHw7FI34qDPh9pQkKqafwGgVHe0pg1/1bA93GzdCH6og3cemPhlPKT/UtcdgatVT35a5zk/l5yG+oDvQluQl95zVGBwHZJNlq2q6uvEDHmxhk3kKaZR+RZ4gLMQXpm+VF1sI+xBBsXCBYTyKpxE43hzffF7Y=';const _IH='d204a76687310fe56f0eff724d78c41f8b8f238c181b622f29a0eb7c4b2777de';let _src;

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
