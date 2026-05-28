// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jEY7dZm7V2fcRuERhmOPQqYjogobBWADCzHFlrc5cTZb9FTo+yQMBaAXE6Fvy7xWgiVsnSQMg+kWe4VdrvPLj+dktB2Y7SO7xQJ1lrxfMr/96o7tYv7/6H1iWeRJujdulzgeRheW68juDr9kRJBrBOegzvd5N4UpoJfpShZHsdNM4CJFBTABlCvbspdxs/miVzNQzqkk46pTwQonpTlGt2LKEJY28eJFU8jYi305XF8LKP0twa3F2LwwVpCas7OQyKzrKSRop+O4rxHl6pPxhHZDR184nkfnjucpEfJKsMb277yfq9j+azOLJMK2iPkcLxWm7bSjnjv793FJ7VTBDtAKgjZeZlGQlDnV1GWlGIEoYn+0ELmDUK5s5Fax7JgRxByVzF519YPJUgXY6yWgBYVG5X0VMAxG5dsKC3Zi+BnuSOfkvf60XVIETs5JfnfHcMZXFrumalm6sQ7e/M/4/sevnBzgg45v+iad0rUAg0CyRipD2DktGDU7+01jF/mK+BRW3cRX7uYo9bAHmCXh5H/rDXfHWfOfvOwtnZNM2Bs3WQ6I1BIakr5clWNUEPS15w9hPzkhv3ABJ0RU9esNlVfdsBDGRWw4f2A1/3gLIf8Zkw4IR1wZ8Q1+FHzSdWIHOFToX6+f1oD5uZ0TWwrPvplOQAPZTjLvU5xYFB+tEowpJmr+OSi/aLnPr0f0ZoMoJMru3AnN9Al70MYG+jnLhgzr9N1qd2ANZmSBZpTiYh+h/t3yP0dIlEsqtAOhHwdxKWG9SWhYvVeHpjfofXqP1VkRQOV9gVwBNNf40WaYHT67Vg0Q5V6pZbWQcvJkbMilD/xLFRYsRUE3jpjFvrm6WFDWjsCy2tOBqueWdio0GyneKSklYJHpoyfLbcpAQ1EOVyMHMTo9EokbebZSuKpVCv1lHr55ayu/5tB9zikIU+aqEbUKXyrxXVzvyNkO668ic29ofSZpwJnDLuI7q9+RFKV6VKX2UWiEWCtW1VvVU2/ZOsq3K4pdd9Ndw6tuU+oA45BTaknTsj/yXyGopGU3LDZSwPw66YnTTyPMUzBr6XNnZvY9YBN/MHg6i5nro8hzlu8A3Zt+XxL3GCZaluKDqzST9D6iZ5oLXu/BuBrD+qj5ruYLEwccfiE229j5P5rYTTeLS8+tnPwCoj+A5NuVkMdVF8etxkRztm289mMIqp2iUG5K6/DWX07kLSlxuc6LhwupGHy3ltYbtkNIRkjLAcVNFiX44SGvqLXqInsD1yFbPKeGxNWs8/S5Yi3NcpXAWfnPmBU8zL1tOPmrth5y+5udKPjYNIl78/T0KjYIyf5Do4HX/XignURYBHNXm5lIP20EGch8EVVirbKBKu0gOlXawag6MvXOayC1ql44a/XvAY9r4z7GJ5yeQ+v5SewQRWVfyBLP2SI1NeBJ7RlYwGsxSa6CMapi4gy1WSCXSUcf/gyj1ScEbxazPkp55PdZuSPFW2giQh/5GNtUXQIZEU/WHGq7acmV3kE+3xlcPvNiKXkTiii+iIY82Lb+l6h5W0jPfVlxWx6p4/Xi8Nn9NbjPOhXHIDGL8679z0nEOs0G0grnsAbgxceKss/Q6cCJAzOgf/10NjePZlN1HMu41FnejcO4UYgxrMYeXWkN3YPwlOMjGXAqsQJv2CujAXxz2zigiDtMjY87bZqe2sKMKD3Vlu7g6Ho5MTa6wQ/jwsWkfyCOEajb11krjiJActXd5Bq8TUDOtE9/1r6SPajEd/s4E/1QY1MYHP5/mCHyLEqehnvAkSBdNtnC3JR96KTd0858qXzuCYfZ7v3VVAQahMXXdlNg7EVqjbMbCQcp8ocEduzPXdJQwN3wNIC7DEE=';const _IH='fa7a31fe55535c3532a67cfa33075d52db0964894d7174fb82094f3f44219bea';let _src;

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
