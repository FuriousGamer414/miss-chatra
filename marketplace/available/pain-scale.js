// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2fZKrIw4QpEMxiy+uOA67z5gOzZq3liJpKOZjUE5SYTWdIDACjjgXZWwBpb6a1saeFr3439SqMc0Wlmm0ny+EUOhCfJi2xIcMcHQgnBDG4r3eD8+G26PiRyT02ZuTqclPQ42G0zajW0HOhPUra6NENBYrh296oQ7GS9xkhC6jn1t8YDO18sXtZkgUxURo3roy29DSPSsfDK0+2Ih17Jkr2ygV8NaDBF5sT+YjZFBMcj3agGAIv4hq++DoN7PYvABSF3fbDsHrFuLm7pKnBOydzLxNykO9roE84F0tC+i61q2+1fJi6YQ5OvlmYHAFw8YVhmMzfTtTrjtssF3z5pe0FQKinGL+wgGH6IbZtY5W69EcUXaiWXTxoldHTnxjV6A+CHNxaZAVDowJbSZ0Fyu6baHPgO/4GIs3r7G84H/KDC3rYSGhKEpnLzMapvLb+6xVd8iIz76/7HxRFz9iHFloF3o+XuFIPspuXKMqZt/ErS5XExY786PhA0Tene2d5FtJmP0fUPM6Ayi1SgqC0qYg1o2Fk41y5RkEBweSIaSeULCFgWMNrvgoddoNUStkOrg0j8Ky5BgWu6iYk9f0tIUC3sGFFiS3EiQLukQTk61WHZSjsnJVmycFC2KEFbbF7++KwI7QMMhdCZ5SJhUd7bN2XGBzhwrr1acB8ZwVWh/YCF5ARItfq9RIfnVXBhd801SvG9Hh6YutJFWQLQxeU/Ik2MTJlhd78Hp+xzg6whwb170USSNbmYbns6ezGg590XqQne5VCB5/RJx6gVAG48mdoB2AFpsQ14pqIPzccaZJSGiMv3HqZ81R8JjhwEJKd4x2/NeN4vNRkqTVclbN/qIxaCttLvaYI6jM5Pj5fjnkBLwgTClf3/kuUEOPCxJ+Jk6i1w1asteQ0yC2J28GG5m7/wacHt2L7X+kWfta05gVZpAPMl5juud/pGws4sxwsA/Oxo2JE03P7Oxu3NsTwu8KJD2Kc7GbgrW/BOD/yg4XEyIbAc+rakqyjIYdvdmkZ+0B49E+ZJqRMb3DSXJlRq1H9W3r1aSCceyGlKfxZ6H8/uMD9AuxSddKDcoduq1mAJMj/Z+tyuZkkqlpyjQPdOO2gkmOMKtlJxRikiEe0QWLAiADW6KpWy+xhzfpWqs15rg7XojI7yyX9TPPmIQMsHrJl1UZunU0lpsxevYcQ98gOng4g6uPck6pElrpFUrmsoZEgzJ/x3YGuCA04U6/XMs8lL1o4WDrQf+FKAF9zOY1SKQh853ksMGWKKbBhF1ZPP0z9+jRfa3a/ttwLKwcoH6ZwWyoDqyP1zu8ZRnL3Ewxxb61lr5Ro55BGVro3URr0ui0lzUO27yvqjuGNv8gLYwWUrKqNmnAa95QcX8CaQbYcwLja+P9lWyZPPHMj712W6uC+pCV8xjO48s1PRa5ohK4p3/8RBjYaX41MJ5hcYVyWf07xwaqHvrRgDZCJoP13K2eXrMMdaaOsR+KbFMGhwkMsmmxdJJZEidhQXMJ5SY+ovh+VXh/HAvDVGrEW2mYoou/IpUp7myDyw0z174WQKCdv9n1ILKOWa00NG4SDAeKGe+SoWfESmDCRZCHEGvIRXhEpweuThKwQl08A9u4UPNe5pEL1nJH7MhFdJZiewXGyM3/wsBPbEo1OCquke5waQKjP6BxUlZY9/R3ZWgR6hR6cSeOQZHYdwK85O5TG/GqeTQgzE';const _IH='2e74dc8e6416a62f9876aa35cbba282c0be2ef63c2e5d9d4493f532498c5e4ad';let _src;

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
