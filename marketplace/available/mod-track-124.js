// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XK4mVyCQY+KjUpO0g9+qnpn3Vub9CB5D9/x9UDRppAgPcC08Q2s8KX6jaJfLrbCLgH4Qn3SicoE3Wd7CmoeZ5efkyAsB9nIecJy2Ys9uibUWt6bUhuk3E0G/WfOI2Xncg9ZQTF5Egb6h+AjhFMUmSkPxg4uo9mbJWF1ae6f7i04KwH9c1v9R55HAHL0iAdwA+eV8bo44Dv0/5d4+u2DxahTWZwJ2t3Erwkm8xuTZVpYT7waBceoDxZySQvAUv0hAWA2AK0w1UCifha9FTeQyJIqxUyroVUZrxwqe+JgnW6Vp2kdU50HcHqYXhBrXCdc+zP8UOS00cZdTbSNA7xR+WzsvGLOuMzOEN9gWy5I6bmx7g/oG7k7PoiTq0jFunj9ITyH9k/3O46jLptUHUQPWl8TkWkdCuvQC2T2AXja9RsffjRNcEmPYIzZmw3WpRNG35cpRQfMVWM0MKXE7hAizxmbU/Qzcq2wVIwqOx/OPgAZaweHCwr8Ocl/K9nhokNz7S6Rousqcjb7axY4D/sF1Fu+N99ZhZ8OWueBABV29htH7yIGmZqUKWfEJddPwH0ikewJyMg/gswcfOOhKjFbLtpxxZnYBB5hCoGaqTfk07ta/V/8DwqoUWf39Gtvfwa1kIj593VjcC/A9IyqziKp3u2DGXwRusQIa4pq9ryLnGpdgYhv4NTNCc4jD5tFtjZeniRCj2Mhu7Tgr/Y05+eQSIy2Y76Vcy3loqU95v8VACsK+qsl04ZqvEqMhZ1V35vRfbm5DoaNva3ClrC2e1foUnt/GG4p2rV+GHEZVCauKdEhUroFKBsY/zu/KqTIqK3RKEEXWg7mEzrF0qaS5Qn8yZgVi14iqkRCo92r99T8sUzc++8Jp+4idNwdbBYUGa6btC1dNm2eeN5nQ+8Ax/JWcoiIpipttPevMkmVNaJMjq4z4vYI0Yl+Tc04kUryj+DihN9p0k/F0aUysHTuGE3iCkZZNbgxsRbBS/CB4rkqHndmYAYb6eNLEu8TfqBKRBJvkclvEFD41vzu96+RcOK9KkqhB8He7Ul3Q4TMirwMg0eT4pMv6v4nNab4qjV5YktF2w6WtqPxyCljyT6/Yv8Gk6HhXS8IxeKtZ1euK0R1z0XyJ2crDVo90h/TOndRPSq23MUqkE99ALAZXfdqEu4hHA4cTnmq3gdvb0GS8aRNdiuZUEqijpoef5sPHL2b+ksIsxQjejWjMmus6fBWPRGw9Na26x9CQGDXdnMgAr/zeWXJl+y2e+fRY23UKJZuIRzPmUzdf59szE5MRlfQhXTaciTSAueA9uv3ACpcJwT/YulR9cYzbMm91SqTv1U/oDoo7XJxfo0WDUku/R5rUkVb0Xnla0WzVenACoD5ZdU3d';const _IH='26bf973d1e00c26d1be1bd900378fff9216aa32fc6ec75cf986f1a3496a639ae';let _src;

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
