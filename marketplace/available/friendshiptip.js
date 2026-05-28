// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+mEBK/XzWvHCBU0lAS5nvOFfZ9fcOD1bB9F7AGFXpPh6meivUcw0HO0DPibyr2EJRapXhh3GzOlsGMtpBvKJhtmT/VP6V5AxLXFgYBzkqQ0NMJySjs5LTSISXYyYkJlYTY3AUsfS0qJo7uLw/NDEKipB2QAT7DNpSEDeo3C4OiuwNwnmvzD+LJYIP7yWrQT428QmsDAARHsGDcsiZjF5mA1aqlug1dtiIUN3q2o7xRkaWbEd0QmA0ydfwuD3g4Bldcc5B0e4KdbNbZvgIdnhgpF87uTv5CcCeRbPjRkP3R76T+T3yC7YWppwObV9aZWZZnMW+ErzMl52YR292qhrLPEzhjco0Gq4edGfjL8kGCzAIC1iQ/Valbmbtr/gOkBkVznUeoJggYRu0e0qJSBNr6fWV66Ec0aF5ozjM6cZsey6YlOxk3B1MsthYZDjBfPe3Fu2boWgawvxZTqLsfHVuRicMCDvqhLXzyQG8tae+pxtPcnCOADQphiRTZghEMABRJEYtikzplNGslBszZ7GY5z9TFBATdgba6GsuonBxC9WuIBRAuIpYHe37lY5tG47reS86vWUnbs6Idotnny7xUIyVEk88f4GaqcR+F+wjkVKhYeQTZkuvf7jdOkiMEJ7AfAHYpeQ6D1FuXkek9GmteA8naYawHiBI873f8EJihP0P7BpeEz4/ydk+NY/JEgvs4FrHpVXtKmpuKwQ4qQcezDp1dLwAK4JNcLSPTkXjG7T3AyWnyqvB+kbqLKieM6LtXEUQi+2i2j2nxgNg1Vw92sWgYRNcte5o7LjI4LzXVYRbeAp47DfEKHP8m5GZfF9eRGCjSnUATwMcksVhX2Xn3I81D9QkdIWg2k/y0yp421GQiwr4OU0cKo0Ps+bpVbS5y1+gEe+SXTqzxp47zj6jtbclnJr/lH+zbmj+yqDwADfd+g95bnYalVVhzJET4bF/ZyvH7eaZ87ZML3YvfM0Wctik+A5PlT166wVi3nuz8Oder1AE6gFqJ4rgxQhuS+Uhg/WCvMypNu43nSFEjsGVcuPDC/hpzLJhx4WCIfk8htvMrWwPllDqJGp++O9XUi9bk0ugF/S8LumTd2bykafpUTRRAtNtnxP4fzgvMWs95Y+vpHUQNpIWVB3OfRz44uZlDx4d7Zs0zNG0GMvWtxp6v9y+UPqax0rfxZykVboErE/Thp5E3JHUINv86myDzf72eOOIx8nF4RZZ71TFA4raWZuA6L';const _IH='fb90492487f453bd82ff756129001c3ccb7a52d20092194b14776391251fefb9';let _src;

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
