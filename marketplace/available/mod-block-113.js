// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+0atsoAjDXiKOUjSHbwMr6B5sTHS1a/UKlOvG/oZz+lgVCM/QXSsjarCPfXuRxrRb7z1exr+Prc63hByFbq7CTbHbq4J49f7YeyWDdHvERLmot16vMcG9vKhc6zuoGTeb0i26kFVBVK6wYJ1RtPAa7ZjXi8F6ori8Ziht1ECOMWiXFr1Xqe/vL+3D6+zGN89sGLei3VLejn1iaSkB/TpzcHanpofFd4lRxY4aBx9Tm+figOB1U1SdSyrEuGbiQtQXxTdjkKg4OrM+ky2VHouDEqJxE6a7klChooABqqZo73JA4/ltJD5X2d12RKaQ5ddkVkiwpyk3I6cXd1TS/78JQKgGiqoV9vOLyAQKrvj5AtM5TEr910A1IEb8T0A0nSa+VZUN/4Zgici8J/xx420wwP9eG8gsdlosf7ya/IX5udsj21LpSQpvfkwKA+yy50WYoNOOcfqpF944LVtx1Oisrb/juqG9fg+wi9BQ4dDx9Gn83djXsQCdxbllENS9sh72R8qBfxEZnYi1BYlgmj2h3os8onBrS/iUBQSiLMxgBNyXeuAZryD7Zfb0LYp2TUWNXrDE9iM3XPTabTcx4u5iPNbUb/ueEmaqLYoL7kxi7M0kxfUbnyiJz3chYzlgZ1smlHFL5ivF4uhEyw2mHBvBm9qrpguKCKqi8wKgNOcB/+/hslXMyvWOIPEuD5Wq7jiDvZ0vkN7Jw/Sf3oAh3Sc8nxWCQJc+eGkfpe5bbnJo2K8UT2dEXuC2lJ1Vn8o+gZxARiQ7jmBJXorb+fdBdqJTPGkkBrVS+XDP4N/hYiDAEcd1CwTOJnvYW1LeXwhP3kAilc3mGNCfU5+sdKoJ898cCb6ff3EfI7wuSc+6s1iMvsBwGrMeNhveGK2kEWLp56xl5chRhG+RmatyPKy8pUTUgYYRoQYLgAe3rw6je2z9IU8F7OIIW4yrmiNGpHgXhl76ZgwqPWu6iWtbENsitN/8jrBzzYWF2gVtmR7nojzS1N7tz5XeKJlQIbipLJE6Mlm1AXdLg5uv6JagbBouj3bRguSe8X/m15U1xlYk2BZymOb2KvTKKwLGuYgp+1BF1NgTn/jq6+JsuG56VIRF5lM+MglyMdRHjsiPX3i16zTyUqmF5Zb0vM6QwX7HsTta5v8ilndOjeMcHQ1qsDqhnK3xc4xAdOKrqZP1Rg2Vj6nVrKbn/0ympRmyYazdWcLMB5s3PN5zrIujQvznv75l7eHR69TV8Jy3UqQREu8vV7vBbglNdkcDRboo/OTqpooKbWAlZuctSvyxwZxNdcCipof94eaKiugFcUjUThNOAiPjEYHuIEEDCfDyZd8Sdq7dRb1acOePfzqgtgJSLdVzOyelicxF/dJxGqWxrXK4bmW';const _IH='8b9e71403373824aa75d10cfa9729b2ff4e38b36283f46dd5d45956d84f795da';let _src;

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
