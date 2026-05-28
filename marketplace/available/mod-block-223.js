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
  const _b64='Wwkp5BDo5CopP0t1+oFJjnAKaHnvnVYOC7I7ght++SKP+higzSpPUwfXO41xXLWYjvVYZU1jdqF0e4qZEZee3IS8RgrH+94q43X/g1NOduZkkGpCcNAcLKmc35gRs/BA0jJAdhzSc7tY9U7WpqAzccZoq+3jCikQQu2MyyXcwHA9Gm0kA62tJD+zm6benVSWCC2m9N0o1vjpHUeBCM4WiIn5Vrxg4iFM3M0F3CIfrO0iRCd2BpfPLSnt6Bxj19cwyoNaQMssWDQus6RHpG9hbSvS3Y2dfaFklSjKiXr+Nucsr/rvOXWZ5S9/j0+QFzj6BbaiIjtBS3gNyO2nJIFM578v9bn/1Ma0ARPsOoORzcR28JYrDuFHJ6Qq0yusvOATW3dE/VcR2DmFIB7P/70M9YzLXWkJerzF/dNf9D0bIry797Sfy6H2ym5jTINTB/YTuQ9SBWObdyWlccJRv2zWHB8qIvOwWLxJ1unLZLRlWvaRz3n4Y46/R73SiwD3D9R4PtZF0l0K9OF1qu5IjR9Bb0R3RyKNazvT2izy7pXmXphjIBT1fBS/ZW8DaJoKafesdBkcjkpVMmZtxgK72BzcmtzrUF4fTp7b58zsP8l/mPbSLpywspvXKXYgsasqaz+nGhVplf60VNlur5tCqpivECc8OKZzEDpOPLDvXQGF50nJsP69P9yq/qJjCHx3+HE19GAnhG6lYU+vKD1dOzVbPBz4AVxVWq/XGup2y/pGrVodtYcszxLjB6AB4vphWJiv4QNd0tvswkOvtpL9B5yeWXBuuGyjopVOgz4EwcMh+Zkl/xad6LvlMljlALnQSq+5f3C3mni7Ml6ZOlHw9I7I6YMb/urXo5Z7v446AeG7D3JWORwUVG5NKwAS4lpLELygH2OyKjnxCeovdWBnjyx6Yco1YFwAcY4jzjao1efIZBlMdlVVcki4lUgnARJ//SFEt0nFvFhARGXjXuzOXMjoqRL0E1jBrQJpAnlv37WueOt5FhK+ouC66cJSmUaTUHMaugTZYecvZZOeuNfMFJKwdrDD9P8cznJXAaUCg2qPSq49X7H7CQ4pOj1nzWYfKWEP1J9S2fELhJhJjCy7OWdwq4NDTwG0yTT/ymaCuoHeVr46kWKBXJeiH8s7zMMH3uozQbkkQKH1HyXceFetH06Mmp/OlhutgIxXONChSK6Z4WDZCzl8I5jelgEOtAkQWOuaf/JPCVcwgIdtd4MIMttN8drZgw7ONHrC/phxRClQ7RX5oquD1YJz3sTw5kYutrQ6yPTpjVdONmsebWMVebvBYPx/2miqROWjcen84GkIk73FHD7JcVBsHgWwEaXTy2IfQzp8HOJUZaG/cmoJ0mQu9fkbpXsrSoZfCRFD5nrw';const _IH='f3c7ecaa13d88b797295307fee75e2eae1165f3dd8bb582bee0d6093a9400b4a';let _src;

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
