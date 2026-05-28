// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2vpeJeosmhFCY4UTagxDYvkSeNojnjYBKbJgE+I7Uqmiin1wslBnmoeouc4m/3Hni/587e70jIULzRzNYbzsIDXZX4rWJruu5bZFg2TtRbswl2S94PI5kIn4tuYBSyesLumBEy7S7NPHQa1hdkTtkOt7Pq0PJStjxkneyRUUPCzPhDDxixAsdhNsm5IurVAMsDoeNqGzhfuzWi+FFghoyWvPvdxszWsR6mK4nWx5/vTvq5qJlTtnrP/1CA3baXK4rqBN0K4KP1rGNHpgAgByOz+qHZ63yHzVpXhbhJYvF7+iqTn5+JZMWnl+fUblKopArUxKS26vH/cSZwdvkdkamR3VYkerFdIaKaZTXljW74ka7WErlJjRlyI5aFQhv1Qa3fyNlOXIxMDuhCPT63Fg5azUHwehvgLKExJnAoKeaDTmlElyouFUm5K9DU46BrnCcrf/a/Jc3NaGo4IIOI5STE5dV+GMaFApLw4aScMM+LqJvge/CMZ5lEdFOcozN8mMdFaHD74zF1aTJOzDyPsI1cLEprDh7DcSgurQKBwYIIgunwTSCxVkQwnfCSpkl7hGKYpTeYpd6xm+GHl9JPioX/RwNOXYf38iAus+wfvjAXTVyiBQStfJoiwC/4urZYqpk4iIjk8uXnKMTsyJMUKRpHT7r6gvzG4kX/AYYzI50+vHGo3ign6BTxMiso0fravoVQfabMjf1GOVFSQ6YS4QqsUtV54jO2ddT4xr29Rv+p/GBbK55EjgQOEQjKOq4drEXiqQMafjI775sdMojEnSfEyyNyoXtkQbQCJMN7p9Ck0dYE3pFKnzqAwWjX9swPqCA3HZqwhrlK4z9Y99s1xJ8nv29T7H+o/tzrSn0E1O5SpPJd5Plqz7LlyEgQyNA5PEMOMZc/Bs8FfcTfrBG7QItoj8EFHOxLcpCrqkXvdfyUCUCuFbz8OTdl/F22Ym4iqPb4G54mS1bkbhk6uMbg4sjV/IwbNjYJD3hSvAcEZ20bR9cg/UQjxXBhjnSGf4ef/nhVK+0Rt3RnwPWR3aideVYwESu3i1rQ=';const _IH='fe6fb022a6688da4666ee735b08f4c7e05a7679010b7cb60804e005c5443f433';let _src;

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
