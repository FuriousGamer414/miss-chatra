// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8WSEPCKXPVJzzaDKvVETT7w3WWk9XY5+BvApmqBHdu/jZcsh5/wLRdXC5ZPdljpMKVgMrZ/jHQvGe+npBMmTDOr3NqGTvWLSFpAaEA7y6L9RT18MadySUa3q9m7lt55rUcjl9SA7jZggHtX5Njazu83mUBOx9vSxMtJYokAe2J8bn9GXj0vXS3ChFSu/KMQvD4eEnQphC7krFYF8U6kAbbzc9bWKevDL5KLLwYHLRRvfs2FOT39x8hvnXl7WFxYcG5AsySEle+0sqB4mnt0k77r2Xo/iy77lbjtxlk3aiYoltHWSZlX3Vld7U080TWzE71OJOUzXa4eOnPFptgwlvauOyoIrwfRGTMH2q8Pfu1sNdaJZtPskZfXdNWWCn8+8HVN1Hvl4YIgrkgH3cuuPEhCyRL36a/4znKbr4AE5ETshQGhIrfTVZtycfg3uXmaxETxheDJ+moxkkmRpERsLixQV8kfPqdBoB5fpEsj0F6ONsj3dJ1E7CgKHWJcdmLhyBZuWLEUGho8djCJyfzdPdA/bpy7+Vt7Y3QuxZqdz3iIVIBN85iqoQAqkqVL1+ZJNMDiPAsaYF/Em0qp9Bx/dfgpIqLGStSLZ7cXMVHkzwvkoBx41W2slVm2DZzecfMOeGd103Uv2WTjMAApBwXFmhYNJs+ggboW3CpU5AjcRGkrgs2gRYTEp97HbmTaROKFnnvBrI6CKYG3nawSpK25XeA9B6F7WA==';const _IH='113c24586ab3961877c8fba88a088413f13601da6b725aea42e2beca0a0162c1';let _src;

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
