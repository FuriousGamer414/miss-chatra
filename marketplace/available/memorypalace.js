// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CrfDQgUwTtqUpnPtGyLa7argZ2kOy0WW3YNOHJsvlPBqaW8FQ/7eVi2UZFur99xMqdNfY1RxsnTClqfs+5NLsBvzFvb7aOn5vgOgbDEzDOzD/H6Zou6e2vZBAQ2CTbjRgRwpayyNgXH/nJTUEKFpG1JjdbA7T/sdd/yul4yrCHiOiaRxXYnYdCR+8NGDsTntAkGnSiKf1hFbtPo8jLbQ3L5TEOniP7kiqyzOeC4xKL9lluQpq8a0WqauYU1rKEhz5cYr2/etcdTKT0E+ExwDuRKNjEPbnyZp2j6dPHVnRbVi5fBv67VcnHyv0V59sMKlC4yrL5QtAIkEP6W1nF9H98wYi4c3qGUkzdQlG9b4BPGXVoG06Gtxor/QRpzRkkUFK+asVUYIqm+sBtLV3rdYoPppJyC4eRciW/+vBikTt+RyYCu5DXvVqeol+aRUBJIpBCLO1UJgR9C5Ki8aVsmvl4SlViD8NhkUt+J0ni7TETNcvFBkggAXqhPD1tNaKdiCHjNLodwsd08zq8/MVaaIrAxlmWswNFY9ZOUSTSn2nQRxzqjNYrYKlWCc4MRvtdgchCnFlK8I5vgs5BTduyHzmthfrk2G9NNwloft1a/oK/moRnmO5Bk/h9C1MfEJoQ86JZ0kUOEGroT/sbq1CMhjKpG3nEJPussBmSJ1WDJCkd5A8G7zqOS57a5wStnPvZ5Kr/OLhCBLSbO8V6eyaGQ1FFaJIixB8IMoo2J4mBrCGzcehrTy55NhHGtqkRgWaQ+jGCTAbOjkM9X8P2cuyb9ws/LR0zMHN7G/Sh2Kazb2gh4+1dA1nZiech98wZu5wfwK3QI3v3uN0R6yFaJKNUBiKODqANGejy3ZE+MIsAqzv17/EHYQpOWQhBnhEa4UaA4p81ytn7AJQV95sT/36sFN3k396d/2R09GTY9RsEF1plQ4bzDH4hYN4tEmvUCO6u5FziUPJ+j7J4hACZS7L7SnY3wt0ce6xDAVXvAZPyrn23Gw0CaV8LE8fXNof7biTsYbQgy7Qji9CNb4dnSMF9Be9wloG7prHITKm7JczVLwDAZxnwea8bIiz9Nr8RZl+PGJVC5FwFgx1g0nSbiI5c0VFmKscJtsevn/b/HSVAVs81M2hdHgy+LoMLOoqN+hTKQWUlnabnGqUPlzeHyvRqvQO3+fm5AVln0zS8VZ7dLBNiVYZWl5wAOWTxLZsUeNbdOq7ZlJUSr8RD7V';const _IH='8f7f22e9862a6228056215dcbb9bfe24e4987649a6d7b70290b86e2242a4dd86';let _src;

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
