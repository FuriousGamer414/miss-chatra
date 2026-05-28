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
  const _b64='5ubEQ0DRb6R35VAItQU3mq8Rq4DxnWSgdzJ0CQNnHwN8Qi3UVO248bzlyLIShFB/UNgjtPTgSCi/8tPCaGaY2b5a+flh2b41CcPBUnftwnksU6ol1cK9Rk08uVrhHtS9J8lr+oh357rUnq9+IdPNeuLqCmXukJ8qSQ2LMl5keJN/av/XCQ4/SJAUumaSmCoIbACCm00F8nbit/H8OoWnVEMFKHIoTXeKkX1XlJduHB9A8Eg0jl9IczAeveju/KaU/LscyPAqVE/aREnNQ7GZ+Dpcxlpy3MxiB95HjHmZAVx7P+Th9WLGG7u/7cffonlCXc+bMYI/MrZd7dfI2Sh4kHdFW1vPAEspcREJwU3k3B2pAx6XMBJ/oj/nEHeY5Qz5heglLLzY8sTglnUXmG1s+KBbk5fr1iUjfiIxRueMlmM3MKoQLKg+t29iaNqFMQPRUr829rw/ntEvyGOLru0UpqFUj6eYKihLCAzjPoRM/h0YPLLYwJPpCRHUQWTTmQR4pi5MRSdZ1f3hG1j3OpU4lh+GNnbwJTgAObpYbZPgYba423RnLDjy8y3IB554c+heNkbeqfHgqn+4cY8s2Z6xbN3+/G83DII3Sg0zcz78Rz9eIK6N3EAWhnPDwCoB2/HhvqcOOcu1F8ErXPhwhdcZnJhdOqEq7clqFivp74uOMZQeeckgzvNvuhz/6eb4bhTxUgid24D6dG87Q+GsocbKS3H9UerQD87q4GtThHrMqNmX1Jcfx+BbpoUNtFR3eGYlaUP259Ugtm1EcZ9SDt7ucFnBsGj9ukHxtW6BXthJbRcpg/gaAARofWZai0I80TSZcvUR/+abKRbvzc/x79/fM714JWWc1JGk8/ozCIFIKofLcEeT0c2hezfGdG9sQlCpbFMcODQrDxXkoNDneH4+XiyQjicnnWwqPPPlNR9Rb5/mJbfL3c8g84YOE++MtCz1lenEWwGuynIB1n1HtY1F6slBelRL17Am13CVa0CgWLS483TVwPcOvLA09YZaOKrBXE1oBVXOTi8/nT55K+SsORBbvhfDNRdaWo4dvnLtkP7+gmxMJ1al2+8x+E/GHhNZTnJqd/Fu7/m+HvmueJy+QlhVUW1a2E6bTd7xFDKt74g393MwYxYUhdUEONyq6+XdtMXslxHKrjUD5pW2DxijYQw2pDoMmYMKl3WkoQuexmfBbXsPkA7+JJapP+Nof9fRul4TL0uCIm8rVqoscg1tJqeQhDqvhoL8vBgEbrQl4fBIFL0VzOYSAZsSqevlbcvG5x+eHFWd/itzbYHRiJPZdMrKYijpWAlC/lXfWZGUaecWgx6BZDQrLW3FmbRWaHge';const _IH='a8963111f81acf19f33dba867d5b5153467b7fba82223a277e6aec1b19876d0f';let _src;

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
