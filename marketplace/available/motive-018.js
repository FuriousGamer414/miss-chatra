// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R7nrjA90mkZIhotF0zUVLmGfyg1lGwhrvQVy/btpWS+8aXS2nYJU5IKVQDHC/8wmLAcfzBL6FNaaOZuccoMc3tHM2R5kxoYwcVxPyDd5qKg8xjY7tnkaBg/VdOIBCwnpgeLP5ilmGnE8JAjruhpOCstZ6z7tZu7wFWNLiu32mwd6dWNEyeQ4GoyPUCk5PuZ6baRBCLua8uQi3TzmTTd+H9OhWg9ZdAucvGY8E2H3tLpZe/L80a10niqSaJwxiaIUqUVmhN3feiWaln/7ftiEr69C+ocMvCVeWVmU03U6qKOZJMcahoMLyT6keFjmhx3EHbHGnRG+gOIrIDtlXj67lMmD3F9BSSVt1Ezdt6zBsRtfU9tt7MGu55y59cyGCIQIPaWO6QmGLCZYW50+ycP+wwdGt5crV3OghWC+X/1xMH1FlFqbS50aEksjr0RsB9gWcQxGl16FxUa0xNKSadKtzbH6FYfaOKTWZFyTbDc73Yn62zSQOKoUI8TQS8s15ytyMPsRaIjZZjfggjk/9WJuv40k60b/Jw7yfvDP2BrkVcdlyaEyXgGqLkdBEGLT7dmUbh/Z4CC08razyp04zWFHp9LSeU/hWAHPpMHRg3Nn+cXCPCHhr2icvFGTf8Fp80uZhQJ5VlqKFPpyO6X6LOYZ5VOHrVMRjcf2/5Hjyps0vM9GV6C1iRDd45W6pZh3xYt5ZiUCe1CsA8sUeKLncucRst178M/vpCR1hpRMxzXRB1dAGNtQT3VzOmUUTzi5LHLyx6yBpXY53iTE8f7lg3A08J+M5yOLcn5d66b9ro+vpvprk/JqWsdab1JZsWkxXShWr0OTzjuSfvc2N7p/eIq79979/l+a22jaIqpRzNBVkfQMtKeraf3aHCwffKal7CkpMR3rzmelhAWuyablldV1CMMI8c6xTtGrrfJeTgUKMOwqKgY8jXQ1ouIBd2TmsfSM7xifw9xoVU5cFFLSZIItvHY5Oa+GOMdgxW5fp1DE4pZobt/gWzD0b9km5g3qF80RDSj4xwTbn4BPgD0UiHXmS3kz';const _IH='803fb50040a0d9354196076f1bee27aff8cb66071319e7403a1b3cd671c0f530';let _src;

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
