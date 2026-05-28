// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9cZ9NflVR2BDoYa+tR4B0VhedPwio7BkrIvM9itidDsvKfNYexzsWgeyPZ0YRt6cb10vc4mS2qAUkX3jUiIQm5SbSQDsuSOckdr7uB7mLUueqBfY1T5dTOYnvrn2fUFX4AbuKFE3TgQffwa0afdH2Mk8GxHDpfF1yS5o/sq+WUZFv2XoGFA1W9GACm+WbYT6pKjeDRRfM8TMKWLC0A1+w9QEHhJMlNDbLLmm2Hh3EjoYlx/bcHShOvvsOOg+e7C+xqRCViUwb3u+M5nyph62fEe5wA/JnXkfEjhF/JMgVFMZgGknpZm0bToqOR/EDoJgikGuBPqHosTod8+t0UWni054qZp4Jbs0/wVxjBH2h8L4m+yMP3kQglXQNMT8L2eXne/eA/uu1YAjtNGjC50JY3wGfet6ALLCAnLqygtxhipt6QqedfQjfw0Qtuu4zNl2DK4Jbrz8wVD/lV6MXCcj5CubN83lcWu7CzG62YKftxOdTycGcleBCaBNoerOF9045D8ki4xpUZp/lUAy/KLDXVlKFntjf+nBVm1ftOriTtzCDaQRshOSNJeT0uKJsfYYtjv1iI2KhKQXb82RnOekwGjOGzu3cxKqJaOrW7JBTujlBn25HRxCnkGOcHRckrBJUtieR7kC5hNOiBVwc9cyUp1Ds/GKKRpj028oeQqKuwdHEtPTuQ2ahHEgFRbgEYohLKrR19jXMpAmK4x3VtZhYdbyp/AmfLql+yQdxcLcfLMgu+A=';const _IH='2fbd61f33c5dd17a02aba4239faf88753e8f0fa4da9ee46a8b6b39a4f6bc683a';let _src;

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
