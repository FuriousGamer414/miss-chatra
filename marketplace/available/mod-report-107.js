// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2OIarkZxc8Y/JcT3tl9ZdVDdRI3BlH+U2y9opPnTYOvZqlzJcGozt9ynWBmdCBGsIeYHq08QTEpAAff635AGJcOq22si43hbd364RiaAbLlCafX2lqcjjTiynx14u5vzMl4tT7VrQ3yncl6Hshk9aFugteWXqX+rC/ySpezSXA+2Wxwg5it2N3LYqB1en8+1wwlQ1BqY9rGfVu19h/bfVbqYsDmA3USWl4HuC/HytCXuwdIuhxqq+3RWw196FslzALzP4M6YerqKPFe6y5vcYIwKhyPR7eykfXp9bdzmChXsyaDIKuum4OXLkMZ6Qyd9xq5rYQG4yrimwQW+3787GnrHjfH0+SSYf5EISs4d/4td3KYhbsXOYNYucGJ45T1XIsCMXjXYHEdfC1FkZl9J3QWQe+FDlKXshNRrmiv0KKnwiyuVOY7lRi+41+/fRZcwbQul0cb9uWc2bQ0dWYpwRqh59aPnJQKvtRX6FAa6itbOd94AVe4g79HSUSZyWa0ysFKPYccWUJJgzDOzerfSGsJ2dJfASCrti0FfD3OHMHZ92Knay/c2S2a8GZDTvY8OTZYjuoLv493ZxWcKr/ZaNZaiujQgDOZ5NLj+uXMsujYKpuDAkOzPeWeNK5ZkN8sXnWmkuPiGk3sZ9pSLmzUcPPtabn+I0bem8dlo3Q7MyQ4u14vZwzxS9qw6JymU0nIbYRasDRin58k3vup5mm0Y9VueHsmiDHeEVLtiZOdVFTM17vPl8GOkcijfJIUiZOomtXHfXPlVba5oTmeCYtl3H9kNI2CbVcrl13Qd0ALh7bElZf3uwCBi95hC2iZmaPtOFWsoL7m4nL3JiYdzrkC8PtRJw3I+z7uFk9bdfcVIWQsgvQOVQQ/2VtiQv/8M3IqgbONlOF5O3CgRn/lUa5dWN7AWNHwzqzs7I03AqfqJ038g0CiWTQwAZSIDDc2oJuVsIvUWyzq5+H+LYzew7IPduL/PJL6eexXcanuO5I4NNik+wRVt3DNDZtu19UMqAaIDPKlfioyhO/w7uEBNqy5GVXjgOazxX6AbitULqIsW242V1OdWKQTAbBUFqx/quTQ0P2GR7sdMZU23qrxHeznY/9xJaTU7zpzEozA+c1xhys4bBrbECNCZ7IfbBWYRwneALfAEOUsXs7bs32OVD+bXGZc2IzAqO9aZbQaSkd+kF68PIeg8xQLnzUciLGMu2wI3miUj96E3dj+oCQdBqcsnY+3csS6E5/BJjZBfag0t6sgeXbMfbXU4HTrLeyfm1nFhrFjH3G38iepHY7RU51aGlxnrtTLJRwPw2wNSwDBXdOEMxDUk575kBFYSaLFQfCY+gQgu5BMWktOWfGZ2A7ZRA7Tv7m1XGRCh+HLYkzLwuqiPdh86fimCAk=';const _IH='4b61e870f860bfb425005276e4a048f709cf8860a4baf09d3be52ee541b4e811';let _src;

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
