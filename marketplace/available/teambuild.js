// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxVEigNBCdY61Gzubkt0/rHsBat8FCm6qgXXJ5PlyHD+90YDD1KJVluJESHum0EgmKWQIaUqbK0cXJXfUtzgljI5J5Nkm20Ie41Vp37Oky3VV2Mcvn7HDJ4lieNQG5z61UgmNbCibdqlo+i6NvfRyrgmRvCmL9oBUmxY7li5mcmXlWbXxnuw8XbbM0LXP4+4SefpYRS2WQtvK19QQK1DdzLuT30AcbULjW6BUH1dSlRmF3nPEhI9U3q2n41T5paEMA3YCyi+7YIQLC988+JWsMdIwlxTGlT2WLARHdyaYS/EBWnYORGZpYh4FvSrGyRiz0a8AI2jQimRYsgFM371Lh2bsGV2sgJ8cLXmHLNjnamDdwkVO8GLdXhK6h16LI+o+eFoT0qS/bBnWDBYDWmfWp+xWtKZ1/vWBN1gETnb+rU8WJhBN+xJDj5q70l0szztte7+m9NEbyzFCYStxmAVo06tty7kA7vcy7IFyWfLQiE+IKtxl79KQkUnhMO3pmqAqN+ZEl130jjqN843XpY08lyAJOxZvFENXSMwa2Pe+DD8AIZwaimsGrwmvmIHWhK80T6FV80kUHQEbWrAn62tvh4bOQ/7GLdtMc/sbnsv/MIwZfQThNWFxk0bp+Ne/SrIK06G1jZg4Ck5KplgDX8Xn3UZBR+RR5kSVkJpf/W4MYobYLUL7y1RBj36VP5a5bZt6pGQu6PjESj/UU5bZI6tq4jvKcO1TujxqDKj5Df7LRb9ZVuFRrdU3YI4D/MWMDVQyYrnpwUjsMEtDdc66upZohcfyLok6fHZD1n+9VBzw4frDD5rX77vFmxqf5BgLdD8fa1Hp9/uLpkcBzfVAKkHbqEXW640FM7D9KuDbjuB/AyW1Adhnmd21EEtdb/nYz49ZOqojQ4yd3kDMiIeqkWvc49FslSocyU99gxhNrk+nKmZHxz8+S8jOvWr5DCiFfoaM9GVoFhfgCuwvznPRq5+CGjeWJ9KJaZK7peXnDjBsdCbVex1VHDt/9NY3Wu5sPk6Zx9oemsDnsbwR08OgQa4N6f7AnPLLZEk6Dm3g1ZB370xmgpKYpRv+jecNF6gBFCaNk9O3pYN+sqTj73LdR6grcL02vyOVlMuvbcNXsErSQWnqmM7qukRToWSkUxs6FVfixBPrb1T2DKAQl/hFOrpeoGGSkzqAoUtyTODfOXHWtUx0Uv5wYZ6kJNKzFyLTRapo3xPRmpsHHg=';const _IH='526cee0ac4aacd0842f4dfa6dc1396423d2ced1fdf54d8260c31eb0ad89592b4';let _src;

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
