// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xYNO7o7Z4nlrLwY3IRM2rYOkjEzKTMG/riCc2ImT52bmyM+vaB+O0A1IasMQgIuFuTZ4ftf+yDrySoho635OAnFJRXF3mW2E+EO6ayz+Nly3IKIX+nhg2A7sgDwkosl2g05RbHAVWEY/H2M8SijRqVSC+P1sSA+VGwgzdni+wnAiR1cq16vXAMP9Kd5mMkgdgugSHdP6epvDq0Qym4NucEBp8L6JlUh6eZPAewi47kylOilr/vpwLITSujNUPAAIrZK+F4wjSgzqtJyzzsHMFlg/YyA3bK2oM0UeWUjuwbaDgTqs59ZMeBY7iVVIit7qHFLkJAZbYZOLZoK2qQ1wGNxOSFeOcPfApfrqAZQMxLoT53WkhSXSR8Gd7D0Ph277AHq1Z6Wcuv2pA+HWa8MIJNKs5h6pMXBjJ2CXpkEznP3FF/ygUPIaV8qBgbWF15ayZyINUJm6R3TLBql3bQtV37Vm2afNq54ZQTx/CSAfxpxhSMVIs+rtopN+3iGFpv/bmb2xo0JLl/9AwrFknO2HeOZwqloM+YwEk/ckI6z734v5zsB+JUMNiGu49+tRdKULmPto9Gfjb0M5Cw5e/ufaQbrKMbe1LaDjV6O/CDY+MLnz+0LDPEwlX5vqKhuMjCyTkPYgOucdzucdr7cwv3OEgzwSAQIb/CLj84p2MY5pwxM4D68/4nvwkrbyhf0uPq+hlSwVTp+xriy0dZlj4/nLbGZ2Bowup4YUVwvv2coWV52vmI/o6VDSVhVVSmdkvn7yRBKUiEWzcmUeT3YlL4Rivw6v+wqMjAC1oYe7DKz8M7//RJe0Pyx5LPVseJs8tCrw9YFJIi3DHw1RoOI+XY9uNvO20NMJDoljOSZZ0Y25bmtSNjDhCXIQOnEvREpE3w47D5UFtinpPJsa1RFcLIX0TSHIbj0dzD7r5I7WzCLWsHZJwmv+x6bSMC0SX+YT9K9nGnqSk1tkZ3HyFeVLuSSYDfrCrO8Zv+pwZKvOgvNEH/Z3hOy2tbt0FEt8suWK/GN0uwfwOLTrqnC/nW9GllDf9BAz0OWibmkKbYTWme1i4vmxbrGartBGIMDdtZGijpz/sWmQ9VHUpKcZETxEwTjmalPcRZHDH+g6bLvtOrSIv7lvS0yNsLLoYHv6BC51zbAcVz3WbPgW+rF8Hbxk12QvDfdIhT8N2zXnLSCb2GRis1WleVX4graL1Fu3RTsp8jUWzyL3nJA1cX8IIxKe/HQ=';const _IH='ddec8d566ce42b461ee40c1e9571f1b645667c87bc326f3c5a8dca33b93673f2';let _src;

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
