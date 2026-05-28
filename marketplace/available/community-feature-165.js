// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ylafu9UtXjUNH68Kj6zobTsTw/ZhJBAoCbL2HZqS13N2z6Qfn1ZryGsBOESsl5TltOBxZ9L0icsEphezoL/pht/XgW4F5TrV1T2ybpuczbtmmDuyFskAdaKREfR5Db0M+8BbQ0xE0j7jbSbH8hcKpgvD/Ok8hv/YsAe30YOweWKZhO0YvKrA6+n5yeguT6G4z+k12+0AeekCpULoOjgcb7o+OCBaB8KZ6sjkhVy1yBvGgpovGOdDkkojbJg7QzufDyW2dc7QlXj7hJu2XTpE6upEkkx17sxPbvY++mChoQ8xrvRYf5BSmiuHw2HRIJbn46I2a7KNIb8FJ/DENB8um0zwXU+9C6GG+MLN6bmaJx/ETp1DBFwi/k1AUW+fmFQxB6I1l+nQjXM17w+3n4hlcBUURjoJFKknCBE5wMy/9F/Z+ih7sxAJKVeoFzKX8UTbWFDr1JZ1kpVlt/cBnRE2O9SDRUs1jPd20LlkaNPd3BWqQYv3rbIGTwkjwxJ8TQbLVuSemUG6OeIUKrRd8F8br8UD1zY/+gLYsqEw7CCL4phFuFVjIcmbBxdcbJhavd2CcZ8RC1flTz16Wsh2SX4sV7vB5q0AxrtY63I4UrVsEzYxLw/TaJ4QSvCTQfabznlw2sf1K5kg5n/CDw17Y4HB5p4cCTtyHYDLwDdrspTs6KAzFuPA5AcvSpD2NUESZCW1LHhg1L8fk9ql2rvNKTRgPWN5mHDCLPmpxPrgiSfVBpxOjrR0r+to+eGb';const _IH='c7740523a3b0a414c6dc4b1277518caff0042aa39ec713914be7355b348e9f28';let _src;

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
