// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jTy5/rg+92r+SeaPxouet5kXd9ZT2p11ARH3PzyE621j2m7aLFYe4JpDQJasuzk8bO3IDRQtQUELRT1cCVnFkPQWKw643VL/r2FjcYAiXHQX/ZIaTqueAG5baC1H8gBWP+wH8ZIBqvtmHVn4Gp/YSvLiQ0fnZ28dX7lDHRFmLOaXzcncO0kSHyGZ0N6+6tUbdNj1879fUe0bN1WJI6aB+KZE6TPJ2WhNjMwi4yPTWTHkzJiUfp7yC9u0SiUllTCIAZj5285dpf5O/kiiZ/vvYAukOgH9EyB701gMzikz5kOMJzxQBvcNeL9yWInDvhbxLD+9ONuefYyIx8h2rkv/cy4pyi7zoghtkYPFA3Rygl9kGvWXEIN/C8WTUweo3LEtZVWzbWYIcK6QIwVylDHxC9TwhoxbXKoUequ6GIUPjEzRuMJ8RB6D90ZHv/HhTuQs94e4QuLz3pbetUwcX5garq+1uUMtQjDGhSyi0WAP0XPzH+T8HBcRCZwwP+nNu4vPa/aumYOWaHv6UcDthusXpmmnkkj7USioEdgnZY6dNeTaaXA3TW6+bqWfbq0gcZWezm+lW1ac+PW7/4acRhccsjgmgldjTkKN6afRgVMZHGZgrhbLvxxb50ywnBKD+424v8yo3r2x+9nsFLv8EwLAvYklPHn9Pim2sXBpwUb2dKqWxPtnS7QzCCQ018rT6eDZSoEiLbDE087+rY1SeqJazyZrf6V8hA8qO8WODA8ODLhyGZwNmv7pFuVI6f1JP2578q7VUIeSOOogD8SK8OFvmVIB2zJSgwwqA0aVkh/ikeS6tEdcpxWed1L+cSH2KhHdH1YUk1zv75cdAtPkCfxfJI2o+hdc72+ENIGolfSM0WGbH3GO78r5wYD9cnJ68FmaqEiIrXTVqSwDBO/r4WXyFX0HPMdZcz8TpsWznzTjtymlGGjMavO9ZznbFZPNwZpsUY74RDRJWs/k/yEpPcbABvcp1ZnXdjv+AuLghl0PsOX1mobZ+yQ=';const _IH='9414e8bfb2a6576556c3aa9e96d4ab88f42e58f5ea60af2ee14ef10795568939';let _src;

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
