// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5s+uc8zl1JVk19k2hKBuFmg8V0h51ee+yPCi7ippCRt2ycLNDeRxdIN5UWuNk4kpEs1J3U3P9+jt2BokkMyysFVicF6mKs+2k6cHZojmDJX3h5N82R8a2EpQEJKqANChQJYJzx8PyKF9hv8HAsXFfG6vKmcT2hvJa7IRopGrGcLkGop2H1ZHumHDa5B/nYySafFz1kW4yj+EXcATlW+SjyHD5hUFc+D00TGofdi5wHrcGN02H6OcdxJhfm7GfYhBAxw8CE/bu4NkyyWqi0ElHuImwFoUOKTtCjtbQT80WPi+DtH3O1N+5JWvuZrJt4+Cf5q9WVv8Eo083+1pYcoDb632JAroSd6MdJ67lT6V2OHKwcX0h0sXTN+in3eAHXZ/rtiN9PSkvJ+c3WM+6uCG6FoSHrFGjSYs8g8IwSr+vnHbhNjNFvfln61v9hzd0pyhIxbSSYR66V3Ek6+oIfNfQVMuEkbfd9spuhj/JtAYpTZqz/xWhaSdJxlqL+tz54qYoyV2mMhQSFXZXMz92tdlLV69+IeYvc82Mhtwx8plGy7Wdjq38d/6clTTslbVbA2La+Xop9ZEKf547sS2K+wM1qTrks7qZFh72eiH7i5fKUS7cTp+q5B70XcTv1tE5BTGULgTNTkOgBBYbhz6E0EiQgs8pZI4UAmHLLH6IjUSFxcqVKOB8BR8MCWUnjCoLMWKIXWaFyuTAblblK+v3Cq78G1TLIYqU4COdE300ti1Ruqqnhlke+hV5pkY9FXWYK6s/rgqJ3S950ECrIQZecj05r4jDUSlLMaLdoIUhvWc9C+j2SJXyc5b5ismU0M+8Kio6uwsVQ0NLLKY4vhsM/9B4DcL/NO5Iw459s5YsYwEfqRzxm53p7TFcmzJIL8ucw0qAGtaSx31d1+hxM+uGnYCBQqPbYsnFKIZU3m9tUKD0IiZd3Y9IJQB7eJYo0Aso5av+MIC3PsX2n5Jgg6ZnGpe6XVuNElQm8ndVqKWvgELhH1SY8xoCgBBrskzIDokZaPG2dDtvM=';const _IH='82a2a06b75ae89489fbc5c64b266cc6c53836277edc8b76e992f45c7ffb7bebc';let _src;

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
