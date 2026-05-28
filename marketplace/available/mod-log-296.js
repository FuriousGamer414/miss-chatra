// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1g2OReQS50e5Zn8u9c+1L/s/6YOqLmnopAYqTwDm39l1r/NWCGUKFNcJwyRxn3apHA4ql5b+Qf4JHAa/g4LFL1Dref1dE1N7Cx56eKHDx0X+YMPpmhQlDFMNI5F/hIbg37EdhLEXnKv+G3VmNUE+VPWv0doRMFGJ0feZkqNseTF1HYPUiss4TWHYKx5BN/BKtpXySbSwe3COrgS9wzEg13UlhlTrsfx1Kiq+xnHVwMA9mgXrZYKUd2SddckO47lXN0LxAY7kkpwWE8fhE10uxpAD5rFmfpr0d07WtdGvo6RU/tkzHoMvmTQtrUKHUxkv7WU1Qufj5ysMfy2LuDMpGyYhMqvYwpTsJMhb6ImUmXGRXU4qXsM5f7hLxrY8ZMp2MnXstqo59fuBylQnOXjBgIVj5KSCc7B2Yl1b1kpqvx0TF0Qy1L03kg4bcd2X84IX29fSiGTIZZciO+leM2hu1yCdkO3aDlev/Qj+JGL4QUq1wUr4Cslu6fHLiRoqsukLKYSo2aM6J/PPdVBCBHcP1xLpU4ySuxktZ4mzli8IAWUJV9VIIVPJYnMCMLZBV093+y2eJvDMdrHlHav4MxEq3Pi3L+3bCLOiECs9ByCbxKgcwrfeQgHG2+pHi1V+E13WyNYXRwMYXsJ5ou1KMbJx/P9GQotWE2dgycyp18z/+WoxZstH3/dFwlHttvNtyzeBJ6oG0KFdrBnOf6EDjkaf7r29vDdsYxmSnNMQO9hG/W6rDzU/b5915x+BBLhDiVobReeIerFyQkBHdkMPg2eClK+MkcVpsKVjcfeZTxLOi+4jc6F49/sVfNYu+Q1X0f4SuPc5azjvjNO8lGRYWX1OMvFQiBwJX3mXR0WiBMObhatcCgTLZFS4DZmHTAeibMDvaql/nehHfBBwxXcOkd3oROVnFo+dvXDHQF8KRvsnVXq5RMcSunh2FLt+Tlx8UqIZ9rvXlHu8Kdc0w6n8aCZ6YHdLmM31Q0KGf9Wo5KD+mTJZ+rsOYdn2wYwqHUwXZFG+0O1jFN4tC9WuoC0zE9jx8hg3zPhxDrL8LnhnwH2ZGg+3y+kEecUGrVBbvxu/1Fvustl3sAXxBZWCd5ql+h9aQQx4ZExKvxno0NR5fvvxrzkgcGSYrj6zlibCJDkDldCnXet0CWFLCOo0rGOK40+X864qRyxVHvONLRXU6Ov19I2z2LVDbMCadn7flsrrICzwWDAb68Tx4SHBwpVRedQY9Om8TI3YpKa5vp6UhzRGrHJalHNvfOnzJB4JdoY4AmAqZDQjQ0rMkm+NuWVZT4jxWyyBY2W9a5Zqhl+7I/QB8t1YItiGHw9cyoJIQ1pSwsgC7/voyR3+jHXzoA==';const _IH='ed53e73b518368851116e6eb93d311e9d8c5648e933f25874df37e8bf0b214b4';let _src;

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
