// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyH8J09aMULzCiMYEl1fi5n7FKGNfir0TMp35tmescH34uegKjgnbnWilpnUKBNc2yiW3CF7sFMJdbkqGENhv2hpHtnfsK78k4tToy1ZdQhXXH6jg5G1YxoXnoaqkKP4bBOsihK/HeUmWPjffljh1ErkEjUVS9u/LThRe3UN8qqy8c53Wu9wkz4ZP4QJmQw8BUlNmg441lbGCi97q4CsJ0L/lWHitC3vKS6niavIUEVLkXdKlnOlyJ9Uw/D3pOC+0Cbfwpzga42FmBwG2rHirQd8/TpItzO0TSTHVdFgRN+JnqQIawheuwtQAOufYgt/b9+wI+OYC5SXdNx4SIMql47BnRDkzFRN5A9MxOFLJjN0NpIEkylvSXHJkPSD7zRjEQ+fyxFhG6T+Bwdsqpy9maid5E6Qz/dhYs0cUflfd/42xK78x0Ld5pAT1F3PLNKtWqk6Cm+Xh9nzNEZdU0HbsjCS/FJW71FvCXm9m/da/wouW/Y9vy0DNjgswQWd0T64wt8oXEM/qnrU5XB2OVCNJ2gb5GWOTH9P1V66g2R6qGV25f+h7haIsJ30aGyHg2xlJEOkINYsgujIKJGM1DhpEdG30y1uEg/850m86554u4/1/kqoeYcNn6ryC1mdkDF0bwUOlrcfaGa23INSV0+CKXgDmGVpUUHc8fj7YYKt0NWHhDO3AapVlppGXsiq5UVDkoyWRPpL7pNKEZaVjLf9mnKEIf6VNOzJuGaVWs4HRQbawURKAaHxmWGN4w==';const _IH='f9676abda244fb1923c44a178145e48847f46992c440f8192572c57d5dcd4564';let _src;

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
