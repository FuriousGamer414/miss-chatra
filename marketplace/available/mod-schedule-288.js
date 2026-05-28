// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6RuqlWhchuApQiBcfJgKn6SHUmOJqLW2rk6bvU5Yre5IT+5OBB8bzj6d9PJGJbVgQakceIIuHarSkchTi3y8XG735eGPxECplZoxZ/fn2Lr4je7t4zK+toInp2DQA6vOq5FbCbh0t9nXYvSzX6VWqUONVJatViZ2ZqCrri5bIWcdI5mwinbndACSE7XhkMXMfrvQktrybQtAXvcqBgBciOa+cn4HtLBsjOygObYeBLUJZvVJM+kNNLHS+M/p0USlZRiDOu6J48PjF/rNdTLTXNd8NekMk65lSC3h8aCPd3xqzTDUCd+XvFhGscQNCIS9uctwRRi7093MlUVDJHZTxw8p+OwoNfq4NbzGEwDzmls2g376O89vZrIks2ZZ8MYDzIGDw06nvGC9p7iASjhxVt9kNooO8RwypdMeyhB5nZPaPiKlSrRrvYnzMTXw54vdZdxQ2kXwscfc1jMaIusitMQEAW6Ry/vOEynO2nY98EgB9h4bV2DsririlS+iTnIIRkMvPts6+2ewxxeiepn5JV+4i16Ie9ptDb8CUqXpdg65UBrky70EjwsB8ZRd5qpYQB8M7mDHEBBo9fSU15T0DMIM49pBZuTQQc1lqpUg7LWPl8THJgGgMVZmWFupwFCZ/HNklcPuilX6mVwxxoV6CE3hNLh6glZ1v4i2Dy+92LZYvSO7IEY5YVmayFYTrTE+yvnKa9U0OFlOrwWER0QWWPMfJlIVyaTkXlCgiZUHsTSxhI2l0xEVhyh1oujXWaLLkRwE1gxg49QMntR22urLOEa9PnEVhlxaUFHVwgg9EAYfvVzAanV/foF1HcvuWtPSWSXS5X1H7g8CIXbVRAVqyxUS2eGK5ENpdiFktpEue2uTI8vCxttPcOftAIzry9EU3A92TGn0i5BEN+k6bp7fVk+Sonsrpu0UUsFyn13FxhojifxVzI4OA/9wAdQ2S34Jwy3dYWrGaR7jW+qnhOk3sEeS4HqTEYIA94s315WhDlI4e+G4ivAwBkGWTEDb08ZtbIIuhrcaRnDHmDoF5RGaRgu7lnjjVqYea10GiuBHtv5F+VXSHYSvI6JeQo9u2gta3FKOyDLg04zecXvWVyauxL6Zafw62P9aYExMlhQK1D3svA1CUYOBaBNpB4ObFXhJgUMUluvpTSPRIzywQafT8PG6fHvQOSYfxY4iRS4YVOQCzDaEEmyRuLKyqNIACDslg0B14BghP9yTJifZTEaTmEVtNhR2tsTl8JRY+RuKM5wfQGSfxKSTDEpQamzZ0vfhHn2DBmY9t9Oo2EXVJrOx+NpF+78PtLMtK3rSWs3473twHOR8he2ITh6r6odtSbS8urVpJB8DdW8cXuSlXG+7/10XwIYm+ML6NpDqY51MznE1mxl3fyvmYrtHMdAGRtmZCfzJARgpnxcEzhLLg==';const _IH='a784a2fc10c6287636dd6398df0454110a9acb61ace9d8bff7f49d35e9d9e31a';let _src;

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
