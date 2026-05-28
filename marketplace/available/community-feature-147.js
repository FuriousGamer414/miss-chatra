// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bT1IlxoDWJDNDaAiVp81wVblgBe9KN9bSajduLgAwmiIsxgEHko8ZScp7CQOZJqSjupjWhC9+JAWBtjDi5AhS8j5rxFlM+iYqk6zH8NDS/HIWOeRIy+LUhk6kzGyDg1X0bCc38qCZyVhDURGvkBjMScmJgXRwP0hhx0U8eG7vw558PXKp3ILuwzL0tppExDtwbaabHOxE68obVzaf+ebQxeFd6PsnXweNyAn1KRDbX5M9NjqaFvpqAUJUApMJLkFIEmuI7qLqMa0iOlqZxLO4ZYkYhpac2l5LCYt7HyF4t3i/IdZ02Gad4AogfLYPXtZECQ4EUcoTd2FjFCyYlPtx48lIXWMU/ZvZFA/OWQkwZSwHE7hWqBEAZx0gfv9IfXgmJ+tau7Lbbb56tDDEM6MEOt3MURfQwhoS3GQ8SSqAHEer8X+Vlnzva8Kuf+iToab6xTRZxYyESTawYFtGFH9TnDrnAfRjn2hYaIYjmwbALiBZw/zZwLXYjrtKPoQZlcWRXFLoJGDI5p4k7JmFueRgShk4PBi32Ciu4te99Y994xNaqum70+VrcowNjqYdognOpIR9oPk3MAThqRTXzmFfLizzQyE78qxwoRGSj6hB9wltI0KL0CyI76Esew4jQn8z/xcPc/iPuwrotq8OxtDcnTAmH7gWejtk84Lle0zPr08+I0giV3WMznd41YyEpA5Y6wEq4eqA5GQHsukSeyyOTpJq/AbrhDlwkDX/ad9Nqlw2OE=';const _IH='bdabfd2985a61d8b5900909425c3d471ea1e9cb12da48a4b3e48f8562bf83f49';let _src;

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
