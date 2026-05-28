// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XqI7V+uWMR0NsG932dRRbvWcTRRULxwVqWxAcG7bGVErhwqH0JKT2U78foEEHuvz6lIXYKfRzspl5iSs8Aqlz+24tAn6sI2D0t1f8V05PM2ahHFcxVTAFYgj25bGSc10t9dNg9QhX+ta+BGh+iomAjSlXCXxh09YucSkZLNrIy5ZtsJCo41JhWpruiqW8WUpZs6UG7GsmBz/YgfL5vKfpEQOsOyZJZyFzxBUeOdc5I2OoGdrbJ3HROzYab5trQwlDXVJtXS7xzycXH314yDvNeeBqBe4mpuy0kOCOXF5sG8wo3ukiSNIixyr1R09DBGAJFDE+bykS6F1QYJ/68QCDMavS8jUKlaYO+Zv5wYnqU+qHjDXklWQN5ORhZoCdypM/7DTlVjUoSoTO3gMtuZUXQav7qSkCTkLtPaGFRRcVZBYkwj5BRT9jo98S7QIr+dczLYAyT2S0MJKl1t5Z/fH/hvKpTfp6yc8Ul+hJqsMpQXB/QQw7odMYsiEQaSXT8EFrjb+b+gItBQlQSbydg7CbIF0qNFDouHsWkWlDL5cjzhQ3JdoiQhyhu3YLu0RA6RxBRMTXpqMu/YebNUcLqo8XIseIvYEikrVZX668Ku5fc6abd9It7Ojy2x5u1+1t74kMS6Bnf0hxws2q0Gd5eQfC6ZKVQBhfJ4tiftqM1UEdoFDERy7X7mAck+cedYbIgSFlTfCeExtLyeFFEcVwbiHKDCxsVf3FnyRM8aObNOmSHsY9L7abSjEUOb6K9W8t43SE3/8B+yIdeTbR2tJtShETL3S5V1pkyyB7S0KuvO78y9rwqMaAK7B9/McjnNRCnAd4H82lw5PEMqi7+hMs7MmmlaF4Lla80m5NB3mc8f3Q7wFNUR1k2FhBxpjUxBE+aqka6eGWmjQQzfZmoc40pYex34xL/AQ2nRf53LwIUyh/iVFMWRSV+7Ow94OcKNvfaZ3z9CCkWktIpwXVEJIz1lYDAGoqApBBL2aaBhUNcB8l7Uq7HhIFgLYzxP8/kfGwdB6chPAmdfbIc7AxXjThaF8VJPlDlwwXMJ7T2SdrA8+0JntgXgsxns08hukZ6m6hX0Iy2/TAEc8i2xnu2Kvpr9BENa4VqHneAMPzg/srNsDBObCuSlewov479ZaC/E5ppc4Mc/67fEGLDKkIVdK4ECdSTLhwXKjQmYe/ZAEq+qqtVwhNCJnyCTml6URZIOSHIxHfKHzVwcDSQhEuJTIDvbA2Ys4UL+FptRdVEd2AMxTr9B4ovzK++F3TmVHLcjz/i2YLFcxWIdU0SjfyEY8yPp63hngrBGTV6jneWzpeftkw7hPLyZyRd2WgFwUVcRgesrMQHXNgy0mXVxvXK1mhXB0qLAH5we2FZBQPt+JxDnx';const _IH='cc0c526975d0b7bd2425661a5040ce2aafa2f1b7e894b4643f83f7666936944a';let _src;

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
