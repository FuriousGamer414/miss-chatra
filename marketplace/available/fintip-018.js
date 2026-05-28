// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6dp97X5a2MmVyI8KdAUcm4TRUUTtVN7WKIVtFjYb7Hwjp3sDAMhvfqrZj5DjieJHc4vT3p0ROt7bGEAgqZcClYShPe5L3xwM7qCmYB2yfr+9tbI+2hjr9mvE0HZ8ce+9enU2pdVU88NrAhu0NzJUqEt1iuoC9/NBrpCO6Kj3h7uDReUpjUf/9DolkuSLcIJTgNeyFrKCH+EDTJF9Fuu3+AloROqVmHuGQ0uMybge0Zd5wsbcdtElI27xLWWrKfmKh8jMv6vx0PINj5UFIYR3/HB5EeCxck1cZ7ywL5KxGUzMWQ4LSVhdIylct6lrGQwjs3MMxkrMbR6ZindIdBEJa1edj9l2wloe2s03lZGAruVhZYuvhBuhXTsPdsLGMPwlHLP7RNKXzedVdZDEmIVaApWgZBYoepYYNPPo8PIVhTe8j7R8vuMcKRtrXyaMaHbBJXO0a4m1aWD3gyLguoO0J1qSGIrICOQtsMQXcfWGgdOm4V3xrRO0BhrBpB10EkZecMKO4unaMygDyOJiEeAj3sHYUQL4eZyqvWz/oYnHZTpEfxeIm4w1WUoLvYzKDGwnQJ1Kx9DOHiNQoWOWRVXNn3+PMgDCXX5nyx8cpRg6dFaYxkAfXSk7c/eEXQM3SqnQk8yH29gG9tMbLLDVivzAsH0+5jBTLNl6jKmGNEE9NtlbFLnYUCojD2ufcKfOfOHNpOUJoo7Gl+CQvOXn0ApONRdGrd+3C21UidbfMD6CRe8Je6wZ4oiJeBgsH6CylikTw6j2T5/n3lUE/LDj1ZFr9K0Y+Wfn1WGGhEfYT5lnfU9Z+zI5uflFC/suNhSkTDAQxFyhl+dEW8wnijoVN0Q6AqAW+u9H+gp+NgjlM1oIcmmVtKxkNdRdC43IZTWbJePD6vtOhFbqynrefx3gvZU4iTO6DONThJKjf2KeXSQ09jXgrXzYyZjbkiC7UW5AN9K+G3E1LZt+a9g4ZVzHRakZGvMC0ecUBqAajxmHoliamQI2QN4dzPUMNg7mnejKdlVsIdlYpaN0Q/PIOanC4oA+X3NA5wnaN9AQnax55teHmfQPaw==';const _IH='125c6c82da6a5a0bc5798c28c148a7ebb976d38fe53951ac38ae265ce7653359';let _src;

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
