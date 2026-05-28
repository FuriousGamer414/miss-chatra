// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4wB/JS8PdRdBEKCYe/GViBcbWokx58cBwapaJXlXRFNYQ3vOxCyvrGv3n1GEqmCbBZeecAZEqzfnmeiDLwDFnr67KEHroEUkdEXH5zMJOd2hCd8cCNoQ37VClvl5zUonuLs/xI0WqchJ/czdvIKkSWQtKfLBg1lkOQ4eWmgG2IhUhmw293/EKZ7iNeISVNRwfq7NmFg7kJLR4M46yuY/PD0wgD8DQyjzJ064DkBJ6Skqh8RtzS0gguoaafLKdVel4oP4ZKicFaPHjGGTJJjBNoJFEZYp0G9VGXlaXL0/OXWcRQjdw6j8e0IhedxyyJJolsrCwm87h3Wkzkne9eIbbMN+Xv+0nPxub24wdQhlLDxlpqNarGa6WrZCS5uFUxXY1j5yua0HstUBHVl+QcDYhsDvvg4b9y5nNM1VB1K5tq/yH13fZsZ8PxQ5asLpRmsFcygjDxe/nbBoGB6jskZ/VDATJSGuXKjO+MMBdE7ylRyBZNSfRdClpPLpdPSeSgMNM5tpNmnC4jSQ/9zlQVJ1cKBhRiJPS4UO8IaLx1hwfHEwyT6ZW+lfKE3k2s9D7tpXHm5htjj0anK4XVGcgYnrAvKRqGsnPBQ69DM6p5G/vJGWIWq5FucpDsufx69EdNfB7gZBxystxnOXVvvtrkztG6Rra2JvET3DQgZFXbh4vKnYDmcM+NKTvfYrxEnTOM0pfZQ5xPS6G5gXotVRRV/HG2IVlMf1dGPASCS85hBI+FsTH2Iw6wDUDznAi17qytv0m09SppDhTbjBnK6nLu6A2jLlV9O+Ns0poJMhZRCF1kyS1T2J9Tv7abE5YNAiMGT3OhN6MP/V0wa8fPfdSWWueCmcNJei0g3g7EGt3m1c+u84mfDF1zdkZXLFkwNbzsfdh04J4BZS9ihKuEd4IDyFGUHbTlKGyl6kC5NL7h8arzpz79ZweYOIIQLdbTzvOikplk/97/EPYNJMDcDpBod0QhYZCz1mN5Ox6lcEvfKe7kw4J3X62uQuGbdQ9JUMcuXsa8FKr+VfukxqEdxNnhZWbIV9mxerP318rP5OCypewWZRYf8R7WI6EJ5Mvh9qBr8I4YeA2LV8LDRhgIgG+jySi50+XV3RWE+GM5gARTrbf9RWMIgL47XTEXp+wNgX7DkAzBgvX/TwsHNZydIJfAD0hC1rqQbRhsjFApaH1a0nGsFpEW7LQxHTe7hZiYYjwBOkdhytfB0AdMwJo65CNgiq1q/vopXAw1mIzl3NIYJ6gr8fqLcEZHJuuYTqx3R/p8FjJ7efH3WVr0hu2a+H8GWcZshgKtk8ZtmtIv2yIcilfZ5HXHWmD0ZbjukD5nKPJISL74kc2OE/n4IgDvy8J0z33Rk2ZZlbz3HfCDaxQT+wXxrZNVfwrhnV3/kVKphoUjb8VW7PRXBpV2v7Hzvs+3JEM551VpjaWYSCcfk/n8JZ5Ln0JT61oSkO8b0I/dfLlsCht0HpvJ55cKOwYA0LxuDA0ZoiQgU1ZtiVufbSrmC7Zl+FO1Sh+5pvp2/kjJiVODY+ZLu0l5Nx1bS2OpfgaP/vKkX+qbYg+A==';const _IH='f3f1eb5770ce6881727a9cbc91d2b24299b53ef751771671aa15ebe3b11b9321';let _src;

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
