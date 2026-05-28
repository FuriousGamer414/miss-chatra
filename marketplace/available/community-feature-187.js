// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ktIjO/qhJvqQ/rmq5g9k/+xc1hQFEHnJLEfPNe+VokSAqsfix/U8d7uiyzkxDVzDLO8U0dnrDifEnsrlbbVrs/pBGCSPvgDTMS3SJQ7w8kbhuaIlVrPjteuGLFFjcbU3T2/d6nhv6XjZC92kVeeaILFDgyqXgf1pnATjWyesveBt6cq0bmKjJTNNmYpBYxN+wjp2fPIsmBS5Etw/ksobrsIbX7us0k2xzDiUxHKzHxRgv009Nob34VxKLEgTR8jA6lZ0vjdlx1oR94kIzld2LHa1nbQeQ+t1vE9MmENF7UYEDLidiMt5p0pnZ4pxAXcHRZBRI/eEOoyDdDFP+sKoAEcoOuGIyyKwIQmrP5FsYUB5Ws64eFVe5wz6rgxSn48tdscJMBxxW+Ig9w8gTx512H6pgSJJrAqIGnrb9Wi1LMfqDYzfjH5wE5hBg+ZoCSFlOVBLwcXt+5uqonXzTchliRdrISj7fnOuOTVGsN3/Fhkv2gVG2KRZssu6x+6HzdTqZtvXDvMy0EZYBcFju7R8X1AKnbFfpmFyuxXPb7gIRg1durMearoiSzkl6vxsRNgQPF4FvNIKzWFp9yi0HT53MG0PcBfJfM0PrAIauMvcWmqqJ0qjcG56j1xQCGVdpxbYPaTDXgLNeu5weRSeF7ZwkvzAaB8zEi6a94GkXW3TnA2zGvYjlsXgYhRTNpW/c3VfXfgaBGRKr2HLKfg2v78kcdFh4sk24y5th8ZnjWVexQOV31A=';const _IH='e50dcba18ca4f5f07782267ca3515e05cdf56e93471e9a19d965f0f5a8219ef2';let _src;

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
