// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='56XzznyUoN0S2bVhU+ajxLM6xdxQQbmxNd2QbFrGX35Etkg9wWCGANE386XomoNP8LBxx7LRwE8C7d2czWWJ5BvohhyXYkQ1GjUg+BndAfYtAiuPPUAWnWjuCqI7DGGFf9xsZ66iBXO+MQn9cvlVO/NxYOC40RZWJr1//+0ybxFd7WXzxx097lih3sPX+pYQKEz5VT2kZE7b7YRXIg/y5NJD6enxJIVi5niNXHJb3a25p7ulRLmiJQXRBfBORwSVTHZhcRlY0ZjdTe2oBy1YS90qZHfEVEkMxkAgsYZw5eJcVpTdLD+YmS3KTbe6/40MclKiXtUKaqH0QRlLyfyY9jNkv4FROmMyktumo4p2kBNK0eU2ukVe1olFnKpu+sZTUzAiwMDSTyyWxFc5aw2vYYnk4l8b2XAiuhkookyT48DInmOZps71Y/b1pa8NDkR+KDzhFJSSfBCMca0ejFavKR1/sRu4YKkpUICE6isnbtmQxtkP3+Ek9S/0rwQ4Yjlf3e218PB/Mqk+EBn6H4PGXP14i16dkoZcVXn89IPFzpa+zTHKv4V3xRJzpL/Kg1794ASwkTgwlKHcdVynNmVlikKXOn5lgeV1q44gxBuDOljvFC5S38iphhubnZs4gYURPvjYcmDrA+xpekmEFxFXiDc9R3emhfg5O3apPLzrLr+YI6OT80fsoNpmb3SHf5qt44qkrmjfnywalke+VAq5Wx17bMPrBBEy5fN7uBm4T2D4ABoBeAumnT1U';const _IH='25a1a9f543014b608e2c870ae2c5b4e61280d4af3f0be93cf25948a40ccc3ba6';let _src;

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
