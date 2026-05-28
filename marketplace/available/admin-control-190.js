// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1PcPlMvckJCSBYx4Cj358uLTq9vLouNaiCg0002Yl2k+91FPswy9Ti5Qu8UuAUmUh9ubX7Lwv+/ivqBP63/ya5qxu37VwPUHBrULBFboHp+HFR11CwQCLYYGCJzjgneBF2aci5xnJG62NadMsNUUpzGn/IXllTvnKzcg5cW+xmDkATB4td/vo1BFcWpOcnttypfFOjPnlO8+V9/kbU+Lb5ykHmu5Tp//66JuW3bMwHNXdZ+PJWkBTnK0wBpyykCgRtZnRfgSSiocwwvH2osOsmrU1YyqzX3d75y7zHV4/vK2PGsqTX0Tx3e29PPA0yeitKlGK3vAENqZu5NsM9dHoE6DlUQXKPwTPwfujEicQwjAj7StSjAQvee8+PvHI3Hf5dCdUr3XnUBC/ovi77UF+UAjP8HPRflqeHYelmcwLUIxAkmmeAe2ia11H/EJqTI5XMfSuTgR/ZXtYwvWJ4UsmUnXLO41F32mkiF7bwWg0a/1GBZMGWKq9nOg8OOBqs0nYNwKGEOUVo60QRWKrcFppVWaqlJzb6jRuG3cRzFg6Aa1mtBaSt239tM2tDoXu9OSXcfeW80DrET8NyfvGeLOxGgPZyeMPTlAF37l6sfZ++bmjYjltrL0YmcA8Cv4KW89Ooje9mTpdJ3G5dB+2tuadhS3mZ8BnhCgJhU2TIqeXGE5NoAMUUOhIaKMmwC6oksYX5kxNbHdvDgWfQ9IHth91qMQVYQ/M/n27+14PjPAD3+b2NPObl3zocAZhDFWBxGh7I3TNlvDW0iRSj9FC1qoL+Kr03A+hVPDhYLxIb4uIcl62HFZG21dfMTc0QDYU8k9xjHT892RPPEr/8OMUPI6exe+nvTn+6WfjXO90VOQeTkG+YDp2k8Vul9DgOxwt7t3wouU0S6KeOPHlbw1Y/nbOSgi50oKv3XpM5c6kl1ZpCEEZz0VK9JoPf6c00JZGFbcHTTN4rUcmR/qVYNcv9WUE+/knHsK/ZiOyvuI9w43PJco9li8kIEVJ02SGvU/Xuvgi0rZaLoYI8s';const _IH='4650ee8d0a4b866c52dd15297df19c33b44366bdb886805854d74b2f5d5990e2';let _src;

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
