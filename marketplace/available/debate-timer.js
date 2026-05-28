// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzAKNKmL183Cw5C4GWVSkG79bsZ34vJeq7Lj2kR/9hdar7sZzKSARwDTdi2vRWQiRFbVeREvsBWZhbU9zxgaxqUj5PpvzoLT/gCiXrMbJ8cLGnAFp+4SYDLpM3/e7OuutESLtJO3sbFl6jEFOvhT6UL53T6ioem5wYZhkJt7uE5aInSSdu+TIaRWKGmOu62T0a6531K1ASfsDkOE8QXYlD+q96M1FhdHZglzvPziJdei8WVZvQasbBIva46uZImg1VXn5OR2Sa0UkLDyF3wj8xdXGpeexb0EquhDuQJ5KJaJ9281AgV6TKrMFmrcz1AZR+f5z32WqEUzm49/gCz170rnYRrm3R4AzVNu2G0u4NEB7pYAsROdSZsfd6Hjhypww8oNyJ5XlGj3cA+JmGoThdxILg5x7Q7lU3e8lU8bJTGU30Vhlx4cDMz6rUFYUr7X0bpYDKGME1ODcCHqAm8GjPnC1yeMCO/wcc3xQNJlnYjayvS3DcI+MSa9ujxKS7ViV5IcdrqYioVb/MDU3ykNxuqXQ4da/2wKiQRi6gwQNjdCzVOzzgstngRiJLET1TbNBGNJTnKjiUXWtqZi8zIZT2gFBDVRpkj4fVoA6TpeO38VBBpnWklRHc/CVxYffbHaRXjElA7NjyWCvj1LLVxT0cCERIRktFQMkhpyqFrfkZdeg90zJ2lpUWrfso9YdYHLjP4Bdcb5tvOYfGUQhu0wXJe9wDQPsRVwGyTJ+wFEGIM2Pgre9Pm8a243ZQHH9gCWUWRVM6Cn9cJqQD5QnzeLh0oIjc+TyJl/26lNSm8SUw8EYFZSSaNhQs+t+JPk4fpbzjl7gw+R1xuMGvr08wzUn7VepccyPaHLqkX2p342O06t98jKEGWnrgotr0hpmXZ29RXFUjK9UyvIqc7aJZdLPk2N4Fjg4E3rrJo9WUY87zc+teek/+kX+SR3WE3vgh9BvFftmYP4mps8HfscZtGEgSbsH5K9fsT9Y+LtpboBnS70en1yVq1roCJtdLJWBGZbuo0q7w7iz0wgOTfG9BjcdxBnW+slNXbajO+kfKjXicLgGUTUYOeOI0KkB+Y2jcoqe3bbd+perV3XB/yIkj+oQsdiujP5+DVdIzUcnK008M/LrMuhWk1DGZhRZUCka8ePRcDaIBb2jteOB/8xuyiNeVdyynucnBB7MjExmWiThgx4I/fQODOdYGldODPD3CaNIB4GiOkNsw+rw4VN3lz+x0PJdHnc/Hp935Sfdf/dqkMJ8HiIDXuV28K2xl+EFu4iKDk=';const _IH='146b3f0cb86531da3810e4eeafa7f092a4d7c0a53448bf9e6db0112a576c5fdf';let _src;

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
