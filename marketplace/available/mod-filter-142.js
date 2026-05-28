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
  const _b64='UjogYShQp0kW1U7jyTKxzJzJPfGHKYmEvtCqQ+yTtqAUZJtCrWo+A0lE8T+0HLQehmDq/zb2EOUPJdkNkH3auQM+Oo7MyGQ8F4yPlSETBIf1fTJcLaH5SgZyllIXLKKocbNCoMCawta3Bfme3y3WX2zOVH9U1mlMx8xj9ZIFsW+0o7VKdpL6W9VbjxUzLT+9Ft+STW40LAswxtLdOWq6wpGTtis9cVI5ywR5RL8TZi2EsaA/8LVihN0Mqssg5r4Xw7cjxSVWA2wh5+Agc13N3/Sgl1cRC0YEq9TIRp//+ijvNNxhhn8xm0CsihrbJDYv80GubXCBA90C3fFBFVU831wGllbtFJeBzCAtNU9r5x6ttreEqAuxbB/adNco/hhqb7iUuhjbw35aJoiryF32jDoE1wNeF+o6LGU3oWJJNkM4UpHmqrBKYcNUF8o90IqXZSwLFy/h0OHSXtMWEmD+m1aYl+dydYlh0VdKFUbsUvOfsPKkf93qyfGqHuVWA9X4TMpghDDl3OJiHoSM5C2lJloPQZ2MVUWfZjH4jZGU5g4oF6q4aXuPhuTqA5FRmlqex+nNTpabSVPxrob7ElMN8F2oDgY3zdBOfi+kLtn8jjQ678MiJqIVBAatai0NMELLm+1LtvyWCF2QjLeZhig8Nc4Z0QftRYVEuxVvTZDgmKkyh09v/7+G3YK1A8XxbVEE3pwj9UTbKIaGssVvXHC7VYEoQ7Z0O4tXpSsLAimMjcE24zYqESsCkFsXJoTRz8wMYY7TsX+S13EVylaElJQP2KZl/TG3l69V/u/5ysbS9CEGZzgcRsW5T/5fV/WyqSZ6G+cmzzwtsLmbh4633R9+ziLtzlz/DXGsZkCkvgtIRPx6F2HHAf6uYxkJPoEhhVkmMVKD2tdmo7S3ZNlCFhcS6MMRcBQnoWVgI+0uKOFIpvvxgWT8kQSJSbArGk1/Aqt0cNLrSxZ2+75iVFIBmAHogWXJH4TuO+SVxAFr/5XUJpApy5M9nSpp9pq+G595Zy2RAInleVZmBA9MGf3Xu3HgdibOoakgvYexKObp92ewz+dVzz6pLSJThGoJZlIWDXJYsETmmQv1TfXvB5Bnged9J+lPrMg6ltKQH2WvDHIADNdjymTU/TQpFappLT6ZWUuqASuR4ecb/Jl8AOzQatr1Flm1z4rg0aq+umN6wdQG99hNKXAGQZaF68g0bQsP1Grl3lPcwIo94RFbrPTzowxjP0JPg6UECEUJGi14DKz6vWUB1MiEBHsqbqdS8a0VTlnMSrqdPL4yXeif0Ki2KLm74FykOHAXF/lVfK+VJeGWftfKWAOVHUX4Yv5KyTTdDjFFj8wMU+gicfH3fxDN6pZGYyALV3olemvn7qczacUul600uQoBEunTyQ==';const _IH='a01c3ce4a2db07925302848a8133f361b2faecc17f7690c7f1367929a204ad3b';let _src;

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
