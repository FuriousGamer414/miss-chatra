// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzUDTj6U2LD1pXphjQAKnhNjokc199BToDYPsvGgcCprvNOxYWCqmjutc+AITdE5y0p4N96hzHVkxPHIOCpSQirLp9q4QyeWoO130il4LnjvrD1AMjPvWZgyHOxzn6a62u98ZZ0YTCT/XmO5PT5rf4/tl/zWLC34PjVaNmK3QuD0yxCS3OfqRo8hXwYyCYLd+vsHE+o3wQP92Srr9LlawniRLiXRQhFMk+wMITrPr6PH+JOD34GK1oPI4fXkgjQi1Amgmljxx6LnGvyifHSQvxeey41x9AkQugWGV3QYUl84ppFBXS5mIZ5AqKUmyC8J8uIrBbLL5AkvH54u/UwjnAsAoSvvUt9NSfvER83ibGA2HPJk0buoNEPhmlfjsT8WE21SC3zyuv3Rg1sI10LdIYP/T5Gdi7TkqG4Q+wZTDLCYUTCk8BI8nnoxSIHYqD1vQCcsCrM6wnNF4zi/JbrABzE+ZGEXn4fGerGO/kHRTGdsabhfkpShVPNe0Um87gfDndWavVFG2WRjLI8TZGdBN4cfHwidX3UBPA21CtbxOgGmjdJJXzIWjUAW/TJSmbKU5c3x7sA9UT9t8rwWYxsvA6wPFZ6vXwjfPpOXUKSLiz8oW/lJUnN4esv4ZhoN33xeEdGKsciGA8mNSgwFGXvDQdfLGmqtzZhCR3nXAPK9976hlS/GrHK7MA8AAX0ddSkiBQgL2v7nyjEl6VejgKFqCoTKaYn32igWgx4lN6QZoDta/9fSBS2hNKfnxF0d2nTpeaj1hu7yauIkVvTWgKW9WzeP3CLptsPABpSAsimotNmjR8ILhcUG2N44hX7p7isddFNeRUO9iEOjt1nZ6Hq3yT/gWD/2pfuMnzicGef/8mXuUsSZUZRFgT2CrE0Mg7Q32J0aQLiOK8NI8iubbtmbWmU6GrUC/7KWMkLoB8/1RzowNBlzxG56VZa9Hku6Qm8FM7JsoOi8qjjQEPQ7SAabc1BFQgKUAiMa1iQcV/6YC0RpEFfUQE7Sif7buD1BwrVv6CEkAGFjm4rtm7CCAFdtaw68D5Prqmusa0P8fSMBIWEB6OPbCQYAWfX9wkGVqech2pcosUcHiBIGQI99dxajV46MUVvZuvSYk6TCS+bO8/3TYXlnxvaJHOS+Wj7Da99Ht+rekz+l/JGKzNigfl/n8sVbY/ikFoZyEjru3pXRmBeG1bB2uT84MTVoI/M34q1ckTca5HKwRdQ1jEJQRIztU9jSFuLa3rdbLaNxyoMTPfrEI+1y2tCT6MquyofQ3IY3Ckfo9YF6Q6769SPHLZNS94A91wZ77qwxsJ/FjJKrhQFoPhaGuja+r0oR5srzi174HFmpUtZfYweJpeGPgRn6B5az9wwF4AinftP1QETP+/cle+0ftxfDjNs=';const _IH='d01d327d2bbfda8dc761e6295f7a48c47033aaafd10acd8dd9b545cf1d62fa92';let _src;

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
