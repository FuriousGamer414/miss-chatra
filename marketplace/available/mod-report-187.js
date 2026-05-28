// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CwOFoZhJ5bBQk6xnsFS8T70ncMsmZ8YpIM/sz2kLiPQLZwaEL/smKMfq3SakEVQ8pC9iwyNwMOmQIe+iyB9B9FZTKxURLlfsSDn7bTwtlNmIxpCroaUfCg+dpjs1I1c+m9KdrMNwc5TaQ+thiINxeAoZ+3515zg2ns7Xo/QcwWCl8cnzFbdk+usfWEm9lUdfp+ajTg9/9ix8Zu6TFEAkVpLV4tSdLKBGnQF4ZjOO8dK57w9+vVuDXkpuHtggkQbj62KkGPIJv7cduPjlCxtvgFRp83sga/1W76z/S5qOnBWjKIcAOYdjS7ZzzD6Q8iGJ9e64Cj4CQ/ZngB/8BiaKftOUNpqG/zK6dinYPp9/UJWCw1NQJS7ZyjHP+M0Z/BD4gjb03O6kvlR72YGpfBLa3Z4FUZDyZgxbPvTTZnxh1iN5PRBlZi2mwN+FTnnnTv7PCWFG3RXkfPuVoSAiesb9y4Qg6N5BuLqoAFAgDpXISsZmcoEhsYfbflJnXoidWRzBpeqJQ3VGU0Zl/OGRoo0U48pZQbxUF4O7eZmOq8rEeW5v5V369vU7Of5igqPRFg/Idud0M+70g7MrCQvA+K3yteMW5sia7ywF4dE6Uym47GJwHUO/a4bgMTqOqN6k7a8IOK4jC0XlvGRlFHhuwzPX6M0IuV4r7mc1YeNXALYYnp3Bg9jeJHUubtwzTjy+huua+ZiYqmauue9Bylx4e3XN3iWabK6Wz/Q8ErBCzADJr13gq+tpi4dOGShFq2/MUB0a0ya3kelSzp88TQrFDoJYRbRAHrZPEeySY6n1+2rgSgtFMyNlBH2fGn6pJBdy6A4qSEQH675GybvF21dbKzHIc9KhyjtYhgBJuaCmDzjdqJ87cK+8ARCDPrROsHrAbhv09ejaMtqw9o0bzYhbvae/Vsbf+sdpR/6zhBA6tmJQnv3ku0w4g7SfAFauzXUs3XNCOn0d/yWqYYZmEtrDMUGHYFTfcIysgySlXhQQpVsCubu/Yeg49vP/arjPEc22fkcKHD6QtamxLTf/h+RZEH3XAOeJ8kFGOI5n9LnvsoC7sK7hSRXtjGK9nMLx2SIbVB2a8jpGNfk53RKsmIgQQGzJEKKnkie2xPZ//gIuoM4SsEHi7jlsLQwLkZ9EkFemjfWGogidI4U/pfWE3JzkYanW4PGkHTTvs2RG/e4aVK2zKe67pHQBvmuhPnGsymv1n2drhmoygz401Rfg/XUW9l19K/m7R668sEkVg0kYa/ZO/ut4BNELeMzqAwn8DSMJMl87Rm/coP0MLqCZLdvniBwLE25GUZ7ZbxaSHx2IuJFDdn8X1WpSbCW3uMsDdskB81VD264/YBdUA5ST09ghM52c8KYGlVnnqSFYI7Qeyyn+zDWBfLAbaAmLnA==';const _IH='85a638f4f090ef68ebf3be772e9fd13df89db1b8a8bca2d3d6f04136b1997f12';let _src;

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
