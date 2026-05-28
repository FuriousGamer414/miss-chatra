// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1P1PP2Ufd1fgW+6mP8XL9Gsbsv+ihXrdm7NVOCN/PNVld0PxdX9jlMmf/Ly8Gpo8rYZ0/5EFE7nv4NR7qHOzbjRwm3sRYMQRcNCrXrILAT6kuABsS8GhzyJl1I/KBTlNbPYgYP15jh3tYODGC7E8Uhuoxi/GQL0NPyS27yNpNTnT6UY+kqjJToJY+QROkIHTTEczwxzXGKzX9ta6+KDrk0rFFDevOYkOUNFegCABbv3b5LSlmQGAZUsmz++0S+K48Z8QRps4X11cCT4NO32h1VVQQ2D9DWGHjO7SUGdF9KNhw2m1I1RsfrMTTwCwiaORpBEpXOUk21v4iSN+69E9ucvrLdWh3LIKhCOR4Hq/DfV1uxWc3PzwFR/zqL9kSDPooE3M1Bh8lTnTf725QtyIGsDGrgIWjDfAxs419Yv7cho5M0ZlS4ttooDsMweQniyaRPkOLhrABWyBICaUMYH8yFivZ8+4NeAmeD7X0bcc3SBhcxbtk0ukXBeJypmAddj4ACKnPHQedUevPl8F9W5tLWSFo9ZqKeFOqDcK8rgFpo5weoOBbQyPLS3z/3a7PFKnJ9A799hMmexHLMiQoNr4QZLYJK0KsLNtzZXyoK5JZDiDTyTbD6uxPNTwss3egXbLZjOSlB8roWAG9ED6nHt7q7PK9bMwRNh3ACChyW7/N7l4H57QF+RQ+oITeGDcS2/ddhuk85EW9CtjyYrkGR0byc21MX/Fp/m7gvCOJN2SxOvsb/wRbwaskPGOdW2tO9TqrDMrM5DfGj4TJ2rZHVW1UAIqDsJLN/XN07xC9lr5x5Vck7Uob8sEEgk9+7SAFW7kXNWGA6FFvQcwRPzkwFkBrM0KVnZLqqYOrxHtq5LqLxZNvmR7P5IcPyzymeHJKTzlWQ9KdbHlrPBwcGYsWUOEw4ADiynoSvuR1hWp8nMFzOihnNOeU6INpMgVBX7m2nLCnKb7EL2g1iXbqsxO+ggoymgpTrcfrlpq87X2R194skEbUalyJ5oJJltnMg1zBmpVIfUh3vtOBvMWMRt0btGjFS7ho7Bw0jp2c4oaFREiUmQ6ncFYRl3veLd96aLBPqLrhbzuGRGVpEiCKL8/3DguhZpausYo8z4jK+4FSlW3AKfoFNhZL183QSmia1xP1IfTQzlimtPpZzu0/7tTedeYxOPqjv8O8ofdSYpEcEj5g0Td12MxOOc7SbgTAwm8tL96of/S6DVng==';const _IH='cc0b93f4c94edb0958bd627e321bcd6dc7c5a9844514ae104dc9bab290473d36';let _src;

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
