// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zQcUohLdG84gxZELASiK5FolBQ90TJZG9s3QpYGHq6/yBus8cH+1SWo118qdRDgo64w8oC/Od/JgNz5NU7T4lNuU/9nqgifgtjKn6epKVIDHeetSl9OZR8skVSJw5lmouHBBAyWwKj8Y2ZSfFCd6NhaPFtiHqajNVr+jA0I2TgeUU6ZTqylMyuM8fXasbM2JDaKZlY7Z79FDAZcfEwwzOwzacKKFQ9xnYZQSDyY3OI6oVVUu29AXHG66SboIcuH+67hnggLvbpAnKlNWzJKUcKqSqQ2Wsz6PtbK8dZy7MI/2OfcfTyCnO85dfxn6UXHe1Ff7BIAm4ocvLT/87XQqz6NqQSJmXgb0NpIIDKX7EYafL40TDSuOc/KSsC5j2sJh1WnrdF+WUQZ4wOZ/0W2q2vmsMpJMtCSMuRumv5lvi5MX0v3K8wKOgt8ObLucgbTcXMx4cU30Dtnv6QJfmwbpsNRUZ6qF7LvyaVpscSGgxfVVe0NiehoduYteviWpX8SiBu6mS4vINsQb9/Gf8PuTf5LigUU0HiNFsfpcWu6lTTtJDzqvD4E/juIoc1V7LrmT0e2Wt5mxkpBJZTixK1Uy2DYEBbnY51r9N5Mv1omYQ32mB5I9IBNp6I4OdDpAV8RgDjWywfdVV+ept57tOZN96nJYNb5mwrHiaplIyC9DvHDzMuv4XEZOpo/uEr8dmy26kwTvuQeQeGoAHqT+UTFDwbazQbM/fiodRYRb4miaq2qsli5JJbAHuO8MKnKTq2J7C8e/bYUuKYPLeiRAq6rZUT0ZTr8gALqE1JkjfGxtFoqrFGvWWxKO6WEnEvdsLjJBVrlMFVAvuvymy2DfWA9ceiZLNUqM4mEdzGzAebRDge7Qzr1e8g14ReTmTtKzPQa7Ao0aEvgzCgpQsIhwM/WcDIxC95JJ+y/a+HYm8MeZK1rCZtbXqZZVAkXP65dCUjFuJDu0VoSKPHEmRwsa8zoR4yzublH4iSQAOnHBvb2Vjf3RdH87x7KAJzMKiSEgt7Nebr6QV11aDZv4X4lqBS7R2oOpAKLKRZ2gDaHd8rQ4IWv86jtWe8t1UuSertKGfHAAJwGDw2L3vC1ncVvcTu7eVJVnP2I011zInxT98E3UUaK2wSylKaabPQInd3GmP6L9ERFnR66By1Ss2nqVg2wA2NA4yhGZqGo2R6SbpfsNtCFzOlBYPZ2nLNVKNUSXlsN9ZSXzxsdkXH+wyIm2VFCD67BTW5hbixj+I55zzHOnd23C7pGg81nK5q7xdo06+zDlzfLGdHNHioUId/1JjcEM6qizCLM1KU9YyWF8bkvFM+e5i+Hh99eF8ksRrkklRaP1kUsosHkl3OPg6gRCqg9CgN+sF61lOGkEMziE8XBI';const _IH='e1dc7ebac45cf878acd2cf504241785661c618d0e39923ccb0b2488d17b1349d';let _src;

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
