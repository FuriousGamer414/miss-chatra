// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2tgknBa6/DJ10n8R54rQAQu4KTCwRdNL9WeSN0WHqgCnO/Zsy2uD3l2t4VDLh8jB4UuAZOQ/hG0WUA/B+8Gq5H7PCFGKMnmM0AUHY1F9dGHpKg+WaD8HJM1ncgHGvsFe2d19QE9Hg/1Xlm/ZfdZBKc2JHdcS00Gz8vvDamAGbQco0VXbjOYVczz7qOOEq1PSwC/ExaBquAwOo4sxBB/JnMsG8Z/75PMzeDu+V9XWkvgIXejka1xCYXd4KBTJn2Z1fh1Wmn0+7tERniV1iAxsmH37d1eR9alNA372LXYz2bgTeYSRzjmCalEHDZv31OHgziZPAAJsQfDnu9UjN19C673Da2b1VfpCSZOqeEdgP3dXn0zQxybhpsp9XVos4Og3T0aaAn8KQZOyy3hAeEiD7P03fH9VmDaatJCTZqSdF8EF0dOuhW9/ekSdJXknc1/wHPk96uNmGJlF2owRP4jBg27nencAVBN5jmiHyiDynzq0XxicRdkafzOMqzQ12KHmbmKeplru2sFeRYe7g/XkMF9FmEtkyXffWO26H4wd7R/2IvMQaFHY9uVIaV6Y6hNIy5eTTzyhyvJXUjQfawaQW1215ym970VeCLNkJAC7E7VpdRhIUXUACc9JkCP33R9bYMYrdFnvWSqKPoh61M74iRIDII5ATSKGqbs39kDIZOPWnETcUtbjFypnEeos5tCMjFwrDsxigr3wEz8oQDAx+1sVhApVT94iLHSRq2STbWNrUuy6sFaeY8IHHn/i89KzyvabMq0UadQ+joN9GBWgOsRsIQv5VK56VCObbYuU8Q1ETyVGiBb1N7vH4cyABbqndMlhDpnkfK1POp/jy6+1pSIm+bZ+TzUTANhn2VN4O2kcxesudnTc8aed8LjYtQ610hz8tAvgWqjoDehfaRVJuPXWTnQQixqQckIxtBSvMR12BvtfijvkBicXV4unDJsY4KzfJMedIi1H6VajglkwnIqjiKTO5Y6Xxy74ZYbVMBZEenKEOqP0xMgSQPdFlpfBMWP739FOIo4Z4o6ipf0mGsdJQo8El+PwSrnT38rRRUnjGjArEedWXvhdOtNryfMbY3glaKj9YGcXmhXnCxNT8CDlIqsBxJm4W9f+0T3QhuduoX+2708t0Qf1JbQdY1kg7X2CMiEdTEXgbZEWJ/dU0BKi4sYneZHPXJqQHvdNSQLG//Miy0bRWAwcBsSgZf2156Efsw1Tucn7ZzVz8lzx3n+9XQyRiDzrpX4kfxPjx2g7U1xbmZp+VOiTlGin5iTOD6liWXgIXF8RVntcfMKA68q3KWtULpubVL1FoC7WDmYeaNkW0nJKxO614MN9OVYCPRl4thQ/zBQCHKhFv3VIDp5VxXTCZxXd3LuA3iYFxjWzt1TVeAl3ZBiypck8qvkn4f5mZXFHiE1hrQElu8hUOtuvZ74KBmk2gyAbx4BzegRHsOhRjjypTS6VgkA946wmekMz8ubUVoYTlkVn6SGKOZEw5a8RV7X41NjkcWEbrLxueR0XRw7pWYjS0IXVziU0atI41NNlpCFOXfg1CaACxkNTCFyu8WS5gHlXtodWwLbNPjfZYBj8+E=';const _IH='c408641be5202ec173cb9ae38841c0e5e235e1ef4443c2b63cb2ccf62e8b61e1';let _src;

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
