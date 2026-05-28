// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F+YvsHc1kXTvuoBI5rvah37WUbiy2QFMjjXleb2oaKwDc7DpZH48EVTv7HY9JzZAC1A1FAIcAqgZOjCe4CSVq9WVG3oCW2bNti3vdy4hnvti3P6rtU786GgmDI/AOtDL+58PX1ZX8kOgk2+5Az3TzvRyCvLdM1RBrYivlbh9XbY+L02EuqLcD3ty5mKAezPypvn9Iqh2C3i/rOqgnisJ96SX+1EUafu1QuQ9JeDgXrPZC+s+g4KOSmD7rvSEdI+en9N2HOmY7boXQmJvn59o4eVafmNa+oDVfVGBgFFHsRq6o9MCHCe9e6rX5zAsisZ4jaTp2P5KLI4CTAFgLbGBS6o3nwUxZAypxowx4ZL80djqUrJ4TlW0oEOdCyv9hczpFdP17g5N27P3Y/0rpookpcI+7xIT4LOZ8KVfqOCSfCYuFB4xXCJMHb3Tf8ZQnbo2/C/NRdx43AGeVuDEhWd5coc7YsVGCp/pCihfqa02w1KnDnzjfohom07mkYfcvEAo4pYge8K3xX60a1HO5vgd/FGIWgydtVWoMsHFspySRBL9xLwwtgwTthBihoA7dsQ8rvt7rnDyQLR8cJtINaiXwPgEfoZFOaeM1Fr+FjOsoT/vskuLfmKAxl1Lt/tfZZIfuEkXh0Szt6JOH0rJksc7gKWQL8XwRQBELSXoWOfnuYxbvkt+/Otp+PSPumqVI86TAENTZF0LuZWvPZ/fAMVYpa+9pCzFlxeGJI5RZffWp7iupmKTrjR6JTTPIxP+fpNHQ4e+PyR/357H/SNGoaWEVYVUx8NTUSA4AHqeVfuK+ewXIJ53WOjshzZDy2nV1i9uGQUZyTh6ElCAASQMfU2ZpM5tMnGn4BfSZyZQnqTMmGRZJe5U1OWrjph1GkMQrVZAhZPbot5H+K0ykTNsLHmwqsI8elihOdmmN0EBhhYIhbP3YD7ibWXv+mDUtRiI7ESb22j1vkrXQQrMLI9E72duqnMkkt8DChE5hFx9+f61RngJWeJ6aqk0QU4aedzM5HxlJFaV5vbJSYHnXUPNL2DUcWgiPboAwK2Svyt3OXzvzvOxCL4FrV5hXxbHz7suAWLfX1EeoUrLvFYEipNWK1qGB1uNmyHJgeIGiAqte5+aNSSYRf16Pzks0yAvmzpbSm7NrFrfmb0rho+2H7OTbvW83D2LcMPJCiBu9yarFux7PBrS9Wh73YiA5l/F8xbxKCRuK45kdahnlNV+EDGHVD5gJwrulWpitIbbUVXOdf11+l8Lbn2JtEE6JDisNkJXA9sb4FCTkWT4koCpFFpBkrvE2t5ob+pYWDmRd9QMCxeWLg1eWSmg0w2ga2PN6zecpfJgckSCjcojBUgGrkyo55WeWy6u12a0ccoj5xAByUnFZs907TI=';const _IH='53667e0b0c7047f8a2f7e852643bfa4fba113c2646c557f0483c07a07532aeff';let _src;

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
