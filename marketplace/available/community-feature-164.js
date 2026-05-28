// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5DyIKa+ZqT/ZgFjf0LI6SiV3mt7BcpPbgwnKWnRNHzNz9XksR9ZaaLbeaATJ+UF2W6GZgwfCSgELVfvUwJV5RRc4yj/PhLFryEBGgF1qxu/NnmaCUpE7HNAYWL2DxXTnfcgQrrspRM7I7+tcRF7QT/wuTIpw5dS52W/grfunlhTV3EEJMfzdRDPHdMqTjHWUSHkGBe0NNde8y51U5Ugj2UNQueLB+vXOuok8MA2UT71wvilO2uGH+c5WBpXqrL01aEZbM2HQsGX+dFlzlaPKlv6J4gJAWkMaBTda4scmZSoQozt3F2lv1gH7zMXKgLOsnS4mWsVxx9DKMq+mwgv0z+Xu6U4NqjAVew6iRi7P8iwmw/m6l9+pYuessnXzzpS1pxXBESmyW8K6MS05roTnSGcthx6Khn7O7sHNqz/POhJZEGd8MtSMTP5VPxkAcdwiNMcwDhfwHOo//I1mzUKfmwYPAB9EqX1wTdJJiMUUJzpJB9UolVHrhrAnMLxIJzunQEX/DbbJnUeWVZjv0IJgVXI5E5jIDEZDmLySzQEiME7hIs/+2dO/1SzpNTOyX/wqZNyBxyWd9hTd7dlfIZ+/CUYZsqlap5XjCRUbYt94wsWNs4vP6676kWXDWNd4PM02OSVdaFxL4noVNMm2iogghTSCeKrvBoeHZLxKY5WQBgjlwL/jcntyY/o5za6zTHP446PkGEdfV6BsBegusbahKdFeJ8nUiQFRLfpEjl7sa/GTW5JIlug';const _IH='19f5082744c5cee685014fab44d702a9a5228b0689a215d057c7979980672e8c';let _src;

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
