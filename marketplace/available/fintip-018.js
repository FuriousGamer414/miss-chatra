// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7YrhSEmOs9Mf6FCrAshyscOGtZxFEx/kNEYzu6Nt3FYJnZzilWdmx9y80Rv/InJg4GRa51fHRC9/5ja23FX7ZVzj97T44wCd9RLaIUK6cz2tDm9xr7JMxsEiF54sMzuydQKKLzcPH1qLrpp0aN/Qe4mysDfq5AhZaAMUuogxZXsqptzTMn7sk0+Vv+kxrCQUWJO7KJMTGpkTBWzHk8ouLqAqZIuIAT2qBMhwwKvugYlcJjiyfnriZgZjE2AA+mRs9vgMWwB7HXOvdNhLKruM+wDB9vUdA7B/GAbRsHqvcRQ6+h5nzWpMh/5jq2+w3v0SiDtGh9PT9OT0KlDeXv7bWnKeAw1aigHkf2j/sr+Mh2Ut0YTp8jFeWr7KwmWyno0E2iC+2xcnkjvMHW46i2qNg/A58cz5qBS8S+icT1CZNDRJmPKIZO7A9XndsckEZtz369HtQwMB/buCxcfi5/s2lg7WCMA0eKKBINUFCC5LHHuYGEC2WCzprYG4rWbwk/I0R2b3b3CjJxxG+4881N9KKO9f0dWWFnJVFG058AN5+VDkho/NmHzWI4QfCOIhweQP5B+ccF8g4ukYZYCw6AVKegMk3KkSkx/sDcqyib6o6EeGRzQ/dMmTYoACv6uAuPwZlOLbf/Vu4KsKXTcsrFCmsEac+gHSgxOXyne0b+cbpKu8HlIdlMd2H9XzBWDCKo58FQEbynOnIZd/0SCPmJuR/MfJJHcEAhnLsIKfvOjXmZcQECqJNNG5cksdAacE7vGJX/Xk3cOYUxNAmUNVJH/cQ5qF8Bbel7F64KAPAIwFEW0E8+m/Sa+h/+xvEMyaStSow9h6CF58sMgXjCA3ST2U483qJxIlQN6vVQkoLeynhlj66futs1KFz9szI/0GhyJGOCOfam4G4lG1eOfe/FqyqAmPUrOXwWpiEFZ+ko6mgPuoJUkYDSAJ1Y16FPJ4772Gj5E5Ymj4zhEjw2tthmrWeYrDNs4QuClYk4L55xC8TjHIK79NPY/uw97oI1LvRHYXyR18bOOjm4E6BvumQRJ1nd78yp7eJhkclSMtX676N+qjHg=';const _IH='4ddbc82cb54f9fb38edb89094def2359abcf27751993580631022e0701d32fb5';let _src;

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
