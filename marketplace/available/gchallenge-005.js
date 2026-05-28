// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dmWFwJ0/uNqfSBXQuFeH9GpVNInHZNeR2/ZhvZwHNPM7u+cxAWA/zvCE6/uDs19rGtG5btGzuLQBlGv60rmBunthRoz4v4bgqUxcxfEadIMrJ8P8LwtPAIZps9Sh5t0vgWZYFx4IBRoFHZXRVgyJWZ7SBj5G/1mexXWDJuRfJwPAkLtO7/O39B4TKIsIJsxBN+KmGE5u1BsJE9UbGbekIYew2bYJNkgXeeTRX2r/8ULATdKZaSAnZhgFYgj2tAfw3TXew8QigIPOi0L8j3oLibvJ9jbic+vKie3CU9v+Y1+c1LroYQO6wMGJ33AAnAo8TvOP/1qXW2KpFNEJFvsl6MVbut0+47HaOz8xg2O9aVaq6FVl9E1p7LAOx9XmOTJEtnVjpFI01M4jOCK55or94PV6fU/CQwUMq3PPKcBTXpgDHyhbyMtDtuW2u190x4SZ721RDNelmeNsRnmuQA1uMcHy7EB8WYp5H4hoWt54OHajZ3wE1vhW6XMJv8csK/AU/LbGtcwU3cxFX1ck+7M9AIjOtdaFzzao8ozJStLLvW9wG2sK2y0KYrlEWFT2CeaoIvdSRuGVT3B/RQiFEabQddMX9FFRndKo4h8yzyAUw4nIs2Ghufij8zNeu0+dgXetoR/u4+2go4UVwhZqtScnlWIctgM1CaXs4/5oL1SUDZkR';const _IH='0f12682029307e81699dd10646187a2a3af8d5519f9d24c0241d1909b0225394';let _src;

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
