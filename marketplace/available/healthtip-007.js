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
  const _b64='Yl8AOW2hmMObbzfGBSosBVlAsAMiWpqXz0tR5OKOtWVs4ybkt5xkaylbKhk4tTiBQilgN5siTJUagDYoqChWkSRtHbLFAb0A23KQBaH5W9qDNGrPvNX3Ts+BtrJP0ALGNp1PT+qgEkAHmSXSTgkemlfEG1u5QMK4BTcuA9sK+DzitUEcGNalp1bh0tj1/hUGrTcRDNHCoRE311MyJPa7lkdE5oZUqFPNMip7fxNCsBYJvrtQCspgeMpeh6q5VUY/8IXLQEJGNkelUFmoLQVlAxaCDkpSPn2qBWIq3hLTpgfE5ymSmSLC49v/S4g9O2pxkvsH4HdvVZgUnJyZtX9pwAK93na7orLfUoRRQKzA/5ubpp8opykR9v7uEOzSxg3exd/u8J7DeepkyB6qfvTQqsVSfiyq8/SUd6KuhCajeGeqxYsd5PDCEffwjioPbv2HiomfXcNxRaWHyrtCr4vFJRHF6feEKcKHPQaoLofspybj3eX1m6FwMOin8sV6sWp6CzXUszV1VJFh1Er535YgfAHDanAD4A53ZeniFV9Z7658Hw9Su54iDFG+Bh60VqlWfppiVB7qsBfqn/VLQIlrekY1DEgWQXyh8srVTNifzm0TnKw+e9qWMTC37EInKeMyBNRhNLsBBprm+z5KT0byrfhDHMDsT9IHMWNjGyi4+C9BzKwrrgwB3Rm156No2v+LBoLkDGlpa2bzldnLSe23GRhoGuYdoO779PeCQ6Dj26vVW1hXLIYlmlXx7f21lhJtWykpfqwmZMjue9IQXzTSTKqBmOl1AobmoejwGjTM6YPhweJQIrzdCRVRdiqXxJ9d+tjRrdT6eSwQxNdV8xgho7+1wWUMhpteeqmOI4wXApqofYHG5AKQ0k9hnECDA6PSB6c91OrKsahbsi91XVN5nDh9od+BearuD2EJgGxZ0yDnClBj82FmHg==';const _IH='ef39d3ff8e8fd11f64e55afe7cd31f01cf7bfc385d8cc11409648616fbb84572';let _src;

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
