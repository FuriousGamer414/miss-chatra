// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/RX+R8P/O+I1DFHOtL+V4e4QdO/Lw0fJOLn3LbLK06O7OThILBMRodrOTwPeJ55n48V27WHqRpoS7VR6nB620XRFdw3inaqZc6vo/rPA+HzAdRpBLrnEFZtN6tYCK97fwS2H0UaNyMSzwZ3bpGrfb9j65jR9Iej/JI3RzyFyzZB0dZKFk0lQ7HOyu8RJ7zwKRxlbbJRP5E8rIrNuzCEI072i28PF5v0tJnKcm7a014B2qAl93yURuZDgYjJCUkzeV61bc0G1oZLGjoghWT+HmhmffGMfqRbc2WGyDV2h/n0kLhb3fZEuBU41PuWtp9JMwEuSMJSsfePwQPya5hDBPRrQUa+Bni6PjVLa7GikqkGhgN4WCFv7JNuBg9SHLfpsFdul2mQbdUfvrSDt/56rtYWdnRiZUw0cnwrTSK8lN49Q/o2Wi7ziTlRt/HkEuqi0gXI9/TlxieJHjWmdnpPE9F5Duh0MIJEseYRKU8LLRqfkxVtxJnX/ZHQvqMMrpd+ehQ14n8AWVi0GriK6LyxQ5JR78pViwNAsEpxoAK7c05FyXgnt4GpmmV3F/OYv2K1xGKnpDS9l264o7m8nbklaes4IAI8Ciou8N59an+tJC9uMAIEZRvQ3gHiEvekm+JKZcTF15iP/3lqbzFlb/jsBSkizclD1Gc4BdVvo+2Yo7M88/Ac+vbD0Yz8yhJfQaofnYF4OigHAgDZFhRgThhnJa/7U8cfEdytyir3qmBQJp9m/4O/u1uL+HUeZe/PYu6UlMGLeJ59llHvUTdKpLhh9x4dJdHHK8SRJmBl/7TJlIyYMvch0gSmJhpSOrpujhCK+3UEY0NrgJ5NI3Xk6kByDcP6bksSIsY64t8DtWIvzbMCGK4UUgI1bbi4y5rh/V3WEA0rJDvYxX7e6XWPnu4q7gZgfd9WhH7H0vvKObnZcmCUYOzIcykZqNgDVMtM+jK0TXqeyoptSKOFHstyXBFeUEOCtpgJqybJZ5jpp/SddIjJxIiFulR9unlwXX3noHXnLDX3pdiPlREWwY4xRhPKsQ3P9o07w9fLuFznkyHH+bv5tP4xlx2XsWm/ePCc45kxTxlR3JL/Au7DHITLtH/UFKRttXySlyXFCWFA1NcFdT8aS/h5NW2qivmr2bqGQiOnqa8awwatA8SD9zfN1V1HiCthp79tz7s9kFe/qbUrW35146b/umIHpuXkDPpf75+WPATK1it89p7tM54pozscuXepisnUDOvPMAkkIAG/CfVrGvZhUE8X/ruJrpOsFo+gobDAg5du6gyNSKitv/EVHBrhvtwmqVsF3EX+qvKfj+tjKAQL+thvFJQOEZQeV8JsYZTK+17xyBXIRQbYTyFyc1kYAbUcQUVxzoKiyYBVB4RcE1EljGv92xW+GyJYSIDDZzL6w0FzcStZZI3NKePTY3XJOyx/OC/dABQuIHQaKXcWzRpfwAHhgcwwY38ZHX/2Fq+foofwZ8v2+R3C29bCZPr5iJMTlamNSQ==';const _IH='a6f758449c386d3fd4264c6e1f315760e2439ad86129dd6d11264da0eaf3883c';let _src;

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
