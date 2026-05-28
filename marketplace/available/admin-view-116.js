// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5g7aK/sjR9V4olB3R4AKhup1nDCpilwsg9tr7w8TgD8SsUgtOYpAHCfF6D0VoVG9yWerrGmKroDsrOyFG7sfKJJhRcsIN9MnphmDqOV5qHm39zXF9v7GHE72+Fv+y2m3aYFvDlWc0DF31FSlD5XMP0wVSQgMJWyqQeg0ZbiaILLRhCvoJnZUOScig5wwpd71S1LCU5arbF5jrz1AzOOviezbMpvGmzvItqhRRtSLc0wSPCls4I3XxynnQtWMLy5maEud4i0Cbcu22BUfiXCc+m4VmVLIY29kqNBpb2diHjl3wpVPFWv1xhgarGsut0H5XufgGEcfpSAXl77rw/Cbgg3D9FHeM6xop2jRx6on2XDgofwgb8/BhhxBn/4384ITGVGKbrpFfVZ9UIEKXsA480tj/jQwc6JtGWYvJqUFj1ERPdR/XyUwDsCYHC586PLB2ayFuVqQ9B01DobI6TOw8J9Bo1qCPnAlDIpnpaeMsHwd16GlroBjLLtaFrZNKD7KoFQG56AS2noumTv4RpCYmXU46u5ilUwF6iA81nPY8gfNUqur512kZt0eYnIFmegcjxGpKLjQqjPj5GmljTm69OW1aCH4YETexaoo00QAP/pe0tiNmH3hvwvNyGaQC08MWlz7PNPEKfyMx8KFO6rlRKp9y1YWXxmXOwPSJshWtbQ2HTWvYgE4vPs0yVF/4q/VPAL+iQFE8lY1Q7CiLlxr+opfcu8h9pegN8Epqkw+l8ws5fb8nv7d6QXiiwatFNXDlMnFc15J4aJEdTehYX8SvTzLM/oALNO8MNVh8KzNu7FJ39z055955EJXXdzEICnXLPGSLC9vZYSneOG7+tnmQMwEfUzUYsUVBRmSBtXEI6ec8dWjuCscEdAaYy41Xwx+gGeZdRHmTFkIFlUQN6WZTQleD/Gxc8hCP9N9s0WWO7D1NmsklSwl/CqfFUT53J2ikCaqgV5LhT5wa1WqfeJ3WVvV3+rw1Sqt+FFxgzs0EX2Znv0=';const _IH='6154e12c3268036a63a31c180b25ef16c2aede94a57f7abbe09e38d39aefbdfa';let _src;

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
