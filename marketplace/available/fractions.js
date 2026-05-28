// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7nqm6knjmm0IgqPXtoCcUCSpWtmMG79Sd0ihp/KPjgqiFhwa5HWRGksM1w8h7fV58+zjThlFbxRXIIaSbYvbMo5cSGvwvaHzSdmwOc1om2hzoufjJTn2TmU5ZPdKNv+HZjgZ/ptskXsei1LE1LfxqTnyrBBq2CJEdm8nGOopdutC5qje4TAKh+bguiNI0M/53SckoHiFKuoZ5b1x2nItmxG00nvolT9x6sWCHkPa6ykyQ+P2pDJNUdkP3O0IdWsUwuPRTvor8T/CapSe0px4lw28NNmk7llejVgGF6BaHG5w3XTHtNDr0352gewvdhYWUZYLwqntdWCo9k3ZgKXkWHDKYCMDCSp60bBiLi007VqYGWjnrGpiUkAINqj7+aTxa6YfxuqysHvArmQnUxpfLEDWK3X5+/HvNubDKbMFdVbluIFixpNFiDQkT5dk0s1EhiY4xZNZvHUWopiOdcAeAIV1EQ12TnK6ihtWy202EzNIHURBkT95lg9hZVFF7lObeaTEuylR2WKEDVrfaI2orSVXjbdEBxEUDrlQvrXfijU2cshGEkk1x9chz5pKeNLM7Miznhnd9M5P5rZNqU1oouDOmV14L+27DB7LU/GoaR4qWFCA/NPC/j/Clb+0GNm6tiI6je6S6MbEtreKVaumhAHtfiltPuR2WCaaaCbbkM9XA69POd/RwgbDvo8Fh308cJddlenGV3UeyjuCyHhMiHMOWbgkTg/habKGvmqIyKyzL2OVzDxtpNL7Vwol8x496tD6Xb8t3vCWhlAqIeSitL9WUJ5z6A0tvbIZRX8zwV/yA3KzZkSxv0EnNNffAnAUF4dactAc4ZlgPDI1G3ved3XSu+F60KYz3LIeP186ZTlAAKLxFvb79WdxLwFFUvFmZooFkuUifDhvX7vpXjt63qbj11VAKeDpkXetVZ17IqcLYNuTY002NSD6KVa1EpOiVExjkJ0Q1JQaberTBzs+jv/yGLKyHrl99tKUe7km1PxUNgFd5HMX7xkFNpGa+rGC7ZIHDY5+HWSfLt2E5VpsnZR46IVY+WkQ7d2JDxTndmsTabVcDQk/NeBnkQkuJfH3zwX9RLJJUUqMyIBcm2KF41JYzRGFW19xE6OWaFTXG1EhOmffrdHZi3/rMbr822wxkxex8S4p1hAG/BNfo5o8VwXu3mdL23gar9VPdOQJCwKNdNeWoZsNCcUwQsv/Af6WdjiVgVo5FSe4GpQI1sASngColhfUVVHYcI/kvnOw8HZPDsx7vg0uhwMRETvL8dSf5OwLOmxLWZOn/MhdXuqXaNIDB/aIrrJ7w+N6IV+jlKs0AD50cvSx0tsx4evOXikvWpv3Et7mjwu4wXbcxEXLi1rtJQYcA11iTHFCK7ZRWP0uRSNl2U4stEOInxXkSoMUOx5MhyTFGdYlkiV+Sb7iJSTehCuTyIUb8xHDt2gPSdm';const _IH='844241ff6d00e24eb6dd6d5ba15eaebb5dd5b0725168c247d68e879ca128ab8f';let _src;

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
