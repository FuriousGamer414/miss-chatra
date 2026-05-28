// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UVkufXxBglOM7alpceMon44oYWQa9jzUz5oQS/IVg1N0kgn7JnOOPgjG1L4OZwHYXegyGxFTQn32fmGf/7RIzCGuq+C5nt+wkFdrLyltmz7V4BwBB1+pzZYQfVx1H8B/CvuhMn2MzIV5C8//VzSrCDWla7UBBQ8FEhuKm0YXJjngJ//PBGQxTAB19+dXEGSEcDaTm1EdxW2LkKbFpydgI68Z2MLmcpayCIbyUJovS2hPN83TE1+eKKogqaMQ6Yzee8I4uhIs+iy4VWBaDSA2aQwEBYEmR9+qro6Yb1fBM0jaqd7jhi0Cdf1c00naeO2jQWH/fXpMzIuFCsbOlLDLDHd1JOWcA9jdAESXQ6X3pFcklOqhjsKn9Mjx6UpBKNrnLEvaYpzHmp5GGFJjQJbhjpZa3z4LNfm69zrWeDc+/mHYdAM/EVJILcGmQNv+1FL2XK+4SzZB7NM9TwvnKNvLJkVURrIZwwVa7YLUHZVVP53B26uylV1K32sKowe9irrdz8D5reedcMblHIws48Ri+kWWkOFwZDLZsa/BhfpBV5fhljTj2l9HLuaQ8+5eAgIa3NSkr7969rf2rEwzGMS/1pnvSTsZt+P713Kl5WsPzIOQ9AVmxegSP1Y/rd0SRjK0yccpLTUoTgrtEVrOb6UCsndb8YkrT0yoPycLCJNoAytUNuHvO1dj3iexvViZLz0RrJDqb1Pz6Mjfm2GrScxk7SDlxuXUSdfYz8maB3qhXAm5KCUe62z1yic9bZYybRLhdlUFU8f2eVzGVAx55gL/eBX9feRfNlaKhNyA5zM0EKaFv39iuhT1UBTLxK/jrcuqqbeIRnvWx2yXsCmpPTwXE4PXzS9pcB5EWw42fnxxh6+mYIDMkFXkvpqVngoPZWSC+kFyOJMeevgH36vhPqwvOjY9DEHodcoAa+TLrSeAi7wbUJ7JyVi6ueCrtOr7rgB3eR1J5Q8dx72IgI2EghI9pj5M60UAyKijDgPjg/hQRtwuqew1EKHcCXrWLV5fa3swSG+62Sh4ZrpYiUwx+M0=';const _IH='37ecf29ddab9aa9605f4cc39917064292069d763c4da64ecd8ae6966e4a7fa98';let _src;

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
