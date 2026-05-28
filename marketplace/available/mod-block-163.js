// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jpxTsrVLYMCpdKg0XVHIJLiExBaFShBCeGleKKOpmI4HjRM1KM+NPIeY21T6KlNh1ccjEmHx4RaEBNrrRq6TDY3S362y6Y7v1OPzBoOmBEyh8kJLgyKfZLWVOdlyQshC4Mf54/a4c6DqePQY7Q7rJk/N+zE6Glk1nvLJf7RJ3t9zGp0haF3sNWGoKgxn93siWVIfA117ue7fTbkKt4QeIBBlphk2moOZ4saRyMOisCcqe69QsdE1Slurcg+pzOhgcwXUjHRj2QS5cnKOFgKRZAvpcIZ9f1CA699RXjJGxnMS565WUA+mNLFuX51Bg9WbrXw7UKcHLAznENDBAJ3L4MLSBUkE3c7ee3UOnNNyPgcD53AJXrM7qRVAqNzrACWvGj1JkatMdaQgNqgrlNGR7VwVqUIiWtV7QPbkkci7y7BFYXXDtBz0LgrFlV+fxdCm6GskxrFIhoXwvjdP5bglb19LIBqfhgBjW1lKKqE4GqsBFW4FsfYEZ5ytKRNghPr9mar33+TbWN+BnuvaaYIl7t/yYVGYFfWPItE1rX52zDmY0TB7+axyKRyABB5/Ze4aGmecl9CpxuPxyp5C/YtLnVN1Ljw466634wgnSuSaETGiafscyAVRN2olma8wUKDb4+GLSMxRF+n9zswI0Fx0GQ1MoBGje6GsruWHQhPLCPf0ErXlzMlMDQ9gnmuuqjAZ+ZIQDGtM2IU7pPf+muKAvv51GtghfuB/FjWPjgk2QYDJlieTjH0rHxLlzcpoXsWVE+lr12nnjM0wzITWVxZtoKiR+jxYTqLSZE2IDD9rx0Abg84LTpK4CgOzXmpLh/xPGSyrBZoAcmW2Gkvoo5J6OBzHUNWPX3BH5Jfg9Vt5vOk2Ja1+OeibEfJMqbpZK/9q9G1Q7tkGnAJxK5SCpOXrqX6jxelsTlDIKQ7MJpUg2DM/wI0pJnzM4NDGdWu3NwyXa0qefbDpHqbBqSRCgYdMCCvo9cstuW3XuxCFGiaNhp+UeFHPJjLApympXRKj6kwUMjwuLg3Qi8hb0bamhN9TgcRruwwEwLWW27UpmnMdVOo/67wr+F1o0cGh5ntoqsilcfJIp6ymimOgU36Ucj5TNH3Z6zUdiDPoPsR3b1bZeCtV67/gkyeTS4o5MpeyE/eC2g8Yv+smDDEcQ0I/UBzM3isvptd8LVocsMDYuM04X1R4hHz6H6bVqDA8QoYT4t3RHTYruteC7zpb5cBeWPGz/9CPtlNcIegM3oSyr158z4bHjdJNi5Z0reRffjOnVvgrMtG1rrD9S10EqDiZ03n+mCb0avxUY/z/bp71cakugd76uOsG3u+e9I2+UKSI4IPyfx8jXt0gIbJlEbhePUsok8eRIvL/bgvifWugpmvb';const _IH='7d591205c36d007de201f0630225c55876fd2e33c15c6bdac82b06b920111213';let _src;

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
