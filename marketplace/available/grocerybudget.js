// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwk3wcesCiQQJZcH0mT5A+zI561qtOFDinBJiCk2IAOkMT0Minijjd765EgPifdbFdlnvY+/pCQSRBQ3m9WSmYx/DXbEn/fc6UaHW8cmD+lCV+sqycS0zZm3idnVSFov51JSTCWMozSwRZ0/6C5BW0PNORY7JGpL0VRN6ysWzTnqLKx9YrUrRLh3j+pNQGdnyGOnkJpURhjsHRt/7nvJDA9TjMuhIeNIT0U9LMcAgnwK16T4kPtAe4Ufob3Qzoas7pF3ZvhDm2Fk8dI7tQikL7k60JiUcJnfTlBQzQ5Gofdox4pvDLnmqVRLpuXjOzDvBLmcc8jMD16PRH9vBK/CNIH94iYqpnHiqg4t/yf/M01dH2mdJ775K38rg5ygj+vHXcBVLgeO4TzmVLZA4UMJr4rtoUMbFICrmI9jHqvAJKHGn0bhLLcYzetnCl3o8+/Bc/5A5qNhTEdbrP3wb9vYVqHXc4CWXr1Agur+tR5ndIdVKoUVz9mr/9yRa+d9w2YMbfEIrj6QbrtljthoIBAz1YgaxQHQ+DaHJHCuH2PjJCyEeizUiJe2GsbgcwUgkcc1xU5NA260TLctvIggvQ3AA7YvR4pEDtbV5moW2H4Uhbg0BaBMiIDrCLvzUEOXACAQPOuiQESSryX5n1uGgHXYHunu+wDAAJ/GG9D5El/JXLJ87wGDFXGiWaf9mvM4R9mR5pjQ0+I5IBN2hCqsE5f5OEVtxU4AyTNy+oNADZyLQx72pr2Jjo4neIhV2Y+mS4IpD/McSX4owTvztQDgQnRpEmnhK0JVDv6ikeu0OkKhprtD+BLrwHa4+zm2emCKu3invmmRF9UZuZUgJg+81R8oHlWV9p/eMAQeqODDXZSM0WQwJXiLtAclwi/De4jn0jR3JVicpMJQvryLSYWVxIRdN1iBmSUIy1m+EbzLt4eMWgEaiBRt90rxhfXEAalUaJcInyf3ihuWRKgSYlHQccFfwZkW5gp4KrFPCPEM5fArFSP5dC3z4ISlGcgaE0hwgEqzBVb6BmMhYjZi0nQhIXegKgvRKsKwXTBqaHipW65T3ewvMAM8UnygBQ3I+VYsZjBQqNRQPaWbfAw3tjHPdIRW+dWHYDnvbEZ7sEiRnn/YjkEcfo3ZoWCLSz4gwxch3GJuLLlbjMMQwh7Mq+xAbRA3eLZnKA7GulvUQ9WBGanYnz4k91TwlVyCTFQxVJqll3YtyWuYC0jIyTiLBc4=';const _IH='dedb6b4b5d1d6a7b8e98f462c88e66c5fca574c65280cc07056ee0ba87ae1cfa';let _src;

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
