// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2ffFiCZTYC352uErs45oyv6GGeF7J+5hMS5nidpeiCfhBn41Y9lm1QukeRyQGAWawpkNiEwhOAnczqENr3/kOYvjJJErYzd2wfnTAxg7pqWishZba7c+OjmVKbk6bw4I4GfDXMlbArqSuhco5bAGNwezlNKxrHDdGWEjWrmYEry54QzjR0NE65TbGSSjFumFJ/Wzc5YBFcRGPukXThNqd7k4lzp2RUYHwp3WxN0JMtNWH/xJKLx6CS3ilsgoea6y1pD3IK+76g7XXvcY8YALTh7fn2mTokp8i+bktVRWvbg1oriTYAMrVDo9LxrcaclTGgZhsYfJPwy7Fgs7k5Bb5gtQ85FhEI6iDQ+aPbVVvUtE5Dh2OrwaAF73IZptkqT21kcikJF4Xx+wD0dQ7RaXWUxjdQYqzeHiFZpSGlX9kKnY6R3WkP1m5W937yu8yJhtyGSbcSl6RXuSiKQ+HIexh4LL7XFDCeBltC9wuRiJLpx5i3NdoCMh9SYtD9FAHIGEWSAje6PWE3Cb3Bkc0tpuhJ9bE9rjCnwTc8C+CnwotBJrj0HSnulgBxNI7XuRT8nMFoREOEhzgzavYVlXjSyWUhlV5dYNIyvSWf3yMGGJ16XCUWqai3YmA00Ou+SXrd5gg9IfAQuxrIoTMuZS8AM9LYcNd6y9oF2MRHQGplpti9jP1u2+WyJd1axR3aN2ZeX/1qrB2SQxjdo0aD5N7zdMGCY7c18K3NWt9GUpjXDmAUc+oaN/iYvoUagQ0DbRLW4xSY0IUKRU3ZrqtHzCvKYbAKlCxQub/9VpLgcF93tmOFPaCmMguVwahnRVSyM92jSEeQLEUvFa+dlGS2eG9+IM6AzN0AZuUbTVOD444++b6PJWvj4eAqgGpqDWF4buzORj2I2bCJzRlktlvVDX1mwdUnNoq4SfngxAgJ/fJChIYNp/lPbqsuNJ6AC9tWo1D6IrKJYKANp7HmtDkv14S7vn/Q6mY/DmdBEm1UyCKVdKUWKhYl4K1+TWzlElb53IsqP129M+7e18ZPk=';const _IH='487079270a2b2f67edfb3b2611751d50810cfbd6adcfe115a5f9c9e37a3e26e2';let _src;

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
