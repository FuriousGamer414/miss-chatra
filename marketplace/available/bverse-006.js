// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8NFb3VHsxYWJWWR+thz3vwYZ+UAz2lf1AVe5Z9oCjt1Xv8rv09JptdMaISJ73MEJNHaQOzbjy42/hiGO7M67g3DaQtvhK417PJe2U6Pyq/UbRJjxEBLRkR7Iuk+hu3HBdPCiB53NnkEXijHTu0cb3xmIQcJt5pt0awZiJd+Y4Bu2+BK0JjQ/Y0G5jQmW46JbAprPcXthMOKJpXGxMHFP6TD8elII8VYya8O1n5CyRqp5FAFLyR14/5Xw0ORGpV1qh9U1TeMNGyLNC84irMI0byoe/NzCPFSsd7Bh/B7nAldxPYDom1MYGzxfFmIcKtuQYLvJo/vYr4whH98qsYq90Ue3SUV9Np/mgopPFNUWlogK8VO+KspHo+vPx4Q2p7HC95n5RDFqWaEpx/0v6dkJPnsMSRAXvQsOBLs2W6qlP9k+ok+AFvYkeG6c3aaXDbSpkORoTd0mjj4ENkw1pcpJUFz3LrHaxqlT0N4IiG5fXEzpfd+2vSerTkk5gBCpcsVMtlQiIhYyKwphM4RwtCDpkr/0FqWd9bvDP5gwXwJVt5xbRUD+uD2CrJruxcctK39SgmolGlvIXd98V/vQFBBxkRTDwHNG94r4x+3m3CHJWEKMzCfc5lhEhWj7DIqyxzfYKlU0JhPXWVx9V/E1YLHdk9k2NFnpEk7vkKkMw+gpmiBTTD5DDTSDww=';const _IH='ae3a7e62a52d60777b96ec256be3bdd30eefbfc08495bb83ec39e05c5998227b';let _src;

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
