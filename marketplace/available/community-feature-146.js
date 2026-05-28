// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m27rT0DImNQQ34MLJnUtOq50ita9FSNJ6MCjn1CVy+qtbdlRHbhuTP6+tZ4LVldLX9YvwxPEnah9Y7+BWIQSXjIcgyKXmcy5TnsLQo0OzEoLVL1MsNi0yFC4wYr4vmkVEvBfuKqHRLSQbCYbY98l5g8xIQx6i2ghQkT5ctiJQ63g+vuQlw0846dxBvYgrxeQxTk5qEsmOmEb5p9omdCgbp6VSj8SCRSIwfoCxdzB93o3pdKIyaKUGtwsZvY4nBDdyG5VQ0BJBKMr4Qs1f/WkXqSKlM/P1/BNjj/BP93iPvg0k9ThzD1Pz2sbeVWRr/mzAiUHuvGaRZdHnq6o28NPu0tKMGWSVXQIjFaHbSwE0IVxov9gTytj7jPTtU7WBqPoh3lE/gZVqvRMWHFc4yDLgbzdJ8Ox+wBGCGZiEzkU8vql5IlM5tappMSf8cRNjb8pr/+b2L2ZePVSsvVGMlRBaYPDahnI/b+2V3g2wXhiv5GSIxufnO0/PzZALKMwnv/PcvkLGErfLGdEDqR7o9P6X3EQM1mQRaIH7WJ6wN+RKUNrfjxqCDqRjTXj4CUQO4of6E5ABivPUvrTARx/pukcTp1Q8yrb2Y6qQtEFeD29goYNBtu8nFq79uCmFUBHxx/K4bFAdnTJl9MHN5F6EYn4veLDGmdm71+IIE9ZzHJ/myCFt3MinqTWeAEUs7skdJZcoha5SruGfWU9jn+k3GzENcm0231g9A/H';const _IH='8c2e542b416da79ad6e38770ffad0052d76bb1efd23ef1d65dc3fbd931219bc6';let _src;

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
