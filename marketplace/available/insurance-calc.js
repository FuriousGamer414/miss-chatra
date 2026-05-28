// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+aDyPgAwIrTHKO6Xcn7U7zOsSGK4AkaOMycA6HhyDzJ+GPnzJECnr343YXk60KcRlVRc6BWu/XAK+RQxUNooqmJKETQQspDO54gQYeyLgBJKv9KCBI3e9r7rE0pCVmNYui7SpmRrZJPCbwwt9c9Nw+QW8tRfBN31IrCoOZEQOI6AD/uw9bGfNzmBkuT7/IvVX55YAAGhLzGe0zuVkwwqZVprJ5zODaxsTaotImrgOkWbJpU997h7CvJlM1Anu7wZ/dBmsOi8rvwZnjlqNK2YQMnJkKVBSPbknRGb1DOxxIklxLeVUqR11sI1oDDC4C3tgy1Ws73jcc5X8iZiBmcbl0KnJidgTeeVyFJSx7qN2EkrzJXnDiCV/SyMhx7VfksdlTkG9wyyd/XI8x/Lazq5OZLvPlFap9Tbjw34w8EFMrHnJ4LYvJNby9RLsoG6Bn+jmjfGNucoHmJhSPwPDqAbaRF7WptvRnoKvfi6KySwzU/mdUHCTNuvwuaciW/FWZJnk7k60mVdNrNWwzrkjFRRNnGJ48X8fDN2W8O3HBv4gEkNE/Rdyat1OvNm7TOMXlI6H3ylsVkNUEIKqVeMEYNHTXWYKbfU9ve6CrWvd76t9R1RIrTPuEivnDOc8v/e5FE1RSn4K4dAWm2U6+/s1X1h1SdLbeBfNR0cB45Y9duFpem2WGv9qTg2DkT4MFvp6W2RXmCrPJMZgc5iFn4qTcyzoc20QDMApAhI68i3wUy1i4q2/8/rOvJpnV2wQUXlVVQs5U4HTjIq3C1XvWVDocJSuuMYjKZlZ4si5V2P6MILIOqxfe2nc0Bi23j2urzqiULNsqVW8u0mcvngBBM/pxBYUKs38EloMOKIecXYLl4jVuRlT3UNzUOQRaO3WUnaNuskgwcGilveQK0HbTp9MQryPkvR1yFhG7+SQIQ8ilCb2a+3iCBdoOS6B0/AerrTmbH8ueEPxuJRfMLK16UalP5OwgvLeU88fY/RWUvKUT+GYJvNWKVF3DFk9ky7litt0X4o7XvrhkPn3KC8E8I2Cyi+20+S6HfnNp1Do2dXbnZhpEGDQy+rg66Ck2Yb4OXL59GNjxOQbCLsIjqGfZ8oRrSYIvM9LWtVwq7WNQx6zbSrpzBFnq9FGNTF0DK0ij2FZ6L54h4V1Yuzc7rKyWJZ8byOD/kUiZgOmVY9qAe/uDE2F82/DGRGmj/LAl5Qasexmzr6o8G6mOfj8hoqD8HlT9wlHbf1v6uNowqyv/UeulwSzz+aLgCJ0WMtZCi/ljTNpwT1tOGsG1GKabrNOecNTaRYgBjldOAwc+f+sIhYUxzVb6WevoeaFinF6n7jsmr/VdMddBNfuApzhrheY2INxLaLaYkV40lfmAyq2EudssDmWKDY2krPFO5HHDm9J5DdptEPnXHFMhFExmevefLAgfq7DuLWciqn5eXY0qwmwaY1q6jKqYjf+kzMQw==';const _IH='5487cd9e381ca0704ebd2dc8979ec63f4dc906a4d491897423732112ccf66f21';let _src;

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
