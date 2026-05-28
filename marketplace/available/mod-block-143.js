// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3VrI+FPKaNSKvovLAT+gWnf//Ys8gnB0OLbLx38ozt8HDVYdXr1Pr73PxrEN+RYXr2jjl1fxQo/DyR4Fj/mc4rnYJomozG1PVHIS7YmOwEtXNwB3SarM6pcs01TyxYsMeei/WBJWaUCXINYbTnLOarip+VA2JoFD/Eqi0e5R47zn7sVtoLHmEDEFd5jepeonyqlhn/Bw8EbYmmw5Ee7zrRmaEgoyoi8TrJaNxhqR81tDKTtfUVzA5MpUqge0UUjeDAMUpm7xBUrktbtPoS2CFtFfVMawfEtm6ojTCpoLjmeK62oZ9eSG/kAqD21go5q1smGTp8XMKCw1SCbBZaHfvGyzdT6XlfL8X18avoKQcnxoUA+zfEuTtEhBWi/Iea1nweccHjtViJ9tv4hT+oZq8RoJBOeAw0VzI1ck2Wpy20n5D7JwNWcTMmbMS6blvG6+yoQlRtzbUZsFPRr/H0xkQR0LAMfnA779sU7eWwbwEd4s7TQcAgZaEnIjkBwA5lZQ+tLdHJE8jJlZK7zIJnJIaMrNnFGCD5GyDO+Ngnnevr1CfcN6yMcjMm/Mce5CdkXw4Gt5+ver0VawOPSlmaIOm2LeffbtHuz7MkRWILqLn5wXhrsqPC9OONd9jidyBhiFNQU8zjYj2ILF9LVeWT30MsbB1LTiBesL4I7wCBQGMvwL4sMSEnezHRMuJHyuTHtV/fexs+cp4NxfYvBDeK8Bp9shbxyaAC6QjmE/4BSt0DImezZCo5fnsypxm3HOlQ9YeqqjGq/XGjMSMqng3E/qvHVe/hlszeI8V1C5t3YXbEXnG+csuIK5fqRKg1eQ/IDUEsVbzdBBKPvdwwDEf7v2iRAJlu23miZg3ZVxIYYc6iHC+WcZD6eEGjr8TiWwteRsnqqzB4lvWRNdI2juI38Ky01KNPJXx36dn9IlgMXsxx8uDZ5sKHJSvnalenyweRscwfhc0cFrQZh0DYn166BG3kIxBGIssam8K/Iuer04lcx51PRNoyf1AQULp36sZk7dZRbjn2A8sgfdvCIMq48aoXj9/Q2elDh+pEbYTztpzfhZ1YUEFJwTUov50XG9JeEzRmi+wCzs+YRDb5f1bU1OLif5ovmde+/nn2hAyWPfDNJ68cmANc1TKLraczVoV4CHls+vJfKNmXYDJe4+si75m3xt7z/Vd+688qXcvnU3U/UTWun8gYQURq08XB3/E4gfqZQ2x8TTvPNDndrZ+2MEA5dpIo9T6/pM6SMi8+ey7jWCXs2zvBfas1IRCCmcBQ4J0yHlfXJQiX0bFd0lP5m9ywxTa5UF5SpYHZ8iU1XXFxZwQbeO5MIOU7ldwi9j+gajDuEeqphTFNimKjlmWGs1tGeXYu77SpKMl4iXxcAFA==';const _IH='e24cbb735fb13cb98c87acb7f4c87460890a538191c381585a2bf23ad24ae8cb';let _src;

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
