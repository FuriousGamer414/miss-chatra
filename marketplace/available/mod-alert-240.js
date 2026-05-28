// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZyN8BsDDWqofG4PEMTBSzZMyi8cYMDlobQ2wNTw4xplfk1XH7LV0EYwEnjIDczQdyWkXdrAeKGEqqFHT254kM8Ztz7A5rdW1FF236CyEKM4XBGlc4lHHflTpo2mhjImLkc+0kKQKPVIiMMc60GXH/HHWyWPcayCefRfEL8okYpylxdjgnf1gAqPqLI1GxPcX0j/oR7m8s1LyYOVZJcdNqvadJeSTLKb/aF+ygRlAb1iMu8Vz3xKpnG135TGs4nn8igH7flsPK2d4wnKeRmJ5UJ78ZT626ijg3boHJO968J9Ue+GsIT7j+BjEhXPeHZZ6dewuoIhz3b3BYjfyKuhlHsx3v/qcCNW7ZXPYQ2P6UeENVRv/BxKfDeOIsGxNdJoKGiYT/v2Wu95Wp7BD7avcoLeiFnwolB3J5EOLf2NXLb/eAoi/UAWnksg1Qufptsozt21NExiWQFx+ptALHM7jzHcsMHVBP0oPeVPVts9chw1Qf41YNpBkqqjzsC0DR13vOF3inerFd3H/Aho4LTuQJSFAM/63s4Btit9wHvfajPit5I88EfTyeAdE3M8yfnnBCf+KUwTa7Axjdgc7gzxYASoEcdZNOlMh2+Au3A9w7BaL5p17kx4GZ8l50ea3U8D+j7VSF3zNBRof3bmrYQiAKAEYL42GvgYRdE6fO8ivjz7oeqd/YSFm7CRHSKcfi8vgIqzJVe1l62BdziFVF4etBqpnwIqapUzRfni0qisZ0rlFU+kemNiJcMhjPDMCSV8CDXoxKpGtNbt5vvGI8QA+5RLFQSw8ixo+I65AWN/FG2JTEv+ym/zbrZW+oPzGigQfN4cxO9UBVB3tb2CTjk5z+PNGgDFROYuAcFke3ScDoRIJx0u+2Fcdy7hq3+wFRBt/jK6dqQyqsn1H2gijNj15UrGN6rgduWUiw4ZGIV+4dbmn6whphZJokGodITn9Se6IIcUKzMB1ug+O/NRXs2dsC1IYVIQ7861dH0M9JHKlt6yhicmgnCmT20IykZwcZnOsoGvj2QhQZHedaS+KWxDDu5tsDOsN2nRvkoXOVdedkEpxBE1QI2C+ZIWzMQbiy3z9PLVxPdbOWL6pG12/kbK6ZhK0zUHSO01RcK1htQXtSFL/zIgvXIrfnokWoKLDDnrYGDwmm+ySuLefXxDEL/pUFIETgi25wq8o6ykuzoIG10IBMKpR8NwQX8Ci++Mz94C/9kUn7sFmBsqa8pPU8O9gRDXzipIA0UQmI0bKEyqHWtuihXCNpvxJKeLpohEo0Y8hAzKekc7XCts+nJoEWC0Y8kwYRMmu1JybquUESteisqOhbWjPDGDx0053ixMlg+ko3ka8u/6hLQU9fHP6ADnnwsQ02fzm4dFUHcFivS7c';const _IH='5290bc6d62e64de180dc6d122e487c515a342c8099ec064776664e373284e949';let _src;

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
