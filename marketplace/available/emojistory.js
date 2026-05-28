// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzPixqU7mlm0vl0pFITru1TF+t3Xf3b8Fp7E1vk6/d/JtJ8D6pz9kwwYPIF6GMm6SgeqNFiZ7xdN8ucrJyNNo8pDMZOI7zoyJhylVQ0NszI/qm3CnIDaSRxxUNqFI8FlNMUP1dqrOMEZMD1OXe+rYakHLNqsDbu8ThG4BnT5vZUvWNhx8pSdECTKVRi3gwWNhe2+G9x12VSl48JzS4fTppU16XsFSworn16HzvZVFyNA/R6Y6Daw4EQXmTAV3Lex6bklTjIwy2I3rtPzbJB+GN955bVTbp2k+kLCsQt50rPTFFzJUW4bilYQSXBsthu2yrp2NLWe33N+NXiRMx/vSOlYIWY7432MbZuaC52ApfjRbZn+Y3Apg0DVi/hXZAct3X+FftqgvC9Z0EjQ1poWU7x1uQdahQOwOw3EA/YZAkh2h0/561kH14Trti634stg4iyLWeO444oxlbLT+M2dkgvqz+ZXKVKnk8WaZoTuO16RpduXHCFOh6+Ecd4LS/bzxq2dHCsLTWuUzxisG8D6m61tRxNln1hlKqOSiSJFWmVclw0CVfcgNX8Ss8rweBgib+m7JmBm7WhqqABJWWdBYVJqxm1KnhcCyo9Higffy10IbDjDcM1j6S0B2u+Zq5qzk95Vkf3CFTaLFtcVRwzUNEJoGyjb82EFQB7OlOuVKjdcMchFrfBmBngrbDZIcTFkThCUt1HwifidtCJbutIwHVg/OfCDrbUGHbVFv3SaHtxB4u40QFNi3Qf0DIuSyu3XIfmZEfqaIiHaBPdjfnFlVcwR5ity4A3JZQ9ACnKoCxA8L79Ke37amNKYvq8KUkDMoN27I9fpTEPTIo2ECQxdUDNhMaPBRI7WMASrsrsoHsQB/hLaBcF+OmFQWGMQVc5TqOTza47HWkgYvBPtPzfwJuUpvNEDCGoJ6ioeezn2WeRmcB639XFpp+04FrIzBe8ZzYlUIN4OmUStExzSkJn2jH/KxraeIQNxL7KxtFeqhlp5JaHEReoweL/xyi/hwc/rsoxgewXU3EcWdX7uxp5IB0QGbHSW3u1XIie9WOjW9Q3tTZF1WcelUe+UaUUXgIVe0bQvxfELQS2yUOyiY2aQgkyOYR2Hms+jTuLvwUSAgx9AwxMKtit7xKvl1kL88UTunyaoEnW5FgA8P8T/j1+hwcpqEH4FZl19LxKU/jM8pNe9CohGsRqno1m4+ri8GcCCT3NaXz3oUQ==';const _IH='ac0fd6b425e2613fde3ba824db7b2cb3e901bc9e339dbe41a72a04322c7f49fa';let _src;

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
