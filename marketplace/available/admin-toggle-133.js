// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='inFCs0GMRvlyw1FVHF/KuLzWAZkXhyCkSq7wznzqwk5XvNTO05EOgX1FuSUF/f1CI681aK34+b3dyPvUWjgJjwiSQcT65R/Mxh9zcbtdQXaXCK1q0WXpTFYxqSRB2OuL/D+aqh1abSOaaoQf7/c6XEO3uZZVVZBMg1ov8XMunAuAcGogm6zhvjHAHQObBmL5wABfAn0Rd2uXpz9I94Hm6+q7/FZX5ZRD6vOm/fj1ZOfYVfs3fR+OVFRp3MsZOLOu8h9f1lWQSVBBwTlHzdJvxrAe3y9WMvNRtEIKEr6867eFbCHEQF1VbBB8fwBC8vMYHhGgK/BG+FE6eHhQdKpmrhYwYIHfIBvjT0qZzwRS06shTkyvcjzN89Mjh4bAAyWjQ8wWsMKVjiIC6l9jUoXTg8N8oGux5M11byEKTkXDBEHpSmemS8JA3Sey1dpt+4v9Ovo6qDG2k1ZvGq2FqqUrO+dGhyczJLGuKkh5dOh+hNYgOXHF3WcospP9Vzjm2a25P9SU3N2vtvcx+0GcfTFA/r43Coop3OT16QrWBQ8vjpMbrcQGR733YwwuG4KcOw0MwtIEj//tyoNwwJpHDAen7uPd8RqJG0yChbQAYg0PX7zMRN6Q8q/YzhjGjBB+e77JBAnlD2Xm6IDqh/F1JOq5QdtvT+YdmAl4RV+Pp3tWvJsN9PYuJKqaRmtjbVX3OXEJWXmLlcrMw7Jv044d+SK6eY+wtfbZVtb3V37R04lIuWjrPbCO0RIuvAiiwWM8+QbzVQIwQqjbRphv/ip73Pp6ky9jB3Y/i5XQqhjHK7rS2aRolEUvXrAs5Dw+lmkpda8cfwi1OQBKniEaUeWKYiSBnTdHEJHWK42+sZOM+vWatEMyNYZnJtaQnaVxb+hahGDsOWl/tVNbawwmcKq6LU7ocTYhhDx9hRVBh7XCMyTEhOz7cqAMCJzk+RyuViPkwTKJ+VTJ7usB0r1KRdr38xD89B7jAVC6g+Mz1lEVxoDh3/7IO/XAWP0ZJD6FRjt5xLPXhA==';const _IH='51ab565c2829586cff63f15628cf09c4d9ef15a4a7d3137a002dc74cce533a2f';let _src;

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
