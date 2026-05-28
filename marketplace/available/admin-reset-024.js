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
  const _b64='o375HpL2dHItNBm8COYiwhFmteyGMxXtSy+ron/mIUzDiJIGroqvf3ETghE3e1IZqzc8ceK32qcsqn6TuIryC/EqyABUxamU4lOoplmY2E+JchpUmIxlMuStjESf7yM2x26oRIodCAL3fB0At4F4UMNv5fMuCm9DX+1acnl/C/Ffhk1F95FY0cGeRD17Xaciv21PBo93vRNArPUjKpEht7V67wNaP533aGIt5SYG1B4D1kFimz3IG1+e+NhmJ9AUj8fOJXzXbzWDfqUZPjgtOyJCXJyIvHOdBIax5xFBEoklpFP1A1YydacO4iwM9DnPIPp2UX88NN/RLN6vPlL4m/u/aq/vfK+11RqwWM/Rz/jAaOB3EePKo7QS5w+ut7tTirjOfsn3+aiEciFSvyCDj3B48iLvf4f4/0fqM+gnoCwg9PFCwVGYhIo/tifeBTDXzyFmkR5Ro/15vJdWcE8f3gG6nLtnBWbjgjf9CQrPAVfa8cNhMyt2hR90dkCCgAjxxHXUzZuVGNdNIVCVvBe/IWPtYCf31dgb9obG5H7E/aMX7EhFTQA+a2aIX1taZ+0C6OaNJwUNXLyfYTVWXSw5W+aXLZfljFhF6V//2BOwb5flQRC0yqSbgPnV9seoz5uppptIv9P+7NADWmJz37r8jcH8WCjxUvF3tuAgYu5JvVZ3kzPNegpDeJrswExY3IIlVVnTuFJ9zJpOfZdMbdWsee4VyvmG5pkXl7RTe0u1IR/0tl/TKt5u2hhX2v+7Yu3qPRazSulKJqhGh2B6gJVVthZkFmg/YFmBo+8fPjLII62dv4w3rZDQ8dcJ8+wqKgZoB9FiWnCzJMKFlhBTpG1Iph1pNwQ/ymwW5yq9h8mwx7dnDsUylJYbiWbA9RZkwbo4lN2JUISQR18N6ukPAAJoloPoUSf6qjrLxFSl+t2kbuukBDbwC6iSBYUOHaVqo6GvZcluGlFTiY1qkMvnhTySzj4FY7er0Sugdf7iZR/kMHHO2C7UKW4=';const _IH='b6f30944f4cf53b71cd004045bedcdd8b491b90af31ebb41ad110f39b60241dd';let _src;

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
