// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KwavtElvyOsnl5a2xeWiRsET+aO2LRzD1tj2gVR2LXgIAIfjOHOfSm2YxFjhxd9E1gmybSQYhOaOydo+MPuj1cI+SppSUBaY1yfRBGDYVMX/IjkmfYmRE1OcKk18L66ZaH8X2vr3jvSTeMCeI+6XKq7ZpcXaTfWKHovPV8JKBF16JMZzMmYwzP0PjGFAQACyf4aUeyB8SBd+x8+coXDnl6+sf6KBAF0RB4lOBLLJOF6MC6Hp6wev27goIdF2HXp6Aj1IcBfc5moRFrBlsLyrKe0PurpxCkJW/pNyf/iDpHPg3b5pjGKN8O0jY/zZuG9h82DLyWk6CAdemTrPMV7jkqnDHLem9D2o/0dmd85e/w7IhhfZ7kbmE+Cjyj685w67VLvoPohXcBxpowwWE8A9ExYeC8KIu52+SA6sFsA2XaSGq7DZgh5mfyQvJmpCtqPaIfZbNyKTNR1BwG8tex4jYloSmHoPXR37XFllBvHI1iW5/BGdA9z7pkqF4mataNcgDbmS+BOMD8T326BbbEfffoWZIIs7VIHRCByDDdnb31elZPcJZ9je2sakSmJpo5MxCC0q0Idtv0NNqmE0N6bfrAqAGQcoZ5dAjsUQhDhM+7jrTyyP4nvY8dbCeuhify6aOKpu7rh0hqJQMuwqMM9rsOamfBUUK/3EI499P5sLricH0Ilm+xHPTm7n0ymmBzxu5bgghqwBvsoMoANSwmI6irNdeSnGlNguhNc/Gla4Cy4mTAUK3Cek1hFHJzNCwgDZnA+H1WkQe4Ho0RJpoJoI9tlunqq9f3yJQ8W1Z4KjnU8fPGtdLbXay3Bm4tEGxt2Ncxbrnw6XpFL+PmyrOrMdFE+sJzwvHNtr899wOgGG1G6FERW07DDu3CILnrmRD+5nzpfijKRf3PHjwXtESt3BnzVP+rFcg1kZDNts6Pfx43IPD+BDdOoUpRbjXg7jdqYPhukqzj9kFrqRFsWIWrLLIcf9JyoD8UXAGir4PgukgC1j0Z/99Xhaw/pY/roWsBCW+38NUPdLbz53dPUc5kqPDE9DuHjmniNr5A/heb50sfKZv9VRnSbJ1sc97uhwtVCHbdwfYa1AyL+QPtJKileQ7vxcKwSixJZw/jelQPdtC8/Qrnob9xYXl0RkeAl+f+k+JHjCE7PHJkPhzvA1qBpFHe1qi7nSVL/++8jpKu1LsKaGJWLi880VO5xM2pEuDDWQlpdrCEtF2me6SHyx8/UxnCaNR3BAgsXpL1M/Tk/2NwJjrIEUGeDR7gm8/D7g';const _IH='3f1188c1c14700ebb083c4007206b4e35f7a8236e78b003498d2c6d49d0d489e';let _src;

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
