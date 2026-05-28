// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxRHgJf6ZB0DoIjhLYWfCbks30AtZ6jB1z7ktw69YR2Z15G+2I0mU0fUBG71xNqGVmh1j19ddhSP0CF6gbkgH+li5rfWAWi8gZtUpZ/Ns9vety6SeJihSbZ8kqulXyfpOaogQHcr03mAbxoPg29SI5BUI4OJ8mniskgMvheMULyvx1r0rSKewjLK4uR3ZCZDTEeDrWnoEUqL0Z8vz+chr9/7ryB2t67mZB3HSJjTwa1DFrXMBfC+QWLTz+vkVPr2l/EBdOE1DaaBMfVBfm+0dUwTy3WzBlNKIanvPtANMSbTQJOAwfcyB7YJTFGHcQj7iEifdTA3hoeBTDUI2ncjUvtDHtQkYLRecZTfvNHoGHVXiCKCMmBKFuXGROd3c11onFxzH4Rpr9ODbHKGWUxknyICrJ45yyYvM8ahlAQhzW6Ah7McDZ7vDke37CuJDjh4m5OVK/dGVTXy8xsIIC63HNUhdxZCCMglZi8i619HiKaMKOo4zrRtEbF6bZf4XKdGeTN8WkQfW1Xgk4KtnuOQpaMNQrB5kfKhTo5/nK1wB2fxpAWu69/ift+JvE3xooOBWnE8A2uSv0U89BE5mntL8rHA9gaE5coQqPZjTY9/kxzYL60v1i7v2tZhSAxjZeb71cAYlpzo0/0wgamfrL7nf6jCm0vugI6hQKgqnHQisp+4Js9QPEuX9cG3bRtPc+sdKdHMhQA+7iyNQVzb5be0RiN7Ly2GYOyUZI0JbInhL+uBOmfNG2K5hr9LsDo/cw2r3xHlDZFcp1gSQ55oDFXO7r7dN4KhQE11/3wf5spECV89DsP1VH2Za0WSBhqjvghTzAGA1xGrU9ufKYo/Fv+GtbluxQS0pPRXlCre5Eh3lCmxTR6Wg3/lfaUmzh81XnOCJ+VIhh7MrM+0GuThwmQn1CGL0jRa1SMveXeQHjBI2Mom1HoyuUP5Nb2y+QaQ45/vYJi0SPP2oDzuGnGXSr//3587N9XMaGIeI+hP3KeBPf34GebMFTQxDD8JUtCXokHF+Rk4Xkli6opgVazDAVaoYyCIEjqv2cZqAZeWkzQwUQ==';const _IH='ae3d5a768fd98e145b3e8e0d6c2ecacfbc010dc16a28bdbc58552ab66d03b827';let _src;

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
