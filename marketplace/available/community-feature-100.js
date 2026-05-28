// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zK51X1el1E8PQqPwNnmxg1ER6gSMrfSnvOLYHHvjM8rJKoD0T1eqkIOLXkeqFLE52Z4DCFDcAkmRead9SwuQZWpqyxMXy80frVTBOhWj6oMQeGDbSUqyrL7Yv1lvYgjtJIgidhrDz9PC6jBqqNBxx83TdX21WZQ6vqyOOfjLzZPT3+3FPfn6x5fHbCfc/yRiB2OFRaAcGwki1T/M6qTQNmWNOcUhrtNKkXyTyS2desUpdC8blfbGId+WAY0dfd+acyq2kOHYjQgTCCPM2S/Uxh2SaOZ04GtkgoYUREBm4UO4b/bzfYMiieQ7whZjKRZE8D8O1YvHaYkFx2giDcw+GaPssWUOUeohidqmguhBra4ThMKePOENJV/TYDv2+G3G3l/hyTMGaPjN2/wSgpgTc/VxEqmtKZYB41acnxUGlFItZzlsy0QNiyuIeC4pvkE5DLBWT9cw+AVsCVKU/r94fef1JqD0ioV2xzA6fHySZA6YehPaQk1RpkC8g9m1v8z4ZFWtkpZpb/X5B+vZCt7oTaOcCqy7hdotKC3B5MYpn4d/+td54B76kWIE3ukx74DoGtRR9E8IzQ0Sxqb+BZb8QKnESevNfzZZxbCYIeHd65ORA2atMQ5QxULKB08AnDip+Gvohry+nHVmPLyFpU9g4Qs4rup923zauvp5E+2rXQKYsQW0dQd7mP+GSs+t1aD4MNtatUAPADMhCOUgF/shlpIx8jIw2zM0VkUSSKDYgWfoct7FGKJs11iB';const _IH='d8d131a0257f3754399905faa6e2e668271cc8c59824c1653e19169241d58795';let _src;

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
