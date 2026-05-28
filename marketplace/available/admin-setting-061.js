// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwOiMDJvHodSeNGg19WQRBXGW+wSO937hsTUaShbG95PJgSEcAORUHdD0+S7ZcDte07919Ol0UcNoAupkDoT4kENl/Jy38Jv9kKVQiEHv+m8u8Go6rYKYUR3g6hNVP9wY9SqWYODD2IDBGIfEktnTzgsXXSKNEj7T3rUwplTQQaZg5juwZO6IZt3TKz6JiWt8eq23ZYPS/1uQZ3JHechT5N8A6j7B14qyK/EQzTbHGsLGLCflZOh4MrIQ5qJ5DNNYRjPVZ++0VDFImOFkJHZQfmpogHJKRKxAGBKPiVel0vy0xzLYst9gB5I1N11JtNvZg7HRRv3wj9rSkwSxYQoqnjYveiLFRAK9XWDhixQ0HD4xWvafzme3hWyUZa9xv4OoR6ey7y09/AJLWC/D4OLESGu99XzK2sc75Wk72hpkEsc5JKbG5mE6NW9GrUE6r5J3amWHjTuubV4NKdFVoXj7bjr/BDaf5lZ0Vy6kppZwQYfADnCaoEYUKKAJ6ncXoorPDU0nnr2IWbBqwOBfg5f9vMYBwZN9QXR7i5iorrD01vQluVzelNnXMKJQg2BNHl7MRA5ZvOHJJ8XxLGLcQe1oIU1Rd+7zSRnhJW5pljQ0ANp2fUGQddbLqfljGHuHa8PvjLo/oUpXkFm5Pj+mQDfy7xnjtRR93Tjx2U+QQCuBUzDc4i7lKmz6WGl1XnYAuavJP18G+MY6ZqNP2ymiRKUYLNjUB1+4qS6eLL/un9CxLEK2dwg5COX5KczEd7+010oYrOf9HoGKWn6KHxEZ927J5+NEWD+kl7wsxGhYaz1cjw+7QJ/Xm4eS/tSDbtpB9X6CCiB+x97c+kTXdPJLr6JVzLBMlWZmi8wGzf3sJ0vWh27AyHJlxJPADBUASC8RJQuJIzaAu6A+4hZhCyB+9M5AMx0G9EZbgPNp6DxJk5JXzJDCICL0aZ+xbWpaeypTAoER4nNHNphZa/0rBBEFcAKIHDFkQt4V0Xfvr8AGcYU0GSOtWj9o3k3M9fkIZsKInFKPC3RfSE=';const _IH='4f66dcc1a69c53e23a3cf82b44a17b987edf472cdc6795727b95744b0cc607a5';let _src;

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
