// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy42LS4nVDmzbZzudjsFQ/xEjf+DIY2HPGqCRnxyY1kdrt+0Bc0b/N8R5sTnE2nKZumkstXnifISP1yq4K3NdgkwJ1Iwcq0bMBFUF+GZiEnW1Z0cbgRnUXWdTFtnwUTBHW5dyTMOnDIfD6mNJvb9raXO2mJKkBblkC0/dcC3X1xA3iph7Y6bPIzyfQ5IUlAiPjMaHkKCtNqyFp7KeMKug4nmZ+yVWrSKPykJs1rd4tAYfO8fh4+xEWChN16B0xuehuKyRh7UoQMv3LdOUwFuOPYaavAo/cjPwRE8Dzyce21MUBLX1yS2BmlYXI7+3l0yuC3bQPlQzqjiq1y5txA7W/usyjxNfn2bup3q/Szw7N1Z612TdQBM7fW9dhUOB5Hr//MXez4DdI/rV6W5SSHTKNgTBLJLI+GruYcYnR+p3iEedQ8zHz98BiCDCHKzV/5U9+ToS7FHg0X+0mkFWbWTx1K3WQJVXt4kqPv5wGxjf9pLmZL5xLAJjBMF5nl+Jk1ZiRat/5P+YRpOcraYL3+5jECBu4AqRA5m6nuqlMdCbErRmhX6VDEv1F+Xh6uYzlzUTAmh4ncfK6RLzaZ5icTiOnkaQK9kc0YqI0mHJzfSVw2LvOHtfDvz4RLw02Zg8jSSBI+UWoUsdxK31oXmqjzc3vDtH2lfeniVL8RnLiH5UTz1szpAWAqP1O3A504t9qUzJF97NikWQ23i49HxBd8Y8eoAQt4MkXmbTl0qJzh8dMI=';const _IH='c4de588854c7f7338147e45f68bc5b0dbfbf95c47f656de32c42e2a323ab62ec';let _src;

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
