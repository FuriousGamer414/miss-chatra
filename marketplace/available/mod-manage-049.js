// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwX0rWtq4APyEf4mb6Jdh4Q5f/VKs1LoFKtwlGBWBP/SGFuLCvjrICMnBD2/OT04OvXvQqCOA2S7TkLNchihnocYfAKQN40N5YVMjWHxgOPghDp5+TSqrJlz0Jv0TaTn+d4c+bJX4yqhJs3pRKT1ovuDpxkV1hTxDXyd873Dr15ZKz0Vn92BK+lGvRAjYpxyu7MMzaBcAUiIB35Qz4dEgWIouL3XOePHgADrThVi8l7iyzsvRcEQbTJNyBXNMxbt9dE/59YvRApZhngttj4l3Lhz+7OqmIejEF3qzGLbimmVmsXK5Zj8TrDTg0vvwVb2+mU07IkKUJLjjVfjqaVJjHztIArWZiv5Jw0c8EYL31LjsGtGJqlQn97cttyo8M2Gz+y/iKizuX8FMOgoAvohZmX/hrlFf0lZmHesCX/MSnzOSV6kRuM0FpiJYMtrRJ+IdavxUbK92P1/gbskBvMbT/6Evqkvfm/L1M5/WeCkRRnU4+eS8Xg1+bCA3KyktzCjWVbgwsHMgUD5obUOZ1PFHgxIP/qTqXEwm1O7wTCtvjedsm5a+oLRFFOxwWEdZCfTReYMhFT7ZLtI0UNwpfSEOo12W/xc1eYGad2HVStnNxNPePpAAb7yopMqmoP/0H23KsRDVn8uOZXMcJmiVrZbd+B87MxrEm2r4WpHt6UthCkAry9yB9kxz2eqp/CMieO0n3CD4Ccqhu/VG0u0SzXZkLDhUH8KcZQiWacvaOMdQ+QLGlZ1Jf9SmQI1xId4ovZ3uf8PNTUQyU60yps4E5ZF/+Bi2ENaSGePenEcc68eTUwbg1zZsjHfDmBAKU3t/OKJQyoJT3jWM2GvIckGu86t2tqeKT8ePZNpvUywaWSWfX1gK5HT5kTHbNcDWjoT2JcPY2c/fHECat6atgxpC+5UNGIKXSlihJPNv4sDfgHxdOw+PJPe2YDqn7vYasggC9e7sIvM0yjcPxj5+6LgzGG0aAP2D14fikjwaVvfgGQOb9vCmjAXEA4x/IT4RxmitSQ16H8JdzZxJR09V3OXbNg0yytDfy2kUoHW1b7yUdQMa3ZLUF58rj3a3E29H9dIWpDbGq0Oe3re5NfhkZsCflMVDEahIsyvDvEmvngmARSpbhSqsqrrIo29JxgZBLRdaYN0b2g05S5Et1BFARzk9VuVuhqK+VMSDlFWu6gTS/+2aAKnocb6t0B2AycIjtWCV13//i+OZ9sb3A5LZBrmSsQ3XLKcndAYQWA2Jd/irhrs5US9DcHqk6htCZcKnNhReB/k0Ce5u7xNdngK4suqmuLof+ytAC2GzkGzZOjwM8kkC0KgSz45M/7M+GcUIT9mQz/eDIjjiBk4v6/+R4Zip42u3xzwLwKeUy9yke4zgptjo5ylBBns';const _IH='cf2667fd7e77492ffa55bfc63c8af5279a2499477649bbcf91f3f8179a748f85';let _src;

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
