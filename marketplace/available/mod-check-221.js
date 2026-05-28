// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4TcIBiYHPo/m4YyQyL+SOyJW+Uy7GETX5aHKxlJyMB41xQws1ugLoOx5pdrPdYYpoXtBMDPbdSP6IGOw2r2CA/Inc/YB5FszuHNqmKTlcbO1q9NO/ZIA6RqL/rVoUDjZJYQRVuC/gNBo5Fp1njMLo0M61tVINHMi8FXTHF1YGjCgZlzvfWVrV/b98fF0NZUmmr0JxCzM0p09uiH7YYWPoVQZm/tzjBR93Qm00QvxCssq3hBUD74afu2nkq2b0BRyoJr0kF2NCOvAyCwYjmW7Ledg4Vm5H5c8MUnzO2SCbpxaVIogkNfBGfF7IkBOglNF10WdgEKxtmESq0/H1U2Jq/BsWaugtfAb3wmgVbCCI21R3YVr+iEfhxGIFS/eBBnsxMcZdbZMip90hvupfMfCRT9fpc283DVuXcQ7HQ3fssYai0r0f0RYr1kKxgNtQ1ktSw/YQTF8KzeZ96lt3tSa1U8GhjuVHpUsCJ5cXLx/16/eNHvJdmfKQMIhfzDcgbn1W4iqbBC6odgBSfFi7QFRXJOEIqbemsdLxVtqH1VBxP2Z2/ZkDqEf/Oz5bRMtaQft52kbqgX+5x0mol1RPd4JlnIfplUIebHKVZFUriIKjWDNk50f1otnzpk6rWF0aRczURJcmZfg371o9oIsIKy8lbHE+KZs852l9+7P7brGd90ZxOvQ+luJLKbGwUEttK5omfcTwMFXFW8lHEFQ16nP1tFHJkNtlUVbMXraQbp5T7w9msiVGAfspBJsnHspdWLNaJTBX+op/nHrM4iICNh9M2UNYr7wadaL036uVK3daViTi+jebyw3JqhUiEbY+MCYOSapHotxFmglR5pwb/kySHoS6EMAcndAT4jiqdF8iqJCQ2QoRavTofdHv+TYJnsCY+scvJJkpymWdLDV3LoJYVQeMZ212KTazKCTB8VdJLvEGtUWLZy14yniF7Daqk5wjEHim7llHh0BAfwuQ+8t+9BwcIdPpkHc3UpIbbZgmA5eYVtWWGpt9eMjldPA/X8zpZ9INtSIy5H8aWfRz4PbKlVz6n9+UNj5rLLELvVzjX58slx0u93cn2dNlc7vDhnJEZag3vpiG2lHIkUpX5UlbiNu5i2LQcgnkJWT55lKC34mbOjTSUFLNJo4NECNAgS3Wq4GJ4XOiR3mbnVRcVCmxDEAmrE9RZDuaZh+3Z3QPGViQNXYteuBkRCyQUU8HkAazneGDr7sYSnGJXVG0IDvIgyGC6LY1oOEkA+trpy/cOyIxI5KzrKxxsxO/WC6RMzS8i04T2uFwmvu+Tlfk/wI7T4rkycwwPovXU1dsQnYHbDxpTUuzXIn0qSUJDTrDUfCMwWm7Haxr4KqdwKACVZ9x9esF+9hsk2Nhw9S5XqiA==';const _IH='9168fc0bc05b2fa0b2005ef756a90bc729fc016796ebe80ad55953eb4a550295';let _src;

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
