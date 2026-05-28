// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ16voZDJtz91ifE/MIat1rw9rgfSJymL67HrHXIPOX+LEEwMUiJgtvyVht6mk7bU4nVOfWfsVQitfQaTG0ktbVBdIfq8ABcDTfgqb5k3Qo1udc2WLa5cogoXgOV7kfkkzOkYUEd/UXIOnELwhOW1Sg0DS8Ujgy5JtabJnEZSo7G48UrGfUq0lhCsgEkFgfTvtN61GxDVcqdWE2Tsi0swc+iaDAAYa6N8UOV02PCStLOnIUT+wI7lFi3KBvn4Haty6emty+NFnIhM3VR+gbKPSGN9Ch6KEHR5q6VEL53oa487BZ7D5/3bLLGuFKp/Mix/xeV9TbR9fQIJyvwLAiujXzufov9Q8oDE/VFzA7hndJDAiGf1IUA4T9VtTki5JtgXIJVvf+yUQ8ZyodM6oQEdfTzf9p+rhhiaLAhlqtfzotpDP2VPC13z+qS572Rh/6HL/rCIhff7TklL8ZIaUBR9XlB1u6c1jDk8xGQczUyM1YNU9lw+xwWqwoUzgV3l+CfuGcmG4ZIIflbEz+7mgi/v2HbzcEu9Qi2PE+zApyS47mi0H7hIGFv3SKou8FvlYdAX4dUucKVRnqWoakuPh8vIG8pv4GeTMI0Hf3rqwuhsbxwFSS3dBw2i5J8HheXQ2gMpXtatiRxDCurQ0IozJQZi07SfCtCN+41i/vMP+qwEzoV+uYEhTkXjb48jiWU2tE75phxXT71Xh36SLU7XG1U5APnU464kAfWWgmau7Pe8OXJq+QoIGpPZ14dcG9WatWyBP6FuyfNILHMpF5h1eLlrZz8Cmi4qV+EUbJBabxk1nAuSOdGFaB7e2O1LsXtS23p3DzBEQ/ZSNMM2ucAPQv3Hvb6QBUtO//YVh+L3kyxldQkD4BXmAqN/Vba2niLygRSALR5WTOwFmvIQSPVt2v8RGHMMBRKZQbKDHl3NmZz0s7kZUig0cnxDG4B56jLalOOg8YuSD3Ge9UNBpyWyOVJBnA0DJoOFBnW3z/iu9Vy6R6hlqMqY/0Xgbd7ZdBnS5vIIZ9iGPLhEeAPKA8g1lcvpaQWhp4ycLNbinHiQnVdxcOjpbPgk0mbS5Z8MSDNDlvYvhEb+SU/tbOPJ+Qkpty5cweaw5YlA0S29Ug7rwhuS0/9TECYXUSO4DNdUwDMBHakLMdW7fyDmMTSWTBwDbQwnsdn6lCmQPH1gbUuAtKKow0XTit+ipjnjKOcqEm6PWlgaEHKNT18rbIsysCudXnf3TK8ghBNKPV7n+PtK6CVVq+TqDITeYHWnCwzlNNG8+QYmwv3ycyDvVtsOeAi1sJS1SgHnwFAPqYQ4RPp6s7EBwif66cX5hrG7og/WVKFCOVPEF20AOhi9bsaJBSFLtqyv7pNMIfPjo8DhDKw9eyafMABoINWSN2+6B8xndKTHiOqidW1VNLbsMZaMIpX+rg==';const _IH='f5de3b3cf05425bc56af28443ab8057a30bd2d77aaba90404e992b0163004242';let _src;

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
