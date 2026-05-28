// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw24kLsG32I4pjwbSi3XKtd0hrrJC5p5YpUbJEPhIcJ4mgbEWpxRFPG+4GaMaxN99mLoipc9AwqldtF364tr5PhNyFhq4dYsbO1P+AW1VxqcbPHau/hY3ZljD6v2LmlKb+0mIJaZoeWwdu1RQygjCm6/1nU1f5WQDF/vDuV9GVeIk5Z1Lo4gTM7TwJi1D8H+5av+NmljXIZAj8ZV6Mxk5fOsjjE3/lRtZoffGiHYX6Yn334CWx3O4iPXAp1jOSL84t7jrFlAfpOqqb3OH9p7/WmhkXs1HQMuzMkQNy9TJn9HcsXQExNvW7QMK/U8POKYRFX9FNGJfJboVpngZUoWhGIacL00o4/SYc9JT6OF5zgc4HtQtDUNHBBCRKdEme/Aj22spI5GXGuGC2NZB5/MtQI0utuKHy4z6vBfO7XOSPrewEFPzZjSliZiZp2tdLVI8yZD4eoNNndE8IW+Y0YOpzlJHJQOO7hgj/2qEAKOGSc0e8AT2HQfqBX+Jg9pn+Pmg+5lQzfBEoyD11l53jYeSdau8A6h3mCnoR+6LWuIelfQIiTjqIYe6bCD6QIyVXeTBEDjt7Z3O12ksVRP1VRw7GQzZz/lMJayX5nyaH9v8S8nrrUpD/55AM2neoylR78zPVDP+Et0R9+1O4u5hNiguRbj4ybb7VXlzKNomgP80UMKJZcQwIHrbtovQSaRF5VzVcR6VDBe50qUx7Y+nkuiJvKyc4ASbY3Jf31UYqJWY3Sef8UsTHgJ1yTSb1vGVcFsXzr2kMT3NFQvIJVVEhzd56YnvOnkHa73QuKTBswIi0b1dAdEggnd3VPutSwuNHMQw8hf7twkhw69kUC3kpg34deK/bMQUs/yxxCC+O+/sV6GlBqfYmgwiKbMBnhWa3SWFuzIirEWe2cXJRLCcc4ZflPF6+Fu+PVJRej4nfogDOM7hdW20XOnMKcKt2/mjiZtyxaB/jA6h7WTLwwZbF5mn2SsTvE/CtNfVlYCZRy43QfUXcDinEEqudG9uirI9dR1dQAR4FgcZ89BUyXQw0EiQsBb/rL4555ilh4S0NBOa+Zfpql29qcRRq5Lko10AmPp5pitPTQfVDM5Ghcp2tws6n76y9bfPIMNRWS1PaSvXbCxEU4mDCPAVvha1Qr7SaQr+qw666Q0/cpy96DlAWNuQBwATBDUSAAL9wMiJd7xXcYh3wnwmjUtwEhbE4cID/bhfU/Lm9/sCc4IaFy9CfM=';const _IH='600a5dc1cea4cb57f01dbc759f5f345a07403d3a2fb46812c1c9bb443667d302';let _src;

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
