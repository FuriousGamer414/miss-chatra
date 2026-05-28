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
  const _b64='ySf0IgxSs+adhaIkOxJULjLk+EOPrTX/S6TKCXBIilHmQcF8hvsOLkFsHSajHajBiR29PG8b/rUM4Ri0WL6P7zhR2UDqV6zWjeDYCV/jMK6t8s5Aby+t3ijT+cycEkdcKXNgXrcnM+yqgC5ryducXDfhRbXuyDjo+8EbXZMcSSFQc6hM9TFYiYXDLiR+Ei79bgL9IS4zoEpuSamsUyuqakV9ORgzZGmtfcJJWdgW5nibPXO/lpUoDTzk4Elgez26rVONYv/fKC70CW8xZ3ZetxKDMn6C5IgQW4QP4wGQ+mnJORUp+D8zB6TTRYVD2hDYP1BcMwgZbYn4XbXassb33gWmq6BwmmeaKv43X8B723wdQsdDAo1HK+uyIAm84/ewZeIJKSmdtn50RXZscGhD/Pg1tD1IqPMQ2ZLDOFn+ivnXtRqyL2XORwBidQwlfLRIIzWKL06I+JrQSiUiFm2NebeiuW9g/TLHngkbQxcXBxnWB7hAgrFoXlscAPYOq84axFF9C14ZLu9aRSraqRNu7YmtdcMKJOFqE8AkyjBt/QcYXp7lrzeMPXTu+9pVHZhq4L0OySpaMs7qoC1frcZWC7aUJ2UMolE8RyFv6u3TEozVTdGDlJjLJZBFcSWPzOUzgq8VpCb6drPtZbN2C5WRyoRi5AKLi/GugxEvCgJwO1jNKcgzkOHzbZGMFwMGCSikBRo8QEyhv/LHwdCM7EZD+9CnBA0Mw58ZkfLqk746WBZecxyId2MOfI43ZJtr0nF6mL92WzRylCzboIWVjkQHpOoGHtDJcVBFIeQ55IxhT5DHofPTH8ouaAW6ntXoh5Yl0T2vSv5IFEtG35zZ23jr1W5rJJen+3tpynGjICPGarPWHk86g0/iNd9ilyFEoT9wTKcsyT/1hLB74eVZTlt5zKJc3/NNjmZ9VZvF3lMdK8ZVkHH2atEdQBtatQ7e0AwDz3JWC/guozgvjoIjxVkTDP9HaFaQOjn/7VvNOPorj8d8JzxSvf/aNjFBKn1of4sCbAYMVP0RE5hYEQrSAFfmRzKyzAgDY6BtU38dJUrIzxoAs3LPXSb/HTpO8zQgAyQ1KZ5INydWVDxv6UAto826iSPkP5Z9YpfUwFHAEGASs66FbqkOwtfv2R276/2A4XNGYXIWKZtecDoBcLksGnSBfYz/CYxnFxgqmawCsdLfW03Ps0w5v5R5UDkQFo90YlqWiox3RRvkN8dWkxZ33Ho4HaOonhaovKW6snP0D4Dcck1yU7d8yCLt6cmR/uZA6+CdIv8JG+gvcDeFGf9eOX8iYFCQAphWHhkjYhAaasAeXkmnhoB4BOXVY8coHAiO5f7OA9IIv/d/EKieo0DnUW+bm1FjMDeq9Tf7oR+tef+aDDwTRwx6lhQ4Wg==';const _IH='7a56db03ff33737ac3a8d19d6df129513ab482c19241791175f805831edb4d9d';let _src;

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
