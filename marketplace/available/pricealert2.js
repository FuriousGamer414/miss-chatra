// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQznkkT/wBNMw0Zfm8l6XK9lMcT8ROtJR1xOug8Qwu4peUiNK0owFXPel0kvKzL7bQN0GdWXbb+X6CU01PGss1JpxnLg0PPMZrL4mBqPzzFl7sOlW5B/DUNTlwLiSWBXdakhNx7C8EKJv9DBxX7dEom5/yTBuLWBuQkHqqlqUEzF8vidQuPqhmBwucQl2dGky9DqLXml/Iopj9t6tB+JvP7qsLRa9hmoJEkv6l3DdTi7GZIQz+aKdendUxUGBURY214+owXSy4ZfDZBgjq76hKgLuiSjNmQ9+7iRB9AtxRV/U6vOjHH1AIcj2BrSjGyo2LN0TNp7+/1Im3PsnmutEAnLr4lQlSW/q57JZV47GUJ2vvmqdz3gqcB2MP4doF6ErBn6057Jh5ibsgiDiRUO7+9YeOr9QT/ZdMS1pqVsTtMPHhakp3azd3+mlDQsZOMNwyAstP/ISAR52NafdYcPzKH2bzcAQDs8QfRiaHwpx0rigSf0oPuVMXLwAZ7YJ8JgEccyu0azSt8sM20qn8kxhkSZ0cVl4gJVq/wUv0lKXP3T8jfW9QwesTPJyIIvgxSMKOy3y7UPtFSQCBvkh3jM127l0J64bKcFNpOAILlP738zWsJwuwM3Rp98Jk564p6pNwBZZA1ZKc23weeg2lsUeTLRLGkl56hYZOzdMQNsyepcM8Uv6DD4pUS641zHz52nJfWB6kRIPkroGH6F1v1jep4P8yPC7myERGyuperAKJQlvvOAxK+SL/zXPJJngLL/qTSTL49PetUTEwB3Ko4NcuCGAedCcQBiwdhij8Bvc8z+GEM1VeNryOFmOqA6lV4Qaq51XLygYo4YgLOax7dIuUBOTQq/g91G/OAwYNvVryMg3dA6ISck89O66w8m1epU4+ADwoUiaADSwxwbWvTP2FdD5rv1XNE7DQCPGMfPap8XvTtzVn0h0vm5w7Wf1rrEISPvuN/sgx4kIvcqA4SXhE3dRcOJQN87uGacqQZhaTP4LbT+dVS4xE6+5MfYCGe+27TDiLnTsJl36IknOdUwZs93AaVAckVCpNlaMXCZ2Pz8+J5EQH5QIxY7X/fZcu/RQwilKzEHwg62fSQMMbLbPfaCAKqsH7kvps4PIpoIna7aXHvxy+giQb6g+Zj1KuM9Wpn0PMpn8HJmtjICWFzSjd+vxUlwxONF01BsC/02DS3JaDKMiIb2hy7lnvFYWCjj8BS8vtBRE';const _IH='fddae6400df61be4e4dbe40f928c0dcc7c67a8f52f9e796b802babeca974d8dc';let _src;

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
