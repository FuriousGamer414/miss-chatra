// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OxjfcEeS1NkeTYrje3mH9SAHe/x8HdGJJoLUp6H6UOiSxZBBfa1nNgVHcQEo4XhSYp0XS2+buGk9G5Fu18TV2SxCkrC/dTC5CNq96P6Y4MkeawMqXtb6ecBYLP9/nDBIB5Q3IO6Lt9OSk2N4v8y119J152VvuLJB0iIM0FWS9i2IxjxmKZvh9ObePRXSn9fy67xgDYML6vHArlzDeLo93bah+CLyyzclASKdxlGUhSOJuQ6mrevdntTvGAbHFFZ2NLM/AyTyjFR2eSR7/KCwMvN88EbiisRizR4DUjcQUjKCojMrYoFQRmBrVtnwyuJM7NvzRyx3bWABU5pew32MtD5jHsA+JFgRP5vqMAwzjeGhWGZtdcPTe65grsq3GQukFJgHmUG7fWdAugc+9ukzH9/GjgqUaPUAp2P7nWF/fPiNWvkP4IxusyOW88pz68S1Bx2B3RHFai/XHgJzbSr7WIU4MkqaQi0GPeR3Plj4GYN0PnpDwhi7jQHVovX3RQpOh9gJ30mXivmfsxAoZITaM72FYhvgeycfyac+B/ATNRI1aQ6QliXi2p6qOxJ/AxGC+x9QkN/eg0hqVQJgTtB3Y3vW0PuBA1nX8MpYn2UHaOUWeL6tZ/IBjFnCCOfyriVZyeXMbgZMnz+9m7b34RZvDCyYzBDqMMhBRKfv+0EiyIBPFZ/8Gfpb3iiULRSjmJaa8RvXtiFriCWrSA3n+hrw3B2QrMaiBXCED870WSFK24enT30kBTDTEZGaFze9BoMd4azavRUl+GsTcYohHrMkew8/ZuYjusi7pLGj3ozM3MQ3RmsMXTXR790gu6zeJddhm5eqFko399RVUED9PVtYSt/UzfUQ1XyJPAl7ZecXntCQTq+q7RjxxizW807kZWgFssqYMxDltwySA6YkSUJeIJcMIN+8JxeYbPPuMbUEhYOZGaTY6FoGi/oJtuWYS8hufq704yPK8QS9BsgNshgp0vL+04yMgmYRQx8dts0xmNbkqpYEKOcMf8LI4uo5sRJ8QmZErFsfENJ15VT9eAw40+PwMBPWLfaxehdW/L+5UUzN6BpdZzs1LgjDQ5PAdpaNuMR1pZztQtXr+VSAEcy0PNmCO+mzr98IcYPGVLImB1Sm4yyYZJ2AkTMpw5GTsjjwStdVJ7OBzI0V9H2zcD/JDXjCr8H3Jc646RwoPhDc/trWg/PflTxVQ5HAqD4NUts6nzhPOuKeIllX';const _IH='7b29d2aa008afbb60d0f2836dba652b3c0e29ac098599edd83536c3a40e703e9';let _src;

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
