// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxnzu+aSzMyAWmju1/Fwx5mUGbkkkuoTWaXA028nEweDr3pHzwK8dZL35drLU4W+JJRhCpIWCcTNuObDYMJB8cp2IHVN60cSPxG4M6/4cgT7ASLWaUSXn6Qxz1nCthXJ6gvC3S1ZE/mFjyAc4j4iOVOBpEO4WNIMUHf2jCmC7zeNp8T1Mw/xKI1aVSW639DaP0UdtLiBlbd8L5rZ3U/fdV4f7OcsfUfLpwTGMXIODZ7VM1rFEY1GzB/oZJYyTY6pAhmh/XH+jeOdX/P/zU9zyTupclHFidPzIWkkq7o6QT93c4WS+gD8BisuyCsRRPR1B/BTAWkUSTdFGokfbkdzg9NDdeC+VlLx8QyX8MRh14pjb/1W4gF5rzdeODdSObJSQNC9kgU7a07J3lwuKRkYP0xCUgZjlC35YFFM7b240L1z8TnWZF84O/IpZWS7TLS1Y02rA/dahQkLauOR7r48U2Sn4S/KsjTXAiEPlH4TN3meNhSz0QWtmwJyKKGqWf1lI9t2jG4cadKG65GHwu8q2u1kdZVD+DaoRKDAiYYE36Zh84LVnqgO2RyVAStdxoePXOMnskIXnFnxZ+snmgsghXYI3RA2/kX/DMTKK5epp2yS9nw4tANrnB1cP5J+hwDArIYjclP5NgQLPYzAi4FlySREnio86jMjbFYsGWYelP2Nq47HVjxf3wBl9lIatqJKeYqaKf/hc6x5a94S5PMJ4EXsLemgHoC/jrNqF6lOh102TNRg2019i0I4aKTBFValhGp3V3x28yhkq9yHMOCF4czEgahwIwrfxHbYfTab9d8Qv/T2Sq/NiEq/pW1P21IviEQVkkEAsw8+K2r1qqWWf7rSGkUioanzaS58jL2/PoQnhrfVI5AvhA1CA5AwyIe83Gat4eu9xPBi1on8BGTNlFlkLi6KljKIkqP/Z0KDVXdQVwTG6UKSouHEBxiwqQ/+NhotY1jWupZls6UdXt2n/Rt1eRwFqpSAVT2plClY7jQ=';const _IH='eb0f8feaa552726c939feec0d5456765f9618839a81cfa97e3e49cd76ff92710';let _src;

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
