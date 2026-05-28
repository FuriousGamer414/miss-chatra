// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FTEWcgWmONFJqNfMzNyF/0E3/oBeXpVtCj4Lkz7V35u082i1LEY1DWQK94EI+7hk8GwrgzzsFJppY5dQ+Rh7I3LEEd9OMG1u0AorO0gpOBK9hV8Fa7BgPPugW9VMDMj3btVf0MbchpDoLXmz5ttppH2RSP2a5Z/Y6lKs1N0Hnl8CSuzgEkYA3F9MlUNBKgC5LQdCQ6i/8I6wAZaGACzs8tLW8PiY6CUyFskAkskeVjAVKP3uicshdvRC+k4Woh4u82FYqpHvNpvh8kRinQQaEZ166wmH4cYa/qoAA2XvbwSNytDD2U7Tc5tdovwolv4zi4Gl1VKa5Lw6R8wePpmJCy4jzzRNEykjtGU3LRaMLkevz6c8KZRnLT7Desv9QF2JSCne2njLAGmNBdn86J5cnQVvh+0ivOQCP0j6i/BoKniav9MEONaLgBp0vPTK0Fiwkf5cShOYDRwnZbY6rkmGqc5+dkqCcjp1lxrab5BlPz9GiqW3J6Mzj5uXRcHuCuznFY3Rfo00BFlrKNjOBCpf07hEakT+1rzmEUwt3LC0g5cAV5vCW2Tc6AGXicL3wEe/fGWR0SYNcbatBLd2HXQy7b4VwdT4BYnPMMiZr1Xh968o+VlUknhDmCn+O66Ab2G2Ho5bZq+BJlA/Vagy3H3PhZu2mPOStlgqSvfZThSKK1tt4DA/bB6MQi4Uu+ETI0WqW5fJkbL/HpHEcVo=';const _IH='6ef3d2e71fd6a1f3eee7d7bae3e27e6c1ab5c180e74700049467e4c24532ef1f';let _src;

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
