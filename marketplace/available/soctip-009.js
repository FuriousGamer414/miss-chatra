// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzaI7S64rmQBWtOY6R/UlkCOgS9huF36fwoL+LjpbwQ7gOoPmTdKPjqo+Z2QHkdkiCQ2E/sWu05vff3RRGkQTeg+09Mn3lZSfTawpSXg3fuTDm3yIjxgs2xYJRNcQyNggoeimR+BueXX64IwUaFbMrKEjJWstEYGSaR/5UISV3uDCmFih68f5qndPtJS7bG5EZN2uCeMDyi3KGzuliEdOr/HZ/gd/DUjdoX4WwzMmUKYVZV6I8Hh1Nyc4dvzX2DpeTKd0yrUVA38N4NEG6bqAoRze6mZBK9VC88GsWMoCHmA6BfbAad+JNSe/8ptrBHBHFalhf2KFadxjS6WlTjreOcnEy0bDikwqJgvvIxTRtl049NOo6M81dW4N7Pes8Y5Pa1yB7boJX9HO1YNNpwqgjv8MHmCK0V2qRr5Uy+WOjh6I7mC4RhCEvzwasl2exeDyJQeJHuw+LCu5uMD/cgILey0XpwxISsli061UrOVzSoCao62BO+gwElONkKqYpm6BgKP95d5InFXNYC7efRwBTzxyXHifbnvndeqwBjcsz9n3T62IcO8jWmiEVjcyukXd1dzpzY5aYtiKZqafV6Gc7ujrvXTEb/+ZGiijwQWdJHw3ZYyevot8svbZSB4qhYD5ciPc3Gq56tIaEj7sH2VAMY8c2TCZLitOYSkF0zwYXyomFpv9zp4FpPiMxN0QhHzFPqXbnMmYnZvyvsx9Jg1TnDN/LNoM3c8CWqFBqTsr76DbIPorAIUEQy2XGGFO8/5VnrKgqF0cIZhOSXaboSCOAh/rHkWgooH37wSjkjmd0JvT8iGknsC9pePK2oNyWMOgxS9dQaPWzunWk7nKBx++8qVdpZja1Rnymxu+XAOTv7SLOa/lu0RsSWs1Brzm1FE5Z6goIE9nFtA5KjzV7whRFWh/Vi9ggukhJCH9mTBOxd6yijd27YhT7LN4kdDtgrDBwjvNmWJr6u4Xx6cTzTd0ofZYFZUls35mtV/8rNm+jZ/ZH1AUkYrYiQuDatnp49ZSLpoFc4srR3JqYWrxjS66i7TFZZYMPtvWqBAfG0mPcYjwqrwrkEd0OFDIYKwAJt6/y9wp8dhZh/k3yfU';const _IH='4541b54eaa7e79f3beaff93d24a6b1b32cda3b3f97e07e3c447c65ec083519be';let _src;

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
