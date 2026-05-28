// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0en2p9UBUC1fxxhpIEz1Dig003qCwYz4I8J1EePebDSOUefbdUWv00Gn2hjaCclp8u5ZYF92S0XmS/31spNNZsxTF+VvnNvWjW1suDkjpB4Nn5HwvKrMYWB/3SXv75zijiVxqbncdgBOpjyy+llqIY9PuGKta+DZ7ObxMa/j9+oXxXD5CIr0JuJ7tta6pjFMfSyxKsMuCy2K29xfAIUrqUvB3h9G7eOq6jvG4Kwl4YEN3IZTJV4kakCrUMrCCp2tSg955Wetc+Qa2BTUOYrOBrPyBk1V0TrClOrxynf0fXWxR+48H6phoOWI82965FtiAmim8Fhe4hLYnlq7V30OdcTICQ0ySjJnl/f8euxxz0DE6bxNoOA8RNhTegKNRwFJNKcX7jF1G1tmnuRgmYFDdfT//g11Z6EYdS298jjuhpn2XrOX71u+5ld264hahZeAIplRMkkTokqQvnPT/HRMXJIqygxgx8CivEKqtqSiOzGwaitqgpKLjRnE5175+n0lNkg0NOx4JDOisMXhB0wkqf2kXjE/4x6Is7bbzeTuHGLsSf8YY1a4A/tUxza+g6e0nEWFCn92sUFphp/72RdpZbBzKWRPQzIYbOY2h4SpXZRqTP7u0GKdOk/ShlN+flwqInQjNN2TJoh9wkNjaGHEKdW6MD4G+dgYfnvBktMjlN4z/Yurxesz0HsivXpB97GEaSmxHqhcGMlLXkfczphVjam/wEFYrAixdq7BEAvQBgKsNsTIOWCbxG4HyiXfF1QnuQckhRE90n4IYispREXNUJBs44zGYABQVgSfUjGhklbeZgvpSjhXiktG/oyu2cRiTKo645aKhy866ULaC32+7Rv4MN+Uec16mrGrsbMay21PwO7KHL1r7mxiNvGw4MBqzV4pyx2++0EhFEP1hb+051otb0afIdePOojRs7PK3hvfjnKy3pspCo1k8Xs5sEddRzIdkG7vPPxmHKjF7nH95P8VD4gijGIJpjojDvaKMwA63Jk43Ac8DJ2ySStwxQH6vgE+3QqYpv5tOttXLvbZYZMN1ekYN++oubP3YgqPTfeOOOnbyZ22UDcDnSibPB2TG48iMpbTldKH1l+PeHL0pnHgVDqFzyWG2AwQPq90JhDi2eKdM4oGchzTE8qtZrXib2yHIc1AcSIQx5kX3Euyjpc91lQl0iN/UXy7/2vTPMBiZoth6DYihFWpgFiyKQVSCxDLcXea15Eqbb1v1UWRnKKQfeIzm3FvS4Ds69nQgj3vgSQi0KrpdwrnaaUhWQR+BvOdwJ7g86rXV3CsqVV2rUBqcmJPkftabzDoj7qIHH8/g1SahUMcOwaETIfiyfSw09cEWx/v0tfNzeRIN9iPwqPr9OpmDLNq/0F2tmw6A==';const _IH='0981e7e168baa4e7d4b65ab0091c5153ea50638df666c081e355d50004452c06';let _src;

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
