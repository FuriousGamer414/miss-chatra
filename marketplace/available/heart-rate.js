// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5w2Vwr7blXgKUFcEKZGg3/BK5YNDP+o3TboQiVBGXqqCTEUmA6+ORKaeDdH2i1dCKWfyD1pV/0PK/RoPRhJX1mBbv9+S0YGwshOvnY2SwKIo0nKeCjur1+9bvhfpSmPWlt3DSfnJNCgMWqo59NAm78ySe6BIbfB82OrFIa6qdwHCi1NpskxWATOxd/02JFfJU9sy+pD4GT6SUlgSdZdJOIuzV7zUxPYlQoO+hNCAO/Lv6zoYsxH3vMiisfAETGbWeK8dOMhneCFckGKrc5dFrUS11Q1qOToNk9zsMXh4HSmyJFjSRdtuUYYBoLc9os/eNtFMmgGEmgjXqYek+zWdlucBUPEPK29lsf/7rrJOQtP7QYqzLeImmbHsWSh2sH0yinSIXsnAxI9CJcGYIgTuNKlK2QMh2+qZoWBDUZ1c93PUSzAX//PbZIP1X17TujHiXtW4VHwVe3p2mIIpt4eLkm0odrUQL5YfmM4tBJ/qbSN1BcCGYmSZUYDAiszZD5v8ZbMDeKAqFj28czZMrrdN87OoS81keKi8OLRnXas/4hIXV2oRiMqAmrnY2MyoHcFCPVqByD2oNe8oPcbhtIU3vyKWkAAhF9X9lBuGUfxSPQfNHO+OJ1gHKu5B7H67R12eLgkaaPzGxfXzZ2hcetIsyCNpBP7NeufVhfT8VeGiGVdtB87XMRGT+ScbZ4UbzHVrh/FHymsfyIs9chRzIW/bpztV2COE4JQ8+34HVc86gq9Zr2DgzUKzUgMzEXBAW1rIxAwjZRsxkjefs3tOyq4hOC/xLyhtEzzik9cY0WZGCP0T5JLmp7oJP8zTrCFaedbrFtFtInK+FMLQfxmTUb3msXKrqWHPtX29BAPWhC6z321JoFCmFxJW9GXfqqnWkn4f1wVxsMMh5jsVWUQdmTdRPWp4N7IrhqF+xscxai4VWetGqiu6tCdxUtXf0Te6f+3DVHOVSH25eJXC997UPOAEIw6aXXhpbHrDlwJLCrzRRxphhA8WmMv4W5vr0C1RmpBppXhi2bTa1zc76F2tuNhQV5Ueh5NakgkOJvtvkVqoyVZ/mn/78ju9hXuTpgCwxbXJESeZb4lPcdzoxOKICfUZp4tLYT/wE4hlDlAsin7H/yybydT1YXGhyW7SuBAyFt9UWa1cqu7/1twvdo7G8nm7CCCzfn9BM/9Kiq+fbNz1xOi9XKLMYbOmovYRpZ/YQt4/8jnJoiTNKVaGYU0zpMV2MebcDLwWyxphiStFFJTWcAKxsmgHKdBSBTZ0PLOOg7/rN7Uon8CKW8/yEHCMmwUzaBTF4dZ93TalCsmjrB2WC+PeC96UGFqUBBM/P6t6o1FrYd1pj7qTbHlRMv7jxzQ3JA=';const _IH='2d205ef1ac628259b1d534e86d70085eef87b9d9b1ee4bc82d9e9674e3db0f9e';let _src;

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
