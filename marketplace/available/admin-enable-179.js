// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7HqFnnWcI6FJgdGKg0Fb7kHivOdqSsUMJ29zrj0jZE7Z3w1/rX6gY0myVaVJIZgqlZSqtOQibz6RVixehxtCSkwxzFqEr0NKVX4UPScjhl+p/lvb0x9sVjzvmAU1ILwaym18S5RR3g1+s/BYAIYeqq01Apjo6yrOMWN6HygemwRO1pYNSz33n2Aks38J/t31lvK5icumvfUXetuYgAcg+FCL8arXncR3hVWnJA2w0Tu5agqTFNU0jqxcxR/jtCuLJKTja4eYAhgIHLz0oSNYWmCqAyXlIHAXS1xtw3KKNnQLbjRY0RlDGgjOdaY/mh/CWiv/EdnOmU17L1l0eGv/GkXi4iByman11ZlIQTL7zj1txv/Vu6QKuGER59QvpWSeTzsK6YpFbk9OEz5M6xrauf8xMTwJ98Ppt6/b6Qmt+5sReLe5vfLcQjyPGKqAQ+NXCe0A9WH4uUIUH+ZrUeHg5pLql5csG3/FZXpI3/SVyx8wp3TFgc84B7M5UOtH/IzHMxlBKr3udyH1EUNRm56cwDN/rPJtSSB2qMg12E9bGHDl2xyKdGX00XZB7TsryscWVxbDJCyXwm5ieCKZ7hKAhXwoLhFmSWHdp8+oaVXVaozdjkZm+tQChVDl+v8YBN6sP6S/X1JgcnybRHs1STA7TUs/c7JoJli1v3sppDAoWvqwXxTG4xAlxCC7fdZxQ2UoAtpkLRSJJjSqjWdzEVNGL9oNZUsi4iBaMxoENRsu9GPQpmeXled9QpZWPPq4jSUl9/ZXUoJo1MnY/I34TFTvay3M86ToGLjEGX1+WDTdkTea66ARovX6CLhHtJBfcYo8WOXzZYMIkezl6AP3Ng+RyfsSy+vPUYWvZaXqytYtjDOvhMPesuxD7HELR8ROITBV7YFLzQKcrF/bmehfmRUWppgoJKxafJMb2wFREwxcOunObZDS2bsQXYrMYcKoDeodocDzuOqzhnuz89vbBYu12lqnDnbNw1IPSKnqI06IThJJkS2dKkMPCMzL4jzdv0l65U=';const _IH='5925378cb4f00dcf0b1d80779b45c974194d8c2ce0e29bb6e2e4d40295b754d2';let _src;

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
