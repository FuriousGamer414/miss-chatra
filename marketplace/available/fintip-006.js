// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx7+pIlLVH8AjfvW7WGNIyMt8UUcJHA6t/CVPiYHCMOhSLIDCkf4n4vSSM/V1MmC33AZfNYZQcckds93k4tbZCbZh1Jwj87QKMIoCjn/CT6Wdp5tvp2KaKzg2t+Wq2nkNlO59ZGPQitiUuam+LnGPtQsrDBXwK5oHLUV1ObpDaEi2It5VmRWDXyyEd6xKvFYzlFd/VLDpqF943MYtE353ioFd0Xdu4An8x6AbDR9U1w9Qs1E0UYxwyTwQD0y0nT5q3+QNNuoXpg5fgCv0YTqyqPGbjaCPx0gFZlNhiBjrJhVLAIAovd9gvZvNAn2+LaK1PEpOMbu2MAIxYIOcuYHYyCY1HQZ7abcH9YDp1NVuenTyQcA9yp+eaStQruddz3Xb+ftBXcC0Sk0jLcJOWaMHhRIG62edfNsGn4AfZcFlU6aM4ni7yUi/TXUvOdpzv9pCZCfEw33EV+r8Lsqs7oQuB0lHsOe6LPU5c2CWGUSQJJPTujZKQCmXQ8hmbgEq3SQl9atK6mAIIOgtNGtu8wUF2rlHQQVqUrl2SXJRblGlZbRowa0AdMPgLazxkZhKZt3x6wXcsNq/3IF558IQ7pSEMfrIuWSB7PXkBDjHD7G0UeF3bHEhHJInCuyJ3pFw2bBwTkYQxjEcRsunwOQ5yI3fiM0iabDP0JURAwFfWwnQz+5jsSA3RkZOapjBOs0EvJcyo/rUKEpJ+uVzAEeFsFSQDnobxFiDZrFz7VWrzl6vMKMTmPrlM1J4g032UDwRcrS+eX0j9QUP6L0blP9cXTQXVCUmBHqW1/fwFbq+etJaSJtmPsx149cs+4wzgf4BsbPTkiY/0c+4SZdjgyDldwYDGjZVx9ZKvobRtkkPlPb4KW66bt+zN/jAc2QNfua+XQ55Xg+DMW8V9hokNagh64V0wV1MFc1Qxn4z/FHYbPTA/KDGvX0UF2E407DiRTAe2Skq9QyoPoUw5d/4dty5opuCSo1kCEga8Fl5h+TetvoqDB9/SFqdStTT4GNdQO+gZqyqKEtNW+awaFkH72UKvs8RaQffJ3i6B0YLK/ICbUhww==';const _IH='860cd48875e59a8ea1bec8887f8ccd88f4d1d51e67a003489784b8e71d58b941';let _src;

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
