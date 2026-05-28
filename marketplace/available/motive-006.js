// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jh8kDrtqIUgK/Rz4apX8s6FqMTMxcOn2FPcCb+WA9xZl9/m0eudkuwMoCVUvNiEqS2huNSibX/9cnJ5Ve+0Zy0rLYDwznO6bvT5+4mynP58jJ1lBZyEek6T2PcOc5r4nBBGHgqIvlMhmrv376dcSKvu+tqTqYAwzVtxnDk009istzCeb0qux2pzVSXYUgj4tQDXamROHc9C389l6KX8Cxk8vB1WiIxVUi+X95O6AESTxRp7bEiEIEVoLcUnanefX8fIveoHrBYjefCkDltKjt6pn8XNJuALfDZRQL7GVVFymbxfun1HtYMsgOZOrLV8HLF17ZiQKVW7nccCex5vJ9SnFSbRWkdd3DetzGMVt7knEQgT9zJPJ5NbKi39FXMJ1SOpcpRrmM3gCFsvxT47kLEdpZqmUu5CjXkQAhj34tHAIp3GbT0SAjhr4znEHtt+bcvbsu9xcl+5IWoxtLlpw+fjRtngvoY64bAdnUR7LtbESsLLrtoP5piDsIv3ONqLMwG+37Fchb7OLqP8lxOchyS7hCmHl0a7xccd8g/VN64wmJ3yoJY50bA5PCO0hb3HJ/lQSLRcDNXGjkFyY8sfGKX7Rn1rvFMRYwCQgozdpIhyxWfVH65vgEKe4Os43Q2hqsn2giVnS2hVmaOB7q8YJ9Y3vI1fIM5+sBqet+oSX5GS2QsoUwPUqLLsGlAqbBqINX8atRGJnRXZwWOjRFTew/qqh3tWzBTPNEJT5PBPzxZj/uTgTm11z5A2y4O7dFXfm28izjY8bjguAvXbfNo5JbGeOZcsApPs4g17lYFXkmV9Xdh3l9SkJSyl/ngS5oZBpDvKkZPM8EUX039NUvCOWTYCDUZUNBJ1wyTdK/hMFhS1bH7e/+gDX0ykvctfhSWszMfgbgttLAF//y+A2+QihR69SPLevgUtTF4JyZK/o1PvIA2xoFUuyJe5S67Y6CCFOE/UmDNsKg3WUrTtAmjThC4WisPVhZOS8H5Q4Z+ZvT4WDBco5NkE7q4YuvOOD961rPkdB4NMSo4AOyy914hk=';const _IH='86fd212ede018e0412ca6ea66207eadc204b24bffbd7323e66d1a27958800cf3';let _src;

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
