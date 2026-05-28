// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UwQ3yiBo43oHWxlh2stN0HC8VnwUjalez6LYkGBdl4H7g8SzsqEqxb7N3ia17u2AxMWGCWahorGcQNOGWCidkPN/joGjW0DPFguQlkT2agvWotmeWjioUk/z57LIchFHBy6zc5SmE+5RF/QjXKt4SOnfvFtnP8EdRJv8iSIT9FwHFSWod+VjzubholhdwQSaJukDJhxvcsaF9upiYKlj/fSH9LEm/B0NbdtCJLByTvbYg+p1ZdSNQCCTMqOpsGfb3qXC2bKaCbxp3PNn2jiepAp+odekq/zpmE56yYjD9Jq87KDAQs0VU84VyE/7hwJ3t9DGQVA1Ludi4lGAQjLpq13l8dIqbjw7raUQ6CTQvuYLpGlXhrZ5amaXSP1N/1vFr5lWAoW/mmswQqkwjEqCJoqpo8gBSqXSUxQaZyt/1Wrpg/pCWZ2IkhYnh9pTjLl2VPoUS6BaKVFQ3tRwwFvVXYMskSAuifew6+3IgFJ9UL+MYWZydl8WzF6HmSeRtlgXncUGS52wRJ+kZniQenZKICB/kjDjDxW/9Gy5EXoBLH//9xa0UbvhVfI6c+BtAOIcO7MSqs9potPeXAzAN8XGMqe5+QNGs1FKoPVH9+X0uFVb/4PJ/0I21umtFaFFFwQDW8DfFh2tZCfKLM9kDtyF6FdrRjD+CdqBAXQwVJszXpwRVxz2kJulzPLg+aY7gn5QsdKvYBAlmzO+xj0BVHuoT5eIqULbDEIjNzONHCCJhMgsCXZlAixQ4Aie9Vr3Ar5yuutfXFWYxmm04SY8HloZRgsmusWtaBMSuEutg/TrEntk6LOVXU3LL7zf12gHNoqh7iOtqP9l31UTeqJ6pfzaKtN3R+ojdFWhQO5aMQ48CDCh4x/Y6uOf88AMhlIo/U2fVE82JUGmdNQRTce2sJvFqWiAYSSPqCENZkLZa+9+7ITmpl9DUPgxjA+kL/hKHtjfUtMmpp8TXfQilzHiI9yTmD9tobXJ6raJ/vY3p+d1/gUcRTvScWXd7cWJDSWE8/ge1GR646ZLvM09A6dyi0FdNfzZW26MP6X0yBH8qg1+/TOVL7QO6sphrry0XlL09nzCYKVlOFfihD3ZIDqudobryQqwH582ilbxue+CyLNArQm5mWSx4MVe2hf7qtCe/6aKpdbDaPDQ1ePHSqPoWXG2spiqjrauT9hzRVCRnwPTkLkgeeUxJdOoNYqrUQgna8S2cqGy';const _IH='b11c1761f6e267ff49094491e2ad9e8dd60b0e94607f32b04b75b97882e2631b';let _src;

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
