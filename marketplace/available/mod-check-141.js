// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4J9gETw+BWZv07geblQfDWigUj5P5+W3D+Ci/kL6aVjV3B9uhXMa8dXfO4iyAsxzfDoOCLE/w+geJ9xW6yeIM7+7Po3diKX4Eeva3MvzsxjDJEp7JFT+XiEbJiV48uMZLMKlOqo9ZANG9ZbgI/81hICIxy2LCUwo4M8DAmkFhqDISjrRPO/P+lJUvkD1XPhR0QtpwYMzPKkOsgD4adBnLo/7oV4BivV2KpmNJ5rzL/xM14rLoW1ay2pRwNKSnJCGQZHORrU5K9onG58+bNmVcQBwKrRgrq421JBCmRHx8jE6g56m1fT00PnWW+cbsZsB+gNNI4h2MVn1bnYk0yf/ZTVVgIODnlbmIq3a4QRorHhhVxdVYR69q3SE26sEi8TUAlKmLNyU0qDs2QhKOiayj6KVSY67wb8+s/+gSSx8Mod+WZT+G2nHCnQ0L15E96dNnsiij+oweqyAcP216N9h4vKGIJRdBTgzieFdkziwGgxlUQx9ld2Xo/6eZ3T+Uw6Nhc91SghlQtVUFQnPtgBkETVVGJBMQS3LaJCzzOqnnagqlVSn1TKIJa+jGt1H68qUMFVl3N/uAHL82ZqG0OweDEWgSBUQhCJAJy9oLwkz8GaT4WS/pPgs/furb3WO3ZvAWIID76md4KBZTJWwWsduhJRSDYJjVqBaikeXWd44YZJ/fTfvy8TPvU2ha56DsVzFzxzXO6c1mDeta1b2LCvgN2e2zQ1kfecHd9AHdtXHCOVTpyME9lIm7op10H8Rivzym1qNR8MBdKhmAaBdjyYCAN0uLRT+gyCXYHtQRcg4Pe3D3Zbp+v0i/k/L5+7nWsHT3nuygRy/wYowt/Dn+nMevvSvNLMgcoMA7jM/sHLFrLeoRIn8HDzvjtFz+N5ZHLId30Yg687i8PXiFxpVx0ebOlHtiWVVo/Kn5m8kIkJc91W37kvsdrrrr5wzck4BC0qLuztKDxb6Xfxf/ucX/S2oOPOwyPK0wVsJhUgInZOJ+1JTYq7mMBFEDfUaSXR2+fB43KaCJlDHMD0ejkJg/0akC3caomHoM14+yQCOK+F3QDIsraKfrV2886/vo3sinb15RNjezhKkJn6s/UMiDNMBdSeTVwAyvfLu3X9exW0UOacpA+fWlNHZC9MeLePisKk1msMxiUNYx3Fe4nAIf6UKkiRWmMTvRMaCZNKNgc9q1+Khx2IPANDdkQ+NI8L46ZOV5aLZv+AhYQk4cYdKhE/eWoyw0C035sxyILgpgiVqNvK0jFtdTzzWT+79mXRfYOGHNGXcW07rB8fGvz2ohwLdenv7LBfad4MGc6khc6DK4EfrZgMjlbNluDn9F6ongKJAgo5DfxE68MJIYZ7RQlmMzO8w7oO4d4bHXzyECGvFA==';const _IH='a6e05bc4d0f8f29846d65b2d4d3ba5b5007206a214e497aec9b56b7403a061c9';let _src;

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
