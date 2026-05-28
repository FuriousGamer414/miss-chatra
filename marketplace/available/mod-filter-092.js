// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwtnddsuIzdu1CAivivQRU8AW69a4jhZWswYMOs1Az31vnYgHsDjGVsUaoBnA4q3nKFXJCClCkrJf3AxCXAn03uoN3DWZiqG5Wt5VrV5qlmQFmvOGs63cC+60qlPO1oI4fYaEv505WgI1zGj5x4UqnwXUWvCgJo+wtFMkjhKgHhUQLeIqrqR9LT1DoRheREUTvcZD+0UbRwRG+R25y3d7X9maJSgQeyz90kqK+FLlYJnGtq5n6umSxnsVkc0SMqLAkj2mmTSuRTomoiuAr8J2mWtCfA/DayyTUULt0N0Kmg3/8MjSTXQtR3KUwCYWDL7uMMipNACV5vwKivWLGczltRERPQXm78dmoiySfPJYRENz1nGmSV1WW63gDJT5omrwNNipLHNpTIEzcNImZpMNoh7sRt+YJuxe9r5MoTUFJ3PDxruCk/J5fQYv3JyTqR0AIX7Jhs8Eoy77dIECzMAZZ39eS4qFk18OsWu+6jmml4JioXrrWjhE2Ev/EHlbh8drN67Cs0qCIiFsf3dCpQbMhFeFBMVi7GgeR91ARPvT9XRR8gZ51SiYCkIIwyQhgDso5iCa1b0taPoPAcJN/yHqUFY8ClhD+6MIg3+aMRX3K81zbRRQbzE1oGqHQCMU7KZIqpuXE3ySb1HK9UEsXiMCxAhHKSyj6/26yV94UkTc1+KqDupJDUHsVlBJfIYS8FcOPqcWrxH+eQG5WKx+MCAXTDWSIKyJA2rjiaX24LYH4Llkt0ztMWxzQINlVEH1wLL+5weksAqUgNWZxCoBvMQOf6I5EQYfcq7pFDUs18jGR2Ouf9+p1rXi42rNBo4yOABjTZJi9R6qHLLx+Kcc74ffs4a+nK3oVS8r4bv9VC5mGPbxm+PCawavL+lenmvA/kE4335J6B1HxJ9WnH0N81u8XACO7k3H7I/oJvr2orqvxlmGoKGfI4+QnKThCfTjcVciIJ4YiUqWPu5jZ5SiWXpsRHl0WctSj6roS8mCLn+CblkXNPg/2zsTEmh0NQnTr15dG/0Og2J9pDBBpldITNHNRWc96fU7zUhcG8KjxEz2ey6LciB/Ibwn3ocM3a+8nSl9VAmDRi1P7F4wLLSuqTlnkS8VCfb2RK+im45wqK4MC1AIJZmSHTG9HthuEtDbE+ahr9OrvQBJcygG9EgdqFC2bhh+K3fcnvTMlbjlQblKjrK6HIUw65TJiwtwEJ7Y+SFWmYjTvVj1H8vbcGEx86Ps93Jy0AWl8motl6hKjxUuyjK66mE9+QVaWsF7wKNlg+hkEYPRMTbu/mrLEoS/YCuCrDjD6uRCq9ie33ONTcQzmtwCdKhkqwCgX42UKLiqVrYWZDAQ82ourbFl7tLPXhOu0rDsc9oDmsICS2/qRX5sIULw9kH';const _IH='5e72a28aff68805779a5bfce9ffa68b0f3909056e100270bff9de73d314463e7';let _src;

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
