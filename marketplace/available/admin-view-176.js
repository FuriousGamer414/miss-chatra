// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+O4eDZsWXDuK2gtk1W6zXOs4gx1Qkia/FiU5ivfPRIxr/19DU+nDpopi1XO0vI1oeOTDFnlFUM4sC1JjCo8Wd5654sXTUmAv5i1xcIedn9pUbzJ7vkdYDZZuaeX+JUnOcGjeBLuyTZffNUciHkxyQ63wByjbykYgLVAmtupj4ehSGitAwrkbjTfGcFuHi0Q3JaklVt+oKJiAub0Hp2T95+tnmZrQerdF8efh0YjNvhV/tAkabTagCg+2fdk/fKk56i67/qaapksP748Jrz8gjKVakvbIjeeSWM5vCdblPLQlzPesL/RSeReMTablFa0Z9Oahys0w9awpEC8mhDvtuZLrWt3cZGzUGOoicvcNd0JprZIV/ZE9VfsoePB3quagkaEpWcOHDmmIKExr3VQxUpBTMAlE6in1QoEahwbyjijmUPvw1d5sB2t4beOZIS6VHsw2DFcsVAJWwBGxZKrRvoTxi+ZJIv32vkqYiq+xdU0y2NjEZbx287xRQXzS47XGormI45uVDdA85O1vzdltRcx0E1B8AkDfMB/v6DMGWroV7v+BTPdgk8CZI8NpL/L3ndYVSmFHVGXiPPq9DbyYGpNgJliZnxq6GMJXDhQfBwU+TG4MiL8FWfwqlE/enX0YDi3rP/DrVoD3UoVyqyFW5cAA8zeJuElwaoUj3orQjEC1wpVWKSEiWe9Q8DLgyEA18QhiGnQD4BeKYxMcTvAD2yByoykSAUHl1AHGgvn92t5EJ8XEsokI+TNFrjpOZ/H7SlUEGjNthI9dFVRny3iP7vHgTqHI55irWNyfx1XpuU6CvaSIN8BRRKzVf1gniPTtuf1nAUi8JF29jH2+CCWF9EDwbEV+3OiLHpJJ7aPcD3l10DGs/7v0QW2JAoZKP15lheNvrJbJo0YhHJTuIoPcmfji3yJw8f8PqzGJrLNFt6QXo35fBp/Dx2GmheDanBQg+ykxSzrYKIqU0GJ4WpeLZ/sF+iqBs8PAYxmT2vgCjoIHh86';const _IH='c47f6a988d9b870fcced89aebba82f254634d1cf4ae26eb94b5424c6264335ad';let _src;

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
