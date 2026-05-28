// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='39zdZi+TrlKIN5sKVlHKgLp2xdrUneng4LmFgs0mcV5acPzahJrjoPGQVMwTlYurQcUur5vnTgD3B2wrOyR+LOIBrudy32hgkgjrv1LENoBdlYhg1pbcvjiRXbpPQArwqujpE4iC2CBVCDlWepyA9qx1LLM6JPDnECV3HxsGxZYChPwbBo+GRGVUNdBkamvI2KOS5sMFEOYv7J6ebwizdAPQLvwk2oPNPnJabXqOjo0Oli+PpSn3SczFlMRkgrY8TzxyF+fx9o2U2qI6pesmBMiAap4Aaax6Mim1AaMdkAyMIFzEGooUYW0VBTKvKeAtQhqgI65q92dj/eQed+CNcRbmWmoHyxcY6MUJLrQGdajiohNN4TIFMIXFzmzXY1y8Eav3np4D9mOnf19ekfAmkvgq5Xk2UW1Yg4OBgFX92zw8fkyIGczQ41B/AOPnqgOUvnI/hfbna2BZSAHepnvIjToHxlPnUKYUAWvn59QnYJiyF+jqCI0ZCyrKqQJLv9Vuxbsy9uY3tBs4EAVoen+aYS0ml4L5V+DLE72GFRab1unP5aPWffHhnf5Ojdeozusa61G7aA6LHMjO5yjATxqYGA438Xr6I1vB8kqhU86b2lG1nskdyhrxVd8E9ydQZDNytf/8KUKVQ+8GKCfbIbJZZbxPPu4TDXR3ilFcan3hdOWhFxSHOvbF+Oc2O79aX+5rBUCCbYBY/Xe5S7OBzuV5fYtOPHptxYVzk42v/YNCyw6UmPT/++uvIWau4NyLnhR1/aQgsTZQjMi4L8Igb+vDd4qHzU61zvea9P70lfbRkplSks1VSzlDuB859YaTMXN0oK1JztIO5qoXvPA46txmI4/n2xMnb60q0Cl8a1mZIKJox13kqiAWjHhz66sFctpdV70FXQ+6kmGZ+ySrheMgEm9f96TYXCqPnEOlbSR9mbeVXz9oDJHRX2b9+aEQB70vV/KUB7s660AmlKYjCgvTDF4aXO68IE67xrJp1SXFwndi7fChJDbqqvDDYPDlRHlMDOfZe94RYftycdjjINdNcLOjhmwxFN0HiYf4qSmwJsEW0a1zXoe064WsaBX/00r/jes8iA10xw/oPvPgR2aFhNiFStEH/7A/bQDUI/pYR5zohDJDh1sbfPX3t6l2caoLVAes6FHA0lfyisornZoXFgR8NKsYrf7DoteTWaKAW5KB8rdcb6BVNLdarvW6Cl1nvB+8lr5R41aFn+mekgjwb+8OHzO5mDCD6F1UChDnRvOfWDnCMLIQ6ZFB/j/tG2JIQecSNK00/uO5kPmkm++qcgOyhlBh7LH8uVk1wjICearbGH1fpV91mVQeU8+SoVtNWFq+Szxblql+YPaxp/h0BYkTMiCNuEVGpn2e20yeBD6enpqyyABoJgkB9U8xGBK8GxQimivyo11HeIVUS1hG3x8mZHWhN0S1lTXnrB1J73m8mxBiI7EtIjSVRzXSKQi5i/FwbqIVaqC/eH4RUY2rZxsPZLnPZw/IJ6DGp+4KTLwpygIKdDK/ljY8sTKnyLOlyWArfAppvqZr87E9naqHQP0n749CIZKCWC+iB8VluyagzjzvlgwkBSB/s2JDJbkibIJI1YQeHpouKgWVnEUx2hJ3jEk7m4xjLNHnB7M7hustkyXaTe16fmmyTKJYCtLwErFdtZU9YYImM8kYFZRCNbgupC5Ilyb74ycYRsZ6X66DXXRneDL+PMxBzxoT7yn2bsuf6Vd8lSBQaVCyJeuYJaQRPmE3/k4FitgdTipZe4zmBRkeZ/rYZkqN3GZ9hRqrJDteNO81EKbjYJdMNxGmbFQxw5lv03r9biVAUQ934wDL+oDrEmA=';const _IH='e0a83014abdce740cd93d13900229d202e6f9740beed3f90ff87faada8a4287d';let _src;

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
