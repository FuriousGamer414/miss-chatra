// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy9E4Eb+RlX262ZjO7k6SUQF/VMDQ6VfXpMduAqvEolaNOexXzc+FIozvpACuA82Bk6hm1SxCR6RuYK+6DXbXpFfYshNfRxxNjFCM2w1gGQVXvBVh6bK1kBnHe0ki36PWZvvIE30bTVKKkWoQCTBMwBHmM3DKJILljV1z3yIHoBt8ol2AwYCn/gVttYocltdVQOPNPPkruJWtqM9M/T66g7BqXWJH1V33/0Fe6sWYVSxB4NiUd1P+11Jr4YFPKNHl/1Y+660P5fig8Q8xVKLtGQAo8f9G4HHjYLHac6Fy9Eb2P5bBx+0Ru32JNcoham5ywWYs9bgcXLd09K6PExoLjMgy2+8O+i4GwWpsXohNajeEKiDpEjAgbm6G82vWJ3pWPlb3oPlRDxs6q/IVKagJyn5tVjqHr3TkpsD9UdOADYUG5fDJnBobZZgS5OV863jkqUKaeh2qpk5Sm92wtRwV1KxcEJx8F/uNwvb/bJztkjqIbsZQd5BjYcuUed3/8oXS+P58Onv79QkuIL8A/8AAEv/0aGI0TSJf4AZXjP6pQKqGjso0xqXSN+Uiehdltoqp7kT+LB/VxOs3G735RNjuBXN5Br248IPyA/lMu/qQvCZu2tP5jR+DssqXUjXHEzcxpM9ob1z+L3bdKl1mQdT1AF9GEpeNWV84ZK8eUyL0yeJehb300NxQH6tvNreKZSLSi/wfhaNM/nljOhDlWnnv/rK+yB04bMc0oYGeWDFHkcuuq8XKLnKsflETbl7TK5VYkci+xUc2ieY64KZYnzIF/REIXvN8KXKOM1h4YVqc/mnoRdf/p1yCsLVN49rBQx5ON9ghuZ3FeUJxcP0gSocqROwE2+YXSIwFt61Z8kJwENpDsIkvdKT+QAOtEKeyj3tUU4+IA4RGy+Y+LGB9S5N+fwW8XIKhiJQxH+jWzHEbpNxXaiGy5+n/wvSZolwVhd4AtWdPXzbOvkxlTepcobwuUnVZBQT1CTgQLdMcC3P44xr+/XFNB1Ozbdat6t6dvgjNsx8lsBp8Ri1arrKzCZVgwIhNeuEchBZPmx+7omlIrqGD6OfODxTa2Pb6cOcnrOQhl3kRFzmsk7dt+HgUjQYxzdTIGEKK2qPwBV2739bykiBW9BFFforEiFQN72302QJIQMBjm+pAN9EAfTE/bDzMh1lEmiKLFa2LZl78j24T3DzYbyjm6pZQd++Qj4FTqdVmoo1kjys30D6BA==';const _IH='8c02ed6698c3cb2b14b000bf560c43d6b4e1e8c1e66e897911f4a0790e8159df';let _src;

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
