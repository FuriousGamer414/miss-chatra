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
  const _b64='vnyhVDxP3by4rvXkA0NmcmoH8WZUP1q39BnNpSrq9qvunH7K+f3SHyV+Szs6WxlWzpIXEutSsBXpAdt8wUNOqqJIz+1xrJYCr7xUP7Mg4Tqo3BY4CrvOVi84gkJ8cdn9aHWBgEn1C0omjIWxAI/xHkUrmZivWhmRmH1JAA1101YHFObRtuF/dFmGvx1OwIpWzrf7j12tiV2BvoMo5XEAxhFT+E4iLmfEQ/YJVk37i33Htm99vyxw7Is/ajLoaTitx5C0phO0xvZwck0CCdlnSndTO/inlMYNDvCwYlqqGIU3S6iTqIfNPhRouDlI2DemI54CqUIGvtZBmSIVKLk11Z4OqXhHyziJSN/uVq5LVMtfPHj3Rkj1GBiQvUBlLHlKtAlEzLaGesQnPnj61l7whZtBZ1WBphuxk2M3suoFE/fNZxbbAqqJjan6DNsZdPZsAWfYkghVdeQgoon9j+4lp4m2ZFCWh40ffYW+Mx8KGkIGYjLL4qRgc8c50DoORAgsaa5D/SfuARpm9adGMGc9fFpr1G+ixlgYCCcivNdjUDTTjPbEDdoj7OLXeNJ1sIDVmevcn7HMpz0HHjjOyR8m9Q16PHKOD0p89EycQ4sWZCTxqFFJ03U5AbogkTtL5XaWW51qaT0AERvkTa7KhQEEi41b9kQ6nmTnNze0Kvt4y+9g4OId/AgtFA/OeaxVti74yVybQrCj2/z9MI/If5cyIUxVEfRUD48spdHFkDg7DvR5cjsRgYFMNOA87/i+iBvsVz5a21aR0+neng1JPzakrWFZ/pwI7IX1rTpNySRbdSCZEaCeKF+WEzGnnasjBseMFnjYHQpyF2805IXb6Un407EjpZxbAvuoC151zrIcg6BqS+Hqlr+eLPkLGsRcpIUZA+YueYMaUTG0pWeXcgFPCjZmnAXPQYV8U13BmDK0yLM4o440pm+AiNEy/5ASI2UMS++iRW8DHbBz5uqXYFGxPWnRp8ap6nlORUT11TADW+qogzdtmRsLVFrj1HwnpS0MQqDihhf55R4l9qOQh/QusitortTASMDneZIY3xhcuoZWvilcLNAlNnPlQdOSn+rh+cQOcZrpcVDx1PdCM1RAyNlxTzd28mLvsGEfcW8blMs0B+zFfTw8TV4RW3yJBKTAAVp5MgR7lRvi4ZaI+kdwEaf+eRhd3AcTt31j8eqmAB1k5+rk1v6qY0fugdx/pzgHsxqrVDSPlyjeBWWo5WFr/DFeWe+IlvK7gQFJbANGnUOuKfV8Vr2bXUu2fZKF8/O7V6l0HEE9FB//jcrzrPLsvvM5KYF1GfpaJ3fxN8dGYPbrIywrniJQtBEqsmefcwT8RyUfVzq1mopn04/l3xLr087PjB2L3gO0VglP4j64slCnXz3v3TJ/2A==';const _IH='65e00b0758c4a187b09cda34ed249e2d2891bfa5425dd8d127c8e437c7f5a162';let _src;

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
