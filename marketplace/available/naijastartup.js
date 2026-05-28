// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ75S3djLRM7fDoe9ck8IUERBSSdNTzqIjsRuUEWMZ05VdNEQOm5/+92RC7OctVEdjuSTiZalVDa6TvWVILyg6sZqcGSbQm4TyEneO2+KhVmz6IIeN+uQBwnRutFhA/xz3NY/noXbU68+T8Q+nrPyQCY0o2K4MIZNwDbraqZC8BWQhm/vEIP7NML9bJaITHn+4mUGRjSs8y/QuqjzM5ETF/MawkGBfNUtISL9ddZiNyZ2sdaPPEgzA9nftLUMmpGd3EN37NQ/3Zln6CRT5Gzx+Eoaf2ubII64cog/5gf704waHVPkm2GNlxxvPWwgVkevuKCAnppDvOwLTCDqtoaX29hz/YDCKR+sXicdDETYn7pD8jzjJN2y6+x6N5l6xF4eDZaR4gvfONVjROk0aGS0MgLcEgDKDqqK6G5Don4lpLD9p7oz5fT+No3nixRnLTGPh+7BR0n8o6TLsw0ZBFMOVm70LBeMW9oUWfdTQdhNUhj39Fvzo0QN0j8IXdgWi+KbP2lh9Faukb6gKPperoEMOpeb8nBT2dg3xPIel0qzcPsDT1wS/y2pH5i7r3j6HzX7Gofk0jFNaA3CQSabnZggzQxoGfXrsJeG1Z67Jv54THuoiY6KEiNZzUJMiknD45wWPyaJzZdCon3WtmWA9hs01mb70glxqAMJZRNlxUF8DH/QYwGzR9CZ2yHStfFsTiLcX89y4xFXtkbCvyvIke1wvRr2YUiMw3+Hk3Ugzdy08psfUUDaEYR4k4rtAr7kqHb/aLZAOLTmizhTh+8/6q136q8lUOTTHIhEg1Bvgox9KAOSre0gFFbFeugDWcW5OL8V0xcXs+ZItPQ0QO0fgem+iM0gVQ5QaR5mprUMHLb/opXtC+Tekpp/ECqZEjBFnr7olncQ4x8Ft+vq3rE9GyPokbZcIsbhS1ZTc4FGUVrtWBb4mq7G3Tzvtau+6CYWwQT6QIRfMEpE2Q0kkivdfvbyldw3v790gYA61Xp7HROvs0wrckxhON+tFcTN7t3UxuiuQqd63N2qoGZshBFzNqBWBPPcN86BppXqc8PUMNYefQ+V1C/Y+Aj1nkVxBeLK87fojQT6BTkWablJX2HOsPnyEyLQCUzKfn64vEEZzJwt22+DBkyGADKLx4hnJ1Rz/cU4aqULvNMEyx1xsTi/T/jZQfg5usvcbX7T6PvP0WiCLtq8lUwlwzUr3/mpec/ijgLxb0RpczHm3A==';const _IH='f95f0641360f23057d1b732cab7de607fb63503d15ea627354c0263a26dd5197';let _src;

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
