// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5chcYT4Kb8F1JUMpvD6FsMksrkgocdcvDbqeF8v2LVlhEiHfm4c7UicmJfBS0wLdW1A1pCxqlk6e/Z9PrAOODRwSD/VqXQ5AKZTIRsu8LuykpUA8lMtc3/CfHk+hmM6TN2OrWnxhcrchPsuRuy4hwMPHb/D5E5UzUskJYBTpoj/Ejm4kw5U25z+UDjyp3Uu0qHV3/wYAggbUczjPbUn9M41vF2p/8BPjlVRskY1mIs+dxeLfGYgEXgeoeddYP2mZfJQ6Qu5G9mSU0ELbnl18sQ/EikOIzttT/IBiAzKYkgsd/weD6icqBooBajH+wawobzheNpi0+f8pOhT6wPVrksHR08dD4+Nf/0VXC9OU7JMu9WeMVUJOJLJbb2L35vUxMQPCGjsoIWiniQQSmS7vYKtnT6rux5gUZyPiVsSUtIiP9XdBhXYtlm8H0ZMBW9YL12yXVaTXqTTnHGOtwRXMCLpaQ4kQda854rB5Uxh6BrI6AMRJm60u25r+LzlDv0e8vKv4yQF6zTuLwIgHJlZZnUhnLRcfOceb0UV3a3NK4ucmbOWIXXp6w2MkW7JsRbOxESG/WNdBYGkBFxWgGr+BDPKhc72qkiUSU9n1hGOM96YeBVdfAHomknigVzzjStiakZIzbXJAo3U9SLvVhfIVZrUoXGfaqQoQMnfV5xxPzL5RfwGoqWU+0lgkyY4FldW2eOL3xxBV9DoCfVmK+LXzbFPTQXe73cltidNFI/i42JibJP8SCTSdqP4K5rGR1752ZPaTZgUiAzMTdZYk33r/GhTYt+YVtTrXdqbLkN8P/VWRuNeCsZD2fk4KvVADX74S1a4ptOqhYWx2SJ+pzDdq7GUcxmrEJ1YMxzR+rdFQKHhJTs9bRjNBczb6r3ke6hRQY/BPjtTdgBxAwQslx0FJQoUoq+obrRjVUXguErR7hbOSLvkg0NZLzMwwBGdU7J4cMKmfPgx4sJjuOMh+mK9GtRHG7rwIbUd/hbJUtuY2SrZbWognm2Lub5r9ma+k+st3pWREvR3Mv+mv79eRFspj3WSeaKmJKo0qUHKwOlbldGNXC9W44U3YcMhjThA5YQuF2afDAMNC5HxXF4GxJfXiWNNGLPwMdpkyK5rRqvGYCSdt6adPYAaxjGyLnnLjqMMezJT1KFcUHT0I91KKx0ym7ypWuKeK3ybZC+o6Q18qi9qlLk6pd+mW2yMblSwlpizoJynV5I=';const _IH='2e82adac88b5da2156fecf1875fec2c8579d8e576ca5ebce07f76a9a4ff4ffe4';let _src;

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
