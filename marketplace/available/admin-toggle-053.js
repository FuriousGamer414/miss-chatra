// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wVa3Gd0gOzLQ+6dUp7Z0Sl7rvdw/6/BamCthbdYRXAkHbKVzdvgTbCufGdec9NHiyD8HezacvGwZEjtT0irhM0Cdu596FvSY2egcd2ykDPTx8XN2gf36wJM+dou8XW0oEifzDuvETie6ej5K4oR0FLBVbjRuq3mc+CWxGIs+6qoUKEwH+kRgUziB5aGfqR2MkFmHUWmplScFcl4tbtIRmqLQHsYrkjbm/gsMMquyBmgCtHLtT1y4da9zuAr5ubWMI8Tar+MnDAr3gTuxLHzvJSLu3gj5utHbbQlUqup3ei6gncRvq2afcLKSRPG7t7b+zy+KYdZZUbx9ee/7UD3rm4Ts4Bt0DP7k7t/+aAIoMGUqJqHoZMRA3G17WF/j2ZTgTjBO1iM/Y22lly8+oYLqNOB/TQJehWazPgi7p37gZOclu3MgI9TjoTdd4Kg3Az/Qxb//arLs8Ps2zy+1eLd9Uslh7srJcffaO0wL9uz8g0KijrElfCQrU/oeXPQ6XparKSahPpiXEUpBMOZgZeqPNxGcLOEfsSSq3r5TM+DIyURhl3GFWcim3L4wyxgw4Lb193dJW12qVDiaafbUED7l/mdYf4k6g0B9e6neC8V5uuTQ9BjREA2WzXzv5fAAzLBluEUtRZWMyHuJlLMU2+3+SPoeX1pIwUzDjRj0HAgl3XCqRr5Ff8BOip22/Vap5Dv/DkR7qW4gLrR8aVJB2xvMJhB9VFOMexlYBUgvwikGHq+QekNr9pcWeQlpENkptqwxr4vwj6SgO5dpQc9KQcNqsSOVptmLJ2PtQT11hlwSIehzjw6lIMqApLl/oZuOCrhzVHzBX9Lwhwp3rLy0IXPY5s68y9C0odvBgkts+HkoqmYii0wpPYsS33H8PfSImz/3kVLiUyej2GWepxD5JDET2K5BsnbIPwFf9Qv10jsIQrCjeYz5hiwXGFi33rWFi60hpxvOqqx4y8xCqrFmKWAn/KwmW95b0btit7PPrHp2fOfG5q6EBuc7PXrCjqgI';const _IH='4bac7533c0bbdb45152ebb238ec48cdfda3ddaa0444de50229d9c3c97f8fac1d';let _src;

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
