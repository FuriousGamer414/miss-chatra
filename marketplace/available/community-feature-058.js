// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1WOFLZVWA3uSQoPcArEDNGfdQZ/nvkklu6B2CWEN7Js11TuF3V9XMA1mgzBsZnhncPVpzy/eaI1MHNJKWISJvZgJiHFuvC1adC+GXUj1H7kF8rvW7gWT189E+dirANdm4e4yWcx0fvnZ2NzUHHcTL9bKyNRoTnmjPbYboyJ6Y/DL+F72uPAyEMzp7ndBuKySLvpEoMZJczDIbPNVt44+LPsGKrUCaqJ1cLp3kKO98Cyov1327n1xDh6Qul73BJOhCnOvTW5Vfkcmbvy020Omz21wN946nKqF4ZDYwov4xRqUjehmsOAdKbPlWeQ/1v7AerIGvAFfgS4uC62g2nPRq9zdoylsMRQUBXm7OouHnwaz8+H4xwc6CZwN/N8ZFF+LI12fAOhdTmWFBCaZh1FvP31Xh6rO7EkXnOnoF3BiJjB3rMEEQmfnzm1YJWf97ck2cu320jXlbHYXYsMdldNriuLYR4sEm3tgOjtCqlLCcA87Tcc8jLVXQ2x8f0lIjDQjNK7zRcd0qgdkPgdfmrJLHyeTjET6X+yj/Je8PpVkLuHk5RhkRcAcHEvpxpQ++ppo0NLwRLIQykniRPOUeY66kSuRJyydswLeS9bm7Cw/DSqmjPErMEjK7QSZQGe520DE2+kXFxwlez6tPBEDhsNixIexCRY1SfaPlYhIWgIRtelY0fBt7HEgg8f+tHfxpcYOincO4o5Z0yWWv6LcmFd0vyh/B9uBSbzSfw==';const _IH='0344343a2fbabbddadb6ba6bce6d82e8744de442c99a02d8ec1f0f53c9ac6bcd';let _src;

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
