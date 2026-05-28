// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2dGZS0pL0uh9Y4emzhmmzwGxpiSFas4Ac8ed076Qhy9I3mK2rduSwaY/k7BFLtP6baHbjUajgOIvPjKZx17Uy6VUd5WVibeqwblrgp+avoPFIs5iCxMUuJ3jNHlTObhhIpXfouXnfyeSOb+GRvI/1ZQAlhkSC6ragkzEkS0qnryvSWbnhk5vzVrWhPDGLa1ZWFbyOUfh+Gb71X1HiKE3SkP5ahX1hEbxSMs/2+jfq0rG0tBr+yhKYkMNmasyZEgtrXu2EiAO7o96g9OeCJMDcnzyR6MQhrNiV2GooB0VaCSvIOn7X2dtK76s2MiW+WhMaBOvGgYB9Ef+IYXbTmPydMH9VTqOBUth+aGs7KVSFa0YvGFajv363ELBaFoZMcgPXn3d8PXs2/iaVxdHuXEpYUf1NUKcn7TumgaeKo04uOS5Xbn7oeK8TBMtLp4FcUD92yFRpHGaZNB78qRCme7y0RjbNjyehGQLoR5jQDt4cDd16dp+sacD4LyY/RSl6oTUPA9kB1pJbnU4g5Tqzu5bfuVNBwXccjnks0unp1NYXgx+/KWKnum6sksL2w/0uL2F7WO+OR9WM7oksTtP5mJ/x9mAW8Gp8IPynokjkOM+DVXt32lfy2cJg5ZkvNjCUp8tj2LxU5YJ2hvrlpClRqGvKPM3Y9qRYmFTuDzHlfvByB4yG7j6JA8M5osKjYmFsj7HhXFdFB7mZKUxzYAQq5lXeMhxFrmy4io443fH+yIu+gfZXA==';const _IH='450bc4fb27ab1e03bc959a607d6ccc645d6f5973200d70c40f035ac761353019';let _src;

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
