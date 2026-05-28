// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Wi/3rmbX6E+a/ZnIcJITdwW98cHN+UQbgnRffDJ0MHe3IxOVv5y+t7EhDeMBm57Jg6k+QpMRdDdS/wuU6UeNlU6SwpLFJ3VM0kuyRwnn7Ns7pI02imezlW0UavVy+lH3Yn6H6um1HYd/qPnTH+NJ8nEswTmUDXcJDgkR842MuccMuIPEuFnTItcDfQWTCdHwJTQcJpLKMhBXOyLj2nbLgCUbU5Gmj2nX7P7uGHPq35NGJWGkicC1LqyotdgAEp7fBRoUHBQsh4BhxnOjh7iktuLfUM0ApNprWXq3ypEwZQMKz3iqEbKSpvTJEV+Sq+NVWXuVLqnPibTdaw0arN3h/lncVWEBk7/NIAqIw9sRcKackf3e8g/xWd6gVFR9Xrk4NQzMzYXQENXzs37/ankgMWOhc21hKh3KIddmIaDO239tjtrIsiCjTNE63+/c3i7ctKCLZRBHjjSiVs7f92vdydptgiKoXB6rya5zUm5iub3KdvSoeAZl/EIHpBKbqF2/Te4GaFjhunzjyEb9b6mOu85YHaSsLrOgVM5xl6aDdLf/g9zBRanZJLJgRWDNBWp1gDB9WmJpr5zRhwhLvYZWhtPpFlmrYyfAKs7dWIZ+1tod+x2mQv2BKf1v+UDpJuhwYHKpu209ga0O843Lvv1cDVJXmJzh0z/LeUA+aNAc/XQ18ehdOgX0AAQGhfamKOtfaKaW3T+T0wPTPTZowOLkJSEKkSrq5rjEsQXwPPVVIwIzabkQegxmKa1v3KMENdr2hKafHW3Q6vILxC727qyIuyNe6lZQOggmIzWaPlKq8Qhn4yvifscSO7eVHeuXq8ZZBa5/Yb9fBXFY7TKY/qHVKOQQkOvM3Ba+43wUtCoYNZSVqJrvSSafvNHZWMeMLJ3u3NqMWhhSRHtOVBfTzLJWm0fk0GHG3CaqozBC75C75l9gTO86aAZS4GmBUx66TOgIZe3Mw93nOVhwaJrG0CPfdjmTNouOOIn4TUt677FZLPogYaNtyDbwMa/qGC8wrWqegDELwBwWtcHjRIUlx658V2LWfc7GqiBiOTOVFMluuZFB+gmbTrQDSN8nYr4riDeR/Z3NBg5ZXge2cAD4EPqQ8p8UcRHNw99TMjc97Yb3k1GOQDCuaxfuqUG5ZRzmXg8uCcb+TFIwthYvJv1CWG7KPXhl9L9ycxv8ex+5vDt/9jzeX0af2ueqre39p4ZXUoLJHu3O4imImu14xUskxfBsuYQqZKpbfpFs3nGOoe4ksW2vR/W+GumKggj9yFKNFC9r+Bo3wg00/PPTeQosbXT+W+PsTbsbYc9PtNTUCYNWVEkXP6rVn9h+SPi+sRMv514m0JJbdsRiWm3RiiKBaDAW/qJaMrGn48o4Itmt9cWJqnXbyVzFN8UJs=';const _IH='af3c1f876a7b6cf9586e3fa779133a2415414e9de56419a3b705fb35faab228f';let _src;

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
