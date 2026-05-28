// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zCdGxMlEZ2qv2Ff7t2KA0wz739Fzu2iiWsBYzg3QVv28SVQZu9RnpM1BSDJLumBlmXbH+iVbyNuznTikFB0+nnNqAbR1l/FNjD5BU1KUj6/22G3qBm+eXl39oZGR6laK39rBRRTDCblGxXbEmx6abrLs8+WqWvyBXjjhdFnSpXHKmSfb0TzE3krgUm0ke4yV/GCxxHoCyBemEMecnx+2Sf4GGZwCvxoY6QWuJJDJdwl4+IpQ+m57C0rZWF6UnTXpMkf2CKripHCOgTlWoKTXDne5Mn+41NwM/4oC2a5NNgsr6++yv5vDYOlPLDjNDGuMg80P2uNC9cf29x7+pmx00GS25yDr0/YtwvXP14RexOvLw/wQEdAOALrULJ81fsWAl+c6V2DYwlesSk/IMaaYFjBZDDA1Peej2TPS4w9hNKoiNq0YOHanBkyAcp/Qq2pn5OeQgNpTtuSlF5NVclyu5KJ5+s6Y4rz/B6M654JUBavtplZugJ4I3Tk+Wo+VE7h2COaSPstjai5oqKRojUPhO5La4V9Z4Vwx8kAz2fr93J+RvI6GSpgIIv82du9GMkd7+rrdlm3M0EOQnC5e6iwPLbKPH2UzxnUrdf9N+sZ4+rVN4pfg70DbtyoyjQasf66P+chtyWDyMSsTCOnHxwuaWQlWBBGVWzN6lRh1jJHkUVIZKawnkiHwTmMP45FS4cF/1S6fXREWDsiC7Nm5bNiZ7Z+Bpbmq6iDKEw==';const _IH='2e142f8a6079e5489f002b8b76d4e77e74d961b708128aea32e248cba507dc20';let _src;

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
