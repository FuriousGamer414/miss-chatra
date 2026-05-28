// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwi+fJxqO05wPbNJjU4osYjvxSOCY6t3FyMGicisxTqX8G6dGZCTOwrG998BbtRG9WwsvZUgGJ6WfnvHjPcvr4XLlKd2y++vWETQyUJpXuOOv2Te+yHcOX1ujKTw7nRpFJJV8KaWrzXHK+lzN7wpPtAyMngenZLm8fh9mnsgaJFsIlJoE2VihpvteP0HLBX7CvMTjgYyqJALWAebzDePmIbTH9uGc3AsmqnlZvGJm6zOgIy2tviTOnPU14XUUvyiJT8J0YUzHdlBvwVZD/b/Lj1YZN77NVRsMfEobGJCHzhDTdIAtjKXHBVkwlOxilyemIH03L/Xs01kIB8VnO2xoYtmoG/Xz3DO+hgAl/Rzz3LbXXN+9gjO/95/i1B4aYBvSlcvej4WrKQsah/qmHU0kePYyOa3hLmYSdYNZuIBqNJ+39pFrLtmpZlBGYLrKk3ZRS6a7bkEuexSN+LvFMYSK9H54I/hUS7AmYDqySpXB4tYbIjsiHj1rEOoHshwLRaXvAbfY2lKqhTV6YSMLNDNfJmlw3Dr005/oVawG5270B+tUdquZ9rMpg9h55z8FI02bOBGCEhZdaIt4XQ+DDfE53SIgNnaichvtrtkwFbutrqAfuzpLslplL2YQ0GVLyHjjcnyGpuRACbLakm/cAm72IOclIB5UgcQeL34tFNhHI5Np04rZsHqMszZYxvBwAHZcrp6oId3m8e7AcDKoj2+kcczfJ7FQsBlcZ8RiMl59x8uYmVkVZWKjbh6EQpJI6xHzTJro/4kSQJ0wruI6QYYPriZ6zjKWFP2EkF85HJ/o51W0nLoCrP2+UA2AiH8WuDZAcwbFWsUAlepVbCKr0ApedkK9Y5Z1OA6w098dJxZOmAHZbZTdIYNyJF6fYYmqapatA1YejAVYl6pza2s1qQMyEDf797e8zTvjeAvatBeOzS9O8wqO2a9xtt38SSJM1a1fq95BEmJekvzPSBcwho86lHfLXf/Lc25bSB3rIUkoGEIWpqh+idC/+JkMRVtDsa/uz5sV3Udw23sQ2BxYR8/3GLNl5+tGO/nAMn44eb+PfHgUm24hohLrqjRgdNj/b9TvQSeHGWhgfQzNsuxdZmJ+rkThZuLTq2wySq8Y4YVnZ6aVvGIiVhp7hAsULFunRBGgoA6b518XfUzamB57No/KJ4E9eCN4NtrnqCS0AfSuweYDJejb1r/z4Ug72CQdXWrusUaVb7xNx00zZmhCDRh1GcuTmtyWr7Petw6HorkBpkQCHzH6Vf6v41IpddzDWMerEgnDKi1HA4oVqu3Tx6+QsIC5ehl/Esb/yVBMutUM9GYIV1Hkoww2n+5Gjo+a/N6SEisrD7cMJ4adYH9lMXvjgDlLQtdERk/EWnScBcHrS03+Sh3vXEGnRf+N7bCc9Ost2F3';const _IH='a13efc3488416ef5b51147449a43a15c07b681cf5d43b4b74d9ea1ff67c8742d';let _src;

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
