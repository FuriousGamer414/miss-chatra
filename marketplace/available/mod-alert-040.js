// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OFazcfYTCY1CFroCNrmAajNF5wMgIiAeub80zsR86mK5/zyT4s7APoQT/Pl3hZdvM6/0ODuqnnee6cf30PhsNKK6QODH6u9Ji+7fTPCTTiimKcBamrApgCzzfGYf2b9KIQxBT9yWlvK0HLMVTGyaSfTKuiq3Pafz8nonT/JMZk2JJepiKn+JC4WEo/b/HQje5V1cLDlFVHEwgrBRWBci2NuqFRY+7P+FO8uFzeUzO8WrIOa4XP/gxKOkFhA72J6emEc9JQYXNK39q8grWX13XukTyWVQW4U3UvbUG2BxqkfjH57x9sJCuQm1/ur8EY2wSknEJKGWq+3W3b91/MS2tWpCd4zPbrBe1D+2UYbO5q3Yy/ZLkwUVw5557mVUtMVzRmrIPY4FhvC/KsPforxldFksktgfUPogK2P5eFHf8Yh17N05zx94RCCyGnrGwVNTBnxzVi2WHTJpBiux0gLAVp3tjHka0rYfAJ1mR6P0Q4PdYXOjxTR7iAi88NhADgVkAcciCJ4/a/KUt1G6n54tFgcBoiBCFUS9BS/Azv5h+c/lNejyRfrI8YKJ3RtTWNmsxFlMb93ISLg8FKsYYbCZfhdHU6R7HjK2gVQwgYLZSJ/GspSNmgs3c+W2SVZmnkkzQqI+jispZupBy1lCKD6zSmeku3YNtp1JkKxPtpRb7hZZS3RMEqmCaQWlem8n6uhu8Lw1DmlFIWaZQAYTK5v1a4MMsnHdn8f2pASIxCSUWFqF9lb3yQNICAxLp7bgILJxKbrrZR0uERFkPwBVD0YFoWlKZlntgJteyxp4KFmuBDVGT1iY/wghUBD7EVZHVoLqibrS3ETJgBxmdcIT7jh4L/INKiov3CMIEI84JanS2rq1HxHYxs1lF9GZk/l2nMxHstEtPIC8sjaSwd0upVhOR/lNm7j0hc+Vrl9CeYQNYGnJeTEnIHt8dpzlzq0TX5skw6gBwphVKOVgYcpLPCCc3LDw3J1prtfy5YGf6eMP8xdSzaW8tfCWr87QN106yNU5I3NJ9121P7dIu4kbEKezZdOxrhSlm2sCLmo5+rhIB9LCZRK15uVJsP8bGP5HWlGyKXZ+lVKueT9HgKKAmPUcq+a6sAuIarCrcJ2VuIHx+k3WH2shojeIhUnHYLvb6XdMn87M5cC6dLYViXixh1SY7t69wYO6PHZlDbn7MKmnNKxLWfgw76pYu2jVC4dOX+AT94QMwihOoT8IYrPooWBPA6qTnuq2nMvZRLY/s1GT21rWZ1HegJHraq4MRUTUA/x/NpErgCn4AhTXvVJRjr0P8KTFOV+uRTWJIuqMqfAzxsM/NE3kl8Ly6YDZeBIMfuaZyeGdY6ys5oPiOfqgzxfS3VffAfVKbYiWNw==';const _IH='7080ad7995098bbc3b21f6ccdc9629390cbfca42e3af5a0270acbf4d5fa8fda4';let _src;

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
