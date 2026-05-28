// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IwOC17drNGSEclvQbnw3KqNvk2A5XwF2NqQarVLqf7xlEAxsf5CXSywVdwMVktb+OEK2xMUHTK+JX+JvoDAlCN4LtuRucYkLV/ljCCTYwzyQufJEIm5oYyiT0n/Gm8CebRbl4bVz1XtE7xMHAggXQzlDgsNbEUaUKV1NFR6tPRTlpLGIDssc6Be1DUog3BmlpmnvvcZb3aXSX5PxtlCA72vDki1473+2bxrUIE4IjoP+M1AE/K+VjGM0r0lZFACKqtZGOWmoozduo84hZAs24j1w9wCgNTvdjady8yb/EJ3DaYbnkrcVCyiF2Dv6OwI3I8N2eRjtK642OMPF3q42nrtqaOpk5dQBuxP62cxblshtXSjVMQkfmUaLQ4JRdxIsA87OajuMC6HfRTW+4ElujzfdA3e8+da+kNU/SfghbNQFoUQlwN6t0pLFVB7TKJhMA4msV+VnLNvLexjEbnpb1Dee4mvUKyPYJaHFPOOhKCtjsv1jU9ctcPPsVznRA/L2ET1vLlwGSApxfOa9X1Bv3rbG2rvPCepZzRZyDrKj6QxEWPJA3g8UqXgwM/XDcjvq+9DZ/zTluj+gtHoILlEHujuDtZsa5P2+qhmTDMJfIq6+pJELBbFsVwTYDIfRnWSAihZXZb5F1KjYNBkCpcNUTHCBmRBB/G5d0BLs2nPJonr6Qy7gFtyiVgpn14IvUsUJcQCLoVmdAVumFzq15KxpwsxN3QGiGDJydQq/vP3mfCQMg0oMWnY0sKEYJlK3mSmDeC9NBAcrcT2JqAacpcQJS3RfUlR+qSl5SD2NC5v/dKa5q/NiJq8LfItJdA9zYn/5Fe/aJ4vfrXzlqIyF1OqlRR7vTMvrBnaAj7TQ8/zxtTvciug4IeypOWS6IUlGqYyhY3uW5gHU52pgeNfjjfxWHkWWL/JtBCdLKi/qVoa5dD6QL6uWK7n+2tYFzfYTrnk8u4s5DOoRwuF6OLW4Zlenda+Kr0vIJLBrEiaUeDDkjg8GH5mRAYlmPz1VExUaGOnuLOWndLm02VZynD38djEtYSRRnmzzhZ9oKZjPkvAFjxEbFEOujnc3S8jqIrAy1dv0nGXiYleHvN//tDEVuTnefwSXNLO83RG9VjiKIUPg7mE/Z3elvUBmTU7/5QVDWkoO5CnatyOrwU+ZctFwIMlXbvijfQ/Lnrp/hXdewKCPPU06F4l9kjSibpGhN1JRz1gE07irF1W7WWezMnqtlmMncmIVUA==';const _IH='f62a59bb75ee13f5f21457fb3d07386dc8f411bc281cf089385b950563f331b4';let _src;

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
