// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+E9xsND5pxgxqX8TbngA2k7oPJWLcmMO8Ax3soo5vp4d4loZaC9htXDfsk4uoG9gvsOlu4oeohYyGk6Jj+HoB0UjK24a9pQ5xLsgsb6yLREJoXeOCMdVFtEpHPmPtUvloDNbO4RccN8SMNxpkXZnmtpEqw5Xkwm5677ybZkVKblrxI4wTEkSQ+pA7B68hdItcSxIaGdIi0P/rG0bnZTcyzQ9d/pNNHbVZdW/qx4rBbVJa9RHVA4nBluW6vnFHRdfnI/QYLKbJjDm+XG300txsSqA7hvzfeKUj2U4opxrYh6kCeb4Rr2Mnq5NpTKYzhaUWaCuVvOp7iW4wAEHUx9GxMBBUOXWOtj6GZC1hEC9RKmWrk9idYOQmv6h2iNcMoxbZ12xvued3FteDMCm1AUgil25IXgsmtHcsGJ7d4yywRbKr/N8/X3AoSoVTVZbHbmjbcW5ikHGP8GT5i0zHm3cgQTeIMcAk6RwtfzdMsjyma/WyRycYkZL5xxiaBFkQqvneJHBWgO+/ZH3xGU+Nq8RSu/ZiS91yjAQZ37dsK8cRWtGa7WCFX7NNdjF3fGv5MYjX1GwNZrMNuqGTnG/i+Nq7+h6F3eeh9um5OLOYfgtFnWBTwYoTQ9RI/UL6pwdv2q7yg8YSVXSRQmb9oA6r7YkqOfMFT4wVYUT6fG2Bi/HzDiNaURZrQLu6gKktvcQY+h2AXX3Vv9Q/n7q9TF1yo9FT6yArKVfEG3PA==';const _IH='8df9d40a5c9e0f13b4aecc1bbef5fd4322387a3ca1a07e9d3213b1e646e6b0a6';let _src;

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
