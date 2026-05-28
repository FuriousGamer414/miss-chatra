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
  const _b64='6M1ZQ1xbP1ydpwuTSTbS/Y36Kuu4TsmXiGDTH0uuj0jLjbGrcMIFe2FiIDmKOVHoezZrK9urwLCVygiQWint+J4GmtjaR65YjTjWPnP0r/ihcoSW2OWvtrjJn+t1W8SUj7cOezwfUUs1NF80FN6HYPZsW5RxMSe3P8F19wb8aiMV8+oYa8mU1IMXx6sjfFcq7o9y2QTdFuXguFafAxa963uB4bUPm2vT+2olyxMPgJZb9N9/vW0R5HpIrfyaMNF7fjb503881kbUG5e87BsMHVF+pxcmBoQVxD4UZnPsV5+7XA+3zevdTjKWWOy4Uf+yV5EEHygAtDNtbEmQymJEziJCxjl65CJTv6b2K4xNYyzryTWCwBLqtrOREKUdrR77rbO2xrLLXaUHhbNaFDCQob8oFyXqmqW32MUMW6T/+5qlNg7NwiWCiU9E4oaQ1AdTXZGbi3bnQH4DmR6LVesGqi+Zg6EqJ2TlPQoELzxzBifgq8GIcYxOgr9KIzFOt7M8mX77YZuM15lsCallWwLezZfdu2J5SmxsAssrJVdKjtduUL7zx6TvAgu1kd3oFyPaYDLbj5f/fFMxQnIK78eVsPIrnvVeoXa6q1CchNND7VpYn3XQ2Hk7TWVPzrXbiUj2S6POkZE5MnD8GbuOeibfV5QeqAcw2FNYyWNc4VSlefJ0kaduMZ1Qw3FSiCzVC/39vedgBzU5dNvttwGQz64wckamxxN7ll+re5NuxCXHJ9nJvA==';const _IH='a8d23f856bcd44dce7bc1f463784dbfa1e72f24e077e122f496a17f0d59583cb';let _src;

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
