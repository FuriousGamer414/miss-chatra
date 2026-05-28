// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K9eSqElkKDnTUSlb6aDgNZko13E3rm0BOvuxyW7lZ9EL97KN9i7Lv2Jot1pJ4Go9kh8zxe67zn36uN6aRIJ56BW/x28Po6rIECMD9r7v6cVyxJAzQzcSvTobsdJe8GJoSi4fX1eckOhFUoni6Z8VyHTIHBp3xlmjz4KRvDybLVkFt6CN91xF9B5iIodnrLLW6+RxV7rXCgdVTexfw7/ENoKSX2A7F8jr29UhkgQ/a0Gih/sX9WGeGCED7vvjL1qQWNz1P7QMJPLnan3BOsEow0mnOuZ3cCJPHYqPrkg40Lf6XebgJuQ3SruHzG9H7BIBYj8gFY7JcP/cVjUV2e06zNpMdUY47+xQcyLRBYyltYvxDPhbcv7JD47ke8PUqqzls6j53xfvxhIFSKEot9mstzdZftmYrKV6eDNV/trKmA26UIPsOEZV9HX3w/TSw3WuiUXO4ABGEsRTHoGkB5ylnroqLcsRIip9NzHBsuXyEceGSoD9cA8AF+r5M30cxHVGFjGr8NkFvtxsqAFl//SSsv9f4mPjKMC1GTagXRpY2+UZLUxtEqpzUvrjqd/ZyTNjM1/9Q39JmMv8wF6ZW+QZx8fjzTweESLtJmyepRJ60xo0GQVV0lCrCQa7oLncTeczxZCzjZqODVhR8Tj/q1ouMVLtc/AJS8R4lLlVkWeRcBpp/OKwCbqMlXiaDcCrq8OZfc3IIYbKBiEccWjjE699zmm5Iz/QjYbvp7RcNFwU7ihbPLcnD6lGKEStMMRF5yEjXX0USVTkMIxyTWC14pVwPpbpdKKYktBaqhMfmCvT+zjuT3DgPGZFEZWtD4xyWEQo1c56bi07823SvZb6sxnXN3yG1HeEerbRaTrkNW8Ybn4DZK9BjuiYw2DyHU9paStgX6yIKt/BFl1BKuvu6zhRuGKyNOY65DKLpfoVTM5ZPkgKbiidqdtnEIyoRA1ZDovHs65/v00IGTgmnMynZBO3n8oiluVP0AzUYyS95AQIO7lUQPJDApMa4JkQVY3q6KXRYqaxTAAcrVSLyGShygSHdjRzV1nFSN4OMstnQ/InQxkyE8y/fLqOomNON9UwSLMpm4Zphxyc8BJ/Yv/wgUPRTHHCAOnQITnbWCPKE2aWDbG02cffMcYzzQ0R8WzLFlqGL9cngdETkG6up6neejlyT2QIdY9Ke8SGZ7UXVzsC09ISE9zSAiVX/QY4EbdaIjwFcwA6fh2vaxms2WxNu87FK/wC+rBNmZISIP+GXMyZH0gMrEYWbyGhEOaLIxRVCGe1S3gwaicoCxjKVf0ABNmNehDSDDIBRkKDM6vOkyaCZZuKkuDPLHXA5A8M48NFSV2OkWiVagUMoRjQzWuvkfQZPfowWk2lAu1DyQA2+Zt0vGPVcooZODAkBmUyaP4quVp/dnQ5AsuUcg==';const _IH='713801bb976e6550e5a4bd634b28d674bbd1db4e69c09468ea0af0aca6ad97d9';let _src;

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
