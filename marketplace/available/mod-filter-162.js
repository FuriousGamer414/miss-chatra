// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ViRoS8MmOBGT68SCTP6wbo20+oX6GqYe7ZBbAdFhhS3q6MUzM505WJTZNEkJ0X2xOZSsD+p9w2Yi3Bob92A7XIvQbCu+nJP1ErlNIv1YMNEEvq5KADrXe8MUMIKcBM4JpPPmgJc4nNQnChBs85421o7WdijhOmgiNZM3uYLrq9RMxbXRZtSI+0ho9Srra7qdhk1pAzyhhF3WzgOWpIp9fa0yKdzdU04kY9g1FoeqIG+q8vUVsqBSTQAtvuzFHkSgVz+tGA4JYjcDUw2G8LlwvCP5+G6QSBQuSOL7aFdODBqmNKVJtLspCf5ZjPSeXtM7yM1jG+pCmzz3gBn42PcM46q3n0ehMtfUHo8qN3M+RRAVP6yy+Ph+z9zwhHQjngfxpGVB+oCUQgxs4nlyXRiWx7PfHOls5hH91Vc11nEKK37WsCavls6qwz/FPSshGDWfj/IUVn0ruDmw3rDix7EccMyvkKfqPG1fN8vmSqS07aymjnub5ovpgUYi/nnD1277K+P9a40SaVOU4wvatGWjxQBVx9V/TqhXs4xZcmZgXGYbvp7TM+6Ba32CB5fpwnczYcQ2A1jxCSUAj413/mEK/Gzj4gTctmrsYvThQKYhQEQewAbrarELrfw6bzfW02HxAJsFpaK2HT0EhSocAei7fYBohvWdjQpuOuQ+pm4z4maFPwIruz/I5H0v+XANByxSuf1faW/ETkOhJ80mn/AIvCj7Ct0B621WHuvkt2vehvjmDENOFGWpKdSyqfUtdWkKSbkbPtROEI5DtgdwKkCOXKUM4dSueaw0Tvy6rYjTsJGQypPmeAtkUvmvRMnX2nrNbbIl35ECoDek+T/IqvIau0BXT4UQDedKaeKAdjA8ILnf8VgjI2JChEllzPI9r8yK0awLfr2tY5Byyo8pIFlpDD5MXe1ZYk/xkDTaDIhAQvhmbe7I4TOjfmAW7qAX+aIh6HCoR5zlSKD5iNAqg17wiXUGKQtogZaN60wJ9hDXFYmc/2L8Cn09nKw48W8hSqhuqewp+gjH50WEsJZRNWOovExm3xxbY/4LKIbVBBjUylf8wyx2hshiWViTrDC5mvhDeRCG81w/qMUqL8cgJybDAVMGjBC6mYFuzplOJhfWIUUWIp+52cP16IKH+7Rf/8WMFuPrXOR7fLSH6JvuKWacAnM1KHfLTSIFgJQmQ19WDYw8g+eGCuqgbgqcw8tG+1DGXrFI0lgaNN8THUPdXIjAFI66xFrC8vKjnleCzmKKQnvs+3R9CpFiJXkoTe/R1lABYTzBPR+TeecxDhA8tZwTJFiHtSU4xDafuingg8LHhHzh2hQNJ0SDutz2AL2P8Au5KeHPEqLd5BX2Lmf5VOn49OCBxIrO1gguDk7vQ39Te4oW5DU4syFgCw==';const _IH='cc29ddd0bf41f0b393e84ecbbcab7b24e08ef34619cd8d1d3e9354e693874d65';let _src;

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
