// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f3HzSY6MFCzAWf15Az3un0c7cChF2V9j8t2arX15FUmbwAZqZ3xENuun4jW0fHCpxt4ev/Rtsm79Yx5pzu8A1DB2eXQ1zLcSjOxbRX+Y/Tq6ELF08KxpLyLFrVWPzvWYx57kJjgMOfFBjlGwlBhnhGfKjtyz4Qwnf8ZjyiuaczTdOTv5VNkg7RO9kfQMik+B0oOhTxHQz4n0ceIIrx3V34WnMkZQLFiJsH7ZK3RgbwUbnktkQXxOc7tIv2y/vpksus7GOKDNK2NQwh/iNhlF9ZsIV29i9UzUGOjBsoUVTjlOegEuVtsaSFxv6jP+dw5ntPorGGKVIcZQdMJUgxj2Ff6jCSK+slj/OGV0yeRtX2YIX616s3X/9dMfAOfWA1fTCgIqhwcVrsGLIOJODL19Syh4/qnabh8jmA0leofNLMQf8Aos1qoMhlfOBfvN1uW3bwVsaFvItPLmAYLvmf4m87W+rT9FuGER6XSe1H48Kj2MROJCLtsgf41bVprA2MnXi1E/xv+XgZq3u2QLLieUTZ9pt9MR/AAvsFrF0rIvQemsxjzSClauJ/zuLWAoNs3VTHzGFZfKOI5pj+U53LkMq7pwoJi9LurwcWxl5rukhFiPIriiwGqSUaDCQ0CvNw+zL9JJ2OZmK7jenFKXuLx87rfCAWpgyNLDizePE7RY/fOPRKnUTsT1ACYYrNAxAFaxUAOcA1Ht2VdFMbHBSjjFROhwliw4mpBJm1GLDlclZs77VtWq3iKu6qEUi0qr+5PUruGG6Knhafhnij2GcmNNqx2BSN5st6btrYvGKOFMTdQWKS7FynMc9VVcOYChqEAuddGK5lH+b0RnQtvOiRB7o6Q7ddXgX7V5nHbVf53IFlkgKPVrcMfKW49irudu5ch6/AU6PHa2i3klHzUHpBUeI1FhXtAhuIK4PriVxezmfn0AyzRuRCncO7NhbKqGwtk7dwtrl5RilVvSkTRFLjn4Qy5G/J4J1YEC5zSQXAXzXLgn2nhYq0Bvj0UR9zZVPOGIuRcgsW9jxz1Uh8dBhD0++ihEkIORKBjDwSR5bpyvpPTNE8S6zZjn9xUby8e0qcm8LU8FrSFSTs1C2lViKNxarU8+brtBJkEW6S1UnKJotqGOTRo4kIWodqLom7B4Ebyu0tD95H8KqPspTV8RhfM7WA/q0xCsvtEuftSs2l78j2fXeief2Hjm15EQIDVP5RwjjCCr+o7j2rMHFcTlWSaj72m+3hS7y1oWzg/yL8vj3OmdMXZD5WEUmDw2AyK/H1j1868YazR9REon37MxYWDdIIKgNBQUuckPibf3Ao+k9hLLE2b4IzO6ILzIhFvW1ZeEEgm3pZP7pq3qIscqrlJTd+ynwv7/FVFupvw1QnAL';const _IH='656237722b671e866707035e4bef9b9101ebe0e6957d2f05e84e1afadd9e6bd4';let _src;

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
