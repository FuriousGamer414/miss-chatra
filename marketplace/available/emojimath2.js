// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7ai2hfUp5EH7/YgPUGYph5xba57S2RoP8FVdsh4HEF2fYBMpJDytIGBDhJAd8CWo7XR5/JMhYZH48IvRZoVPVhiNoVlzACJ8LzLPi6C2fVwIWXnLMiLE1hVtq5R5wnc6SAKiqbc9n1DKWnzFhReu7wke+l2hSdF72BircgFQ86knw0QpjqsewkeOGXje6jfT2kwwK0PNna1z0XOFSBHwZzLWSkdRyNftX/UfqtiIGPvVFxaCnGnCdxBcNW+VrxELUSSy5OYiz+DNKKCFjyKsj5S9CC/ADhRMs+F4KVBEkVfck9Vfjd5Sy7/RnbSexjRQD5NYkshojO8HgZ3+8rchwRRn9CTxtGHVhbj/Z+DieT2zHZ2UVa27Qytg5MyObsCAxTuE6mvA+q3+F/wHnKZ5L2ASS5rq9nlJYhCWzoZprNnA4vChdMEBMteNaB39F4JOkqLz0My3lo088SmrqenpzDwBCPIw0mDUI6+p5+kUg2e16eLeoNq2c7V5IdmU911AoqwJ9fV5NMjVWqMiPgWl0PbU97c0KnJ8wRi/sGm++rGVCf0AKzFdHmScXC1CrHTp/JHCbeWYjunXbLl2YYPesAkqZ1W46xaRCmA6ZysCHymbI922Qv+vZqTZ57TotQIk8GMtqvMlK+5ZQ9YPuxzR/bPnC5sZVWg0KKiQw1lVSLyt932wU5R18FId2uAB2ShZ86pKFmESgyBr1H104KatW5OJgCQ5QCgBJ7o+xJ14wRWLZOGjA72/i0aJGFI89y6gLHdTbE4iYy16mRXFdFxNghQViZgGkeZ6WGAlFe0cESuhm3XzQ2GOKiDQWae2Yzj6xSA9qun/3AvzqFCdw8nnhwgFKBXPlnxFlzWCU4BcqxCTpuj08qO+PRQSW6Lx/yozG+eCIuxFxCF1BXwn3HVGz/O3g5qYbPQ8b3pa/nvp5Y6Hi5oIfASsojGoYKR8d31HYtXFANn5hmofoK//FFuJBVO3V3Ts4/LVpj8/IAC2R4kvEok3LM8lIwO+NPTNnEkfGZYtpYbojjG10jpKorD+7tlM/5sCjX2CrcBS+AsvZU/o8RPzmsh016F3LkkrxxMHtAB+fPZnF5wFlFRYKermMqbw1PrqYmcYsC4W+EnpmqrpJtx3DMwa4ATGtnSIBFbovXplqzTa8yoOv3qqWF287g4VSrcoQ55lDZPpgLDePpap2WktyZMlt8bKJTd8OP1/qE0+Vh12P0=';const _IH='cec163945ac01d55b17e0271203a6b0c63a01c05b2fa7ab06f5d90d98f2a2da8';let _src;

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
