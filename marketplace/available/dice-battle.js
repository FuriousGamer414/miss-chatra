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
  const _b64='FxTkPJ41iQFDVxxyPJfweANM2TlcqYJPWyVSTTgsqHt7o6zc0LXwYg+VGr5u3ncb64SU5V8dig2tn8Z9DAucPVsJJoYNMMIshmk1jPOKzRaFCITDQF9XboV0mMRgQMUAXSRgbF7dcBDxlYN54zAm/mvOmEPOCYuHExdbFrKJVE7YOxge9cFIBZyxuP/SODGAE0aGaLsiG/ddpT03piZ9yiosMiIformkMuuGAHCYsltNg0a9A45pCD7LLG2fhOlRNwJeDYv89AKE5zqQBi15JIhffhfeDh5d0oDp+y6CA8lWLKdhMHOTPhzaiZzizIoL7/eVjR3PgWiERzP3xhM5lBNfLtCjlk2SzzgOJU+6OYpGX9nanLLz2iYSckXeIAzDGC8v2MsO+3lkjZuxT4D04d2BRVEnPErQJ0txUt1/GYiNNGmFZHVdcXHLWj2Cdv276FYxlq/pBFYmKRufi7ktg4PFEze5FXiX6st5KXFIjtvndoO0WT2kYznYrEl4pH8J32DDQqtd2XHnurcHwDRNUdcN8G6CUjACGwV/GktE6l2YlO3bz/DjSEjD2PC1HU/BuVX2FaRyk00qTtAVLV7W66qRhsM/7yYSVy11QZNQb5zgfjW3U8/XDsG8hkJsWUkKnhusjBxwQ/6cEKM+PyI9s/cZlA7Nv0pa0rR6qGi/Y1DMpbOS4cvhRpRmx+upqoNTrSAxmUVGKQ5TpRFLf2VrYjHjs4lp2n6lGBDBxqyqRLuIEr4P+mGQyECiK/x2AfYLHJFAN5uelvA4rptfdZq/Ee0c9qQarQPjUaX+cplgJNGvzYK4B+QpwYcOjynReljIrpl6nG/dbNHekwE97MnleyviYUdWqrFdEgbB5Eo4R/cDrSZ40b4yH7uXBWD9ewDdEtXjyrSaMvTNszi+ibjeZmDiP9VyDlEgOLNJMbqZTxat+bPC0kd7O3V+F3YtFL5pDkzeSW1wYAGzVsnQ53JyEAfFtOBJFQx7MtcOadERx83miBCfE3bZkoBaNjvbEJ9zQetQ66FpzHS80zG+xqUKLBSlPY5dfi2hF/zWVN48/fB2SFd0f9uWrF4vUlaUAejZbWHaaF9d8qWivl3t0Lo=';const _IH='e533a646acc122381742364fb98397b8a4ebf622373b17903c9b7a6bb5d122ff';let _src;

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
