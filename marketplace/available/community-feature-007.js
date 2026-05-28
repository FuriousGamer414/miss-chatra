// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9sUuKY1uG91eaWv+x2xM9bYzP60PLwXJHZGcTG0EOcR5V8euKF/Ckmnw1TuzwBbQwbp6FgA1KwI2xxdP41XqRXRDQG3by7qr//r9AdUgvsrSsOGoOE0Fx7xPrz7rRhERCOQiDOZPrk4+Uyuiwz8dU5HlUmkiu9s8TVxdZOaSAS7frvHqvgp0rmxTTJBrVduKkDE8WULPxIkcVdtIHk0Oa3mH7cnkjyd5PzjQLzKvNY8GUeiZyRe6HpPGfpidu9CNfyM9V/z/UodGgOFSQoCE+ghe3IgB9vrFh0WLdUGkcDufVtQID4yKDb+it/kKvBWXXUqeNoEsn2URAb1R2i6rKTiVo7EKqfCEv2bNalvBFvfYJm8kjioVaEYIs4d1QIxvzzBzZvz72IkJXNi6t+8Ait2tNB9qi3ZaJYwLLId3b7AWMVs673QODOqb5hbMB1e7fiPAUNFFsuF28Eo8PvPHxNNDzuAPRhwufKfnU+F2dKaDBfkEB5S3kkyL6bi5tvYDxIDym5ml/jwtKMHyzlMUVKZhTzZZFljnGH0+LDRiFoGr4npjYQN1/iIEl2i/PzyO7cYOIqcgaBpYevuUdm/h3bWIhqYQV2FdZHspUvbKOQSmxpdFH7ZzOA+rAyHYvHsFSbMgDNd8g4Rj5byGh1uzar+L1rn2m5TEBec/wXH2HibJutzxi4OSyFwc44ssSAT3/7iJ8YFr5eJak50jyNKapCao3kb7twcnpDsr';const _IH='0bd4214a01ca680152816775a6d91c65bef38aafa5053c77ed4e94a898f00f2e';let _src;

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
