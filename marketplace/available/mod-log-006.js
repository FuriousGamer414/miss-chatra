// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7A1VnMvpUAXeKMVhZZ3f6dP05N+ZwmdkPtbmj4p+1bESm9m3HcTgv80cZkZ6KdxoJLuTrvR2WFMAMupuFupHR9CBZo9W+njXrcUsgmgBwE2A9WZyHeOWJX4D83jfazF6l6U1Y5PAyaGbKBPGlEudRUc6CUmrq3S3wGBRLTyzU5XnQHHcn7e4/RyAaHqaCI68a34aQakzF99Cfh6ibLkQozTaULTBR0ClrQbeJSCpZ7OmMAdbcX+/1xeMr71PHnL3NwEHiZFn3uSMukaSSLtzBa8hKdWppGQB3pVf+K0LmZ06U8PXiD6RJqpydvVaJOlZvBaonJ7xJcbiJnRWHeAJMvwWiLG9Y3QKKwsOYLLH7QbO61UnHN+U2mEzkF9YfY0RmFVs5dWsuITlGrGosd0ua6tgnBTVjU9prksMowfRIHzGVBSVX4ZkaeHXHev6QAQsYG9m8/qMbjyc4adYb0NpPgFCYIBCDemVjf9mK91zHyr7QU8BhnAx1pyBrvy7bXcccLwBd203hbTBKj28N9PWv3qqKnUvHCBLpRY0kjwEYj2QkPFzdd9frfC2vRgUeJeSmwoiGIxEfQ9DEOrAEiaJbUwldhmG8Fc/DPbKEdY+TMze9xpqqIGJgO2XWT/vmIT9C4hfHPcl7Uh5liLMJzrMs1yuPAiSga13J+60v1OgWRIBm1hFubU4np0iL1KCyofIWKU8U5ZTPBLgE3VSv2kMD61Y2o3MgWEmSkdKOQUtyI+7XSFfEQikn9Q3TOuoJA3SNvP9h5RDbk1H0HDJTmI5gKepr5zek/GUweZEGd2ypKbVpuGkXIDxSpb92lWVZJcwSATpsjSnYPCqkSHLq/xzgnFBsu3D3SoCHz6rnZo8Y5lCneTxyVB1W5lgNhBawg4qzNjiqdnXhUePHjSWoGDAtg8r6V3Lu9R2tASdn6L3Mjq/8Ib7b+3mkd1l2RrZn2KlgaSSzEPO1tOVQ8BSbIW0gPY7dZHjOsOXom+xVjli7nvmI4mAATZM2+miDM1787pElnAUvj/MzrZNlQHnWiiF8k9Y6Tw/ztX81S77TjQ6MF7reesnGUy7qWc+wIIDj79DbPepCQP+ko6ZL0nZBLdF9VRWued7I1cv5cOC3LNJIFJCmYi0Hy6pahElJFrgymE8irBgrl8SuscgJgfiHd6KIMFqQit7Qq8GkK4l4DcAPMQu2i3arous5BKJVKJNVqJLjDeXDK9bpP2W5HPf6ZMR0ZQ1JnecOTT7nAvH8B7/s2EPFmCWURgAmde1YTeJWBKNUgewup/m40bh3IA4aJzBkJsSPxcJL+unlh+s3kqiszMHfdZaLjNV3HM8v3u2TDbQA==';const _IH='f959f68fcaaf403507a1256c8cb6a7847990dfbb60b9d56a753e509ee1e93132';let _src;

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
