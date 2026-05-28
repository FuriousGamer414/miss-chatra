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
  const _b64='cBIQ7bLvu/INbbgCKySiumjiRmt7oNwMadPHuL/VPJwou0hZDKAKlPGZzJdB57fYQsKDLn+mJZiREYsbfvBDz3ofXn/xhQ0lD9zM0pTVJzmW9SticMW77BXO2cnZL+kkKU9IDl/qM1mXTWwPy/RQsoOZAO6SY2H+wg147mZyARrBbUsagivVA4F2e4jAVbnpAoQ1hQZjvLeR8k47NUSzfOlac+Yr/lxgVW8r/y9fH5Fumq7L4+v4kD8hcH6cFj6YiaF7hEsuU+tsiMUsL1JK1g+EkEopRwME6HXrOALa7wp00Xft6RTXEzSknS6ldxlhecKCDL7Gx0ptZXtCgw+SMH8g3fWLzwdqj/T9842OhJ4JqDp3bSO69hxcKC8cBnSYt8rh3l4Q7UT26DNnpa4hc6Fmq3mfCoai9lRtDL28fEbGe5v71yz8aKXSLawRkA7g7DKaqT2UoCp76JEs+C+/rCh9nWWSXEgXC/6CO9vqLpYXq1qJzjv+YOd+v1Lq3mXGCEeQjfem/jDCfO7xlkaD4HPdIXqHvjJ4BfPYu1iLB4q6kHB01gErGuQCWEdTb/9kfS9bTdNDXLyqLiARaHvCYaXNUVwEEB9j3HgoS1B6ewUPlzCjw3x8MOlGRViiLkp1tuOZ4DwHvB+ZfH5Vv5+5cHhQLTCv+8CfoniDL+WuWPZbCjH1PpwudUkBTwgG+LeMh1WrD9lDTpWGaV8coVg25gzWrwZdK/tKhytXVeoyncYI2QB/NKpQf60cB6Y4zdMTCdV0ktuZ2OE0MBFPSzL2fAbHP5IB7G5CrhhCQp9kbOJqmZ56ScWO8GFDbFoZN0OD0UtPHsLuUm2a2fturIxtxlI256ooz1FjDgwezO8NWcwnNRf7AFpv4BJkK5P9CoCHryhFqrLuOGE/OqYvt2rPgEdkKse96uUXMeyXJhJL7gbQESisBRArP8drynz1vfUgNi4Urj4npN6U5Ysrt6IrKKFnyycmxrALG1kisw==';const _IH='722135e4285daa93d417a8f06786747d59eba1c3eefb6854ea9184678a133afa';let _src;

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
