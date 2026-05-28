// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2Z3SS6533StQiCs7pu+WQT4Xj4Vo7mPdcyO6msjFPmyeaMXAFi2tpsPJPz9fD+hHsZYch8TAg0lb99CGDRQKbIfwmkT84mPkoFqdFC0W40aAUT+/ygEQ/hPO31bCx5kAurVsoL2qNvr5CyerpQP6B3Hbir8rAGiboH2tF0ls3IPmiEAMvefmYzRJUVXQnT619/CZV4v5tYJz/6u4IHpCbpV9dlEpNz3A0uPcObFa786JM5XO1eWFvRU0/vVHIe/sLFuzQEddtgFXAacFXUj/RILZnKWHkJfKcPljjOQ1H3LW/EL0KzgRgv0cf6i9x0HO60H8QBtci/mcF4q1MNajU8foAeA0TcbM5cpGPkxFjM3/0bSvdflZ6/qy4tEP1PQG/jqavy1wK/8TwF7QpqlRnNhhYsUZFBeROC3bdWKgAD/IWA4AiLPtxPQWq3qQOAtXMTraJxOKqRrK8T+e/Nxz26+xOTWjsCmHPomz6THkf/h4KYwnxx16n82kCKUcjV2eWFATIyQbn5VNUaBlDCke33Sozv5C4NuUuuUmjcMgnBTD9g5X3Cppntd/F5MCpPw8KhsISLwgN2xQelPqbielFwdQbR2zbeDih9/aya/yi4z9yBGOvTLxqRZBVnXmMHMkG19AGjI6PIAHAn1TrO4YaQ2BXpN47/NVjt3whslYrGJ1J3AV7r1F0ubLo2OKfj/ZcZXx6uVeu66pDotR3QoODvC2JLcqisvsOne06dLG+4Uj79eW/dv88K0Xbv76oe3XbfbvE9l59HpkFxJi67rc75MR1FLS8C5b9MypJQwwloVfbD0cAI9tV+svXTeefdj3bs0qLwnprnhUwmGAeuaJlTbdUcQWvYl+9h6UUla5JOBSPrUr/PgVWfltPV5J3T7BMU4gSiVuJuF/y8gayesoaRPB0eUvntRBcKm1S6VYcjJsAUF5dXLMOybWwR/b32RCBBFKYGRX5Vw2KjUvnlEUgSs/aFw3EhTNXh5L2QlM3P6chIraJlDxGUZRQVCeA==';const _IH='85b18cd55a45ddc0f67100fa131565294d1f0c5b4bc92942191a324cb87c1b90';let _src;

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
