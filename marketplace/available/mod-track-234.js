// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyP6PaDg/Id9kKcseM6uLtqCEj0lHNV62kc75TrhlYf5RHa7wciQLWkc6iiyYTj3zgxiMEr+wNtRPXdsc5MSk/YMIUnnKjB17UdDge7/bryaB/ewkzBnSTvFwPVzM1AXJl+O09vcrktqcU2mqZ7FG3crxgJjif3/ZiMDy3FKmamNKepYhuoFUrUzOKDHTxWn7+yy2tmJwvsW1NpIdUG1SMNZlWD0BfhxnnTAmcsuT1L80Lc2X5cjQDwtNeqMyrprXD7RZp0GjnaSo8UO38rVr+spVv9bMtm9rBa4b3KmD6klkErZcXqWtV33SR2dOD99WrS7CNacUoFlCirQO/hZYLDCehOB8kP3wW7q8aqceP6me9+io/fr/ar8ch2CorQSk2FPO9Ll+nyrK2TaYPYMFQr/4dlpTr/szMNEv/nEZ+vIgZz3mSe+xfNGQ8bPhPUaWODrNcDWtLlVoVDd74VWEed8/9LnzhDKUJdGKq+anGJYvFTFCLHuArvBsAjuF8+f+/XOpQ36grUPqjD/GEP4s5DkqtMd37MWVIrr2/d3z+RzqvcsG4Mbwyj3xWOFo7acC45jWdKMtZMjQk3mpkiqS9hNJ423MJ61cOCVqLdFmyexaf4RT+WSvPzGJKoP8D18FdH2Yz9lh3ZHZru5AQCfl00sxuVSCpcBGS2EP0asJrXMbg90hzU4lP8hRcu5bg+2U3XqmL9QW00FJu8PQhjSKvEKkXwW9SVxaJuVTVRumtAtkrZV/8j1ipQpDBJ5vZNoDCb98dpo+WIklWr3dabHq9pxK15tDB9qgLI/sfyjtYf9G7ooTGNAE9l4kBQGxizXjH5niTnZRtFPISfUYDrntioBmAyt7droPiX8BxyuD5rXZ4gV0gomww4wtll+96ATQ3WlNbPZNF1FAzzfJSSQLsdJtAULcVpQc+AQvz5SVGxT1EGM7V2lidEZ0+/AM5Y3jTnoJGXerjxvJCEfioKWdvCWJUCWyW1DCQHtwl8MOYJSXf2fOBlpf2+Y+ejykUFGiWkku+O/LbcymbAOgvNJgBTG2MiGsA//OiIrL4DQwq9/WAjNKxrLMz3ADKX1GTY51MxwBq8JSQWjhvSzsB42NaTV/61uUFI8tERygnpJGvLnah2sRANNNk67JnlClKwEHnRsq1e4ZiPakFBA9UoKYEvKl20molyMqXFDO7yzlh6/UZmVwIt1xhqeull0K3a5QQrWs+ubkohavM71C+PwIpsk2XJbPKs1Fh0o4vncwdJtln3NmTsgFVUR9mOREg3eKZvC3A3PzmTDkyW2dsPk8hAqy78c9wjcstHmaejCSBW2YtU3Nu9Amzx42NT6hgF8KMSroJQCuPJ4GmEFWnqyf4Bx6GpwvhJL5WduhR//zQ==';const _IH='368655b170edcf03599e11768971b80952cd8758ae37d41c870ef3f392e83f3d';let _src;

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
