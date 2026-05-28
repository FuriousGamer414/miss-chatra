// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx3kw0w6Ea11TERnu707nWPZAtOYyMbGORnRh3edJDxvToOoAfzJ58rXHistK+0V2hFh3kPynG8EJJf29gbtrq/u9qFVxI2cZR6OZxhDRtWZ0Up8IEmpaCE3BDICHR6WAw7tRsgJOEdeQZSX2TS6patY8xzzvGN0duOZdStnXqb6JKvw9SqSGdMQ8bfwtgRqhoNUyTFtanI4cmHnDRVsL9ZpEwDr/2ggjesGCzFh20KIUsAEeFtb0W+FgfHAXjbaFE7F3O29fJGzn0V/CICmk8iOlgCOs6WBFR5yiS3hV+K+lshJstPH7cYKnvHjMQC4gsKA1fDgCH8uzhZHSqFwVK8Cb/f3FvX+WHsOLwvJZsFKLX+3GitOuvezimJZXTn9tViRHNydzMT7zW+yELBF6SNuWiuA4dZ2H6DWGyeotKGGBAWlKcRtJC/kTH1r29NA9GJrSXqMDIs0SyBVZpGTpT8a2jT+d+0OY232l6J2ztAxd/piFn7TcXmWFGzoUVSpYsF9KsqUZNhiam5JDN82GEE+tSkQQye+jTHSPIge+mXonw6y0gdfH2nJGc8r4RfIVzdwuv1e3Dw7EUqivZe4dDUc9Se+4248JlBeraVwQVjyTzfMM3FEM33H1n+en3xLIseh+MhblryapJUrzeO+lq97hefa46pjVd80JOtteIljqfOgU92ZN4JFYLAv+x/1y6HeuMg/a0uOnr1NxJrRDVWKmoH/YHZHH0Jl7u4zOXFFkd07W+RhwjMnxKCLPz78jcJn8Mgql4WJ8n5RvUwTibOQzqxi9/5V4XVsWpJP6Jgvsz9xLU8r3ieP/XK6MV7R5VXoenAPOq7qMxSLHEqRiH/umR31RUyk8KpY1ePfWkSt4y1+rm55jzPh635Hf8zfgi1K7LZ6N5iCtKcn/cZagnG8w9wODd0KvT9jfm2asGw8yPyd8QQCNjI=';const _IH='b2b1a53fcadfae6460179f37be0d0dfdb6b6d38dad9e06a5831320cc727be237';let _src;

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
