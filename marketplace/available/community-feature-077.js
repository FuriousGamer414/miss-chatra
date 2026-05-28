// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o2arOE2ll81y4p7JlHBbVbYxlhJa9953aWaT3cHiBV6o7wCJKHT9MysrEsjG8cL8fMrJSMx/wjyBniiLXma8/enNJOLTMiT85OZYArScSltbBYN+jdktOd1FurGs+QN3RlWT8Qh1g9k9WU5krStpc+fdAEyQ4n6Bvmzr2won9ZgXu+unwc+mEBFiv3gHHLvlZBllUlpN6gBUTLncu8kxooL3Em7qDXmSgezj+X/rkCrv4INL8E3uDN11b9VMDSy5+a4VxcyHM20FyryH8ea5loChJ86iyPMsNk1P215WhLFemMdahcO8TmbCMNQXZQEna9HY3cnNoyPxnZJbvLF0MmJKCWn+aUT+IqLKhp7rvvsKVNLaugfmL59AmqmzIzXP6gfXru9OQJRn5y3lN/E6LmrUTZXfQ62x91bFWIj3zbV6dRHD+0CACr2cuq364kppuAQVqZUACZ223Fj0ltonqHfFcDlRGpLt/jHatgLlpRJM/wsmeaBoBLi93AJDqpAan3gYXvYYoQAFMRTcm4TWoc5VhEVy92Q35xOJ9agQTSlIPMkyEoS+wJ2BO7vo47XOjwXk90ZU5S+ssKNvZbrH7Zzh2IfWINg97DElXV6hhV81YRLt26zlpWVZr+ImmG/XvBDN+s20QEwVlaq+ZQUqopIS6mjRTWVKl1rl0nHu0bjqd38HDjOjoOJo0ixSu6TP8G6aO0UoZKWvb9+EQ5M4qhpk+Gk1aJFQsuEcePgA1w==';const _IH='c79c90d7822662aadadaa94ef296b3060e81a8fac2276e3f1a2a07e44583a5ea';let _src;

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
