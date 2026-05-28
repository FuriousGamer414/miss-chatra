// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwFSPs8QQv87j6TX76TTn9+uvp3+xISoJMh8PVybhEcziC2eowRuk+xnHmtyMKbZIvrZVu16XICuW7d1bQu3nWfX8LSnStLkgGwwRsTRkTkbWR8oeBSCkcFiXnzEipkUrx8TUGdDYARotwdNPlcIj4WUNQg9q0gbbFXVWjYSR3k1ICxJOOT59nG61P2z2nEcRFK1+tjRkIgEyJBSLQNaRQqijMwufG6NMjKqTEA3oSETdyguKluvLb1Utquuvre9mR4CTwZsCiLWB6/xaBabdITIe5c6A5Oy0aAkg8TG3RyTa5VklR481vF5HoIheNzxEYJs5/BAa94x2MWR6SIwu6h9UBNv6/eFM1Tuf88u4F3+5EE+fUkRTXI1wfLepthelmiP6HgGIuzqPSmufINWNH82+YvnEM8Noa2LdOwBQ2nJ4Fw1TQGiWVl2GV9P9nX0n9gko1APcNKWsybrjEtJaA6YN8ZI/PS2WOjnaWKd9gvor2+gEX/dT+pZh3YPoDM0830EzJTIuhDSDcg5zndH08g7E1wKS8iOPsPrITMP+UdwyCaHddZHu8i8NeOTvaVgjpKvtbdt1LKLJA2hqOEpEuxR2nBYM9BaIU/e/AnjUoU2fkMy/aXrEf5Y3idQGZLKk+eUkiQr7B1g6g9N6fQLBWm7b4z4nlG2guz78vPWmiQZWf23q48B1y8/7E63+5+LNDsuiFDBSsyeQbCepY1Xg/zk8HCquGMbLTjUeeQI4nnp0SLNejzEjHhQM7qj+HXPQBZ5mA4MNZwLlgPYM+dxtfrfLyJG67LXu7Mb9L5GOsnGo21rovNyJVKVl8I4JaUXrJLSOG9HPm+9mCHVDQMCNCTFpjm8VYRcex73s5dsHFD9T6JP7NSbIiETjvapF0pKA6Q4EfOACikgr6RSXyy9IJw8qMj8gFjdEW7gkTXthXCSQpunxDA9vYgXMbkoVquGLzZ4wi69j/mRKKsjMDdbkpK2pWv6vGf34A==';const _IH='998affb08c9357badbd706ffea1f5e81da7d755c8780c034651c17a6cd2be389';let _src;

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
