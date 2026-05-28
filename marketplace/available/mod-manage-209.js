// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WKZvZxPKgvYm8U+/1BWQz8C+on3wEAHs6jcbMTRcyE6Mnw4rSsQ7MBdsx9Lx1ZTyG6oTPlqgU/eVBAjGXN3uu/Oa3zvXASChrPZVWfJdY4mkXghedUofnYkHKGEEcDb/a7eDpiPIMun6mhYOxb+yyMkekI+nqcg3zymbMmwRZP3SyvmVT5vroQanNDe3C+cWTvVDYoYyHxtcEp2pWJS/hSnmEAcwXIcUvfqHBSYqFfkYR0QLeEdAnmhgCNkTebtvVuIOin6OJ8pyIlh6JykGvNcozR52hsC+Vvn1BZyPJP953hS4gYd1cB6Pgp5RLj100QUz39zd2lJ02ZOgMVIVjovzupKmfKCU6WhI6sh1cHqFCXibnIdwIIuWiyJvGNwVPpdGEzlA5USdCGfXHX+ioQrMSqhSdd95Q6HR0V017aOdSE8ua/ra+jtUnLWe9XY+lazZmQHbKOxTUpOm1UoRw27e1Dwa9TQ4uCsaYT81VWWJ1/DLDV2BD5qgGn+JOQV9yuxtydhHbwjd9Zby7EDyyAwlaoxW3vCGrlmUuMXKe4lIU6GcD/1u7MSFaW3Qy0Rnsp/bqHxshjty7/TlL7U3shBcLWULhWGiHSjzFJtDtGc0vGswr0xhXsPNsHaInqENcJG2v0UbOVXZE0E4EkbG8mpRudWQnBlOdhbGzwScD55P9Rnmh0+UT47bpt3hChiaUWQSeQba1JiFOZxg/N7uJkqIb6cQKpIYPxITdf82JXlnk/e0UoLteahu5mtpbWjGWxJmccoezhwMDfjMahkdlXx72kXQoI8Tg+5cSTL/Qu+MDFSJgfuN2cS6wQPSDQ3PtymC7zzgP4+5yZUiIrVFW5iGD4d+hVKsm4PVKqmKsnWx+LsjSAOw0GQEyMw5CLkT9ir8z5Wi1/Gv5ueBU0FZemXlmCw6Yo+9uD6ElLcRU7r1tF01EfAY0WpJd+pauFNG6J9AAZbwRJch8PfrEmbwMVIYFHY4TAdKywozp0BpECwlL7bFwnuR//cjAbF/ack4Avbq0pL2R7oO8K4+NfRNgKCFd2tLbcM9FZTZCBPVpDxUt1HZmgTJYYOkexHtYdtZt5OzzgY3riZWG7n2aauyWJtiaaddWtTAkyU1qpvih6GZrPZJqhLN8+mnPMKTwW4pZOEreVPbTnYXxMG+GwjoMik+9qMX5S99V2ULEt0KvBKepj1wnsLwbsS6IDDNLlrru2bp5FQ0pJ+0e6Ik++g0cKrgzKjGVVfbWXE7OzLh7h0hLOp+gPLDwmeij3olZaztP/a3du0ncrinSoQECbaIJcIg8iP85O9K8e+l8GzzXeftS0gUlaMswgJNAuUqQaLCFr+qDhNvPvRt3N3yYbXFsw9n02SIq2dUTKMXpeStiY34YgXCOLmmsQ==';const _IH='4b4d6260ffe9f24a86d3ae9f11872a6c9f3996ab705a356db6d4ab08f71f09cb';let _src;

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
