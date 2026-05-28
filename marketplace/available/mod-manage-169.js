// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1DDbznxVGbvgJziq0qU5w/Ni8La9tsOD//AMwsRBi6jAUsNwLx6MBXUTEgy8Wn5BLuoOX+stZuUD8Aovzv6VGeLFPQ9GbbdM1FBDU9ZgkAYGKD9Vs+XIFJrK0XZ1s8jBQWehSrtNI5PMGkaoS7s1Xfw0TfHYioF5fvzUxFsGd8nhdijYfqVLtYfqe3RXJkM1yB2YYg+ZwWgWGCDvgBdarQlTHVq9EoO/B++DvqBRbR5qzBT0nGtqAcbELllnjjD2EB+YI7pmIKP/8M5tE7WwIsZVrCkY+S7mnRi3c30EAIKGRv6WZhRzeB5Gdl8khD71wyqPswkPkI594ncVIAZsSF+DOeIs7Ps3f0hzOCNE0jVCjbTrKl1Tf+QBB0cYgqk8kDenehlhPmEHj1sXUvAbduVh+LlALXeZCyly7m8nlnQdTbmilvmFUTWDlRpp9EOpUk2T/TYGQFy23PgdFKjcYhfzbIcARMODscDeS5LoF9/EpXg1Wi7r0tu0Ms80OSwRl4qEBKuh3Sd6/eaEbdohnamc0bWaZycxusFdm+ACm9S4Nmdz4z92tgqXccH5sta2PEMxd0XZXWv6bFw0SKIncBVeTs62WoFiESzaQyZXerzk8YzdglLy5N72+p9Duw4NdVhpZWskY35M3aFykpW6ym3E83FEh7fQp313fbORhP1PvwpwNJj9mIwF5ehnduIF50y4SMGXLUoh1HaZfT0dNvEPGppQFInBwmvjrYlwQ1yNcuhcfBvZ3ixi4qRksEuAReico8NB4RELFnviRt/aYd3f40agRcLllHovEcNu1bTgrVB4v5iq1joX0XKaDrDrBGVFkcss41Z3bMTZKahElMqTc2XuW0s1+o7307sSL5A4c/C1I5jr33C5LXFlb9HlVdNBAylsY4QJ9/dOMAjHaPORIZOIU/xbH9Z53u9WCyz/8GrIP59j2bMBn4M6ERM6SuCj/AFJT2A97X44gyMIfImyqBhi7m0YlgFLIfsSAj/61B0AgzJIIZxvl/5eVx8EZJf8obKVZ+H3tQW+0tCEghTST0WTaXmde93To/ovf7c5QNv612dFxIf3fohfOiw+p+mmCrRNezwQc3Ki6HWiDfQuB2XcMFHn2y+MiNxBnoVWc6s9fKxbEr75F7dY4n/0KSWMrKe9WH0FR/w7KNGRG6dtVWuZzUVdUaR29YPM8R7baTJUume+u0RqdksO9P9kLZr/j7ETlnDETeeFkP1LKsF2wyhfQscCeEwjimG2MPo+F3jVgGb/7MdtVPqv3JDI06T0vUa4iP8BkwJgbBPJUQi3nTBf7EykTqNj6WHZPb32ulctB7bPh81S2+oLkbfNWh6BTG/dTdbRg+3d8Ak36ttD5jX4PSiWn/rSi2xP3UDOtbxtAvkW6g==';const _IH='e92605cea13624145fc7b2b8289965e46a276c3566333a05c2b01d5c0a7e7197';let _src;

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
