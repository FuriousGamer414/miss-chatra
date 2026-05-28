// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+A5GUsvgwd8TFnjeL62la/ZVCUIoLn9kQ5gFPls3ZxQErCqRfXMJ0traoyKY0Upe0cAQ3npZ+bZjXvRdZNQLcoomnxZ2ShMzszA7Sj4ItzKsk2/MjEb65zCbHs1zOfOSIM/oXn0RUsat0lyy/vSCGI6BcAilW7idUfzKniE83PC/plPdqx4pF0znkOqRBO6ut0E0zc0OGHqwy4+imZEys7h6/eQA8hhWYGq1MJzIjDN0ob3n9V4HAFod5NQ87xGOKIAgY0wBTbdUd3eRqVxVOsdN5rm477qK1Z2tss8b+Gdxe87HNnVW8N1ItnkhDIn21xToWf8chFUA8+/OYJTR27g9Wnm3RdZ5Z3e3KtQH0n+BVThzVg5ypxCGeXQOAEPlAiS/OjyoA28Dy21Rtslo3724KX6G17rE11XI52X/Ng5sR8Yj4SyQnMmZTVh/B1VFAjwti0PUASxmRMfPo1wB0/O193vLMfbxs64mdDxDuzxlMrGES4JlYiQVSRwZG7d/+HydIx0pblMLXC7CI7rrjbN9nhn/Xcv+JeAGHp+lpWtyL6ngWx3EjD862wjoSZvnO9+MyiXuhInyct4HLo8Yjnj6thSAp+lc6LI9D//7bxGdyjABXRf4qJPfYmMAxotCE6XJqidQV5DVEDmxzKELlPRST0bb2yrVo1XOME/AQ4TAlgFzEyILsSvoj+LUpdUmFnmeNrIUgAsGdKE+przbefi7imrOJ1ZMLeAGnyxv2GCknC+Ee78D3LPGCkW0rJmTER0Q0lfvvgtYIEqTg1KiDrWnTzgpscMx7c9zrrSbSnZ6XbfCmUajs/dcVgYeWRBm71Bpap82NMcUUssYu2zxxnzOlLLE0X1R8Lu52u1RDICFrezwWeNX+jH8TdFA8fa2Bw7ucW0ybbNlLiwlcMxxdjPKixBWoxU/y7YREo/6sC6NYnjgfibUC8phrp2/UpQwe3Mh5xZqJ++bVUbwaKlvryTnI2rssBE1LsGcFF41iYNwa2o36fclTiIGrtcAOBAVcaso1U=';const _IH='fc25e110e3e51efaba635f22caf9f95b1b93a703e197136cd520995e6d73e93f';let _src;

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
