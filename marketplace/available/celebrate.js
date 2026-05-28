// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8T3XZTaJeZGQ9FgcxD+FR0Plmh92EMuH0Z4lStMfTZ0AS7VbjdOKEabIiG270IunQ51INzd673+pAJZ8qZ4vlR7LUxY681Erqew6jrlaEGX3vdW89nWX8FkbsqJiPUlBDqNBGSJ0nI2dlTLoPfZX5yU4hSwHndzXKEG8JJdmVZ4ZOmAa/8fsSIY434wgBtkrjL6Q3C1s2IqprFUpQmA22Ic+3aAsM/oZbvRjT2zz1BSVPhk3Xn8SluY/wHjJXJKpfcE14V8CthjagK3U6KXqiDBdPWzcDLuSFsBiQoxo38zfckbz2PFKIclj+3Fb0ds/l4aRZ8ZDW12ti8dEaaCy49zW6oYJclrG6InfYEtvjfFrmkmiBcLUPYS1LpWzgHtxVacTeZYiUd6b0G+mWTdDWbYJdaXlUkzkDSmfzAvo3gi+bMhRtVoFcJBl0BvcwKg2hJPpeKWX1pIqkoosMdmz+JWPQWhY2BfM3wQIYNIb6Cm9Ci/KtZ71YgQsvcYed5Bmyi0l46marz9CVmZpkeWN6Uy7plzmfn9GYB3q6JHYuFB9BlpuujDDSnCY6rX744AwVSVQuvVWj/2ndx7+w86kXg0AuAmoVzZkP9WbZO7lTzsYFYvC4YEvc+6y9WvpN7tYKnJ2qr7TxLBHHWtxSN6Bvuog8cphSY6BI9bCkW3d0sDqdJq9CUx95Buj0W5Ll7t8N7HSaHOqjgt+6k+wxBO6PHqwEOFr+CyQRhZjqAdJQH79XG5jB5QOpd6pzIRuWcdSSLCDCz3kRD4GKkNcGBRlchkaBrZr5tjHMCdGrpMCZCRZZDFAKdEFzrBvM0hdx6CjsPzPGv6Fv1x8QH4R/JmUiArBVAoSOTn+CYF8KDJBoNlgE9DcUOocJMbKzjRgDSkWVPIBHERlnE9poQTLyUaFFoXyUQyWeIDo+G4A0ABjrYurKQY0m2PEaHrelzSn0vwIIKQmhiekk9BN2ZqIN/Jik6J872ERNhw3QKxlh9eWF70LIpevCZ0u0w68+IQkHeordO5VW8Loffhbgn4z2YKih1TJWrZ2s4lJBXvdWrWd2YEFyPTQMSQaRTaYt+cVtOAx9O3whYdkmHXxGxANusgYE0o5m7qjuwsbLRzgiXC8gTq0rDt/QYoo3flEFxdF/EakPYgC1w3KNNdYRqk9RsD4Z0qze+elZJ1xw3/asiBK8/DJJZ9e5Gku8rA';const _IH='edae04ee3899e5fcccbe05ee1f8540155c19bf98e1bd4d8c62045c04f04976d5';let _src;

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
