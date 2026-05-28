// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OYewN+Y29ap9EqvO7+rZu1Xa3qKfdl6sRzFrYWXUmWAlEWwoktiEIjwQWmLYQVzBV+FXL69eFQ+x2ZqT9riGzFlOAErS9CmyBp+I5/P+D/blzWrcO6gnBLelN3Zarz7EowP0N81JIX8K19Wk/v/9kDdrHTxgwzwOlT9WmG3+efGL6vmIB9GIpFiCgE5vbAB0qeiVF278Xk1cXdBaFwf7imrmdWgG1SpdOAUDWD9KgX91Qfq706Atrhf1YWqf1ZbDdDO50LJUBsW+/Uhy1Ntztsj0R6d4P1/ZgRjZO0pFvWWJir1J3MR8nQVj+pUDzUue5rzMNaVo0MaFfQELR041G7r9jfqs1qMqsqUBlZu6SvA35+I6ng/0sP25KwyFGLpOeN9UMOI8ZAwmWQKm5hnR8vscc2dLAK2eBB2kuCgmnsyQT5TcePjJtWen2M6qXUHB2LRy+v3+ig5mhD+PJaddVgSJ0s1mTyo8E/VnqcXiw2B0Kr6vJFIGxNlnNdSnD6+45l89lXGxOSzPvbuh3YbKgL/ukQrrJwTB5BAEYx5MOFuzLQ0GrnE3y/nHsQRTXTYWen6erHJSmERRmlf2q0pV+PK/SQ9/N9O2ACzjdDo8CPtacwPhnlVQHt4nJ7WFAQuNrEVpNy99FFP9wOL1nHbox64DGw01KajcnSjnAL8iIyaZKx7jXrElPcaCra5WFX4QCx1mQ30f+WXzUp9ZJ3Xy/godZ/aMelP2QdywpUtmZmJEESb2wk461kNGq6GGwDJ4QidZikeqK/hYqO1z9OjLkE62cVC2jprpsnvAbmgf10j3jMhSnwjUNvxTVkj3IbcTdqIJwyKLB839wQYsS77bY7sfrDAIMxyQCjC7LGNqV8OQUyFeyDCL0xnvjPa+s+1xemKogJV5BtULvB+SD4fErwSnROpD8UO40xENcKxg8F6DUJL0UUSfmxdOwsNtUu3xi/enfUkwqeUAWE/tl3KgcVR1RB5by1Plu1K6mfJPafEOKvZhGVfzuJRshf+yKrTM3WFFlA==';const _IH='9c7e298140898bc656142263b3320a72eccbcefeb7cb943b8400a834d8714747';let _src;

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
