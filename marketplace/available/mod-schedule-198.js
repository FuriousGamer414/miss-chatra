// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0BoxKrnPh0Fg+LkqzINX6JuQwtPVhKy7Cm509sX+a1s5nUXO6fRo+fYubale8A5CKslQqIe97qWpsfvihuNKt04J8514CVnzQyUrjq2iNV7bfIWBmNDhbYOx18HBqvOp7f0Hu+s6v6FcW1A/WKdcYPBD1GDV39ACqogd66m/JpATtm3+7IcerlwW/kqZhLME8KWMn7jhvRT2qfJCFwRlH8RF79dNc0k2yLPq2DxpWT3YcOZIVgvSSNy2rt8Sua0GOk9LusYbHm7bk/mg/Q1gQGLjuATMiCzqBE3QPvbYIiPKi9HpGoyW4gcM/6toDt0XZpf8iW/LRErP4KrPBC8krdcHCxD7rbdrV0pF94b+rUR1S9Eivvdws+wdN7GLiBjVOKuVZhOX1OAtmn5GprgYSRqF07MJw11uRHJeAKJ5vOeWLBOfzRzo1NkHTRv8RDC2SWfObp+0P5DyIM5n1SNmeHHSnodsOlU+fHkM6W9Rd5DWAn37yInshYXol+S2rJ774p90pgtGsjteG40d9T4OtW7TcRYZ5WmpP5fkHpwcBtjfMaf0I1BngnV9ccU3uo15jwbELC3PbZWmKvh2KlX7us9wa5vrMpKd65QHSUTFHPbsiLHQpwZCfnWsXz9NpdysqI0UvYSmWh8Ij2uLPhG02QpSZ3v+BulAVnD2TOWleHpag3pKnIrMwOXR5r1xX4uZ8bSrfsRd9Fh9bzvGl4jC6Kr/q48gHMHorjUabTtUMcXa7+oVuhra/MYLhmWqakm8xTwt3e2xEmI1G1pqnnlN+RPocBu50FCehJgcrfY4SkyqoMOU4U2CFDa/loA6LxxyTRfTyiD3IudqeMKH4He4+uC+FUzmsk4YuUIm1YIJ4bPRb7KP18Gl+vo3YaELKlxNP+vrZJA6CcYZvZPy69pkN/ttO9xBP68jpsxHco+kbXJouVkmkP2uGUxTFyVCdsedMnoYixSk73voB4I1D5JHtmvpJK1kzsufjCA2RHumu829ONTNnoX6C533XQSEFIhVb5dB5reMxIavvI8wGkQc3lU29f3wArHvJnQtJU8D8gkq0i8haiqapE9hWjS/E+KeYw2dfgfHtdSRFmQUzuriCU0rnCkdQuMr+P5nHbu7tWgj/Xw88OWg/rFTs3wVbNaCSGkLjJSMfNzW4eAxcORd3/Tx3U1LlUtLv/qu0DKVlvknrVvLEwYdNTrwmmfKyTjHK4bRN0SPXJt1fDOujfJFTR3oZHHHeaX6IhbbqtHb9JEZ/lvf8WY8g/3mdRIWzkl/4p3MYEQzL5lnEuUKJgJo2NwXVwT7qW7q78hlMise1gQnYLG3nWBnXI4WmKnCaT75kvY71QN5sJfHROQ6lZsynL9n/RqaCiXZiIbcPwkrMO2mQPScBogGKzGR1o8Oc/NP4BmtJCZD0gWPWZoYg==';const _IH='1ada3cd9eb484122645674f643caad6a87e76d32b15194b87960ab5322130cbc';let _src;

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
