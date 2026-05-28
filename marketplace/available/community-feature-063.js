// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7zeFNS++8fscfd09nJH6qlTC2AflX2EYYNAr8+MRDcjxzKdQu6CE27WwUl/tjfcHHiFOg5zSSDqxJpWJ21cWthAU3YcikaVlm2IScjh234cT+YIPSnT5EW0sFoAks7rSXDiyzFB3gtktHujIIxaFjGiyEt+W4AOmqsMZlKalPE/otMxWXl3FKLK2IjD3SdLNX842+/1JuUogG0jQxnRUxs/twhVeFJycqZhONFa7Pq8yNU9XnPFM6ZT0pE9Wv9xLHcv6bqFWLbsW0xAx5wDDFCSW1+XFoTPESsZ/USjeVodJA4rovDPf07EVRdrMwHQ6UNbTPPD4HRlIZ8AI0wSG7uvyr52VL6JBzQwz+jMkoH8AXdvLFYzLetOYfDzYatY8vRwVKw0f50IB2gh1i+Mcl/RwdZTQD3w09VYjoSPr2Noj9r6mFB88pg99uvNsGDA/zgmcNn+TM4mZqHgLtjws93yfNfTVe56SFKaDAX0HfpM0/Xt3FlzJcAV2782hlfmkfW0TFx1efPgjPQF3hGMy6p8Ac6LztYuPNLc3mmTw+gYfGryLF+LKrcJgUCi6YFPXCf+HuS5zqZi/yuhpyYHZOdDPNJB/voXo8Fot7wpA4V7bFcq4tdyHmi4OVzS9GQSEGV8E2vTl5XDy8a5AYFC24SOYRO9rgpSrqnT41WHYFUzuQKTBgrscfOw1BvwWujenSuxn0NlboNdCQI7nK9fEwiXjpOFtXUfo9Q=';const _IH='d03b579a0026cddbc53b8256c52989a30bb8c3e105a4ce907a15079286ea6766';let _src;

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
