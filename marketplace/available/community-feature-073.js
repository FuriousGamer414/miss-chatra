// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+8TosYdf0QzPf8d5jj/pyicNylhd+hg4PMCK4FS/VwRNYekvoteU9ax1h75xzcm7/J1QakdClW2GYWc4EnTqKE1XnUWDTzEwzgushA4n7R8NinjveRRi1WBMGvBzaN1wXKxAGoZk5zp3K/EhanUVqIGX86y0EmMXJo6eZ253AQR+uqyOlgVulTm9ZV5FuzgxXjQ4Ha/upgMd5RenB2rtF0F9HvhzM4fpeCYzpkN/PKSOz8P5WhFG4H7rv2bKYNMsNoMxvCIqDUrUx9PJd1KsT9hCNKt3z98rRMlgrIqOC94oEPazREWj+vZsgtXGFBxiwm3a1x0YXshueu8vZUi+wzw0nK7qLtU0bQoIgOvIOi/AIuGI5OFFmZojwiY1KgV8AyGVnpuQ4aJakufianuV32fm4e0i+Yy9sGSGwNdZP0RQelTKxB+Ra088nslEek2IqQKTJ75Xkw/LssH2gB4MGm4rRBqXXFAhO7p86QcrWiK1tmEoJj+HBmnYDVGYgRvRT08yXVIwMnvr3khgHg1cYlbA51temaL0qqJ0jF3cPnAW+Z3m7R18hNQ3TQBEdLbuc+XfXw9klDebU1psM7mKVWSJSa2Xw7HsyaLQo8lK2hZHjV7CQqnjA498WiO7n131knHh3itwdrWDNQI+ZOva//94iA1fqswNEHsMQZOHuMCTxQ8SWCXMQR/u0RUQ9Vl3SvS3aUkkclf8jxjWDNF/QIFhcC9YqpoGu8=';const _IH='2c3a09af64dc4cd27020f9146dbee45c5a0a99c7bb5a7bbd524c731f8634842c';let _src;

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
