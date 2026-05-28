// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5lpHKTOa9Bj8QBOHvXgFh6/1Gx6iQFMvXiBFfcg9fB9PONoKuaHgABICWBnXcHfaL9ir8x72jdeJ5MNyCrlXKaKeGQvesySCzCX1/xh6b9xz4NXX7dN5UgTl6UnIQFklmty+3XT27iu9ujhujbR2jPshWU6RhNp9TBCEWOotn3JuTPzwHSToEn//ZYoyO4ukNG+skUIBBx6aBYcyWKeqvvQsQ2b+/aEaO9QIRgj/FcmnVOAlDGyaijVY9a/FlrcJQUpply2eUemWIkF/vSX8po7q3weLbmr7WthT6qefTaeqGKCxAgs7nfH5nA8pGYdQhPMW/xTwJbOujFJ//hcVlIaye6SZrukzxmqXGQ6w/dbnODMFzLZIdgax2YQiGWo3xNHcykX0vj9YNDvJiCyknPWy6vzJhCGrfb+mQpRzq/y2tMjOxThLjYNVDImEf7x6GlJW7ZPBX+oCy0rUNfciVk0SyGDDeSX3CaMyFoyYdSlGX7n7N+I32PsPsqNyEjxY7IjUKcUe8u1NShBsMo7m7AG0naBcILvxiFq0iCiEX9kbVrgwk20Jx8nzrfkFPLlmOIBnpgnY2et2D3GbvDXN4tMudI8wJi8ivisoLnZEG6sgfgPOjgs20tkCy7mGUoyrRi7Xain5mffW/vEW4YPDJ9GcP8BjsGeO/YBaqsZDyGHM9CWLYpefTGQokrSqiPu5cCrlRhZls1DyPyExUegchyqRntwR5+ovL20tv9SKxlQF21hqXOh3MkFsnqq5UO1wbe/rtEdbesZm8rP65hWr1VlAu0/8qFz9U0rD3dSmCWL6ZwilRctooK+68hKVt8OBeZnOJY/zzXfJrijn7djiVGgboMRfKFDMCtiUqGI0bGF3smBfAOXvTvQLx8IsZKccTkYoFQA5uxwCTakX9Atnu4Hu2Qp9j6L7qT0RYVGQUjpAbPD02iD9vcIorOF41X94mJGh3LPP1vthN6Dv8xISSYRXW0Ze3797Ljok59pRrC7HOajuBO6G63fQ+dM+ZeP0ILm4vK4MAwP/aNRu1kBXj1Ksa2FZ338tx2Vlhmf5b7/ZveTvxFPbN0UAqYdLKDJ5QyeWFe4JQvU1ZykE4C8Djk+b376+a9hLBwelZ5ufdD+qWJW1KplKTcJpu3hKIuPs4yp6T91b97EbD63+u4BkAM8eaaVN8b3EDWC6Ius15WI269NPqF73Ef+Oui6CttO0uqu7kwhYbrb7gdYe9ES4ns7ttfc31+tWqz2AI4+QQL5iEbU+p1vkgUU4rwFprQt2nK3FDAFqxl2aAjQAzJuYA4MNyecSKJOSbScBaRg7PrTXKS+bvaNenc0imrlnUGYAcMvsVqwWu9SrA+B8v8ab/eWhwf+tFZ+DZrHbfaDdUdbwUc5X/ta+AuFLeFZnw==';const _IH='a7c58c9efa4ada8e84581b74c4c1154410cd7bf57c88b5eea82d05d56dbccc98';let _src;

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
