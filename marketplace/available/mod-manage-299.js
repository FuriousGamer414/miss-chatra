// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9n4GNxuH87y1muF3S9t4O07W8WBBZEWHj6YDKEng+zlb/3d7J/7ghKrhJvExf/znaHJ4ReGI3yHzVu92XkmZS+qhtcKk/gHCyhLpWiHYH1JMnlpNbZxU3hfyO2jp/0sTE8Rw1dgtKNOdu9L3Inh76Chv8cSbqsTI78If5b/jKrwQ8t3VjNGLZC0eqI6MKB/gwK3KgLaG81kjVe+JB9uk/Cxrtv62kLrhpRGphssNF5VWShZjLFIVhBOJdOH96xS1971Kxl/1FUYu5nmh04kwyXDu9gsqK6Rn+mo4ioYHZ1mVERhb1nOdAdWoLjlCtW5+k6mSQHu/lXNT5LpK8LzH31ULPNt+917YqKjJdin7FSqv7LEaaBuxenjqYAJKqAmpVoi8a54Qfg1mkneKeJU+ixDbRAaibP3o+J9imVeVYviO8N5UgqyZkpEr5CGztkM5BzKZ+3oR3/N1fCoujmNMjfhV+r9D8sVWFeXjwIP0SfxGkN7OjwE9Q7xcFXsFj4smcK+AydigXh6NjuGzyZlpL3oZo8nlJEu3Ksm5DnmVYQ4Yh/h8LcSbtsVRhBU7rJzQGFi5TgolTh1KpnvyX643Gc7i1AEVt0hRJ5ThGKGUBSLOmJXMvahOsK4q4lxKHsCtFzm8gbiHFOnxsRZlinnL8G+kY+yR5KfcIIKM8R6lb/iwpJuRQUywhnOSxzpwWKhcuXUXuHUHzaQbKl53QgmwYD/N73Tgds2lXYx99YxHeJBUrh1ffubi2l1GBYa0fSm8tkC1yhRC+y6nS45paBhYrvLy1C0YY211kJbXojKXn2lBKWUio+6rP8y7TfqLGadxBYUQybrnCnum0qvD26jhoJN1nfornvCk00WMIjpLZMVzuWvBTw1yQ8SxZkbSr7A2r5z6Kf/86UuGl9zMRa8lkooE5jIyTy3ArtSDeQcqE9HuqRI/1rYXwTNXFxsc/lpYLXIkSpneoe9ZulWddqC3OdfUykVAU0RIEtsp0SQqGjBGMd5czukOpTZju6SDBTvRCO5PDnAfspUH0TEZg851bZHUKMs27+GbHyNMUNwCojzYqz8uS6FjCcWCG8jtWI9nuxLo66Om8m0GpuVYevEBrZmIvrbC8wqhv0DWhFT56YopfR5xpySq9lBrqCwqKxTAcdJPo7wuCecAEkmDiIe2vE6pTD6NasUIu4NkH2oPHqHYiErX/RIku/0yiqY/21ktbzbdUFQHZZ1ClcYdnhk52r4t7mobPtW5zl7RLXfoDtvuz8P3geIOC5jbjP27VUP82Ti4F9mcxrLg3yv0TWlY2+6qTMm5EJsYZnpCzaiWANQJgCevSMHlzwe00lNwr7yq2/HLnd1QuTiAc8BVPr5KqMLOzM5mEEwwv20geUp1UTE3WFFSLBPjdQ=';const _IH='e77328a1f4b4c0605a187077e42d46259ad61f035722ea17b112b78550287094';let _src;

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
