// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8IGBkugLpvn76Gko9Sa+vPztMF8f4STYVyHlvCHmun6AhHqYFC0VvHrDR2zj52OaqJg6Dp6qVU2BGQLLd+shhOv6Oxiv9ZMq+xjk4IQ2rzy5PIPhQ5Klb/TV60nGfutX2Jq00MOlvyfmQLTtm6NzJiDHv9bXIce9Thtv54lvWVyfDV6TcM2Xor6uk9PE6e29EhGtyIqFJ+D8vPwSGkuCWDVehQX9tV+RUxflN2zVNdKv7oIt8cR0VJisuuHQvh496RgJHRXyTh1hJeWRCWH54qfvbEVyYPTAqGuYJI4AsNvqwF0edMh21iFsCxkR+7tegZoPdN4+lppQi3z+VYNyfuoHNZ7znIJGEz2EtJU6/i9EJGcpNgr0btywSQf+VMSV80Gzrkd5gn68Jcbd524TtYaSVFnWibu5DMVDWkmnJkhLvowaf1XV/QbZlI8KyfRjRGcXETNENk+ytcDRlEyLrgfHeWs3GwnxfukxCyrirmLq4BA4OSt3/XQVBEgjBVWQgMvqifxV8nKnQZRUwYQHSq3VfTGSjO0YLUvtdpoM5TYMIRG4ggp7/VhqfLkXUCcbqlY7+nbz0MtfJ2kHBu9P8+aWu8c7fTJq0R5Mzn5hm+cNp2HF8FCnq7VbUvZT7EMC0n9NvRWhAWKg/yzGVoyetkhUiSONboSvcNhKsNV15/LbhzYSpYzybmAJPbGUWMcRSeIr3jFUoDf4khzsI6+Q8g2r8W/N6kGIC6GFCUcbpO6zOT5reIXt3QkHB4dqqrzh0Eigh5p/LXVt6pR+mxBhhZRY4XCWIBDB3BLzfthVXxTjggqQk5wv9TKA57VaMOg4515FmM8R6wUqcr/m+eiUXoABaTGGAzwns1DZE/qTrlbanbRZMEB4d1DEjP1JExGsN3W+x4BLyfonaJVo3O6OAtH2DGmMRRkPLUHM6MQHNiGmxHA+5EZA/tRO32H4DHCSyhks9VVJG6Sy83Mq05W6oxKhMuXkAPTdgtH7/K8i6Qr7Z3UFtr+3WnyFMFWgn34rls=';const _IH='6412e598271e511dca341df264e037d7118e08a8c667d8534951d9131774e14f';let _src;

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
