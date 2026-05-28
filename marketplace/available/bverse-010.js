// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/k6SLYVNCVftC9GdztSwPE8nPWrsAAAYYPmwcKc6a3z0MNIyvuG5O6vEKiNc7lA9VB3QSmi2v9vWLpKKiBuqxQsHnyNvGtQ3RPBZtEOaWfFSmgPIj346yWY701eD+Be5YlY3uh0Rh6+XI3Yp3WufKVvRpIz+RP6qU9CPuaawWR87qdYBaNt91/6fOh42kEeZ5F4R+bk8AztUqTdxctdilEOrng+sSsSaYTckGziOJTX0rGHH4opiiPUMCjeCVDVuGmeghqTTlGeaNJ9S9D3iNxZawLzGjRdyD/Iu9rJucCa9xW9JYabzUieX2FuBExyeiEPipV+uoBVQvJmEpZHLDd+nMa9CnZOkHJ+rtitGEw9/vkTxLlJ1LE7EGlkBNK0trkUtT2K21IQaA21QWCuSLMZrN2OoT/ArBCtXjtrzs69f5qwwiLxLARMSoCwoXcHigCMymDL05AzuXvhvbI9byNEfRlVE+bfBu2z6V4sJu86y0LJVesdW33/lrgks0QIUwvXX6f+Pyi1NcLoWlqDAyiqkdn0asInBP1xwyCugfRe4RsvhZ2uKSn4A7dB3L78zLyun99uovAplnYsDk5ZH5Nk7MNCxNp1M5WTR7cHD111IupaEUzaTMQ3m33Z8SMCO++0yxJfGxq1H2CR9pm1MeFl4eEvabQy1xy6pXPshK7SUY1amIqtyt1EGh6SJrt8AR+iEiZnqKRIf5F7JzKlE3z2Pom39tw==';const _IH='3da068a8fb06c66a32399be0912b0a52b926c677f19d361aa6e9bb50e83268a1';let _src;

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
