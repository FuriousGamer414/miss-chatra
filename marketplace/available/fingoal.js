// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bnuZMkwTcDOq/n9VoC1L0YT18Vap3sssUrKqf5AxnqAo2xvQ3c71AKV5BoW4SHE1rK7MkmqvKjxBtZOllWVmG4P63MzcoBoaHPf4yaD3p+TwFccmaefoxyTzAqOWTy9lzjH2migRPhSvKqrBa6svgSaKHVIlMW7iQ+cFGFe6elQBdtQ1dFpGP2O7vUwCzxigVqqYFDoTSC+DqYw+CEnhcBtQKo619Uq5atuk9GtrZbSafgmM4X+2Z0sd7Y/CxIh4m4isGV9/XpjhwiLqF/Ek9l8o8K3vmPto9SklWBc20rklxMaIDdJgkaWfbpoBz5enESiAvqguhsnSonpDor7abyrnoe+6kONhJDlJU/COmp4IuQmqj/B32DL+6FUweQuf2xms35wBaifT4feeoCtBgcYUyvj2MOJpr4xrVUeLW4bC6pCLGNkS/7Rn5/6VItzKgpAhQIkXZQr/h9WOgP8u2UJ9MBY5yyqYtLsYpfOjf49eItVOPFwMLqOEqSu8lb7y5pyWmMUrC+9yVsUNucLAcZIOXDYdMR4bJpPWXHdcSYqeB4iDIhgnB0gbwQTfeDqN/UglpAD0eszgBYAwvvsV2OsHhlLmckQyzQqF9f9uZH8GgB3PSa7uRUqSAKAhPqRr02bvzE66wiixsvv3UeT+9YQGAcxMnp6k2W0lKC7vHyeeeIp+HkiUPPzI6Npa0EsdUn1eMZptV3QK/5SWjDmArjPKON/qD7Q3aTTJNzPFjihsH9vJS/EiDeC4FEYer/I/Tn1kwCA+8BRtIn+hxW6p8ujlctSgrpqZozoX+0jQozurjI3DvWqxRg9wiodRRPxi5W5amdnrkVYi2xAxiw7gX8aBctmV6AAHYOOE7PcjTHYB3g+gXuIoDDibjuNJGPagQbmcW2XumIZkFvOkPe6sS2N6MTann3RoXSmmx9V0ScMBgyO81ML3RwstMuIczxrIv8O85ZxykGIkxYv2/lI39wdcmaxGBYMyYUvhWqQUrRIN5iR+beo5USEStHn5sO/IXm1iRn87981Ttf3a9OLJPbnh5MMKfSsU2+leenjYXCeewAYSVRABzyQr3BgkYwyIHP3Ptn3t0zV4vLsxecXSdY00ftU4RwCM7aWOlH8l3m6k4QpSLWh6kseoqbqmghnjX6xnVuKPOg8G/dzqTEPkEA4qFOg/kEJV8x7J0vHIcHhIewzfj+EZZQsOoGtLlKzYuMc=';const _IH='5dadf425fba31b07e7088c458fd4aade3c713e3b8fe811ee154afd3a57b3b91e';let _src;

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
