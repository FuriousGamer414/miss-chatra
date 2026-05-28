// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQysoFA5uME7EFqd0oBamQ8NyZOdVhZSybXERaTZ8Tsu5wFcny9paAPRHPg+2Tgehdhk9TMvhcrCXfVUdQr8FYzoRRk//yeX40MPOHAEYaIDSVp9kKkMW2OEcmTezvzAvsl0iWld5H7LWBuRcrix+hKELEPzR3t4uqjRDGs5ORRmze369eiL1FN/FzYnQBxMxzyIl6STPn4/HJVQiWPWhwA/DpGCiIRV5V3QsRS+pW/6sKq7I4zenMuMfJ75CkJoDvMmzH7YY3s7RmepKhta6LeOEAKJ2YYSxGcHMrINplofCEms6LXY6IDSZ7bzgIxILttTJ83UftFSm33CMmMrvIBaWmVQAacXmT7rWCWvQy96zHyh+fGipMMuZfNGSt7YytyBUG7K/BUbtIWMjiPy26j9CbD+hRTF7GkMwF6kUAN462ms7rzAi3lVHaTFyyno5J+G2JfwjBVDOhWJZZrL2LAl6oUu9Lx7qNxn6dxrGZ6QWaXcBis+ntCRfEgrv+USvMie6ueVLQ+XUGmyUZzdm467O5xDFHeXubTi4KLeDMZDAwvyg5w8YHlZUHQRGvYHFYi2GQaT/PrYSjY06bG8QBNtgWnmVAwsmne2WyOXmkoPfL8h4I5mKTpzSw9UYrilys33KpHkN73i3cdFjWgWv9tCmFYng1wT55aS73O6PNnkRGw70hi1Mu5LjwyJyJrX0C3f8KoV8uxqcEYecWx1AMgWSdpIpiji/kInSMScjV0yCpKQGs3Y+9A8w3wH8Dw0mA9yZtks7V80sBjZqkGeZPVIm/lpgQqVH6gTwcIrhqhrMrFaeuytd2LzAJrjmGnkslvQ5kIL+viTG1jIlITV2+jTFlN83PWEldhMaZxc3kAxK7UGnqCPAt2aEAYRUchXH4wB2bwyL0nL5M8kPKA7IhzKe+tYyQDag73TaanHmQ8auMM7fYrPF4mXiTCWQY/viZbLPQxJUM6jt1PPR7vbeQoFHHvww03C3y/JP23bEhPaG/9ij2A+8tDudT6KciPxD0CWnS4mQRrc7D2oBFf010IDhb5e5juAmnqr1m5GAFGEBVlha/PDPG6PBz0dLfDhTL5WSpRHXGUin9t/NbgayWP3g4v6Gd76Lggwwk2fiQGFw8X2FCAwYjxzl6GyUWw8iHNFw4/CQnbJ27l5wuETKL1thgGrTX/iYmLu8sA+56jfaYIfWgKOh/zr1a/HEvQbwXnPVyaQKs9yEkfBudjDVal2PvnE/r/1SpB+DsMZ0SvJ+9EZhNCd1Jj6Pu5aN1UTkgjwpVg4Ba6eeoVzEZ76ZhVhlrXF2wZCVEsp6es7d8uX8x6avpj0TdGKAKlCI/aHTOYDLHvnCsoDLzCoQmt5HgmokFdJZjowgOFjmqTaXnw==';const _IH='c5c0db234f7705a2962720fb743b39d513832e2014331278572c18b918573f40';let _src;

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
