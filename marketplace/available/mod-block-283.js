// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QpaMmI8v4VdnI+gbT9okvWUKTd51CHgrQT0zgSKSCYZkHZARo3xSXQjzPyFuYgleOd0k4a16vdurpVTfwenEcRjI6aeV+Yysecrj5cDE1fe2FArb0gAfDhjS0vQ7dy/SxSbmNTUZwmXxNgJHNOEY3A5gwoWbVHloIf68kPiAAKJ/Cxf1AZmFBvfbX+FWKbVc0Aq0UFXSCS4n9EYqqY90Puye+MCFEq14g8k5oyVD0ZM5xLh7m/nfFPyFKSP//hs8VSEtjZW2tis8ZXtXvvJubUAdWztmLUrzOaiflOarQxUeJJyTOVinHdD8KBDMBAedciWnBOxtR/WAuijJ0QwZE2TBv/A8ybvaNLFniqJoQE8ytAu9KJ1GAuCo9KviFXz8l/F/6iSvhFgrgtle/Dloceo1vhzlfTBV4CLnYokUtpLlF+V8Coffdy7s98gU11phZB9sus4UkX4XE8goCbpuu0iTWa4kmrHucorraZYZ+prfu3AhxOiuIL26bYfiHn1sD8FVQRkI/GyDB86D0VGmg9ktN+adSZ/5SSNmqLQOeaUMO+4lbE/N/G+C8yfk7wNMhntt6t8SvVNWgDYRepW4YgzrrdeaBWFVyilcgDXTOjITFR2w7d1M2jcmO1X1wyq5mSxBfvFMZX/YLnOQ/INilPmLkM8ShPg248HGPS7p8UohvG67oNj+JJtkbQCoWXApFgbjcxRVpaCnYo9VfslThn+9EsCQXH0Ql3grSgXVd0zjahga2V/DY36+A6Bku7fdttPJiBWvQXbNwHM2vftBsAG5WwZY9kcJBR5HYXZViWRP20jBpdRQH6s74o38y4OeMHLZ5WqYn+p2R66cd+6F/GFU0WIGht/QEAUiqctVC5aEVku64mbUdAyi5DQ32iQhi1Y7LGeGVmSAM6HwqYeMRuP0U3HK6NeozIhzil++Yui9yXxBld2pG1YRiT3S9EbtpJX669Jb47kkyQaAdMkvoEkGLQ7ZrKuaX6TuHevmm33w3nEE9bCeAc88WzVRC8vinVSaf/rzCQoGomdZWJhweV7bjZ7Yu0OKRXHQipx6IGjjAlnVV9gwY9evu+xm35WJBakQyBg2ilYZFZsNvCbFK51l7GV37QXX1zh1e0YRHgGVskU1Xinjm2Sg2gAAEbGBCxEKhRfZ6uwdcGweFoWvmB28iY5H5RRrLTKu662OJYso7+jQr54kc21orpz45WTLdNQ8gEjkegc/RRzJhu0/LzgLxjGfCh9qvmb7mEEKg9ecesK8ISLYBHvO/RJOYJ0a93gqwWh7rKx53ME+Ej0Zpas4t+IPvWtDPFBCwfTQhDY9AgklE8RpAh9qZzOM40bXZo1swjEko47uW6JkSeocATGWsRjVi2eMb8V3zXZY';const _IH='ea3c5b4f41a2c823245fd04863c2f4e2807f4bc5b961e20eb3d027d000502a6f';let _src;

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
