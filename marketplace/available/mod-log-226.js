// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyYxjyDoXAiPLV8XRtP8oQ9xPvhowA5zC/Z6Dd6ZsGjUrhZDR1BnNg1f31fwAXduPKxndPB+i2B0yPKxCV+5eNtoLKRdM3OAm6+al2iEUfTG7Hza3qAlf+Z37dZVnSgG/sPA0k0Toy72uapFQNqTcT7YL23uK7nTMxalqnXhOoipXJPjDiaSGj6kX6bnkV5GQ0nFY8/zNHAiWBqH0EQkAX3llXqsq2WPHN0Rpi3ys/TtNRvbValhGVxu5FXN1dysBnEU6GB5TNnUGGvfaN14o4jQUw6qKcT6lT/CWx1CNqRx/4sItATrUk5Ttm7oWk3FUU5HtxaS8ezMKeQOuBgM0NPvZb2Pss/YMlZozoA/Ay2mYprljbzMa0Z9BwU4rEFa+9RCiaAFtIEi/zzUnrsfs8U2862xbHwYLIZwSdbnw+41RrKXjlGIyjciaHjDgiaIMxlrQ8sOF9CUuh2NlYkad9PW7cXwrQNWjGD0Mz3XtN0DeJiVT3uYYWrDwB9P90C2qqIKjrulpH3gPCR+PMl7Vhfc9icOI3o0SAwZyk7qHZDcf3O11PVHVBYdTM/luHzyaBQT1cXw/5OoyWQX8J28fU1iOQt208HkeMqqDXEBb158VX2jal6qRbPyhrNbxQrXGUYhBngQUnNYkGkO/mh7Wr/9YEfvaqpfBeX+jVWNCZapqCNlctk0v2hszs3EDrvXp4mBZJfYJdvpNO74XsSz8Nj3l9LjEhwtukXB7BgrplannVHi5TaJ43Hpf37ViU8BicWdZsoSJq4k+EL0LpObst3Sb/7c8dEWP7Ahra2ygbRC6po2p6duXbM/w/WpUZMGY1iVFPWeoiKa8PUscuHfsWjFfeyMbjPOYl5pHkuhEzr9zn6MFS7xRb5nzQx9Yx1ECuDwSzk7ix4xpqLTH/ksTqpiGp5yJgRcKjOaLTDZuS2gbj+AOP4I7Qurxjl96ucPRBwjkSp1Myep2k48f78VhVoGn3AqKQ9lmbjiGI0VDFxuPsxr+p38RXl5flHA3FvrCKAwQZpQlKSTSPDIhBY1v86qrxdzQVpR+F4MMZWxUxx216D99XyYGCEt3mVeIxfv7Ic8GhtGKMQxN2OLQLMfkA6gXVn1VmAJgs72pL6pcclfGz/l4SKHm1GhGe9ooz2B8KTo6ycn6coq4m4dVZXeHOsoJeMMKP1EBntxaCpDGYHwJ+YXjrjcSiC4/VGPfFV+VSTEtCCP1821qMIl+DJaNjrjJrygCdeN5YVOgSpXu5Cz1cklJ1C9pLHKC1J6IXrSipDhLx7nNq2c1vNpvzXrxZbJXX8wnSPbUTbwrA+jrX5FMYji9+7ZH3QxbYG81Og/OU+3a26emtpAVik=';const _IH='c28966fd969f313e6f90669453c84e6906cbfa2837070c81137c87d5f0deaa3c';let _src;

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
