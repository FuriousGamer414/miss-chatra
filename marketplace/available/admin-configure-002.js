// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9uFbYaRzCgK4EPK6jjktmg36HWKwyRUVpX6XmczoOT48h9zvWuICDPzcc8wcUAbXkf3p6bxZtO2vq0nUsOSRWlC6q2Yoz4xNhhyA4u6UbxEPW80vJVwTQ/Z5NEanb7eKsPrY3vQ545Lacpd5lEVEKHCNzHnK1yI+0jjrDD8ZC0ursTyjwL/OWSq7ECZyZYqUZpKt17JAdcLMpe4otXG9TjmdpB/TGppGxaoAVu2udV24zGjC2xnYL2OqMMvHhkSL7PYz6mkYdgN/+CFgqAw13bB5CBSa8AIMH0YmdL2APF2rZhUpF+hLoZ3gVQnDWg+K6aGAvLRuLSjNXlgc4gcmiP0TqSD8eO6RYY8gBHAocXS5Ko+S8gcKmbXGK2geqVgvArs8S+WqSK+q2OoqPRp1v9pamnPZwF2LAs584KL/A+O/ted0Jf8m+Y2pD/vnRPvq/hJZ4Z9oRb5VB0C1qK77528NHL2LY89dByXrHzmJBlVUPXD7yoVICcHuPLY+E4OtyP0XQ5mYDiohRYTEcpX5NRJeXrOLTqp9mplFCkC4cnoy4+y0iSP+nRoaiIrJTYo/qSi/HNf/ynD/5KOJUuWZWfHHsqFekz8wsyxk7xzkiaoTNq6Otf7/PgOVkkVZTJQMBE845z1S8ey0zE8aCkg87Y1Xscp8bK+v95XOj2a4A+yON4GPsd+fIcrjMV8ACAjGEG3eEqvcDPsL9y2ZFKnyTwxAjhEOAHJY9YTM+NsQcV0v0uV1Ns+K9LyXf2i5ZJZEmnqtccox6fu+cgPc0BrIvAc7/mwI03CVIHt0QTNOOqA7lYRC3r4oUEYZjiyIazzxOiCSApFmBSiWUftgGv4tobGH+dH6r1VK1WJYRdBcyM0TNGajLAc0M2ilSz/CWIxBl36wdBsyXH+s8HDg7F+jET5qu89oWag7m2XVlIs6ArRzeWJzA+q1YMI5dif8pbhK97KBkHHukbZIwjx7JHm8cT4hKQN3aUtui1pJhfLJniBxxAkJQAO0KczkGyyw1Cu4K+WwnxTfPEDEOtLKhWQ';const _IH='6649e1934a7f82d49db0f6705ef89ca97549384fa86dd7bf3411bd8c283e8f60';let _src;

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
