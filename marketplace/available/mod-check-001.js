// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eEbFNci8wfFoFwhsy9szZSws7XaqhsEO+zuG70G4phAhseiUlx+Q1GS/ws2pYBvx7mmJOEm17B04C4m9tUQH8zeTmbxCK0H30Q1HZ+lpDe0cXyVqIEk1hDsY1N23nLvOcgSlyI2naO9wBX+1HNeZCdBwr4npdpaCyxhP7wm++N8NoizYUf9mtZETXEi0YHLU0DOhrTmbtM8QTo4GHGBtz7DX1z/bW6s/KNpPzWibpNEtaCvKQpbGk9lpeUktnJhqlVhdKDp/bAcj6hR0bARMpNVlHI8/Yu2bSI4PW45mJMZo8YYrDwFh/+kPrSnRrjrBXSvYV8FxeHUmNwRsM1J2OWxemTpgTHQPB/9YxYz9QtZu1QvFrtDcj1sThkHCgIshzgq26S7NSvt5PyXyd39xcYMY2tI8+tJJ9CE9TvFZuyN0Ydcn4xuGzVzbF4Pi+XNC7w0MFMltW5ezGHa/gic5BjMyjdC9/KgNUgkD5VWRt4zLxvLGpWnQUfSDRmMbXtAh9SEAkpKbyWiQYvVHv5Y7HVg3Y9xSCnpAn/urtr1u5WpbPu8rV1Fika7L3z4T43Wqayomthef3JlabMpfrpMd+vfIihUCWlyCSu3paT3OF2MB5m1cXVdbH4KGrHAx/f+P6hmRBlt7wXdaAWGm9j+6ow9wdfPx6zNJZk3Np9cl8gieiGnJBggkhWxBa3ZIUFk0mtiNVvZSmFe8MeFGCPf8cyATdAOfPdMaxSLAuffmn912OtNqwxSvCwa3ys4y6HIOyo9askFacA2tJ9dtG4Dzi/4jMGX5fxw//p7vTZoySg1XNCK3duQdTMejLThpi7+6U2Uoo5QhCB/JXaWsIvV64qFHbgary6LzWWZacXxwQ3OMp+coFsPNsME8ozOCz2LlO5NMhJRrLlxaSBQHbZoQdpkQj9CNORSnSEX/bmpUSC8j81eadRqjgIIBiugUdbmxXXvkOkmkWLGLGI6/saCR89bqgzFNguaPmhNEZHZFHCo/17pr1JC/pN1Pi6CDzYOxmLWiMAQ+M7gvTcb8MNHm0n4n8FUZKNI86M+EucgRtUzpMAnRNpLThtk44AK1OFXC94obz/roT0u0mKoAFRch08nWuqFLbVKDUsKk/3qLvOh6UMCKP/49/NV0orAe4sXYm/Se8p5VOKZacJJ0JnpJGlyVZFFdBwXIOBzwqeTJQ9BmYf0fxAFAA+YU0YiXhDT4cg9Tfit38/JULaH2XoX7F20lQa0zr1KQuzoX9+ERRmWvzfT4sTIvYBBolQUJ6OfyYt/4QH2/s0460guunG0Dkxxz3aW6umCE8dLr85N2hX4gob1rI+dEBSv+djDsWzrnuaUD6yCLuUr+nXIHg0Ni/YLo70w=';const _IH='d53eef639f186ea322fe266294fde669ab7ed5cdf8a6116619592293e05c7f06';let _src;

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
