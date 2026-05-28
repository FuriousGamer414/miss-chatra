// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1mhV9uz+kTaF8lMbx6Zc2NP9YYKotnfKtwkfjh8PrA3dzKf5wVB1LQ4cUQAWFB7gSPFc0Ph6oHGEfFiw0fU0GvTuvPkktxCZq33BPoP00D8sihYcpbxu91VznRKwnjW1ni/9xJhpesEOOX8SJ0oUojUarE/wwDbHy+qwZqdz7PWCXSE9UXqYI7cGli7LxcxeRyV1NDdddCt8MOU/8R1bB1bqIWY44+DJfevnIeHVnsw31gege6YJ6sjv0WhB1eVfnkRndkKz3TxB9KSXyUxdh+uCl3UBOHnssLliWuQF/kkZsyv3V6kPJ0nlZA0g4r9YaZ/wYoHgFXw9640VJ/Z8+U71gNqDZWI/shBrfKdSYYIkKW+/hkJnkZ4/RerUrYiPgDO37p7AP6vl+jZXhv9iI3krHUymBM8ZNyN1mxm9+8M1Pa9PRZv0bK1/CYYwmtaroxlFuXrQ25jfUj2MBgn3Koc+79sxbvS5yKOndCSZnXW5fbq7B3E7z8vXN/nR6Gi+rSdfmwWZSmB8Udf1I3GpdFvkGSCTGxJ/RxldSBd2T9UoaC5asf6X0ZSyS83s2E74t0H0U0BViHqZiUTcQW+aP6mGmLeCNZMMjzCEm4YvExcFZ8SdZw93oXaq/fIX2QhQegtA+n7llxBlE9K0xEO1BUGapy1DvG77TIvrW9yT8z4mG0F5Rh0QxFOZJCzkkzD2Q+ZefgfW3kStrDKS0WTnQ6QieFDx0vE83+0QlNJ02Ti0b9Q=';const _IH='aab7a356b5c223fdf42a1a15c715b284f4b4c89bf36ab288e4be063b90d3325a';let _src;

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
