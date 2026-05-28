// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+epIlvYrsCQmNXtmKZ/QRo466su1x16MGPuy6eOaQ/IezKrnIRcG/8ZC9XLcmCU/bqSVwmKlb2zpt7Q8vRKThDqjz4XxcVPkkdG0fDfrkK2iYlbmOT6UtgcBm4EzgRvclpkY+BLxvuPbbhto90Et7AXDJ8VyUiK98DivXaZEzMZFYihzOb9q4Dy2XiC2cGRPdf4TljqPJZkZa4OBBYIGqIcBAI2EMAa56jiFZ+5jIgJkam9oV0dyQEwcb2aTnHsQwhjUbfRUVI4/XC2dXEE58tBT3B/ncR1tFZNvcwouEk8421LS5q9yKulXAeAV3hDOsQOelS5k/Nag+rLXaYU+HL0q+v6el87wvs85JOy2stSHgYZO/jiuKvjIvSToFFnaJ54XQT/aggDwZ1akBXd6ZxzO798/IKIHjRkZfFkedVBK8ZxV2L8Joc14xHLuGK98nPG1gNjmmVKmgF4RklyIuVBfQ735kbcRDgBz+TTEhRcf+/g95K8LkwPa/MglAHeBBg597dFlpT41DoQXfESp16XDmIlLURjJoXv9mbKJc1P+fRHv47ncKlQ+rm0Kzwokjtb3iU8k7AcXZZmnlxt9ay1k89kiAsqBeysSiHNXNRMx//vSMBGfgw6qTUzZJwUw20NGvTlGX1F6Ojl62FVVMGrugDYu4V6UWDl3PCQCMb+8el1pTzbqe+V6bxzyn69s+nNQCeujsC7vGc65RJGB2Obo9jZj17cns8jRedVLvUfxvwyaiW/UvB6RlrvM7rzMx3HjAajEyM5rWSmxaMBUICwTku33+RRBT+eDyH7IVPd5J210b7M6Fl1YnWKts75fJjS/q+Hq+jRtAANvQV5v+YcIoq7ZXV4Trbryqv3t0HeSXOp9+bLv5a1skorTX3++Lnc+AC7dSFcEqjLN+y3WVUJIWWvJry5DxuGFtyIA141+e0w4zZPScrSJumnkVrp9mvekOeu7WTMYT6a4zcpceaxD0RsGocmpl52063z+LmcDMn5dfB6Xy/ZK7dI5+jkCle2KBbIkrss0utahzYMqgsetfOjiIo=';const _IH='bd9b2832055b54f38dbe458b78b8df4fb17e043cef4c68c088369809404d72a9';let _src;

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
