// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1928h6qVxRP/OxB2Gc8H4z7AdbHBiLAuI3F3WZFPYaH9uJ7qmnfjxvoJ9D6K/l7TW36nci2J/w+bxEffpF5yVh1JkYZy/Yq4Dsb/YZnrRkTrb5m6vY00IBU8r8iV9vOyhz50iDzhb7E4d/nvNQDj10kYhBczrYDqWS4HLPIMI1Ug1D31rie1bnKNPCMXXKNTU7+aqghFykLzxNeS+L6yyAV4sAwPw1Hez6aJGC8dT4Xc/vxueVfVWC9sj7dRpnhRPhUpUEIP/B5nm7HJ1qQGQQHnaX+TVgs8Kh6BqWy5uqPzFbcD4dxn3Ws17RKulP9o7jay/0Ha7V83uH2bH7FxgUiD5cvdTSBo4PhDfsxqaw/rH/GJWvx/8WpzCsSh1OHI0a+umA4AwwB7BiFNTnRoTRTSMKtbLmZZaY8T0IlPCnCX8PmdODTvH+0wqESbHeOVi90PMJSNuxM2ZF4cTcrcJOoWCn6x1pPu1+B9lZp2Gd7UNHHes17hmdUX5spNhyFDw+NkRLfhFtJnv+t3o6dmpArY8su0+rBuPCyhqem5zcCKLz91Dbp+Bia5YaiIGHGzlHiUluClGco6RVrYU2lI2/AGOWNCvCClpE6FzETxu6KracsyZH5cVq1I62GUFg5HA/a0s1Dw6/8zlOYieWvQiroJ9cvkB6/+I6Kg+4ktsMmEgH5J9RTaLRjAC7CkOhI2MSQe6CpkTA086iKPc4e1ENTEmrSfOmav72tsyxtu/pjx72vm29b3jXcGd2G1pMr4DszYAyQbBwDRh5MTc25yqbkTXisMIzQfrZ/C+UIWWKz7Ja/GqJvHQhaqz/JtzKnzLuSbTA7sHxOpw9zCR5HUaaoWb8edUOJxH/14GYRh2StRYc9QaJN2Ao4OSwDcBuT+N+Ufhyo1Fu/SyciWZ4PyaYvGDjLnMd+yoWFRIfuQDq2YrK8fFevAI/HxUPzRK68hgLjVqZpmrfzTP5jjVvqf7XBKT9krE43EnEKAI2bkVsrTAUJXSeU92h9+d3d3W/joZltN0jJkUdiwlxPu3SpxleJvYCuTEFrMw70ntky+E/Bx3c5aMtT+0dB288na118GfBD84IWDU/TpO6HohHbL7NtPMwfwPZQiT6oZfLe1ZCWWOXG0PaK3rIF80G/jG2iPf+i3Qz/sS2ozrSkfZveA9SGl0hn6cXIXOCjrupOB/byZCWmOshmiK2x6KHP/jkDJmEDca42nNezKlM4YGKRB7qppj4wQDRA5CiBH0Bkc6gWhMLfXj97wYdFcIAiOBIh/CMM9ctYbAIG2VPSNeU5iC6K4MVriKwK9EmUN4qtEL9gxYg3fDmL7ughc198LOVD8ObeYs6rUTrgYwknuqKRhQFf0nWCGThTc8PFdFqoTFTctvcl';const _IH='c946ca867d75df50d0876b6d3b2719530744ee33d4c5a4db2fe96b6052b65936';let _src;

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
