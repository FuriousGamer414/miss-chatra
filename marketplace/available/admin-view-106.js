// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyqP2iFhOEHSD08G4b3lgaskHAEmRxZIw+8zYqW6ac3pLMwWO0O/7RAwKm0gR1CBTwfUb7+T5e9KsaCV6K3IRki4hZTqwJ7/hPXg4+CEmeANGm05mYWOPl8YQEqyf3K3T4lRmlfc27W+8HnAyQI05F9O7AO6fPL47Y0/Nwyb5fiHLVC1c7IPoukD3nmxJQy6yfylnvrMy1P8J81s5RsFoHRf24ZjRASCM2O9E1l6JsujqoeeU+/Jy6HBXVHJw/wg7XvhcGOJu+nXy4ec6yyg5HfI5fdv6QYdARRuglu7bFP9yGnPUEW+WO2+QyrH23Jx+ZeZ4NBStVs+sGENgHsQoXqA6hb41dRZL/G8jLCttal1w+pMGSHyy742RtveVOxINpDwtx9Ta0V3MMm/e8MF3XdzHYyhRtHX3jLPzQoQ9bjpRKox/wdO9Tj2D7fkuX1lGXMAcDAT4M+4Ku/x+Ian8uUVE/O+PufqDcjrbP/Eq4GbWcc1BuekmMo9Q46dQl5O4EM7AfvkRLPrIZNjWdPlkkK3E4Ixf4a/MZAFIah6g1olwY9BGQada0j7IA75Enyaz7SvmtjmUHg5KmaC4ntF74fG3jmABKMd1zgl6uVBG1BGTKwcY/Rb6Gnvdvtw2Z5hhwVFXpib45t7R2y12NYKX2nSddGTO0n5JnNec9+d0EyJoOI9MuYulwzKuJXGH1oENfRVIOpTztvzQFPnDbmwsfs4h2w1V7FoJHsaJ3+UAi/Gd4f1+MFBpiBh8DkbqP3olUgukEAI8OCjTZScpzPzcob2/NZn1r66cXzrFqXZiXUezdSON/c2KOqqHkNKzFFK68r8HaqfCNkE2wgNdue7nNArDiWyWyTSy4OtcAIcurc2Cb22IaiLH5oxZ6MFlyiGIce4HCcEZRY0/72CcNK9MgxT3iTjWa9EoAOpdmFJHEuu9+6pVUBe99Wczsy7HrlSAiv2kQu/YCy5i1Kgm+ku+YDOPRgXOEsD8RlKP/ObJGLX6huf';const _IH='289cfbf7cf5ee30e24870f8437efd105c6a0329fbe6770b5ac89e8d6ca55df8f';let _src;

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
