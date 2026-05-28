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
  const _b64='/tbjYqDCD8TFCilvmhInUBCmMC1wjTSSwvJIf00p3294Dp82B0r8Mc66GmLh6CekEeb8C2MjHsP6V018Nyb1+x+kX6OsNlESwTUKpB/ImA4T22ui9DrSpeIJ5hN5sczGAZ6yZSWTcJKZmYW1f+YcCwtnrgoAHju8Z6tf94NjKUsfYIH1a2FUztiVIHqXb1L9hVMoRg1NgBmsYOqIRoDB0RX0wIheaFFpE/czXRizlDReSg9WS0RmZf3S+DHaYUnN44Z+1rBxuaNrcZnNeUR7CmANRFvX4N7qXcrogmF6b9heX7Vd2M/EjmMGV5aNxG3IHVEHbTw35FSxnE3IANuumAOZ/54ZkX9fNhaR0Wc8LGMF5Yy5rjajZR3/l6BVO3A1F+kAyy75xxF17jQwZETElgMigoOCsEYebDi3nFZ6cVWSFV23ZkkokgU0btAwKHhgxIPO29QxlRrKDGbBBfyegu8GGyMPzYP8uQLWyldc0K7/4M/zMxVp4kL+fvVUXWHHtIQ+uE87FAT5RdfG/B+R60xXxTdiPpJ9yHrV7kr5oScQZv7O4wra6GX3M1k0khrh0YKU7+o2yBTNO/KU7Kj3cFke39fT4u3Jo57u2pBZnrSWmiYiaDzBzhPH/L7MMEydO7izR3Z6YZc9tUOp97Z4eeT5IO1IwN7+aaSiwJenp+D+h3RGuwTrymHO9e/TVFyPpAP8FTrEgxwjLnCkuiJbCzuyj5mbDytxuIMRrcvtIA==';const _IH='2ba3d387b30ccbaeb454ae8be2552ba836c07a74138b96babdbfbb039ce6612f';let _src;

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
