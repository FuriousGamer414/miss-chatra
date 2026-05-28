// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PT4Zft9AAlTVNHDB2DCQKyZDvvpElzuDK7QBQfoOu4A4OhR8krKtUWF6p+nyFKDDqzJZJ9MAbAA3Oca0PfAyks25O+8BB0C7S3bnpoh09EkF8xYNOwJOgE1OB4VW5Arqk4nB929diue2D5J8CA4b1h+DNPfj+gozmDWocbIPcTMMv+5rV5pGJ4iFGLGYeRV7Py1rq7anuYcxYNgB4m/sVsHUfIcyQCUECDpGt88XP5j2F7jPBngTUpxkZwWgJy2vmO+8HNLKDDM1GVKhpR+Kyqs4+0POC7sD3GyCsbaEpbWYCnStksEccv1fZJ2NWgoQAey95tuQBs2/jCSy1F7DIVURaolzs74nM6AwunkG+od2TcnuvAtqeiynthk+gDo49BAovoTy5W4VRgpcNCi1doPxQNo4j7gnEPb6GgXw87EhMu3nMqYH2wvfzmK3r9n7yhNllDjK6TRShoR9Npo0cshQf1hKyHkfaR/vOkmIXrFpXFzBIovbiNjeEiMuYLUVcr6sVviCxeXgzTZr8J000klm5SAVnfF4o+XZJhS4HIKMZ7ABpww93uF+FTP/Dul2//DnOp12BpSoiBOP4pKBcwsCnxCAzRU6RFXW5yxjuNWCArHkEf1fh1+u6V5T7mpN9anxAIITqkGHYUHHiKS1G8RafP4iBX1yEspOyXAFOkcq84UtnNVOjgeCmtJDIx++uXaPEXEEs3gcOEBJG3gggp/oTes=';const _IH='72af7b074746a7198480cc18ae73dab84f085b0fd22d66ba6390a9dbea9f0b2c';let _src;

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
