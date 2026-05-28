// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RzRnCWseShEMK2U4TESMLBMVLtxzNwlxaK2oXdyAg/H+HK45UIOHhir/fkzrJvUkfMUO0TEoxpNsCNKduc8LXStI9EOEs6kXz9B+6ZhsdoXWQhyFKLzbtNnvPZoCfxyIs4ZBUMmPUMhjLqukPDtFkabL8AkxeTt+6hk8qq+dmBPRrjL8N3MnT1m3mmt5GjCZoyPx+4SQ7aBj4OcFccemgwkQQERW+Zj6cqJ7EHx/UySCfadOjqKICTsIaenK2qQf4RPw9ZZd8NxrLPq/JbuLh/6XNadTPQ0B9YFoKmTymhdGuSfCMTaD2eMIkOgKE/IW0aEQIvBvOeh0hcuDW1cO04yCzMBfaVlwEnPOWauzZ5iIa67ztwaE46Oi+DwztW34uKahtQE0fv3Qdyz4UU5oXeL9M4ip0dTTrTSv2LhJHJMK926BqirFSPdvuxD7aXVR0bFFmmHp84qeWpZg1ghgMYYjL+5u0XQFql9z8wdlSEzESXD3RhfICphvAOga4l1ETedfvDFZdGbHLTzQsUJ9k3eDyq7byDfp3UiSGynQYePeGAYXPFitpqUHLS6PA4V53My/rH/1WUPS1J/lSXgbvEHFTb9/7lPjjBiDKcTpfJEY0olDx1SvCwCGi64TOmc420s1BBa6S/+aOTaa8YEKWShsXe9fxEL5WWFLAsv0DOTMxw0B60P6Wmk2+sUl6B+EzAxCA7ezr8nMeFTzmwOYGAPv93U1iJMEB5XDWlKzH7QumpPwn4+rUnGw687vRvmk88JCWD3jdq94EpkSLKjwxMqFpxTvesrjzUaYFGW/bMa8LnlkY0vmBU3EmjOtaE/puVxB86AKVJrqDpExdAIqkpvVMxjdPd2XHnulk/CY9L+/BjGwaPDQAFoEpLL47WXo8UjEteUFBlYfEu/cizCQ16pzY307UuVBSBmJUJJZAMrtguzX2mvAeDSEW+uRVEYxTJA3oAjpNPYOhSJalNOmi17qKo2oWYzJChF56No4AiPSW2RuOzBPrPJSbqWzYhg2K1SOO3fyN/FFgFlWRT6grZ3lDGRJqs8OepFYvRcV1wj0llWiAIB1kaB/IO97t3XZBtf3imIgI9NrTNkOTgVvQEDFeu4+juE2/BKzG6LZJYxAPnjEIw+x07kN7bPVH/XqM9+8/9cgkSZ2nX/pb2THncF2Kq5ZE7k0v3mAMhWVBzpMhlAjjxpNrQ0ARUMS1r0Q8+YQCOjEGAxN6rJ1Hwvgw8IZV/Ksql+LalcP1rPp3Gp2JX2hoSiqeOg4jRkenIL2f270hTjL9x1PieFPwAMm49zAqq7SkOofwKuvT/ma5K2Tv4g0dOBbR3/12s2VIuvHLepBD2KaEOuvY60GB0mzmwZ8GoY3aFZ7vYDxHYDN';const _IH='e213e12490296222242f0a0455d96d51d591424eb159a734295ca5602f4d54c0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
