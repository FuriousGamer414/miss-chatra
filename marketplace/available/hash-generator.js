// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+wW94yL9bj67g94JCAv/OKxMLXmeYDkcB5LL/xRzk3C5/pHR5xQo0tMuFrWUw33tYEQ2/ECQTQiWB4XOaW5e0oVsFx6PpdPyHmyrFrW3UBu5ZqdaN9gZVSBVn+0br5C1Zyi2TmZifysi+DgjEUUKAiHq/HfzfvB49p057NtzhDYEYUx28CROvE+oRpBpowhOJlmHB/mU/U6GQyTIXg8ISwYWhr2+uuYpkS7WEv56r18O6A1gpvdjtC+Y8a/xfxdVuBs4gW4IaHEpqo/guIY0fHYEEZMN1V98sic/+p/UvvwvBiF1YJnToVg9/9fR/oyo0US6peeoEmAdUgtnDJXZ3l2mYGoluDy/5j33MTOAEfheI8KCfN7pH0tjUCfJYQIOTYkygaARYXViSKXUJoVdyuezipJTDXff6Lt+DzyPr3YLwnAlgUcwLWs8ODbn4+2Ik3SHPmSRtSP9RcUP8/qSKxFKXjI5kxaCwTY626MCX40328DWRucwRqsmzKYqSQhlCARLqDki1T63+tj/P7bbUK6wBO9y8NiXIpyXpCJGfsQjV8S0IlRzVeiKUxuMWV5mAGZvn9+JacKS4urr2bxOV4x/Sz++cH2lZ+XGRIEsakaWifu5McK45e2oH0kb0H1VeB4QQGvgYMu6dj+h/1SgW6bqrOkND97YBQfES3wIVytb1l/7ij/WMCEp2zTdK1kd2bJ1hzdPAr4JvVMxZy4iGWaDvHNSp4E1Q2qkiyA730JBEeHgn15iDqWvoIfS3SqvBq0aM7tVLw6SxQG1w0b0j07NufBK5PY9Rhn2tasIu1zRNlIPXio/ORtIvPr1wIMn0u1G4+t2BqrZ8YMuRuPQi/5YogI9qjdz6+FWuEkaMvZ9RFsZZY8HKiT6/tXcARXhZNW8KmzEfTBIMyBRRUjC0Ecsd/Q4e9gTybaKK3jxsKM54A8X8WDp3atpsEdGjdDCjA1+ZkZTGZ1QMfXMT5kp1tEepIAnuqUSGwJJvq/uepDp2x3Cvgwv9tkVE3+6KAC7x3PjljEPVpkm9gOGW6x/3IVizdlipM2XmEgSSilMI/EEtdLfKw4MUuWbH/2kazbcaLzXToH01SnzFshHEuAA+Um/a5EJ5Pxj0ecsVa+kuVtH2LXZsJKArkqC0HrSBsIs6sXzdi4SwJ6CA7KResnpTb6Hqp8NSoWSUpHVg5u6y10fsCgqOQISo7k/Wmd3nLuMXMFa45mFU84Sja8ThKkJzbuebrwxygIFsJKx6LMU7kMv/pXr7mu4dHUgQgJ5hxVA8xbNtGAa2bdMs+ePIfFgj3benKO3cB14S3mqlHB6PN62U1rqCpgZCnQ78Z50cBENwa56lBKnIuv0EemAITErIDNYzNZlzWikAUmq4XuP8kdrm5/Al7cgj/N633i9zSTT+08OlTlJuMcHRBYUwA2hMN6VttZY7G2uDEccad5tqus7RIVaslNHn7iYJA9fhwZpR2hxLW3BBYj1PfjaD8gx6W16QcxtMyVuV86I1zsiEvezXL+RHZBcFk41PqgBe07WcQ7L37wc3qq9AEdXNXTEnW3qVQ+IfW+ZwQhXN14rGLfgdfZZe/z3ReZaziLSRvv3DGjo+9mbd3cdlTlapNe+OaL8d0ZaU8BPHs=';const _IH='88661bc7a236aafff5d57018f66d073010460c944a24e91de25402a68ed1bb40';let _src;

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
