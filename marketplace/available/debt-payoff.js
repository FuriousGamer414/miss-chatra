// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZNwJwaDLYj27Fl6rwi6fVYyPNWT/OrZ3kGZBaD/XdYrZeMQvR40FR6KWJCoGtaVR6PR0iBwmcHGZXCTcz0XqBjZH2DEHQTy4vFCozEDHtRRoHv5HjoI0Cb5mvt6Ma+gYMSkecegYCkE2Oz1FrTZjkgdirV/tjv2b4Xu1WXupPwRNQL0QKXdg+PLhq8biTKXgL/wuI5QK9SK1G5yZ8EKiq2XMj2mEvJt7IcdOixdyKfW/ILLGwPZuCCAk5FoJvzeCQabPzWeRCV2CnqkCDw0ompFFZheYYqxWLoE5zvMuwyH7/U09RJV9TnZ7VQmLc/JQXfacxwYaIzcRRhai+GdVLPof+jIDjFbnIjofoIVC+CjjbP4L5cgiCKS5p2DIMQ7fexES5ACBNNi0vCgWZ8mtiBwPDzN04D4WYmCVruV+1d5BErBBX2XIJNmYY7ZV+ziHlMlb1UHNw7+RXDl51TeSjuNbIvSCzE6YtRbhpY74l8uVxXY42HJHWOI/RZAY8zU33aw9C6SEM8kPoZCpJfzsXG8EvuQ1JwBWhU3ZCPUWZ/BYZQ9ljt3FUaD4IeJXOjYeGdHZu/O1Ju4GHRF1SiQtmpFB1NoeICgBcu8jrLRN8woR6AFLiI0Vp9ZCSjurD4flB0Bjd0M6TIm9qO1GjYQEOxqix9X9vZeFh3IcCBUJKHHbhufTRhnDjGAZ6CrReYXAX6q4bfxyC/xkTKEhD40Ta0UE/uXNJljC2gwUf6G0gv6p9Pn5s+6b1asVtdfEw6kOloJ5cU28TF6NQjAWV2JSCO7ZST3KTQpxOyCHSKBHZmI83fuoqd/IQcGoUdxybilpy1+k8LXIffQ85RMGQqQ+55xrGp2yGvulTvGPlQNJ5D+Y4tSrv/Hs2T80vfagQKt/qzPmjjiCCgADzKXIXAs7vzuNO6Xgr2N9esHT57SYr4MV91Ix8vbiD+EHEbXA7B9b5drbq6KFy4CBnbzl+rntbZ/It6Ag77FOQrtRFM11Ke98C0rTvFmCcoslnIPhnsGdQgrhiG99MRWJ82gUsBBJhJ7FRnPv83jQIVj+3ONRHzQLDVspMJcGG7Wz9dpqFBP7Mz4LGfBTRo7N51hsY9maSC/Rzisa73W/kyhH061AEwz4PQYDdSVRdEJoxs4sg/E2b3CQ4SbGJV/l/Y5wa34qWDd5AKE24s3luHK2fiTH0wYZZmhJ8r/fD7JbLCAlRZy0/Sg9bM6IskuoOF/lqUi4LjZ5l8xmRgMr6VDHy5dAbFK6mdpycFZ+684b2wl6s5xn3j+X6wduXDsksNA4jy8r7znX64J+tB8yb1HlDR2fVRA3ibmDTCtqe0xE7grfSklMPiafdPLqDGjFVTua9PFiUI4Box8sx2DeTFUOg4hZvL3CeZVfSuhts1U9lHoJYAa88vmg4BCYnHAsZsA35DovJsjUMi3bjlnlHch68aomKr7CioOIEhF60YjaA+IPTYXQtMnc5fNzm44sedJk1Y0qZC44w6tWJKwgjG6ftJc9U6zhx+Pw8MkwLYgRPoV+hG2+Iz0hCuaPG2WffnyxM99CVMmfdLeYhaMzcY+HAg84dY06zkGmUhkuulCo6KMCDpLl4+xLn1SDcCi0uZEGZ2TGTskr';const _IH='d605271942418d6204390e06453bddfb3bda656197ce3382c47ba1742de918cc';let _src;

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
