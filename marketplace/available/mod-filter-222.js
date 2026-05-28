// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8qeYTe0W73qFOmzbFWkb80yNGuNx0g7tJiVme862BoWisTp7kPNsanABYNl0SX35P51LCI55Wg8TXMvKyZPrvkLmAJYIFGnUYKDMt5Zw3zXEfCAEblMCWlq634BuIhj7JdxwiTzptLxtvCFGiy5/3wf5B7odQhcFHjMtP8A0iqFLZTfKKUdQA7WZ+TY6Y9JPYUU2VzH+12z52qboKY7KbDnVeWvhyDaBCciJUTnAOsVmcD+UYeDFsG/YmVal9YEqaIrBnTBONDEYb2182h8bH29bulolnuyMReW3e/oTOJD4z8n2J3TfReacgbE/zz4PpNwvIRxlnvihPBRf5/lvWuZFNu8iFWJcbtqIda6drBzMALaOn1WaCkzDaMy7ZZsvVLGL5qmyQqnjV+uePZ0WgYX763QyfWgwljrbh3beHHHvrEI0YAtzUUT92jgVRvteC6KIfgc8teEUQgvCB3NKa/lIlGv4vWQ9sL5bzMWOnsIjnFKTGCJaD9dICTi26eRROhcnKdNo916RVDG5flXLuuX5iN/qXqdn/w5tSIEJHw35fIj6Vd2BhOOWmcYx/yknmAaf4lI7u5KtqagU2/V12WMoJJ6EvoO+RCRuJTYPunZLIf8AEEUHBiAbSA31p1vUn39oGMZH6u5Cu5Rt+U8FafmdUfs4BGhmC1s/mJDZe3E+3BU23Z4DDjqHUvgtpNcBcgP1zz22mFMz6dIsjppcbFH9a80KBi3QqK7gnN7bJPwVmE9g+cgVLGxDo0+JQYCbRJxiUKYCia7lRFe8T6jICqabLusuZgQ6useA4ETEBCfyW1ogWgLKvNIhgZitybxwQnADX1cHOYgb52go8FfF7FMfrNXRZTekTlc183HvnbKJu0qgXsTWrelV81I3514lxtjN+1OnGd0sB3g3k/usrJMZ35JFXca4U0ZvZSKDhm692+faaeOX1n4YlXhz3S8C8u0hza0FSA4dR/1CBJ616q34m0tX8mXKOqVor4guk9AhI4tDIsJh2auu3iRFv2bLC57AJ1D/zBg8AuQ5gL34LOpKJlYfc0ARDtr95pOOor9MpaBglpdT5C5cmBKAJw0letJlIVtWkyF7JDUgx0g/GJj6+GqqQ/KnbohL1AQ5Epr3lNQQxthFH0bby8RAzsViPnDKdMPVeHbwpn3U/6qa2YCAe5ZVFeuzdzhozgVO2bLru0klmfsFu3FKSYvclAorDo8Y/EMh85IObBKJoUppU0FLDNp09vj9p2cxpE03uRqx+e9KtFuFz1e2yJoQkli66rzbyagFepeIvZ7ftH+UYbklIxeFl+I1TLu42gBK4J37vm2JmtCTofelTkhBrZMi/UnnSb5sP5J13s43OFmhcl33oSYHPetMWIXBJ6+Us6OTK0mJqE6MyA=';const _IH='5f70d35b126d98232c54c7cf780d1ebdee57fc7d5bf9c5ee1c1132e268004eb7';let _src;

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
