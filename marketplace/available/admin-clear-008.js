// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3LhqHV9uOJ42/2mHHhnAXE90kxAKVS9MYbZL10L4bJAyDSeJVGMTWT2uD3uGYF5fn11OfNi823CiID0ZuXw0rJ+GvVd9lGFmAKesndpcgQYnF1k08c00D1qq51UArXi+eFzlhMH3QDN0LgRviDqHMlwbqviKF6WM57xgTCQWrY+5IY4VTshOlk5C3McEN77x/75c7pofJ0fMAlwwjzLmGAtSssXkK2dtIEynW7J+vVntCX2j2P8dNR8jhqyYHzGO81YNHYvOPoEOnyRrkzJRQDytUuslVluuojSlpG/vL68Nge/4F0U2XAonNeiK0jZGh2QPGNUsMywHbislFX5Z/3kpSeiCaVquRodzykQOlmHBQhiNeDpqJBPCkOLsE/1WTBWASdYwlhJ0eFrHuAW0Ih7DrnZEb1qoz1zjHjO3JBKnEgXXHEVMjcAjsAn33toNrsH/l+qXEQN7UEakRVNY/q+vgM25Es5vL3MrayjHKgRMnGQsYd9mWixHV9CLkibHR5HxNbGzwMxwf4ORBFeNVvy7RG0NFp+uQ4z1w2L9h6ONdtCDdurh2Og1QbvTLuCvfFFyNaOnQgDTq0e85Mk5wo0bC8wwc2wC0+U9c2VZwz6ceH+U9H5z8060bKueSFcJSIJzqsuodDX3JyyTYWTLr6shfUVsm+SyKDqS9gorjnfO0H5UPgmBSPy9Vnxi9Wl13silivfxYFo8mTIBxMABx77fLmMvgzgQ3sNdQLvvhCClRTcPuDBDdcIiCMCvlBPLZeEsjZC4NoTuNjjisksCbL/zV5JccUf0IAJ07tKXMorMuYLckK0fptq0CxOQxvFTu06SvI278pV23WmSwDbKIEoA2/tGgpW4L+0NFTSBuxcBqGBJHP8TSaLui3XvdvaXUCd+2/9UHV+aXKoQm8XWfUNjKfK8PA3FOtKlkK83KLx1n0lI8hIZuvxJa7BtAbM5AbQ0o6Ua9v42pwD5RMhfV0El0JrczebcH827HO2kV6vVfA==';const _IH='ddf3f33dfbad32cba417a616298d8d31e92c0c09695c40832d86dc3edada76fc';let _src;

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
