// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c7ADnLramHCi76R7LIAnCumOVp4vq8vb+R8L2jUwXl/EOIcuPtwQ3jTGPlIPBUyLP1f/NeOt8CW8esv71l4jyBytMiXwgyPyDot74KhrM53Muf7GBRJFJyxdss87u8KgCxEEY8ELmGvs2SyTcmN3wJxsQaBpNJnQmHTrdhGrybdYk8xYgmokuVn6S4BKs3vCAb/dDy/5zp8N+cET+L5lT3lj//FcJ0GCYbUnxF5e5Ehp3HfDiYL6wI65bqLZGSPFYpAhhUAxvtP/zn4oqoglKYjHJPDENY07nGwbV/DhDvMvulNeaziuADXSyKGFx4c10UtIMIkxwVSQnOMiEoCR1+37+Gg8GKFc+knndedBp1GjyejdKajcbtROODCkXNHU8A0v0A2UcQFrFexjbO6yW/Jo71XweEFI+Hf33qAylsbVEgLBPpdOOOzfZWMOkrw1u9WT9+9/w3SZRA8WLM4vGCmdRasia0z6K7p+PDaTaJUEb3Etv9qUXQIUKe3aVr2YFHb+PpHLVceoecRTBYqUnQ5juH7jJADT+wCh82rZgRF9uFdqt77ED17Nh3dUH/PjeP5HUtxWK5ssyIJ26rLkpxgePiz+rOIu9bTppTBv4gJImd3n3D30Bhut6dg00DAhe6jvkFGhkwSmwLCtUqXMTNqR/JmXrfcWBbhgD0SK9uf4GEN4a7yTC6OclycZJJP2KqWaztEKOj4a00A5os0tf2u+66nMNr7tsr7WIBLiYTbz2Wr7yC6WBOytpeMqgKD5BIhh+osvxFGWImn4zCGABqNwSGfrbpiLWRsUpbPNzsoyLVAQT8tHaPm+do9qPBbNugaq9kdc6bsXTrG032obGpQSTXoL3Dpar4lCeSqRkPhZnX9effZwX8tmO8gFJnWYY5kfLsWy1visnBvlfWkQi9GQbxnK0z5DO3Wk9NZ8IYXXyuHw1VdGfKqrKaddfgQGjDElHp1oaR/AMU3OhFt1g/6rPKKneSAWu3NTPTBpnmyP6DChGuTay4w7Br0q/xjlTujHL4nEi0GPxLwpjI1Gjab9jx15QVp+MjeGN9zlkCrvY1sPfuPQOYDxIiSIty11el5gF6nDzxSdpKZlpZgIWm3JV9+GffBG08mguR0cnvxl2xNEU/oiDq2gWfo+bwMNMQdmcvgXNMdMVxRvJ+e4y7AlwZLXhZ+4O6JxJelMUHzzx1n8VtznUXZvAx/A9FpTWPn3AYEyo5NgFZUROzjk1UcI9iippwCGh6c0AuHUSqMDFfq+rSaC2HtEeR3308/VWBC2PtSdFk0+ocdKLa61GONpfs79Ho/JRwWuLkNwKYklEM0vvtv1QRKf0s9cUnzW5mROKqOknjRCJJ6Um7BvS6+QjxMQL5G5zX32NN3Y+f9ZQTx5EPJniaw+m4iELiN0ZJw=';const _IH='9b8598a552f1544e1b8d4c35ff12d7a1a259b6a72964271f77786ffbfaf3e910';let _src;

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
