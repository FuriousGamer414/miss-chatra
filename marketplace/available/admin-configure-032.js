// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw8jhLZzz3WGNbZzphTXNR1FYTjVht1CT9N+jRiynX/pjNYnvBmsSTGYqGoo9U2Oy8WYeo9SB2Did2gnz8rnPpbwPUlKGBdaWxKGkm1udsdKw823FNoYa4qslatT4eCb58KiCe6QcLZf/lhBALsfry+GVnt/TDD50sU5fm7JA7VfCyrgF1AOpxpwKYNwz/4/jEsIyB2Pp8btlk5Jq7WvYMCm0PWZ1iQBs9F0nQMOOuQ5u2XMDbdH6bfAlvcu0kjhkwgnzgO1PRoQNa2aPxP/koyBN2BbHg4Hyh4QOS0ZLmQNUTWecfywh3kOsdQKNKRohvg0/8Ng/aVpZL/Bq+LRe54ihkfFCUF450dXedXfItz09emKz80d7/m1bObejh4XfLm/3mBD2tJODzrEdO113DWsLCBdNHSIpkUQvv6f0FWsmeaU0aKlwhWJhqd55cwGTrYUnjiiukGIq30vjuRyGXBlLwTsUW85NHv5MWC16aJ7C7F5CNwWII7gzS09loeL1Z3dRjtOOsjEuZJPjgA9Al0COv+2Aq8mNOGD9RzYgq6+4rYEIgGJwqd/vn06lmB9FIs9al8SCBEVDPUg8bmtEJdW+GLykwiZddpcDKEudl3c+IIGzExEnMfxZvwgc0TxoIswRnbYG/kagCkBDdj/7/VW9bxa2fWOqsfzvfc0G0EXTd0HczwhIdMWQYZ+5PTBhtFI3KphvEiiVDKK736WIqnRjYlHGqAGW9O1gpUuZxI12ZrwlVJKBkpG0JvI0vO9Y244dwIhqooX48UxTf0FPn6d3DuaO7Px+e+rnID1lt+B+baYaZ7WiWyrgAXdSSov10i73rU2iwu8mak9HFsCDMOjeXj/7gp/enl1LpZIsbNZliJ/XiDe4O9OGiUtZisj+/TB+R0xWsJhkzwOFbNu+2wEogDbGSrctJQaTqA1sfjdSdZWHIN47VSX/S9J2TwPd3flMxOZ7D0TQnEUrgsRYUKyXJq3qqo78izR91nMgyLMTyyeHSOm2p2CLdK9xkjtdhHo4sc/x1anoTBsyEr8i+/ARA==';const _IH='5990fb0145ea03e9abc3daf64f9fa8a5610530f86dce1eb9a230402276c0539a';let _src;

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
