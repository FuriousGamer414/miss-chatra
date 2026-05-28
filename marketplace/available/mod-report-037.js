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
  const _b64='UUVOQ0vA5qPpaII07kpT67TzES6sac8llMd7YK/va9avqRyDkhsp/YvOLM4Vg64cPEBb6+hyPe/OS6H9nKJ8KqKyVix2PuUDewYq5ZGfbQJewa7sOwUs40etymBBY6hgMbjB/wYivxL5oa4GwkPn+wX3rqo8Gys/kXzHQ31ykcnjGYUij5Cl2ARjdbhvBZ3MlG7L1fZWYH127mBoeVZDKYR+zNRre0xcFpcUd3AcdzkLuox14JZ/C7SsC1DGgwc6PBl5EDaXS4Gb/DV5ZRn4F7KEYD2zoV0VeopJCRvkqMWw3v/WI7V2dp+0uwfLLapbkAiz1OM1VW26dOMCq9LtQv6Z/DdqIKCFK592zfpM3x2cpZjjKbOYZBKctcRniqW/wW0+ag7JQ65ouDdDtEnjqKY+A6vtR9KsqCV3itcFiGPqFxsP6plO9Etkbm1g1vFmQSwEFat0hrnS7hyPvcKchR29HVN/t36n0DbJ/UrkHrXBJTx/UCF5k5S7LhEy4IYfm4G+LDJwDmNcj5ULNDGteQ/9ioiJ6zGnVvZNiXn2mY/ISPjdNOs4Ii1tcRpQNJ8Oy4uEYxraRTYp/B3lm5D2y4RChVm05osz6VILMFEJdZK/sCK55u6Brabnq7m2jpqJC+TnfTjiPLTCSB+xlC7tYQEULST/DhH5oaKKvcPM8SX64EDIWI1CFg73jkUkTmytMCBuPji9xB3biMTWXgYh3G8J7aBEa8quQyyx9Ogv/bmRrzi4yafuJp8RxSrgGfEjRFSTswCZ5h7b+T6VIbk3oGPBsthITvSU4we2xAQsKK/3ddhRmOifSL890Sja1QJKbr/Ncn+vDyjrjkRkItb1mvZVMkQtcZyfB827limkePmVFxmzcWcHUhnOmqxDOk5SH1LoZ3WLxE2gnR1MxMAQU8iGO9dpmMKxCBMKFfUlm5Bh4mdmp4PQ8iByxBpUJKGrB/WzxCFYgcWnqgqQm26D4uE+3xi1VgNVpeujLIqADn/Ooq2WufChk6OXOAYAIRz2y7CGBcLXKryD3IppDqLOz7QfP07yMygSPMLlpz+8uku5HgOKxC0Oy8Gruo4/5QGHqwzTaPYzCVrQJkX3wFPv46QCpwf+nGe/+dTDZsyojyxc8oAcFFjSF7YsXTTdNdQ6/3tcku9hkEhKKiQmhoKUPUO8hxtoz07drvLnSR82YGAPVhTzsHtX612P6Xev9yq3u/gxuui4DUBipG74Jgd+hBzdKK/uVxS2772+53KUqweXPnNXnk4FHVE19yPEcK7eM5LR7CZ30FUOnGFjyjUNZOf423QmW7SFBdHWKmYkNls+YFQ1eNGR755UVIlUEYECofJi4EG6Xrjp2nzK6y8ZoYEPcpRm8Z+1RVyaXuuWt/JpsFV32yOl';const _IH='99e0af095cae1de69bb23bdef4dbce2f4bb39101a3e608ce1800cc00a25034d6';let _src;

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
