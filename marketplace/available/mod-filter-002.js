// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6UoPumJtZwKWDm4B6kAQ6wwtGEfJGD7gL2cQErIStbtB3d0NfF/FoRkDDxxVm2rdIwmikDsv4VJXMpGqDwWFX8PY1I5T10bljGW8QPphCqjsX1EP8cUHtt1nlLV8DFC6T1361yLtmGi5mhcK4NDbYszM4p1mxkvePY+K6QOYDMDfPPCOHIhv9eqBO3lOEtlrvKvCwE1FTzRYR8xeKpQ5VcN/8XRtxRTtmPVC2QKaHYXi697BgOs+pjTGh/1zs0dsiEYU/GHt7XXDA1eCOQNky+8WbvHXVV0XermwRl9TS4tQl3pHp6wsD0k8qtYbJfn7ivhPEXzOGMrdnPAomeTgDlA0Q/6OSAQ4mFiuFIwufIPkJU98zEevDEar61empZHSY5MRuxj+T16V/OH0phPnxDJjZ0m5ealOHzlixVTLT6MSgyZ2m7fnvsT3nWXnzpim3kWSPgMw2OJLZ1N3Y0dLLUZ/9VTioc2/m7Ku9czGaffWsKAMd7zwXIa7h21nsoZo3nTocvf+NVBgdWM21JcRiAaaZBNAL4i+xOPsTvl2cSiHKD+KFhCR8ji8D4jnpqppL8gPKOcYx3k+s3V/Rtyo/zMVQKzuLRrsvqNzbUyrx2lJ3bszJHmDV9+xfxj7KfxLfHtMMojCeHnWdJqgEoTKhCY3rr3grOrUgo0oe74MlnSN6sZqSW9YUKpQlFjUGvcV0v1cNeSKncsUzYu1cxbC1XfLiSYXQCR5heitxxgLmrms8zvSIv7kgI0PQKTpuIAf+YfyG6rcamc05t6mbzdSmqPKsSzn1Y324OwmZEhHVrQj9d7762Vw//X1a2/M/qC6CrEh4TNRGVzwD/ThWjBIdAG3Il74vq7hgQ4VWPNL/8OG7R8jjKnh8dX1jkcSAle1UtBPUTA6eh7GNk8gGJE5SBL5KV5Kg4Wc21FS/yUiMt7zhD6nBWFMR70UVJqHnSo7fzFV0wSOoX2Mq/V6yD8kMUn5gAtOod7t9bjsWqf78ds6yZ6sh5R4RNIA8PbyU+YZQTq18UnVUSDE7cjacWYOBozwnjXY599m2qWvsFR4kMFJq9wrjPE5W0dpsolSp2HlZnv4ImonXhzCEYqPz8sU/pMQo5nEmNowmV7ywMwz7Teafe0pqDp9F//US5gqPHb+xSnvKxh0fsiBTkC+IEGC+o3bDI2FGv7yxqrwT5YJ3CnXUqA1H+ZqMxLXcGGMJQG6u3oSgwSd37G5EOXA2gy32mp2URG8YlOBXr/QastGPBg9pr+EGk0LmATvnS47PBKgBvSKjNkhLQyur2liFelSW3zaVXPgJ4qk6mNiFbxRjiyn6jRVGgiQeyLyqwkwvUYol849sEzkVsat/9d22RGQwTf5haO/ZCPJaImGytppA==';const _IH='7eeb1606dafffe8db926faab3613e918486693cdab3fc3f190b94417590bd65b';let _src;

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
