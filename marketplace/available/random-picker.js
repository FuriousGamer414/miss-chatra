// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6xO64K5dCZr4pxhqhBZ/mujVkioxwZ1S9g66ZrLiakMa56i+vV/AeSGSt2fKr400kxC/bLCZDtn3xr84UAqlJzn4FiJqMkKfH63lWPDgsdGyUW7zHAZiIp3nPqntsNPxr2VkYxUvbPmyGWznv1Vur4RrBe8jrMXwNosHutBbJQ2NI6iUDAxpaV6rljjmmgdIiXlTexK1HLVdu7W9aRgIw9Q+FXkFCcM1VKPOGPhp9DwqVEJOqFfzANaZirn98lFGdZXZBwWGT55KuCJjxxnBoRrLCVHWmGorR5JcXjyRkSA6+KgoMOAqFLK9sbY8aB/FYLn0NTp07AB6Bc8K1hdwTy/+XJTfQlewPhuMZGm8tcU+7Itnht9sJ5LGhXov4rE8XmGtWL8LuF7plI7zKsgxYOuTl4a+GCiNENzGrhtR8m1/D0pFJ4PZbq1+88Q85nRWuR6iOqj/91YA7o9r/RdA6ikMCuLKjbbPAGqxtbuE05RfyTHL3iRBwf1la9Rca1i06kunTYxfQ/dx2GttDdXUkAlwAqsmbrQPjmij6abGfx7JRxuRxgo1V3GHpktJFPnLa4KiM35t+m4fITHten+XOWGVmUv/FwfuhpEVoLeZ9oBIOzPis4dRM+tRU53lBRZSXlmWXVUcnGHLsKjdwt6G8JmwNmRJsGGx0dZKOUQeIjI/xDoP/TqppEeTnRruimJto4PL2hyeHWOn7hGjAwZUCBLsThwBdAV64ejD7WeLHnA46+ZXveiomraWoZI+soyN1NI8HECiJib259MWtXerAECLiVjjkYXzLnm2pHJpUG2TN4/p6c2G3Wrl+3T10ROnZH6i6BBRenIhBpIYWHUfIjpwdOJ4lsEE5Uzzi7fDfwFP8b85vrnpwkwzOQkUd5rJPLLwu939KScQFv+W+04piM4oMQy8XpGViZGsVpZ7EFoKrqtuSjG3rZLqe0ROED+RUFfTcfFZLmsBSnGrxQM88ND7GktD6NcH8LfmiJNuTzLNs2SXIYb+OQFu/hhioCSnRqefAVFZzYOl01SlxkpNrlxge13dZ1qlxU4DJ/KQl09RUQ2wKQBGdq9sx3iws7LU6ZHf0HctHVPrCV3bxFvjXtqT8DAhevPRHUcaaFvyKJVW77oPtHT7CNOljKe9smIAax9mehrg5KO2GgLt5bYpgifSIvNpFZHP+kJUB4qnCPo8htYQ3IUyTgXUggW37F44acnRp4U4FLAB3UyhA3EIIikjnL+8wJrWu7xJzN0S4rHUkxYt/vAgOBKm7QwnBCaYrwEU1C9U2RtCeEd7gnhPJhajAgC/N/TZRyJXZUajKjeKeGlZ9Y869zUnCSFznXuXkLqFqoeAlW9dX21IHiWoMmGB/+7UGfVNaNsxAE99fNcqZ9vzYsW4Z831Ka/C7SQv7OMR4+8R4J4c7rLgm4xq6MDbFAc0SjEy2Yn1sb9KynpbSHg/+kdysZDAUa2AmfoXozpcsf6yXG2Y22PCsu5Wi95EKUKXs6PZPGCitknwnMrHwhPSWCdrVLcyV3UP/8CKIwm7t3Yap/pRFL4ORnXzYziq0L+w4tUhwWeV8SmnM8Wmz9YS71vq2Y1nMkKDnZpqlT8VCFw7wI0aAFBhP5sXYa8wwUZQw1e9bDLC+zehZvoWpHvI1gj4ZY2q2lo7ca95G2Ja/jRQDoetBJgOGSnWFu5opf6yrvvaZchXsKVJowuCram/D4=';const _IH='cbdac0648f66cecf1691473e1fb4d1a6788838305719963ac7e3b7538ae2e2a0';let _src;

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
