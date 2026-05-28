// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F/tB2Nm70/hOcJKxsggGUWDBas5/A92rk8ab9u6zZI6rMnWQ/6DJvHAor4XMMC3F3bDBGdnv0LpY9/iSQiSwCHUBuVSQ4YbKyIthI/Yt/faQhePgd8pJeg2okbKoRxXE9SyPr485qyaYD5clvNHOKH8GrMxB0QRhaNFhxQg3ZR7rN4W2kmfV/JSz0HIzUz4Ibz32HATtbCukx68lkwad5M+CfA/zVXjj3TpjqiyamrNZgZZbEsqlXpBte971UzEI1V+nYGEpmIqFFiFol1xntqpGKnRefbzTTHmyzBPNF6wr3AazLL4AgBz2Wx+Tg58SQO9DVHRDLaMzsQSnJnZRuf9fNi672v5/RDQvYc0WpvBn6qsHzzRrmjqEdD1wqq9UyrUzKEV6f3zWn7YfYpGPUy33jUGO1b7gJ7t0glSt0UsQE0rnxG3bCQL/4uR+ntM1eXnEhKxgOFQWgoo9OthU4GHp+MowIr0GA5Au0x7E9I0K2cZwo7/UrKzkiN9VJyDnNWRE3rnVA2X9vn9TsWs6gTpmHNbNXMNuhTaUxX3C+1A2t++UhtDwgJNOZ3e/lMy0DNSfbN2o6QUHq+XLQWzzTvMIjf0IAIY9uTcwrz38m4m0LLPROzyJGAFrL/GHp6tOgSeTpCIoz+adoh2LmC/4zO0Vivy8pR4vgC02gkgkc5v70o/Knbx8IsQbmlkJTMVwxO1wVN4sSD65X2Qwc7mQgTmP1JB/WcNdCcGC95ikiaEUZmkKMjTVrSLApx2BFuVGBNAHpGs92aq3+76ZKlpSsUvI9mr5gw/d1AW1E2AecVhkuTnzcY1rsL/iW/p4I1gNBH48z1p7rCqygQ+VEAC5g2XUIWnDIqblqvh4JwPt0RcX6fkw+nfPvBov9DPSRmRXs3BT32Mwg18iFFBxKtU/FY1ZsAmU0CmCUzzfzXA0Nj4D3XUOWj6+APVbUQSGHfsHmxGxHPTuym/UDRH6GPOrU3nC5Q58sm1ycX/AgFO99Ae2/mokr//ii7vh5HFxQ50frkS+rRaw/EMhsp0k1GK9ObCfUy0tHQ==';const _IH='ee7144a0ed803af70d628bcf33e36b930c04e6a21957760ca2d9c8276353e123';let _src;

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
