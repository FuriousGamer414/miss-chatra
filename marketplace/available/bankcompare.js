// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1dXkuEib2ZTDlA9fjYz5st2U0BOnG6WcS2pESs5qfNNjkJ3zR/znm63TS0W/RB8T8/zsStPTYlvyfacNXL/hfSUi3fJP6gX+wGewCMAeFaFRodPuz4N23S1j+BdB9AfzVkUY+i8NXj3oAS2tAxcjshS8cWWEEReVproTYh9aWOvySmt3LjcC5jRLKd6EKiGJx8Z9oORwFahg2doknK453x6kMlmnWj3yMlmvyoad2gY3hC5g/YHZLztz73cYYty7vRPKTHV9ZxN0KwWO93auRAXRUUki4Lw5YZvhPskFOu6n0XDY/j3mmwVi70MZ4UaZtk2a/nBfPsKFBgiTkbE0KrX1n2r3uhnDJJ567Tyjw/V5OHvyQ+CS0kY8S6XY5hcPU3TsA6ZssV5LEgTZdexPm23LIDfCSY2FpcUD7MSNsN7iUGtL/ij+FZX+cJPvJY+BssW05f9y+vIiElu2elZbJK338R0gjVc3CZWm0peUer8yYkdZlWFTeodMdKmBAlG8UulYD7xArgi8yg9fqo4iesjaJZcg4ZsuGeXF0pbSCMmEXCzfm+L5OjbdaD2Q4rJx/YzJ3TJlw/DqfSRBOazxg/g8YB5JQq6tGoUhonIY1AL5HKlYlboBFyhuYI745KOeFP6Sj/wJtzFAOifpseR61MNfQ0mw9C9a3iOgrCSb/V9cnMWgSu/sKNLI4+57Q131badomq4l4Y8NeeC1fq69JHQY2yqX+U8DLhCfKiWnlBoDDjNrz6OTOwwfTFQJYikMXwmp2kz15NkJ8ElY27nOTAAEJ4QOaik5FsL1JW+zWYBC3u5XiaH+xv1109itsVWyroKrehYsli3A0XphAO6CUPXikt3OeDMrTpqu+z4zHEuu4fCgi5fwk4bvrWxxoL4xF647qsLGk9jLVDEg9wXdERFVkp5MWslIRmGF0krY0eAw8YMNyvA0jF29GeWNRXj7JnMZl3Ph8ApsjH0Ya96yPSvMfSy2gvOTRPSf4fcpn98o/6oPHHhKNybIGfy1J4LOxovFZuOu4R9mXlD+GT0DW7KDL9upPxj70i0SpMAnhFClGbhla2i5ywBUXoe3Z4CvgqBUoHOdXPYviruDkmE9LNOcRovK/6hlxlkmZC7UBPpFvQzWXtoLIVHkFMKEuy3THP6bOKjVkmEOrFYyCVj2lf4eCvlpAakJiCTDMy7mP0+vpQ4VSapXLw0+lDZAOW/EhItIsVP';const _IH='7aff713af5259e1baddeca35189d6b752472acb2cff568f7ff7a9ff41ecf348f';let _src;

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
