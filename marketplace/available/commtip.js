// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iRpZ5pCGFPCe98ydh+rds0SpOtwpF1YEgTlL3zN4Oeb1iejzKQT7/DdhRlGK2gFy5S3L/8Sw74mKGKm58eQTJ/l64F9oy6jOdaNq8XSwQU8nUYwpI5Qha2VqOWEYMDjytlWkhfpvai5YldX00ESZNbCj1/KGxi5SKY9wHA42eHSZRVA5/kGj7SUjQIU33JNG5vD9HtdyvBvhUZjaxkUahf/AOpM7szVJbl7ihGBU1HC/3WTdiNc4B+xq7wZPr6zmNNx6vw353v7lGxv+1nDfbxHj4GrmDldZcvpR0jCTXS5FmnXBktSyvTW9TvHfLIxZUt7ENye9pctnA4dnZXsMu7f7KZGwxR70Dxi0ZRVx6ymlLfN4grMrIpeW3ZaiK8T0rQL6LH0+E8XhaqA0mhR33YwEDQm1uJX5wm6I869q7RWk7SIosvW5zdwOaD+IjRUbUO1Z2DMjJF2wqxAaPMQz09AhZcYvqVvC8Nu8DKAwy3yrhY3LgDzFAgKF5uEQC7VqyHfjK8VjrSKZX1HkwC1DZW8z1XrJbSDaHfUTJkDX598xlgmbCQihBEP1xR9uYXkwwfsn8XbiVM0x6hSZY1oQnJJnn+TazPysLes/O3kfTEvJcH+q5U8Nge9rNGRJBGFHJEvId2etulN8lrXuBc4dnppaYV47k+ytYheoy9Kgt0esp9py9vx89N6o4w66nbsjEGvfBLYdz7lxP5hHyWJQs0FYkjFpOGH1JiYbtIISNGC9q+jfCRG+gbH3DNkXVWX7GQJ40inivMqDe4ja/AjNsdwZXsCCb553xrgAf+PJNpN1L1TF0Qz6iZFeW9vEG9qSMv6gv48l4xn6JQMc+pNbpn1i7o2tU7wF/5RXOdpjW69co1N695OA3w2C3CVSlkw0REATrRgkdNP10eJZN2LCjxPijQU+taPVJyYcubMf8NCO/Qdr3FV2QaceKCpEOI1Uzbj7rOEXi67rSotLfD7GQGpJ1fK4LyHPT+0APkGvxZxcuuGmkU28pcurlNeruOSFq29yDBnLjy2JLMaugMg45L3vKgcTspU6/YiuLuzk4hXRUX7Wz1TUZ1/cCymdsGj/hDu7qK1KNxaWeJGqs+udmsojQGNbzo1LhMOhe8MOMqxGwSqgQQPOxT5TcBPY+Oj1TEoqWkydVCKMyf2S636YObrP3xqkFV3AnN/fpxKpLQJWcGxm50TLFe9qPm0lVzFqtw==';const _IH='52c286c0826ad879d15e78b89fc3e814d06ba0120e8a870a31c2caad812ae639';let _src;

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
