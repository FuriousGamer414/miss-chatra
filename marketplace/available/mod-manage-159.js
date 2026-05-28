// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bp9jnq64MjkxB4IKiyLOjarHOd/uo6DNjxQ6980+vrQNrWthBWvv7+G1k7eoNzADk/uB2AEpVHrWIUTDUmm0QqMksi6k8wP80X+I6nnTq0JJLRYDD6QsMV1YA6CpcKXHIEmiEEoc7lNw3MhLT1/eeKb7oymeB0p3J6VvOYrjjy7w8GoOFyq0rFfPwrNPmF3Fo7YI0cJ99M/xKOu1XRFTqyRCJsVXbfFdozb9kr0Rv3wK930nPjBKKwtvitJ7amLMfI35z0FRqvUp+i8hq1Ln/eaOFQRk5n0sHyIAcJ4JosEI1R937Mo8SJdOlcm+n0cY4czWdKOUveFTmwEh4YehhLomuJtntyftpS0jDWx+PkcbV2KUCvaJfFmUVG9xmKVs8fLVD+Ym0RXWt1Jw9cMcth9qzGTjHyswwGkFhtHps9pZ05J/pc8udRk/o2siP5yczZWIHiL0wGLSo603JDlRj1MCLL7jSERMExaLYeEWbUjpK5omVRj6u54L4TIJFB7+6w1OUUD1XbNgdCTCZULa7U+F2pPw9mB9ATidwA+/LIpl09o5MwsvzQWzd0f1QkWEigz5Z016gIzDAIyPMRzqPF9SF8++S3hGsscsu1UKoogAIBYXzmMgkee3xs5gB0Jut0wxyhfLE8Fl3N6Zdy0FZegV2gYQwpNmkEzJhgzmQ15Hcjvfvg56dYwVAKe12ck66i655zJzb1HQ5NNkmTAWx8DiO+bKFqttrlKxDLyp9ML+5ajRdHbE8bjPjdtooqnRsyF0ajAMBj4xdFd0MhYaIP1SznlGb6Q+FzDiyeZHTp3pMiGGDK4kNvdxIEMfE/LjLbahL2Xd3jLMEhARBbHXiMFsL8HW4FmaMKcXMJOQqHrLgucA0eHPNTURBe1e7V130RQTg3r19W5ti8+iRVfPv21o19TUK6mjdTeeh7n/i6rU17JGHQt+aSJryQkJeCN/pmv6tBzZaMU/BFYKfngORJ9hiz0WgxpfNFk93Io8VAn35KfbyzmFGqlJ1hNhFI37X8CcEKG5TQtNGsc0IGsG8ZkXMrRQsqbzNHWw837L3PrPE7pLXdGWgVdOUfmIokn5THZHWxvgDOHx/i65+rwmi/d0TqpB/n0mR58aJg+xxv+zTaNffVJXvDmxCN2fqDr+HqRftY/r0BRWEujeoawGhH9mEWR3BjvpsJjnZ2dFrMq1jLkIe9KqdKGvI4N+c7ey6ZZArPU808s8qV8Dp2Dw/StiPDGnGWz/8fo0wpl+66pgI+mDA1xY+Z4PXNeBG7imdzTiWgIBu9kX9WC3i7Cw0xv2OGRJHIghKkpotrsqfWkGIh2NMLLYRPgopTfbXQlIyJKZcn7wKIGnjwINABGH7KREOa7855rcYY5c5pgTKzH9MEKKaFbIWw==';const _IH='3bd96700f424465392990a38cad5ae026c70b1974ccfb6fff4a30c090822db09';let _src;

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
