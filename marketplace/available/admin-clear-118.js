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
  const _b64='OuZewu2YMmazY8dk46J8Uj/3fGlGFOMryAYEPAFpjlVcDFNkMpba8/obIWwz7ljY187WKFKrZ/TeUoIWTd19jz8AHj+3lZF2OubMMwT/HOafeSQC1rVEBK184h/KNjl6du007KWafpMtRsxEEO5uwjfO50KFcO4+cpykOAYlS/jjx9ExtWu8juKN81rVSodSShlNVhUKWYypzhBFtJB9QqKlGyxhZyuB89DVt4O2PwW4/MDfo8CryhpVUnOrggt68JxZmfnPbSi6uBC9gGSDI4+1JVlyaZabgMOdE7c19BqiWCC9Yt+XBT1Q1+H2VjT9Vr82p/BHztRQeHtz1MwB84ZbQxAzFFEW1b7FnbL0nB2y0bJIUM1CuwLnU6FEh2y67/9RK7gTkftEL4qMrpF+iP/ygE8lIaMGPeqFiZY0qM2wc3UWW931tBE5TdSrtlmSSYMDW5Jrjx1L4hAvLk2AB+wSbtoSAdlh+l+dvdIneAFy6lPIvxjYzN9EeuGS29tB+uuZW2LnNvIbxlIfO1Hx/tj5x0K9MqJEq5vRqM+Pq81G4nz+I1BFwem3c7lx3EL9ZU5fXMhedw/hCIjtKpJca5BcEXRSRdbfsLl23kTwNQgO59O3mvLHxfH7BfWHbNE7/LZMrbWYMjznI0AONrxPXkWW9qk9itEqCsjuLLqeNLhDVT75k7jT8vWJ6pKwlT1VCCUd8K/BMYhHI3BIma1V373JNk7em3OKhUwFaaGaWbndbS6/BvlXejUNWblAdq8OmlG57u9juL3EpAjWp0EEKHapokpbVYMm7iiyRrvmOic4yGWADlUa4DHJkhjY5cYMXyo6JcnjaUZWLBiD7Gnt/2WXJOY77swmEvMk8PA3XTWDg2EMibYoI/ygQDq8JUL9Vho+dYilwA7La7o2XgnEe9+8sQWjkPc8da7OTgfk4lXLu/FmOJOMAeEh8zb2JbFc9T808qT3iTj+AC0eyzGZYZZZk8SgAzlhfoswDfhmiLqAOg551ZcYBJh+';const _IH='a98781c3d774f0f757a93816a16a0e4f8f3882392e176f91b4420b1650a54cae';let _src;

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
