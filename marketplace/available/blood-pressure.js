// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyAonT1LnHgmNgvSkD0bc4RKMUMrnlbRsSf7dK14LAHMjN4djrAj81Xc5xyjaFVYVu9w50VUuN7RK3vGxFlfzeKXmL9qzPnR7FY36T1nf8ivVbM8AokDle5+ESBcjY/vWhYr3D9KW0Ygj4fRiPPyv+BSUVguwvhUXY81wDjXD8l5mOIqepOF0XXVTxk7ZT5bF0J6DE/ekMD6HACUjdmilUZ/ikcaxTlDeTBDF4ls4zx3tVunVCTfoj84dc/Vasb/8+auXcRk8eijq8rRKOC2zaZ4VPGY9eFj/5rDaMeyqwo8a6aMDlhHtfjIta1KxBuGD/GhY4Q78pA1xzBmPILdATe6TLSs44xGcaT3w1b/uRJyellYug/1tRQTEHFXONygyHtvxmgIt+HUVRguumK3BSPDfjMiNTq8lnCsunnn28f9t3q7pbYoU87To38Pv0Fq+y4m9gMYkpVtZQB2OVV6ous0yX4Pc9GqdxEVLVSQBgvSaFM4JDrhDCUDvgfhQPINdT7kszycm1yPJ+6ingfkc5IrAm9ylIg5SjdeqWktFM1blUT02UwIvwntnUsJ1l+rD4U6yA7hk8bcG7tAV/3sm9ogcqaOZiPjX+jPY/mlHzojXwYqJAYJ6GHv0I4sv7VsMjbXH2qlVXvLyTlU4aasUq+2Uk5sLR5/64mvm2Lp4Yf9mbAwPEhVRTeTVgW1Xu3tArtf/4eCADAFCJvSCvJrwX3aIJG4iRhsmrfGGV1+XjEX8NFJ3P4p2wPOJXjxyP7CJBH4aK1CBizLkCG8p+fDDfBQMB+WsM8cqhSdNIYyMoHTD/sIrRBkQ+0l2Nc0yJSTuJALkBsHYC5TdRREzLV63QdlEe+vjjFyRqGfPU9K5uJxFjOzL8hdvQx8AcW9rny5/UyPxSxakxjz9U3Q7vGTqqIuxBgoMTnlkzntkODVUvSY5sITSKY7eKLbHzL6V8gN7wMGpSiFvO5cTQroEBYtN46znEOCvavYyksz3ctDYyK4RQAdETPFpt4J/R2VZR5AP4Es9NnhqG+zO5+xBq8+pHBbIKCIbhC7qNw6g0rgzNvRUsMsQ0hkIXq/SK/hRSnKFfaAuqISaTclxO7+5SD2xNIByTfZ7gK5dIDlGl1swXTgKwHFBbiSxsDVholTC/sFoEeA5FD/w1qvGZSnpOooM8A7Um3olJP2L3v6HAd5ioyUqRonO8tc+zzypNFBdG/XK68ILgwYIzpJpynKj8gFjYhWRmsgTDi7LwQgWkYiSsul3l2uCnHBCS9Fj8XeghYdl0q0tp41ypv8GU/QyFfGVuXs26NHaVSWLBpK5KZwvnrHJTPgi4EMsMgiDfCSl3RfLMAkLXwlEqDcw6Bbb2H/fRtkwsKz/YfHcqYRpjFiMiXuUGT+UWU1iClQu6Nhy9xE/k9quA5I0AiNn2UyezRNhMxapnExUivGgqmrYj3eM0Fm7ByPfQmDnLqGHFbq4+K6AFnX+F/JN46gEvtO3vkQwnyeJJgnnYbgcRtMVdXdAq+E3LPh3wj6EqhAyZ4+8mzSSvdv/1VH8qfobx2SgdK+xJTPNJLm0J72PygpDCj/r2g7Jt/nD9XHQt0fRQ4Z+jk=';const _IH='c6c8d792817e8cbcb2f219571b7e5f73b730038142a7c62cf32447ae266b5c24';let _src;

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
