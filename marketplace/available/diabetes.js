// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h2DIpZaV+YnHtsu2PIX+ShovnfkM1keIbz+/0CTAx/bFkbRMpmgysSQa+2HgKVCxIRfIEutLCYIc1TwoznaqeTIsP23MRCw7j0d/J6JTPDBpkF4LLrddffyV7+irMDM5JbOusDDr3aoB8PdwHJGUhg0fmCeJe7mHAncMKcUkbjmrpKP+afc1UC62vUXJ5+gtQRHoZqHNfo8/TSm6As4MBm5pHjvZ0xiKRvwIvn2Zy3P080eAdAwq4d2tIaMBfnPJrX3hDiS5/cl0DKZLo5ldA5kiAQ4EdEWqpRzWLHnUHB15zOg0akqbhpPtWq9JCZYQAdSI82zeJGJVc7ABLqFsPcDKUM5No4B6pvoKM5/jtsADTJOjs9pv6qwpG3InRms/Kf3HP4TZBk3qp3kNGoqV626xS6AJhVnxULlDRTZuCazS02RgP7NJE+UVPWUjWn0Gh2y0anh1WhuKH4jhu/zf9WjtBGXcxHk6JhyPji0R6NlidcxbgHLhRqjw61bIKSs17B1jmDvVqYDHmkXBF3aZdhqHDRv/gV6yfkR7qozaO/Zm5/dtTKK32zwTdJPyBgObFHVRlplVvehxYcfbQmVVtxpVdwSblXuU+PYn68ZmUC0K9W1ZgQbRzFynwCOvoj8+iT1fLoAkcmFhzngqW9A9lRRXel4NRUS1KqJP83pn+/SkR2icXRo48q9HOIREn8LQpYOaZmuW46KjfjP0uNfkW8coSJkPCeIfDFOqaI7qtSGl854g4/ZjVKQEcOsw5TSr38jtwmA9vLIAQWLi7Y1wcV5er7859ddxJ3km3k1H9vlODbKLkcTUhyRTw2GRMAb17rq+Thl9VbNrn35hmpKp0HfhAQ+RXnwvJVKfSRGYdvHSDbeXTq3/WA5ywBnCvC2s6vb0i6MvoRQMyoizS2HyoMzvaksQaZgg1m3kGETeu+KuW3hAL5ftDTQfodInAmGcR++pNl55CR4Gxf8p8ZgXg4m/o1DUJO41eIE/0+JRRPqZrBOupyMpwxmnAIYwrc51THvOez0CCq2Ty72yGkcpm5olyBOkuVo37081Mk6GQTkLJWRRiN4hkUB1xKMaF07Zm458vwe+brZecJ7vhChnbAqj48xWDqiyzSu2hSo5j7cbP+hHUDjNGTIUo63L758d8Z1u7E/ovqLJ6Xvl0DvLHCTf70P3kCRcBYCdMO5HwCTNJaptS0kJYB7+zvaMRI8lD2E=';const _IH='76a6ab4e4dd987eb5458f1d573072e0c2f3f440f60075d26d62fa2914d0937ce';let _src;

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
