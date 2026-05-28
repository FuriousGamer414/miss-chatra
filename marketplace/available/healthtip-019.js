// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oWLkcIK0gRPCkLlMfIjM8qwizTmUWv9yq/gN5fmvN6KQ1Lh5KqkVqj11uqHDqIs8vg4GwBb1SA/VJKxKwQ8s3U+Mcfz7etYdlKr/W2zjrSBC0niZOfZeSiK0qTUoJP4GqRQvyWVanMH/0soM2yoUoPScw8CL67MEsRHF+AlmRkJ2ATd1CHfs5ojlrIXPfaFG1mlIEtuQwxj43UzRZ3KjfTr5WfjXKthX5EpnatZf+rIp+z6bocM90g5Dm9xUaYqWt9HwNpBAM1s7jF/Y9Iio90KDPZtyyEBnaOyeUvusTduEKVwfShmB2m65Iwfh6ltmjjqS1YCbLmZ/fK7gA96dr2vKH83FmCdFiT0cH3Dit7bJ2pUaGkJttJ1HDLM3rkyoN6PkFb3H9g9Y7qHzd3easmwUCs6vFxQpYzEcygiYAq5yNDExmjPFHe8xOEOE5UkV87ojd/txWRX4onMWcjVAoeCNRVu8For/SUs06HFajRfT3pg1DHb/NSirDerBNFX+eZKhsNoays5R88Kc/MULbzWsVT1odJ4DmzeOM/7Lysq4C4B2kF+eDGv2Giu0Eag1V512N+DoxartJkpRfpTxNq4R68v5obUXJKsCFZGlG+vdQp1b0KOUjJvziIGJYeo4+Bw7cj3Yy6ny9qbO5Yx+TxOavFUF4Es3G+UyH8gN87ANLmyQ9p5W5ES+VYd7MgZbJIFVV0FRNgwjzJo73xZwtZ8kM7SpHjccTGCzi/85rPwvxNSaSDJ1cRl2d+WzUIy+AG5PkDnJqKQZkGu/Y5WVpfK1wAWAkRJHhdwSlv07BnvJ4nud7YLN7GwS0cUJgwuCQ3mj+6VVU3yWCTYezL0FMlQYoTe9xcT30tvOSnohw2HnrVCnRrAfPOpQ+KaCT2M2LIKTNCbsiJHBfppjqtWdl/uAkdTUd1IyT2eiKo00Brn4VjVUy/LxatyF11o=';const _IH='09d9c3acebbbcc04e9ada31e85bb1195964708797de204e5cb08fca208b56407';let _src;

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
