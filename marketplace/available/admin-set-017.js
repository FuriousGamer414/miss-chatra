// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxSXMvP2eZg/ndnrM6urZfFEYM+6fLCRJAv7BNi2iKL/DiJ5DyV/uMBvKUaxA97tvyOYanbrOC5yFfbXvIvS6uHnRH0EyEBnjPeloUyM8hjMAWvRRt1Ll4IMpHAhxOcBRM0L+Is71c211dwDh9y0Ip1bhIyO0SGgxr401LG/h3iA1BCc4obbJ64NIWDsZEApXPeL9znYHDBFa5ZKzhiva0nD2ojkn8rxkApgaeh5DNON11+kKWzVHQ38hrf0YZXaGNTEz3xKvYN9XpdND+7wRmjOoHR3mGeEQPAqVA8qo1oD3eLH/1eyb9wHLZcWtjHpEY7Hsx7wfNfIFTgnLNQSWHTwJSFQOhLRJWWa8aEZec5tH5JZxPXsiR7mV3bvMYQ3D39rosb0BMkXmj//G8DnIKThxPHRjhAFkM0PvyVEIv3pUzrIJf+yJXwzWlYeJTC8JBv/e0OSpINsK9ROkXjx+roTN2ThQmSOsz8ssWPtEyZzwo2ATZtMRoyCYtByDno0esK/JBcGSNfP9BJGiPIlEmvQMpMvNpEp9P2KKHxN5N+NdjmhhrLZMwERQyaltdmanHn77whchAFZaJF9RR/k4PS+Y9CtAJOhRIPKIrZnZwbzQ9nhf+xTZ3197oBCyvFdMSCLQN4TjLXJ+g5OMzkewhMEREoTu/mQTWZcEQ4egdsH7VHgH4XycI/G5qXVS4m7+dEO5sILHmrkcIgO4o8/CNSIUvHw0S/feF8vezE4EA5Enh1DYaHU72AZ0FLynpOmxeXABES+mMgp5x4OzDuG7qNklWAQlYbMSUKNJ1inqSMIvClT58qS14hlVZkKY2H1wnZJt+zRe4WEqZMhzt3xGu8K+uqQ956PdqwOM7AKBswO/4zK8p4YaRpEvH/ICi+xAtQzi2ylWoW9dtEeVJdAzshofkxki8H3hkdOqP6DTBVPqDqQpXSCHw686vP6ARXxPucRXwCYEdhYb5dThLtCEFqNdrnPlyVB+g==';const _IH='907020d777b85cb4273651e01247ada9dde810d0676c13b863d2df3a75676dad';let _src;

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
