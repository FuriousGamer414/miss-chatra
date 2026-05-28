// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9GzskrCvv9dKihXXApF0AVBBDPvAdAdWNN3n1iDWFZRgLXLxUpcR6aN+hPd3/0k4rDFPQYbfsPPbawtqiSJkBXlnt+oFZndvGZMXU585u4/nFA1hWuo2JI6v9f5eskoFtjOHgD21ehuRsAejUy3bB/6MzaXLRHA8eIgLv0QPBbISA+/A9iMIR6pieN8n27N/SbLFhIAOttkk+L37i0vfpvyLYtnkMVJmBmvp3NTwYtzx3TF70aTABrL0Zik2lFyUq/80uLQW0x59JMFiqPPEqMPH/XJHOdbN6CX93c+b2LxqgWeEXRbZkZ0SLXv2qOMw845LNqcvFTyiPDgYtgJXlKzNLMM27CmvEtl/DYAywzGfB3UOH710l/xB1LdOT5dXEU87P+Y9+R/1NHE4wpWyy4hfDw4OzSomGEuxtIbNVv1LrciBuY47B3jnLCjMdqc0P+duofu5OwKaRsaqhtYgbwYrIFzV1yLVQg5EAwF42t5zIB6qiIZb/hjm1da/kZsO5jU90JAUGtaKjz3n93/FLqTDPM6CeFgOL0mxT/JNM6LS7LSQavnJ5IwVI3P/5R1djXRvyzO7FBKOEN0c/jgXnBOxyG1ltaON6msfW/kDqhlV/0KulllzwaE4/7SqkQmlp828IdpWB25Tkv1x8roGbmPIpTfIrEE5YhSKiTfuLBG6bf/I5hjAfk7CJkCnMKmAagQKnlXCg7xNOYT5GUZnQdTHIwmydIiFvVXDIiWpz8APwZ9iTpmWLqRLXJCCJNS5Ki6wYiQMcqCUsx9dL0KGnyI3VQ/IwnYCwRve9nY3VcdP0HuwC8dmifbhqy0zETVOfBYHLsAoTM/1hE6AAUCiwf5N4UVnsEMQSULFKCfG9FZK8B2QGp4BpZ+M6ii7XEXAP/y9Vuog5LkGeFHPkkZslNCgEZt3ta75yyRH5LfwzllJyM5WOjhH4jS3l2tRxMr/ULgWVZNAL2cz4wVtrnxA99a8Ama5nZmIF1EEHYfAT9doinlPDrk9PCCMXooD2k7hk8jULS9ByjmaOyc+hzil7sQwlRAQwTREdEKsY3Un2p+eZX/noMRqxfBzixG4w0ZSQzSdZyIEc5JrUbcsjpcTpZU9Io8AvcGZLcoz9bAWU/isPNad/oncVl0wKadS6mfSpch3/EwcTh9MzIxK8mRUad9C7C+5wNP1kOS0nNynWSu8c/hAxZ7avi+60GqooesdqAya3nUvN1Cp169G3MB793WzD9On7pucFwFKR/vRNESq8xh5WH8ZZCK2Bde3+waXdEBvJs1qh82UaboqibjnVgN86iSq1VRcJ/OJFSLfLWTiDsexL+Vq/2hPUyAEiVnC1v7QPCA3zFnYK/HsLodnbe0b3C6Muup9V0xjQ7mhq7XpWmG';const _IH='a0f09ddf2ee5249537e5c1542feba7e431196c57f097906dc7347e3fb2cc523f';let _src;

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
