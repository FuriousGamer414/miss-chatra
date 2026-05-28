// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+I09v3AVNReJiigNfI1QtOurrQE2ib83zHYJj2CJ5e7zWlwqB5n3/of7icBMkn34/b5rxNpa/tXuJi6HTBtSy/+Cf9cCzBQOMYtnaMZn1Kk7AScQfn8yo1wUdEM6+HO3JGCBbYnlZudTTE/aGbBUXfl6PLOznqdEmex7MqU2i4nRA1B4W768h4Cu6aUSsGuNJnJMuHghO5zAYzGFGWQXgUSwKybIm8L7RPVz+Sbnyf4VQt9FdXJId8LYLDn4hlhxlHoDX4nsVkOfpxnRcugjPs31Acxpte8GGwGW5k1RfO22kAjf5WB7uUx56vkkItN3xJR/Ray+iD5/e6GOlk8kzE4/aGDR4b3hiUb1DUUurCBKJ5U308rn1it2XGA0d93yinzgouwxHqhr8luXS702BECdA04H2k9AgtUbpFGpLlSh/ptpj/w4UuCLGbdqcnkfhotTkGWuZJx/AhdJoqYbq0iL3+R+mk+8Eo1BRTVycwEuRGneEWw6C86fhurrSYysFuzh99OaqWRijztOLqr1Aw8sdI7LbvRGllIgdY1s/aV0pFBCSTrHFis8YNNHA+OkuDTKDa7KR0pHr3GTgZyevhmNcBj0rs2wgt2ShCH7Tgi2kfkXXvAKYnX/O/b1qb1Fghxqugiyedu1Nm/Yww3bwk/XEBqYTw5haevSCUF0y3AlatQYpyceYCmo98ER3Xa3ev/1ADXYfo8wy3QS73hciW0lWuy';const _IH='9d2fe94ab03a79f46a28e1da00f4594b999575826fce1cecfda69beef2e3b900';let _src;

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
