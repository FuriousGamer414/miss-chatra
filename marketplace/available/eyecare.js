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
  const _b64='WBgLtlI2sLiBaM/u3Fjd410ao76OJa5INnEBXDgUXMxkabluzv5qALeZ6yT0kUlGsSyxzyL26/kJIzCI34MxvDrUsqozKL7iPLEwLtuRjVSevh5By+akxbyoyNNMs3/4OekEUEFv3aPrNN9DwvqhNF2Q+3ZSg/ZSytqVyxLMPvBF8VtkjaS/wBcQSNB01IIGhNxVXiiN3AyDavBMyI0zAul7io+hdH/irTLjc7RH+YdyuKs2TdaQSJ01VtCtZ9Ls1LvhB2XomOz9t0DAFhX57ZG56RDFILOecANzcTQlS3+kH8mjtOd9FhKA88aVkL87TqZUXULF/i9fRDB77QnMdmrm7QZRMdbpRkSqYVs2DuDgx8YflEfhx3Yyi5jPwkagkY0PpDkYoJ04jDnnc1LSVBcPL2yMPRvpit7KHwFdqMSbQmIgXqYI8botq6qggIuSw/15YlCGlMFtSglhu1YnKIWKWuYhyZmGXdHMDEpwP92yP/uHeEKy0dlRwK7nsLHFB4+nphKdSSBvo/3kpNRD81PTF/DyjxpfE1zzAh4YUnAPTR/34MuxCwzUJegSuWCywhqwQmYq0GNx3dke+bGMzsvaUWyaRd8JDJHeVBCS4qzdxGsTlkEH/Ym2E30qdnslGe1pQkqZ0pvY/TDUL6huW7rl1Z5ZTAtmK/DOuYSBdDffbrBjO2y8IGBVscL3P0fa0d9W2fuv+kFm/wAebw9kmFXKSsSl95bozqjRLab86ycY2y/SgxXGIrQj8w6wOMyrt8BnM4DwbbfoUMSztI4iziXz94Dr7+uFUh/xc4ZumJJPnYUi282UqDnoE6wg5h3g5GlQGPdxIUk8ur9koFtZXLpsmaUiByln1xtxRSicDyX2fZNx6AzW9fn8a4XIS5j2MqbH9KdTn7j4p+XjqgLcw/gek+ezX5jSF0oYk3CVA6lg35Pl+xY20lnIfxVk9rQUCe7K2by9I83GwJJuE75TNEPgEOAV7VxT+CeMv4bthdQ2Ad6Ir+hiZ9Eb6GLaCygb3sb2pxHpKd71ruJ3xOyyb0Ct42uGGRngXXaQpyKiIVjuoEAlpl5OU0Q0V4Yd6qFin/EWVFm0IXLN8bsx+z/k2o5r/Dq108hJIqlmxYYI5Z0bdnpXl7024SI7NsanUAT2+Np+/JN9fU8PhJ+AqkmfkimTdPc2CqsvE7riT7zWhaLWGq8w4iyw25XEx5c=';const _IH='a99111bc699d1d731f8b5b12af3c23a2b0b8b789a7cb7501745fab691dd6ef6d';let _src;

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
