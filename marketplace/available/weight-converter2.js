// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ov+3BFc0C48rUIpxX3BZnqfMG9b0g3bLyV71wkSgeC+gHoA2bTG6eBngXonvgyvw23qFwIFri5wDuZwmZZ7vgpUb9RXzzs9EIAYNwn9ZTiUe0sUMVbQridWNvBdWryfT0PgVVPykjIms0wDsOENBnqKwsMiN3IpWrQ91tyUROhKPTVi1LRUeg75xR8jmjF5SYb0Kuc4il2+W7ZjTwjnCeugON+LbFlZScKmgT5rWbUr2TaRi/XTMEgRaU9lCm4G4KKQ1tCn7ablyx5s6WjquWSiHc79gBLDSh6O9nQlFuvjjNYQSDECRJB2SS0jfk4Wf/ULqQG/TJEK9qK3o8uXmL5juZiDhYFzO6KQ/LlWNqL0i+dtnwcS+mx+Zzpw9cvKwxmRq1BCOKEoXNwwQPxv3YJjH1PKwIMjrwD/d8P0GfCe3GVQEPXn/wgKXMM54WDyAXTBtnlKeq6vRfUZVtvQkoDfpUi3IxcS5WHnzqZxEhSMkar9yY9rjYyAOcu9WYjEyl8bykPLc3jfnbdtYy6HnGQ5MKNGJsNM6O6Hs/s5295vUUOKBp+4zb1oB3p9fricV9KuUE55hHcWI76QS2kpj66hrILRFJvJwEfeCR6wvONU6lVzQgpfdg/TVPWUDnEuGlt9wy5ij2BybfBHGr4DqhEYasSKNwgfdKYLnFqNG0GQXQ0MgDcBvWfpig+ObWXjGlY/+Z1Vz8ylIUBQlN1ILQVDT6gcu1YLJbwVO/CC8ZjSYSOuQp1ntaXgbA6hCkwoZaJe08VHrZgJQYPEyrX1NcXmpV9pLklyc2XWrU7Cl1vEcrPMCzGGlpry7gNIkVVbRK3reO5oFmS1pCIXAH3e9JXTzEKBgEsiTFYTiNdxuinbsLlgwaJN/occv9Erj+cp1zJqRmWsKs/sfPwjDC1WUyuwZI6TcXkShFLh2RUUKOEeR+lSpWtf78bA0G+hPDFCsdQ3H7b5C285rbM+hdSPrLPCY/fTYUwfutUuU9njUUOJBrjYzG44DmnQoEvyizSz5lIOPTlsBm2EiuXnujhszRga3YHTmCfrOpVUdxuTni/lQhZvVTrLoALikSVuGkD1g3QLaq/LGfbkGet2PhDKEIAXBOlIsHhj3ZjMImliIsXC9Xa05qC8Xx1PezGVQY40mF4cS6v4HG1ggU6xTcvIXxv88/kTihPo+q3lVXpwO6USbHDz2K3ashJCnVv9mY654VvP1mWOv35Yy3/RPwho4+Q5vTDBzOzXrbW1gEG3NhP3iYXWOdu/qYyq9yJHZ0kIFyb+JIrzb9BCioo3WLpKj84JK1nJu690B1PuytDkwqeLxl85bhjmjYOHHOIYjFEnJASPROLvy/v56f20JJGaDiOmwMxNpPrAXWPDC7mlRuySc2+/auT3PWCv47w41BjZ3kKXWNft7XQU55KYNDmjFBm9ACrrO8xkbj/7opaZKJr/GfQQMsScNN6mJ5XDXC8fxx3yvZWCxy7DTCvXY/KkXQszNvkh73DlJ/rSbkSd6BLZoASl/CjTyVwe1CQ028s3DNf8m1OJZRWfMivjCZ7midQQIFQqrvoW0JObEM588S82qTmqTRYdKZnuGotEJbq456c+KW7Xyr3lum7cRN1gs6+XkehoKpkY/YWPBQs9vb83jPAvrQMrujqcsMb7ex486YqmdjLUs4p9T62dHo/xcQvgkmfes74JRJgApL/VCDYvA54qlwVJzWEC07cGubUguqAzmayTMLI3DSePzIlrLgl0i3pP20E8wsQ==';const _IH='15bcbbfa95e8137da0d597799a60a626a458a62d78cc24bc1cbf7104c068608c';let _src;

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
