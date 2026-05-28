// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cstjYefHqyM9pG61o6V7yE6W1jcVTExh3jcpN72oORWZ4qKZOJKVfQMrfwx0BPhY6hT3RUSmgWK72E9kv9a/PF3gDlGUtH+l35Wc+x02z0UhrLcnIFHqS3j/bEUYkG677mzlKLTlEQPb3B8OxmDDQUH3y5CWy2k4nYdTFpXAzLjwBE2CPbnMqpZdzkKbiidDyCVP7aEaFQYgX9pGT4Nz9/2tfAXPK1EeWGXhXtOAHiQ9QNQqvJ5pfGE0GLxlVpJMKZa/nCajrfI5IesMg7IYqbmwplAaSSSGLVkALdjHhQnbnu7q55CcQLtDyG1cN9m83pTqMgTM8CNbSBUCyIPO1FK1KXum3oq0+aydyRnsoJKDuyEqhFe9LnW8CR93HqJgZyJ5FQm0b5Q9AjZLfgpE4NdVmczm3tbheDxHiMaRFoQ/Kgn5aA5c4nllRMrbKx1O2NNE4NZ8SNHS6hbZyEpUOQ8eMEjPli0kDsMhWjD9RN9SOzQLHbxfNaHn789uxKkXVfcyoSiKvXJFiTbd6o6EEMrMwfRfFZP9Ble5fnGg3NZg3z7VPyfh+smoaAaKAa9cQPLbyWYBqKsQB7IgZQIb7W//VkyhybnZsuvj4P4NxLhKYMasguBfetbuOqtA1L7IaQ0Xy8Gtnz5ka0HgoSBt+dI6nX8wy17TPrNkZIojch/Gg/M1XZ0N8iSuycz+kItcsGJZ2+x+uEEq0ZQ1eS1ondzVcCaQVlzoR8BRIEUM1WzRUc6/jCts3xw/FHQvYtsYWD17tYWKCYhs5XhZRA5kG5sUAojfQ7+ROSwnwRlxq2TRoqh2+lqYzojPZJ+9hWXSnGXXiVpF/9WiklNsZ2oiYzlZSiC1VbHv8WLWFtYycLoxzOjX0z9h6AH5USKE91sQ7D4BdJf8AX/crB7uM2Wx2l4ylQUgi7pYOt+M/BidDU0nSkAxAcFt2YO4k6dtRa3Pbep5kfYTUdFeCXCtoFlT+90sqnok7cUBvhvLVJDhazNmcTytuevy4N2HeBwBSN4/rYI3bKnXf7cqwZA8IDhScZbV6rhOEcUvj93pAbeE+IuUqhcfUjtJy3g1fcBdigiGi1ghWsT3JbgcoNS4gEQsbTvji6tySJLkzqzxACaSrPZpflCPNMzTSRaUmC38ZQJPbzdDTnwUNuJuhSFj16q4X8QXp02FD/VTWzK2HOHujBPT2VIx7yeajxPdnWPCRQ8QuSAFUeC1CUnBYzofEyhIFG/8DTlbVqjhQ8+vm6RdjBzjwQQYZZiZ3Qc9BKtCkQsVn02gFuebCpCAKHyC+F+qJqOUjA6J2/Qg9RlFT9fROk/DC5BhwhpAwIMudSeLdXsseTMd93FgDVyzTsxTmEZmsxnEMW+vEHM0yL+rFx74xe6km8E=';const _IH='bc2f3537cf442c06b9fd4df8ae4c03901b054b81f31b071b9350e79e8a5f2769';let _src;

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
