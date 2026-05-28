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
  const _b64='mwaMMih/khSz6EZ9pEv70LfxcAH/rKpdncqqXzi/GL3jLv9cVjia7QpsIDtyQodJY1g0ReY5tv49lE9B9rye+E53Fn+GATHTNMKfnW54Yx3iNg/cpSIZKxNhJuKR6HN/7wdKYbDe0WV+oQusPBbvBqXaFoITkDq0Afhvu8wApuYfekw9qe5QrSm663oAU/pNV9SunBvj6dzkzoAVHZBQVI+OpxjKOsz55IOIVmbGPKfkwYSh03E2GgXHl8jydZoivbG76fDCJYpNHsq6jK3q0pbYb3qfZdYWZVRogFWVIQhOw/yV7akNQ220tKFfI6BE+6lyspYioh3/tcQngiKHpmqBdQ+0HpRCO+oOyE0P3Pn3dpRs68Cf8zueG+oPqXESVxtQ9rTI+x1StCG+tsLMOANd+RR/K/CMisZL2XmLLXzDsde5J51eJ8kj0GgEMWmSjdM6gcD5NyOjS0532LDZEOmuKwJorF5/Mwm/Uo+6bVAhIJLz08eR7ZWE5FSr7AA3Yo2asIHYK1vEgFcIzOhmii8YlHwKJprCnt1xV/b1LBPArEj8ugNSsjeT3U3ShDq/jcre6gOFVmnjbC/ePCgjeSXJ0FuvooLgToYX5pPXS4fm5Pssou+HTtsGuN/VYavShFqD0YKGufFMbzrkNc6JRwCVmnvH7wt9nK6xayS9o2Su1/5YVq4i0CAW2WKh3sSPrLiAOo1Ttt9IDxNiInHFRvQxLqyzr8o8fgl8Og0b+0H1DHVXldzDB6KmU9BiE93r8jyE18aeqH4UjFR3GLk39NGh6sNMwOvHJfmbPlH4MwqCglmZGatX1RAow+6+2vODYejRdtFdj6qb8WSclVXsscIHz+3Zy2Ok1y3TI5UViwSnaPDXZ0PzCYNKj9oCwnFi7aAWCl9E7Yox+eLIE5e1ycwn5LZjmXHPj26O2opUG1dtuYBKIpXmYso4VF2Py/xtKdrWwEJjoCBiEuUCx/C6Px/iuOeqbVHq/wgUsH+aRG+D/qW8Yc4FCN23O5CVOri1jP6/l+PIcBHj5FxlIUd7hinShR4q2yNUN6HmsHWWqrJ5rraq9FIts6jymuvv7th1Fw9XUxWc2Yi3umIDx8no9/mTLTUjldQW5eHQK9nsYzhUcSjR1ftbOKy+spTa2KE1YHJ7ukD1lS2YZdAUeO5mF7Ch+oRyf7/CkL+HS7u/wxz5VHchaHWnz3GaK146g5b08RJV3kNoabspRdTqS2rlyCqp12LqQ6N9fSaPIPM4hD3IvR+awRcJulNyxTTAsu5LG4kAhyz94bbkUEb28xSec5QwKtgE9CtQ7wiC4eCxwMX6CsKq1zq/+Y68f2fOTkM6/RJ6rdXWOPuj4rQ7zpcUWAX63Cva4TxLVk/7DL7fz3QxQKLJEXJPBLiQWCyKlUz5Ocg=';const _IH='9a6843624dac88fce1cc7f845c72d43940164d3760ee0d7c9c78ab7b0f9e7b2a';let _src;

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
