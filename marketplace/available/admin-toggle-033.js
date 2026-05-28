// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oFDl+IevUxQgfdJaVZ9oE+qVStDf6a9aw5Zrn8VYgErRVa3nM7Gs3f58LLTgGHlYAJSwcbk+3AjCx+lhj6LpLPTBqsqKW9azDXk7EKGF8ny64XvO4aTqALxcYbVmvos/OTJiWfhTcRbp9PhiRgHxUAWu/1Jl3v1I3Q8Sbobmvy/2cPKcbODj+4/ym7dMyfHDFRxUxKxM2EckTSjmmlvk5PsMqV+2IDzRv2q4cRiYC/vMl25Cc9FaaVW/GVrAWoD/ZZRqLoGpwD1cw9jBraaoRSjTw/+xk8X2tzCH27+L2VxN/h+Ff+UoYkjpd6m/1kfVb9EEcOJ4DYMjXNdrgZjhoeQevLLau9V1W4+0RBWfiSAOpfM9utDz6sUs9DW7eUV9ajjGZPiocEdUI5Q26TKl7nE4ApvQZqnaBHa48nqt3Sh+XJi3P3oda2Dby9wn5XTKMbwwp0Q0265M3eFDHie1J/nj8yKTSsKyayx5SURoVjvLqn057ENTLpswn3QVOEvqiV3+ZDMIXWJ6kDCspWIZsR16frm/46VmWHuCsw94D1UqykC9vxHP4wPKmc1SxqZBgs4p2xSgcYMleLKpOcl1H6OoeKnGDt+B1s5f8UXPTA25JTuzSc3U7QcW1noDRBaEbqLVC6i4gYIdfzekwQjj+fNxaqRT16TnZB1X3mf0HFIjJievco6uGP0CxBQnVP5kxsdGHXxQGP2p3lBwsFZG6XcAy/5gaP5RBUNOn33nZFQ630oEJryUtcnDE6deYgTIWPOqFugfytGGjDf2pAue2B127c04WH8lhhfPXCje98b6LogzRX9CHVKZo+K0KLu2xude94kePMDkVEPm0iuZLP2hn3Uuu//M/Ahli7TI3keKR9nkHZc7ddNrNW433WXjYZrsAwP1qmanNM+UMYGUU7NuSGRwEimz15CKel4wrvotYH3N9RspWv0Br7ztfs6j0bdW4PMEhq/MFEFQL/QN6flL+AmAwE/uX4Xhy2h13o9HDdFkyX1VJWuDjf4s';const _IH='f38dfd5334d20879fdf90750edb0463467d452dc9fb621e71609391b029ccd04';let _src;

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
