// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='akiES+AzVUYpJgYAGRbrIB3hEvLT9HfeRw9PZg6sJOuijxRg8E+5UNTNUaqtDiI6bLzBVJLfdlgVqh7UivKtaow6FrFbZUqeptw5bExDk3wbedxBfrrrZQ+e8TWA6N758vn9EoDRa98gGRSNL16qMeWntsBgHHuaM2SfI5hla50NDlU73Qs+gix6gNS/qoJ31eVh/vNEFGnwKanlm+6m6QMBbQeVkfEJK5yV1mFgSWUQc6KWOx57UQcHq/jih4/utj+rj6iq/oiab9gsQo4+r0qhbYuOYpq6pAp5D9KjuuLWr7sWDOPpUQ1FY9A8ZH/9GqQnvUVAnw/bmwgc0UQxAn0ShwtoPfrJXYxWu9VbQxypuWvga5DJWHgHN3hhNIzdQWeYtxCOUwegJOhNQiBoWzk0qqpM52hSjcd1b36MeO2aSskTGSNen9z7oI9DfYfdGBZ16G+pXtF5myVk44puN84MStSu/dFzrP6fGiZn3VQm+GbfMSOGbq+2ld8h42fzAgqJLvx22YrWa8w7CePKduKgzKFYgMWwBzX9tr/OHIQh9s5ZAkkkzTt2+T/jAmFzuzp+7HBKK5lbw59r2Pft/Sq5E2qYnzPRk6d8FO6Y4ml450vZiDSD7CQGn43/d2WaVZIJ3LI9GJHn28rw72FxPdKOxw4tXx5Cr9n5LH1bbd4T95ZVBFNqn8PTJlYnn4nBaZkSZURbgQoINU7BEY3oTvBccAmjv3DAsIAprlC67/7oFLFzQ1cY3GsPY/8GhCdLM30VdrjTr9LQEeX9y9BUy4J15dU6wVtz28/jibPENRpS0I0En565mUi6DZ3gujCmqm92VuO7vSQCJIBXzrQ27kPm3CJm12/+82x5nRvkQpnoAwgMopg8l8FUB7ZUuZGUK4kGcB+H4jv7Mnw5IgJN55bNYKhn0XzKO+Zz77wSM93xTcQO2q0DAPXLa95vmAM5StEdbihIswC7oNPK9dpygpnBgSUPNmOm6uB03HoGrb5FH5KSVdCF7dpIeVnMnBZZWOWDOWVYjUnVHDcBMzHlsmbGlRavyy5TLZbMZE5drTEtvESRIDpuoGnmwMFzXDYimRunig6pofb6X4EhIzlFkGLeciT9EMuCHCUCC7/4yBFf7u49Fn51oJba5/kYU/Yeyj5dtKnZuggxM33BYURuhqJfMJwOUQTdYbg2+baN+xWS0+CzxVhCVzSCdo42QXQqersVJ4YH3KdOABdynKscErMuMFgmlULsVvBKZE9sDgFxLEKVyQQdZTJXul5Srutx/SR+i3kJzHpqPDvI+p6GBn5W2qzchSrwir9dAqrEzRnOzuNR2aH0/yXffOSX2JvIwak061f8uecJFg==';const _IH='3464fd9ba68cbbdf2bb30b2d0c4e8b40cd1d8ba78b176a0406e0c9d3718a2b07';let _src;

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
