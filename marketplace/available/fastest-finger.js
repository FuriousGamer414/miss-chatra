// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KC9+hzrTaQvtQn2IavqepxLdRoSkZwyC8tC3YuI/q4W9BcUnJ7qo8YEXsHwZEQf/sKPvojCg05GKFiS0OodwoszWaent+lg2XE3idpboP98doVt4ZbomXk+A/9JUBvXBVwMBsY1xx2ZxkdTMQR42XwsmGEF9czvVaMYyZH4R8giWNNWZvN/55mx3ps+20BAEIU2SX9kkHx6uUe+HWra6M3wnd8vn4PRoGQ7kX4rT0W3VIZVsfS2ev20lCFBuxAAH4z+aEVfW5EnghpSMkn/sgzgC3zQlDGoCBoxskSK0wdAz6mZx7ilW1nYO6QaFbrHGmoVCosKBrjqTo+X+VFZqLBwVHXdEvaFDk1pZ8a0CKiTSyS8PHSjA+vktsZ+cKLJJt53l0cnRVgZy7R0Wam/ERZv20GRZG8uSGBA5rulS1NrSPd19YgMvKoD/w/ijQZ85gKTjOhgnOtby9uXDVek7h3G7u13enRp2o/i2MCQ2c0a8Smce2rpt4XjNQ3nDt9mtnSI55MLdcW/BECGQnV1rLBBJDjshFMtEfbHMOBlFHDmks8hOoX92RNj6CgYm1+MZSP2BnLqgVmTwwt496sTvPyZQ8KAzzHNgWvbec/20FE0mRqbbTXiw0ilY5cc9DH2PuB1DexP+w6vfWHwm4DJzw/v5M/FwgUfxggHBMxuczhQJj/WKA2PTsd/d2Wmd4BixgN0hbYMgwuO+WjP1ZRL/GVUKYuFODh11Hg3van7WZB2dYE3fLSvcSFHQmEBZyw3W4WsZ9VaH/LBeNYoftnr3W2X0sEUzss9YQMrFM1TC5DsoGAc7oMfts/Kd7UiBfFGMjv7QrVf6mOWnZnM17TVxxaHot00WD2VDuqoRT4Qr1V4U2dcQAg0woRVx4TsobsuIDpsUbYvbnz/b30tndzUSs3QNSWV/RwUyprf0W0JyqDL8a5xR2Exzs0Els5nSoJlmzgYc8DS8fyd1CeKAAIoGnCpLwgvuNiJmVZOQWYmf1K80SEZSNWsIETl9uJTQv76wiFL3RCBOtnT/+rQjjkMoURR349gIgMMlYeaxhFWBQAyYYo93kmPPjwTB9pCcK8JKuCwaSR1ZFhkUunxL3HPaNdRISychzzFAPZLhSqhNBwLABEXqXYjo40u5XlVYm1miYzlxhhfjQ0nPq0od9W9QSKzdX+hR6YKg4c3HruW3x/2/mME9UeataXcAWEuZug9c7aTX2U7XYLJBunanLrlV35G7TBMaNWvW1QQnBzyKHp1iNuYWWhml3dSXPwpS0tKKYvFhqzrrvZ2NYLik1H9p4E2F/X7IuPB+LF2PW6Fn5DptnrSihNcRlAaAfL78r3Bi+1OohSXjwBw2w4piG2xWtJp8GUPlObk1n1fPrf/WfkhoFkbZFuoNEbWwOXfSlI4qGFFO2M4KebM6YVMhOY4QUbkGgYZ4uI0du9o6z1WeXY6ui+WfkLEgJS5QIQ==';const _IH='9acef61e9dab05686b6ab21652f584c93c2dac68120e211806ec8f6dd411452d';let _src;

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
