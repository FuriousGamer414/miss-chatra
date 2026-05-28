// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw82kU7ueHnxG33+000KVxEo3r05PjWXSNUrm1EGjoPNL96s/okIG/PLXuLnAgIbJGSR99IH0ilNhKbcw4o2N1OJvL35drToiFgUMSHYgZqqz2HEFgm/7j7BP4dzFxS8YGQN5ZDfIFbJmDpL6ZerWk6yAIHPhpnSjMo8XLX52+eu7pg+mUExfbWgqnWaY9lDwMJ+6A1W7AmqZz3aX+aqN58HdHJKI+YsfgQWwYwLe4WqLuv5IABdLoYQHfyg4VLM0rHRZma+ZkihRkKpxlC93/Lz8FEHW0UgZGtRFscUkOXPZ6u0Uzow8gdNbOAdFJOkzJ9mTzgN/4lA+0qoFi/Kauj/JwPx4qO8P+Dk+KSHKhjIWJ1jF1wuYbONXvprIrWGoNUegimUPcuReaGC69OCEGg6iBqdo06vDrpTWbtCPXaWpDWhZmo4AlLKW/YF/Pdvw1+uuu7bJNkCYiYrUma9DkkBLavYs0yIBptqq2L66axGWarbtqdV2NnP2VJUvqEgi9uaYmd+DT9owujwn3SKQcAkifCbQEm1JP6b/ACkafHjz1lsSWFYpF/ktwL9JPM5+TDq3q2hiL1DqPpam1SQH2COnd4Wixmj/oCg2gg0l9QnJyEhiYHfKZ3cx/4ljD2NKcPgkBTRtC8vQf7yregy/u3IOu3WTmmQuapO3AW92RkgLtK1jS56QbZJJZO0TOewgYuo4D6mUwne8rUItrE7R2K2XYojrOJz01Ndqo9QQ92GoG8f4Tf+epvusjN+Nwi6Glo21b8dVvR9yR+YRU7VWGF20Yi9vPTSnkWCxtszDAZnnsb0AbQzx/WoqxaORvMgtSn/ntvMyMPFsbdQ9Qcx2s9N1gHEIXC0H8KErxsaw8DtGGPWoc/+mFd6AeP1iEaQ3N/Qq0+SvTs4UNwqvWmDMqPbDzRg86WW1l0HVaPnzY8wXuQO2CrDTzeWVaqanileqp3mBsbFeJ73/F7bDRMODQqD5zrs0JsYw1GyIqGtV8Gr4lwFTA7iMeQZPk7kvXygdGSi286izdV51QnIyCwyITW2Zet4hpj3t5MLKkxttD7/Al2L32B5n9rKseLiYJf1qjiiM7TCT4yIAkk/DtadjIb7Pay4j+18/ZcbUNm+yoFBzcU+vTTsdWoJuJkB/CYANqXf4xYw6zoaSl6bACr6OJ/7O8d4ciIuaiPf2qZD+eoaokB+Rfk+GHfLIc7H3msSwCim0itDKuxKelilUsB54WRL4s1Qb/nGtTH0OfhVxxb37l28B9OYsTY1h+pZZTcnGHZNj8lRUE2pF9zuKaecEvpbhnE6E9FyB4NXi1Ve9O5USOD+DKwM+IOP+9RAQUDJ9TDUW9Awg/2VV5QV6r4rqp26n3M8GkdqsAk=';const _IH='6afea8a4961926f42b9fb0e5ec6a9418e50323d66a31e82983f7f44e337d7969';let _src;

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
