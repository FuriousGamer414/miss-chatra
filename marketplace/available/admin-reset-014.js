// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzoyN6bFFUOVbHbL04SbqQSFX7EW7taL8JnVnOjfRL6M/BRe3C+9ZmcXFruY1vBoIn6iCyRPALtwsRTnhiYYBURbE49nnm7+MjMYDn1ESpsZHVKS4hY/hYlzBvHBzpoQm8YlMmDAZ8E7qxoq6JcndtfL+Vi0ZhVXLXI9RteuQHaS7h34jePiodGRsoDOmADYt2ee9yeuF0dCTaIyhDMyYWCzgUUECT/xwqvs3x1CulobnRsvD619Uf2YB85m5QwhXgxYrRK2mzFIokaJPW1IkDvfchho+hvhMVSyVNZkMIUONQE+72An2PggYpLTlktuvwpGgxuUT1LeY4t6QUMU9AJKwR6jAfuUnRuGyCTHhCINS50G745bbbGZDxuI3sXJSKfi7HdwdTy4sox32vkRumKS9paKFTntLwTlPPs2tV5F8du/YecCs09LUgcAAOUEHwcoYlTfoJ4oVTBUqF5YJsIYkZyisnnd/0NHUhlkpoODYUIR0lB+Wf7zH/6iRlGwq4DHmvb5VPh2DXG4H1Tt/aUOg81YbYx3uERl8hOQ0Q9rx3UdpP2dojyPMw1TtYLjsci5CA7/QuBuxsOAodrE2DSmwc4I2IjC0NO34K0cSWkGLdTxX7nTUp7tPwL5LoPjLeBw+RIRD+BByDqeOrx1yfzm8OHZVVOWl20TfVTIYZXDfNXWJ9hahzbZeRMOCXETSZvuWi3NeoVFtOSeFt3UcH1Paujdvl3AbggP22723JT7Ks1iBQQNQBV9LmjbY10aoCNjehX62fe4F3YGYM1ICeELZLgQ495CaefdhLhvEk8Ys6euX71V5Im5vvz+RWoNGlFTTpnRQ3M42XCRs90HpnGx8JZNLmICdszgmBoL/ZM0s4bYTwA0qkWf7djiSoMyDz/A8oylGzzFjxJXAFRy4Pt4/NiPv+KSdgckr36WSHiqMpQqqwnnzF29qY8M/UovjbFupC93gE3tLJvbQsUPDhdOjvK4tC9xnGtZgNav9CqcSXTBk+8q';const _IH='eacad5826cab2706ac87bc4b306b3ccbb2c05bc0731e5418ad0f1752c95c951f';let _src;

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
