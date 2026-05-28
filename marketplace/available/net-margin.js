// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6o4Bx1VlkwsDGAATwtUecX2gOAPfo/EQG8TxNZiNFkk4S9hau6d3XfIRTlxlUDe5UBd7F1BJIRSaBNtGHoxGSlB9pXrQokDm1lKZkZCJY9S9Ij/EzwLrwv+EkVlsKC2iTLWj/5v/bKDA8rql7TaQce9OE9J8QwnAnaNTflw12OLzQS3ptXivYCF53qrz646jWz169l8GjqtG7OVNpPY73/9kb3JNJ/RrQ4kw4LsPVhfZVFkt8h+IEEh89oRTTqnkwYdM8Vp1URmeUBnqyIbe8q8MoBpKLjc6DqHhSX1JujvQHurz/OjIh/jETpkQM6k6GgeQVt17OJlKQZhUHGiRJCyKXURB+ay5R3U7jQ3qFQU5khjqS5oWnf3lpKdmkSLrl2LWFt+JocheuWZOJ685BVxikBrY3TjaU8LhiPm68MhS1Bzg9fY5VJtkvd7Wz/exU2jkukRRvhr+IhmDNyBmp1pPz5Il+4FKrl4ORfQ+x3OUVg8p/5+6o84H6jG+tbe7ZTxyBPn5XPLb61CjGP0ol/n2bZc8ERD7N1A2qEUPK1d6l+plgSu/0RFsF/21emGXQdB3VZgt0ek5A2I5pxQkd9BlSzhUa5BQEwPgMHU7UWXNQGW1zBgsDsSZ6oBH/LlQ4Dm9QzsL9g17c5olV01v8d07cucbwiLWR9yDqSQhijIpmlK9DS8O0scJJdjRAEmsOaB2nm0OCEskmq9Ce1sH2hzX5zyMPiCLQfemFA2x7iOymM0wToCmFXLhpqKXN+Fpa84ddSUfQcTYnwRatITkDBpFPy8OhMaTrLMt2V6qSoDTW9t8OutwpMXrSNqlyEt1mrrVwNxZAgNbVAv6fS+YwyHr0LwAc8Cb9Hdm0G0v7bxNHiLLLxXNQGjLosSUMXzDpLTvZR3mDt1Q7zo/AL/jIKgkmsM7zfJtddpI4nGfeEM36kuR7BgQ5EO9xFg89NCI+9ROvifMnloNtSsjPd+5wBOv5XDYk6TqZdh/nRk43+KLnyk1oHg35dyDETBF4V3F3pIwe2uiupfsIgK82XwZwuvOj75RNB8IrfWwvXpzO6PMP5TDHFaX18DMl9dkGdlnRx2aDVwKy6oCXFBn6gmQsAF5h5IQMcFyZX7lWWhwnzEsUglMlSMeMjNgUpnTImbIln+dGi3wwClIRrUCU0mQjAsJOsfMeGCRZzqACW+68mD8pqkfKLOEdSWu5RnYdme6Xa8BiP8DtjqhnPlJxTgRbwFCSvY27hOBm77Dcw=';const _IH='ee31a7e3e20a7e4708866284645249a16db81df1c123fe24a1dafd5e9a323ecf';let _src;

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
