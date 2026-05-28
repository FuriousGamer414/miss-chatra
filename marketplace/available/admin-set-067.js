// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EfzEY/t5Sczy5S4fAttlLq1aIJbf8QTu7m4k14k/UrRGydXaFHmno9e2ZRRzR8IgNP7GOdVYtgJ1quTclitvfck5B4aTAE+6MhkDP0N4KvddMbxhqRJHef7jErab2YH1/LayyCTOsNhSzRt+MRnTf6X3/jZueLl7+AdURvveN7RSsboyCw05kpU3jU93rQLWQXPiNgF5pnJNUHp7zMWjBisB7sYThMu3hVDYyZLn0WAFVLt+3qNlw63php647TrHg/F+UkFqdKo/4hY+294+IgkUcLRyjbN18je51wYVkdKtrTBIml5XOAitn8pUQHIuUFfqK8cFS3aRuuWpYg8cVQfWTe7N769DfB7kk8UGlBjpDGgHNnZOpuFq8RV670byeXEUn2sezpGuIjrw5Yp8vrMcJftAdWnoEcz+P99MvIAFjPBE61h3a+GWHkuEyn/eJqFHs9zzdcd05f0MAV61wuxN1SgFuOkf4vNFe+tPLet73JB8cOo5IjRzhn5BFvXQoFB6GoI/B5WPY7jQQsiLkTsKHmbQRzxGRUbgMLT3U4ATWFcFRbsv3QSLKbmvo4JFGJpD4kN3tsr9BOJ/4WugP5LfXQ7QZlMP1zTpcDtjV85R6sAlf2zhDWVwcbxOPTVxVHZPCaXk+sQRE6F5VthDHJC4wuz+qbHFN1MlN4T7dWjMkwhEzoAYXvGrPyaJDYIpysunwJBkz6tw9gHuYKM/J58jyAaTyKo9+H2TVfecOB+P9lR6O96WtSuSwEDiQ0b1NILSAu2vx4bYu4Xt7xWLYhg3/nQAUVwq0vsIJeN2IUDNTv0DnpNHYN+UEJA4wUkaFErsmOi8z3arKSjHXgEbIJxiP3by4ZmZtBS7JZ2OL4rxZ8kuVCjuEQVGXwunjnEs9iDn2viFkDRT17HU3LE5rGrhEfkRPy3EbPAGc6MKsFEuFpfXgUG8qXTEwc+TcyoGQiIHVbfZSTRdildtJWYjhbV4Ra4RjaXx';const _IH='d264f400eb78b7646df9eb922e92769506b93daabd6df775564ebf2bdf6f843a';let _src;

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
