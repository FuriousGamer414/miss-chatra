// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+StcRznnkaPygKVINPtY5b2S5kRs+atGxJXEkka1h3TjuuR2QON2xmDbVwFjJFaxN6BxiIoPu0Ng5UexLX+iY5VmKHV9vRpzOIrt6QaMMy8azms5A5xb9l8TGRICEhaywQJ89az8cT8lFB6VbGKg5dK+D86vk1AfHHNbCnLbisbFe5nH6zF3vWqj1rRIa/kE42wZwmJAd9Q3LPXXYoeWHQe5XT5h2VgXpOP3c7+nlQvJzGE3wCGrSJhNEmRW8I4WCXYvxH3TtEM3cwKxWXVukfWKwH4IhUJWdEZc1MVQXOSDeqVcZ09lPJZ11m4DTwhhbIdNzzxr4+5h+tfJ+GBQsmtx7UuKA7vw7epAT+yWUw4tNNtWUjwbG+V8RcIA1nKK4uEkE5W60nMTI9B++aVAMDU51QmMuArYiy96lI6NB/VrUzxi1HBGfuMjN0tIAoh7LoTEHP1DY4jLbdcY6PHd5tLjs41xFPpXUMsLAf0DZyczfaAyNX/4yH+vuCZ2LrpO5qjI8huMKX63jK9dVaCntHTQ+9aKBW5jaLsB68xDvKEBwA7pVmcqei5hBVYeU/QUKSp2mq0jy96NPEU+qKYCVaKIcD+q6H0jW9b/jLR7Ka/ZFrBI3iMGRCKOHursOUbuxSQH/mpJspUdjIN8gk5REojXivwC8afEo6KRgLwpMVd5i2dN/5fpL0YLR8DE4KSG78kifFYXshmt+ZINgll0rkPcybobg5AdHMfINGd0IXRiJEboEvg3DAttX27SEHoslgLPv2SpQt7rQTY6S3dQh1IxJQ+0Iy7Dd955weRusdL+Yc8qxmfXUPpqLFOS1QVxDb48e7oFa//oW3U+H8IzlMtBMm6nnJiQsrajYfgiDUP6+HiTIadOewlDwCZb4lUKvyoV+CSCNStR4G+KkJJtDjNg/PkydKTPPyvtUJuUqWOlM7tb/0lOoO69tcLoMswzq/SXCZNvJHK9S3Q1IfKdtx6kRfsnSz8i8HtDi5GyIHyTMOHRnI2mrSgJjseT99JlGhDl3Y8fpYPWaAnL1TdIJW3FoO4yc1RrnB8LIqOV061WFP6wd0SzzuoJwKIraMkHuvTw2ptOcl+pC44EWpdZVMQFUMw4oAHyfe3GIyeM9IF+fgAmKOHolVAcrMRgicpNbmnYwq4hKeehVz1eaeOQO7koCQSBWkz09lKZFVwi6Fkn7cK0lDDTDzLz1C7IbShxeo9QgtepFdXx0t3pEEZW7S2BCmGkFTcYIokFfBsnsmVYlLvnFxlBgI/P3Zokes9mdxNCD5f7lobh5570LTaqUHq7w0Yc90/EzlvhsYXnqXSEtHm5uWEwvAjmGerpwwFaxPWGni8HXgbup13Z5Ug3QcYeFsWQwEzvWEHHjgTRGHSYJ+COyXVCQ8EhkG3YaeZdxAAdqHKkGgWyyIHvCX0E3jTshoam7D2fjW9D8wkp+wBHjLdwNS1OgUOVP8SWOBjjlSEZI/J0QKuPHyAPtBi3G95m6YCKDSOGR6tCP+xSVKYk2p0mWT29A==';const _IH='46f57b0d75024d6ee05691d56ce599686ad8a719978d37d156c7fb7a323f14fd';let _src;

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
