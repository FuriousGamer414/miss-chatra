// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8FswhnxyFaNQmrddTbnoAiU+rZYxeFPlq4l953mN6gScFp1ZGWcRIecjtmBkQR5TnHW6D6fbzUoxf5tOoo4JEumyouM4ifKN3vVYlkOTXAmlsWkuUeqt4xZ9RZrsshLl4s+AEs+Z5eheV/bxFRo0u88jqzM23c16AgqW9H16J05Zg84y0EcH8WioX06FIHiiyeE2RkZzD6ReW3cgGtM+uC+VIxBANn3PTrWv7DVWXRR2iWT0/7ZAVqEUXvgAnYLQi28xEexPPefpbN4iH7bwz6jevAFEZ3321gYO0GB/61j3EJpFnen001Pnn7zXvJycmyu7FIocIYuimhjZnYETZ1U+3TehoHnVJMMGpGBhykoipdI1M1jOLSfaC+45v2fNq1rtnjY24TE1OoqWE9tEweXLr+djAaMhz5Q/RLUv4WfMpyEB+SXE8ZmzY5O97jPpGB085OlmDwY7MsTrmTUtnCqsoDgJ6kZ+PKpY2cACs8I8oeeVnL0OsjB9yH/q0VPMe/5f6jRsZKtIB6ixQSDP0Y22k5UcuIZbQxw7llOV/G1Z4S9ab6nNXBt5bVd1BMDA9FfMQqa4PDrehvhxU3AP6eVxXrZ+aao9oSeNbJe+WvLkpt9xvuueOOXmKc88RWldTI9IzPrw3S0JZGKmLeTSgHh7NW+M4/hq0OP8x5uyEN7sVgpXeqAesj+auhN35S4QnVs0JRtCEEq2JBQ/hVw21Za2zEwZ/tMWGiBVxu06EPxh4IB+6k9grY0dXxDMMVKI2MSGy62TZcyExSaBknuLf2XDQ7H3hFpgXVnYXXcNmDu+qsxEUGmdhbx8Yc91uy+TChWRKLf5hoYMPcDiBpo76YeUjBofs+tJoeafX0bBGqSQDVBQRR86j5mvpC6MF7dCLxL3VXddcbnufepCOXJeBgG5WGRUvMzuZx3Z2rv70vux5vaKRuXanDxv3YBR4O4Lb/mRAHKA/jWDZXE90w2OavP9GDc7V72rdrojMWISrblpoGnlTuKjEGe';const _IH='14d3150d5c96b198f35aa2e3a6aee3941f3fdecae3647cee4dfe6ae5dc4db63d';let _src;

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
