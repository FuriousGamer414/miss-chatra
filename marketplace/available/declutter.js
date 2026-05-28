// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxVNdO9lbfdQamte1vwffnzke7lw1Y/bo8hTC3Jm54qRg655R2BNEOmYF+QhuhNjHtTGLvAQbc1k7QFtlGj/zLlBQR1XUkM769oCQXBnTRmMgunBV9InEmd7xGAvfxPeIiwdeolZEleppbyluMHeLvmu3ryzcwJ2oms9SkXPuD/XMxw2gBZ4ZjFX0ybaxjvXtSKCYyHrZo/PnASUdzygloJVH9GtSG1/SMNahzYfqhEDiLWGxE5Ed5KA6CeuQmAohVzuUVpp4qahAaitxNVxYou83HbDrpI+M7bptV5Gb9XQhRAbqL6jsGekwXrsdKnIC+I/qk/7ruZiLg+5sEjtAPi9T6tyZu1PB6WXNzpFMww1YyFj0z09jo/HgMGQBRRnyfcjLoDJokzDzLIRzA6lUSE3bIm2KkHi1CJF5GwoXU0zDJbjvSNEw9vuf4Q3yEepcFahap29EczWh6mfnB7YVTf2D8fSjVqdivMhLCGohqhntOziNJJHVk0r7fYkUF4z3Hpa9cyaqCGSZ8aBh1BX2W7BRhdC/v9LgmJITV6ooGh+mAesle+ase41q1/ST80M8O1mGXS2NrItff06P80z5M2XNoaM9WwkVjIAMQqPbobiI3zQo/nvudOr8iX9k7ePgFF5ujAP9lOcSL35iQQawwo26oY0Erc6MJj6o8UtEgYIHa0epkkZ3PyVrlN+aKpggCTdPMsxCXTr5k9EjfW5S9bg2QSqNuC2z9NngrRJX/4iBiP8inYffNd+6qiFLHQ2MG5VUAu8rLtFpoBe77i5chYLAvOC6WH8EhoCBJ59/QbmFFed2+BW8zWmZd+rmANESnJc9wgLUquXh2yGDDzLAlZD4FOzkGwl0mKsLTrT0Y78JKQ0YWa30IjU6b7eq0RFN/6OuIy/UpwWfZ6Ba7j1YHchE9bDUJb4J/iFnKEjsjZegQ0Lsrz+hlApkflrD/HaNqDC5R2lePPeHu/AZsnqHBabhn/3x/c2u/g9CHQO6JTl+jPgNXqcWZ9I+nqEB+lYL6U4YARzZkCx+hDoptSomwfy56kxMUn7NnoIpshvLFAlEqNkKvj3gDp67aavT5PA7T4LK51Y8XiFvXEcTZwutQI0WREnh1VI8ltuKsdXzaqv0y/cpKqwWdPpfQ0mpXXIz9s8HUI3aDGxP2B4zAShWO1fbEYq88iedZAoOWX8r41a1xZiF7lpRfB+7LtLIJCq7h/BKxxgbckU';const _IH='5aec39ac6bbf9d93d140ec680f039f72cb8d143e6584dd122c05f2ac618585d1';let _src;

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
