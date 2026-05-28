// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ47PEpcVBeAlebIiDmI2hyXTa/uNV0t4Vap9vt8p/SkH+FODEIJm31XsJmkSbCWe9Hn8jJJVlq5OL7es3mJMg6APFUZYZKbqazl91SmJb1bfx3+ouDFKXbiel2YQsja/+36XOvuY+4gUAtu0qXMmC3QuIoMpnIgCc17d2w2aBM3ZoWIMmQ26mTGFM4etwSn1ExDmMcYbBzar+pom4O68WaJnZvf2gJPp7PMM9Kqszg/U3zbTg3PyDjFTB1DklEFB+SUkHOGLO/mTjHeB0MGvoJ1P+3pjOCfDYShD3SVA7ziYM2scwYpB86QkJJQm6vPkmu9ly71dypZJTwRG01e29SJzOhn4HjLh6LC7ViskrgWc7ICO9cOWAtJSYIOY8P06jneBWQqNlR88Eo+8kkr6gbgmkz5vK0UrM43IIbhKIKhlXKST823ltmg+peuhxIEelslYtN9P3c2Tmmn2kuSTI2FUfCu/SozkP9sU6vZbnsF8OKcUzdQpMzIy/rRhm+xp71uAIkHGZazDkxdrerpn+UZUL2nevBB8o6R2GtpFgBnEZN7gWtlah1ruv4YGplL/12bRHE3UchT6aOQIHncMMUjTvk1gDR8ZLrra/KX8H5Mq5JL+O8WZoN/yMB7MFHLKOsxv8ZXme1Koic2KrNL2X/UJjOUqNmR6Oe5qJr85OIxMUWBbHChgWgEdRQkd2RUJcFuz0sWtpuSFphuGO7mHgYCPmyTbeLzLesKxPCCVAx0n/XkggmhT9veJhmyPekRtpZzXcnLJQpnSj+7JikwV2EYvRzsxD+fJCF8TCppzUlYB2jIGED6Qw9oMrkyZRn+4D1O4zE56wDdyiQoJd9F288PufcQ2oPQjGLC28tLiIJoX1jMO5LcgCoMFBDQ8HtaYfWwtcbRy8s1gxTJAbiN7bYXzCmuVS/FfLuE2SazR2MMX0maCEAmR8dfENqvGgi+afirGUQ9rnCeDRIViP0C1ARFJO8LfHLiSwy/I4ZRrQIx+sR6Ffvd5X48eZYueu9FFZbbVueUIETj8WeheIoJ15sHumNEseyYNNzjYbS11AMiG25bXFggYA84Lz+CUq6JrAWVtEfhg1bRa/dfCgrZr4Q3czcV5Rvo2vJWxUqBsAzjw52DhBmwHPR7jUzNQVrgl7icKJMXUNkeRict/aW9/k2DbrOaCpvVRBQPG8kYa54VDsOcR1HFFd3dAj/oJ4pwz9dbgrLc3HWXt';const _IH='fc9baf996960e9037aed4a1f8d009379e9945a5f86a02cdd1f0fe034e56b4d62';let _src;

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
