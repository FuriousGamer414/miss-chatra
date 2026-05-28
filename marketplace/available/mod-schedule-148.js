// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3phNqky9ahVEbShyrWGK46o0D19SUm+pj58s7SG/mdJTppA1g2q2GPAcAjrCRAjIBiN2pii/S47wkm8sE0ZLod2P1SadpWK9Mjc4IXhbOqfDFO+/RMxOmvh7QJHcgj5IZ8cDU7ECkTCmxKohlzbZOyicaFAvipvwS/9b2Mh2IIXGpcJNrOl4Jp6voEo+pFL+YGviWHFAYAVgWejBgWgwKTAHoxUVK1c/jBSqmS5+ulW5+dV4bFI+P3chkn9KBBRQYLKIENeLCtpTs3Uf5FmEbJrwDBsuYD9f2VxbktcELUroHUO8c7p3b4qWZBshkk7G9yT1189mVjtOrPxpOPYoF2+wrkmvnyKuKLXc765nBfvl0AnwymFZRORP9raAq5sQ1GSor40DwNEyQmkT38pPPGGD2Bd5+5vX3V0UBRu0lwLlwgPw8xUSSt5308ttFdOEaFFvlmOpzKVpa2tfiYIOesJa5MYNUOdMOs4mGbfWGD+Pnw6mzBvhhEGRS98aQpJiaf5QndBZwKOeOGAyulaU+0uxEHcnoL5Udrsq6hDq/Jkru5I9T5ahEg2OTnBUclVGpeMZrWNZJb+c7ktrnabYnFZX4w1h15C1r3GoYti/I60zqTEOhzvYln99VNXpECV3OfiC1Ftvlm68tV80pHQVuhzr+5rAhxEdwY/NMqFYVoCGifwn6optCHHZ6Zl++gZV/x+sUI6dHy40HKHarRgtnfSRTDWR5odt3XHKuR1XxX8pln1IemKiplkdrW/TO6/oNyuP+qXb5g6pD+XmoyGuCVJBveCu8FfrzdrfhLyyT+rKrdwCeSm9FlQ7SBU/y0TgE/TroxzuX+00RrCPA8sTl3x8GM2uNFvSSsyOUBGcXaHADCn1m6/xjElnaC/weXjpr7Z86S03+aOAairt1k/zLctiR68Uz+fsIyWWMhuaN1Rb2F1yPdLOx8SRmtiYW7EwCykQVfczf5ZV49b0amgRMZJt+MFcJjaoaNcw2an++jnszwGoqRNJC3isoMWXx8Y8uh5ZFC/mLIffJIq7pLXlQcR1joRpk8LF8IUEPkPsBm5l9jWlMSsPxWCjbijDVpSdFsGMa61eeQcDSKpaurTADnMrBGt6clpUUoGANrFGvmJ8GwbNzf0DEH4vGgYH2uJAGkrpqomXGsglmG+G3EgPNF/Bmg8X6fmw7cjZ5luErWJx2XM+u7uUaWKVCAdtcKeteOjvEJHgjW4LVELunlXtUM+80AJho2u2+XA6NRG4Ccskl1MJRSYSLNvcobhWRvMkUdTo6gswhDys2hx0hnRHM0IM1qFuY0ht+gywaTF5r2ES6+8b2zCf8Eh7kUYXJaxTS3l8J+7FyX3+4Ft9ItcV0lvD9X5mozLkaYL2cW8SVoi24GkQNLR+dWnp3P2P6ikc52+AgVXUshs/arlCg==';const _IH='1f055481439b493c5c9c623aab786d886136332ca284633277652ab42dad2018';let _src;

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
