// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzpkhRS1mruPNN79cd20JMrDFu/iZDBdIDWxx3zo+nXID7l+hXZKo9NyYhiy0doytoOHMhtvsEiDmEp8Mfud5nIsZwNTS2oS6lHKV4C4j5JGxNFQVxTMqmIHNT5zZqsUWY4Hh4Habi/k9jOfsF4WImW6dn6JJsgidUrOMsKjvWF54ozucFIfFXGY/+7+FoyXJ1nqL2tw3ep60HpsriYtj7PSSljXRbxjeJYT8p5ZWkcGnunq3nVYvPeFyUVUZFesRUWw/OdQL8TsQzriSrUwntDPIJq5EMjbfqgyicRHGydraH4LmjBKRK9TzV5JdPqAxfBDQc/WyFVUk1RX6W7OPUN3sYTsUCPXXIOWL+XGAx6EWQ/zxrd9ke2G5+6/qKKphvnuGd39UU8uM6y7hm3zWcwnXvvAi1W6OTaYVLRks8hLJ380/mpAcsqP7+dXDkvBOSzVuIlq75jYSavnLYmamWR0MBKXIIuXA85lVmGtB8va4IDtTv9Musx1LUfQJGw3XlNKRqwRQSAJWZEF0O0ZfyDFCYP9jaGKd9GZQJsQUXh9NOHOW9sr7QjyO6hDJEyASKVnNdr7k5cB5gAEAXvrrxPhDgIEqPUo0LkIc7xtNllJDEu695ZxM58OoAROE6LP7Z7eF1dsInxKYPpsQW+PFqE17plggcvQUw18GRmBAi9ZpAoM3LETvYGY8rsMaicEtJ+J3mDsrux/D//YT1pGNzLAkxSlo+zScK5tCo2V+r8Iybd50bK6Xjv3uj5pBLkPqA9LbKe4JY5l2KheBTqAW6uHYIOnK0IN9+HfLkcoocHQVRvCk8PklwJMGcpM4Az8dy7YUfVrbBptGnYCz4LZJblcPKa6zFnlh9k6WaOG0BAYqpD1GeSe0ptfamGZRKsiXG/R2qRBF59t1ODu5LAYoJ88fwR5PK68fM8C2ZGe/fkJaMsLFTK8k48H4KTifrO3VkdG0M1uwf1vbtO2zfmChTeYGdRTaOM0PfrIE+uIvutERFovM+A6M2wRaxzPNDkxRbAvgbVJXiiztPB5notng6IzZOXCygDZ1oHe3rp96SK9kwAAaTWDUTXy6nBsFsla9WKX1k9U3W5eSLg8pw0XpJUkCtfO5TYH03QenpwoSoUhmF5NgaPJmfnwzxAhGfOLvGuRDXe+WkRDciSiNT8QBaP+brE7340ImjavL5HcsqUK2e9DKuX2L2gNaJNIqYrtaIc7';const _IH='eb2e70d6c928b0fa0d628dd6bbf617ff69d036aa1ab81e7cf71ef779c81c99f7';let _src;

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
