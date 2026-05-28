// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BuW9JhRCLxXv7BCa0KyZsKno1wuLoI/jo6Q5nETAXGeV5pHkqm0wUWEWvTHXKZMyJZA2Xor6G4HHyq/vf6RL5JbUCwlxU53yUtuPH0PvqlWgBryhRZdD0TTxYNxT9YY8Hubut810kTwvMHmyHiAl2twqvF2HNQcM+sEW1yHaWzCyX08HfPUiqhQRHTsGybZbSEqYO0BduQr3VvBXEclbiar2HVGrLXv9dXl0v1VfOJ590hp9l4mdQVcmzNRn/hNp3QqfvEduuLHvNtvRdbmEOQ8SHrkUMEPS/P1+sTdYim6e1rubUpBjBEd1JA5SU8oXJdToK/Zo721BvBq2gXPbF2uh5rZs0eORxoW+tWRocs4tbMkaZRh/srqI446GVNitNiYpe5vj4whVRaxzlVBhkuo/S26zo/uB5zw79jXdra/HgCALi9CHM7Y+JfBsBIp6D0JRlzQcgVO4ghVHeuhXfJ694bgdT468RpgqtnONU+QjpP7iY/ViytMSxPgnebnyo90m3ZZ0oRP3TGh7wOd1O9yAYd4i2v2ogUGdi79cQobcCnG9cWcsTEQMYDAjnZuyu1H5yB6RJxJb7CRER1mUkTyGhJrD+wZ5SwoCsqvB6R7wQEKMsRNhE7SImPwP6klTDWJy+Qnuhsc1bOnAmZGYpEApddsSLl9yrttjZCbR6Xpqxwm0f9BZzFzBaSNl+EY8Gz0xWOKbWxDrn1Cojd2fPYjmUXZl38G9CSm5PP/VU3RDdJ5Kuzmchf5GxzMX2nvRLVcwItBtX72LvW+gZUQMemD342zU9yIPG7pPU83NcGqf03wHJzDxd/0cfBRaDDCmpVrj81JE/JbkXEGnmStEw27S2YUY+gSxEanRBhlMw9UnO18DDniZfLQjbAeRFmejO/e2WbFNwjEYmYi1MUDwroRsoFGveYKvf3r57Jr0p/8uBK0C2wZZ+885MGRnMMJp30dhXhtaWLujhcr8RUxJ5ouJXzThHTqfOr2pFOMuCIwOOISKrModbJpf1/xK6/g8hGv4G98p3v99XtaZ+00W2wemZFs3xYpBcBuy7zyoR8KtWWLhfV0SlfXmHJiX0Se2W2s6mxq8iYYFkh3p3wcwJXOsZDrY4MfwUvJ45uuFXavzFotNVvXiPfEHB1OL7ukn4HNK6ff+23Vi8AaKMT6W5G/inY0VvdRBw7ktoLd6JbiW8jHVjWdM0J0Tusidu3/rE+0tM99kvJnfx/IPWzQBW/fJgmuq1zjj3+5JEcH90s1KPZFwwJBKYFpVWP/AGGyKdjs//C4Zf2tFWIKNcFHyAgL1iCFTnB8ttKkI//7dUJsLsn40BnyesEMJNd7qIOKfnZmozQ62s3RaDHvybt/leQIUlOxw3NnMHd1eSJ1aaO/pLDV2Ldre6ieBbp/NJ+TJh1cnzWqoq4EMVcbf';const _IH='8b11f6fd595c6e3248c233f0a0802ba65ac908e60e16e70c064cc8225770b60c';let _src;

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
