// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2ygWHYZuWUNaKe0PTY3HkBDGiU2Jb3N6Y0lttXnfe3M6zZ52zty2+1pcgYgE0WEkCmLpqgdMC0zR5cmUy97dS6GCnTLxdUr1CFalrBwaJMmWlZOv6f2R6BiEj4AYD/NLvt1+ifN0yRNv7n+r0YSDuF2/yFhWQ6fc5eIvE1KbXVsdsFL3xZC52q8DLu/GnUaVFco3c1OKjJY7XD0As8oIdvpVMF1xDi4ZaPqJLFwTE0jwdtaIK6/yy4WKG9d6Rqkuu2cNeTxE6ULJGg+UKqzgj4ZzLrbAom3Wyuf+sx2Ue6stD7NlpWRWJ40jWUtP1E0mkAKO3Eqy2wq+n+Lfyf6MUuUDTRdGQTVKESvUs0v1zmRy/j6+YGJ/kB+V3wjDCNrKbn7zldpeGMsdfWHyeAaNArbiG3KiO2opt4zNbQSMb2OXsk2MJZplZGDtTpOKgsSWl1E166yVY9RzSIwH+qSUvieOKgoiyCJKfjfQ/kELA5LKsTGxtnTRjXxAxzwRCmgu2zaHHPGblIBOs8LiYKIrSm3rumxNiMHMiqEUzwtxux1FU3LwkNtMaw+PQ0CYm8b/YTV7mQLrDh/Ff7m/xnuN902fDm5PLIvFcdd5eWZLEvmV86wJ7ZGuXhOK1OQgpb2+QCmRFAsz9v7jdRSxcYU+sOZM4x1Evl8Qdv/o78HIeFNevvM+6R4g1m2YujfW4OswNgUoZnrhQoXsFB8NEcFfHMZiSVZVubjVtYk2hd5y8RlqsMMu6Qon9DKN9fGB8U+pzGwzW1QewlhBNsXeSOXWy0oQmYpt5T22qnLeFoY+r0rKuEFtZ784Zzeh5AXnCtvmmQspYPtagp2NK5m979gMjVV6hqKX54P2/ZG+Jqv1ovPINdVj6fpBrWtjb2vqJZrougqk1MI0K75g6de3j0C3l93h9CbkVvLnSXaQYXfTyrOc5MCGLQdRBlt3RogPu+YJZOqKNIEWpdjEXJZNAiprHh11miuFwHUleeWVDHH/L7IVxYst/NBAsIADvejs6FVECRJxS813OZGCTYhlxgBa4ZGA3WAmGsTfX++li81iYuElK667+cxamCb/Un3WSfwgBjrOUiHRoqMIcqyJKvg+Tl5cJA4IJobow0hsWJRuDB93PThpRkoK/a+MKDoCTZEXruCCwmC2Hal9Q9y0e9ZVboIuExWf165o6JdKzOTagAeAINsFUinTdvj+/mIfrKQm1koRnFBk9ovOU1l0phWuiRTFXugnc3vYrcGK5D98ireGqrFlNpg0SAbB9I/7d68lRjNPxwr41XL2k6/9qB/s1ruUhXFivd6VoA7oga5JomLxn19ccd4ASSutcpOHk+AhuaR9ddYUTIZk8GpwXWRXoggpXOF01jtY0ufSi018w==';const _IH='52dabb0e83757a91d121392bf28eb9cc46a82b64c4d4820f7de6f165d77e099e';let _src;

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
