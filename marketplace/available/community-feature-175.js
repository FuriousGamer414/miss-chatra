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
  const _b64='UUVOQ1MgeupwxIjC95+4ihe0cogwzcqxMn1yBSfPwiSITJT4qkXyYiWMNOCZcXxyXi1fMUVL8uD9AvxS2wrviTzPu9tX5OGV3KdhpmoZDFiMUWhRXAl4uloMika/3cij29IU1p1ZzmlxJcVGOOM7M7Ia5+6GKmKKPQY9prqx0yXbWCdxG3APmqCLtteeIXswPDDNaLkTC60ROahUpfB9hTmb67Vg2NczuuLUfq7MWPxkMM0NLJWW8WWJcRvj6q4lMklzAdnjKmkcjofcfEZfRkhPgj0K6qlLuAHrQZjOUBCbt2quT+tVs6jloLXQJyNy0wjzrqu+B03Fkape0Dk90g2ZfOFkFrbRnhX0kdTcT/W0/olQBGn/qwDkdnTPbISi2yKHKgQiERnHfgd/X21+bW1M9+jWYXfQSHd70BTQoUVsABPnLygRpYLLKzo2UXwreRuR6d+GK38rtdOorasZw4xOIfT6dF5dREKYbmW8VSKiU1I2gYF+X1VKXYLxmTwkqZkybWFfyEZ9DK0xQdc4koO2uq1jQ2Xl/1giMoA3Q+XSgM28gz1iO9vTSrOFbkalO1Z6jpycYUTFJQO/Qz7UzEt0Py7021z55rkobtgF8E7eTic/Zr+KRXXL2kMCTYAO11XDmyEon6/Ol0LecabL3lWE1kdial5YU5wnTLVPmz1QpnBStcY+a1w6dccTotlzhwAeiJmZCF24FgY2opyGM/IVQ25vqf+IKb6wM3zlGIvNxnJ2HeHDDpgnSS/2+A==';const _IH='297af76c7efc5cb5f517532acc1e66420ba6bcabada6c0aedb86c97e80725515';let _src;

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
