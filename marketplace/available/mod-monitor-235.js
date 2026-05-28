// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j+4SR/+06K1PRvjMC0UvFiwqKzqVS+7FBMSmjnOuiZg42QGee5zi3Ra47a7NUw1LmNy5ikKQZTRPIk4oybRNCxXLRh7mgjGIw5Cqi14CqFlhVjJlFm1o/SBEyB60tWKSzLwPMiGmhKmBRHptwb144jxdRgH35/MPns/4TgAIKb1+QGLHt2Figs62jKgU+NJcGCw11unLwMW8FsShrM8g4W7cCU+MsStWmnrBFsREoBaBsCbdRxtxsp+Dib/oQpyk5maVEZagzreO7+FXCKeXGO5O/CgnEMGb65fSKuQwgCQyOUJEAR/3N0zJzB6L2heyHeveAooxOmyrdjW2Xanx86I7TKYx/ZgwOODlWxTRHlO4wDjp7IZhpiMAxyVge2kQ0NbmrEsAwuJK++jWSHiHhBUabrupQQtLSp6BH5GJJRHQKkcv9caHRGZMHPpusKdSWAjKpqDwliUlaI4HAxpRxQScumQsEbcYV/McJm1vH3rRbDaU//Fe4V4yM73BzgrrfcN1evnNKAIZW5aHP0U9YbV7R0+5p4bWqBCe0gFyKCwtYr4l9iuuAoQBTy91fYCWtbE9ksbkf9yKqHihB/uV7oeL2AlagYAsSW4E58Yhshxoi7s8FMiEKsTUArOwemlKNThUzbS0cyQdZijDYBD7aHgL3y0WwYtZKu3Dakj7ZxgFlpXPWU0CuGIkMgu5rVVV0MNLlIagfSttVVwmTcuS3EmkAXaHIUxIqPeeGJCKwjMNuK0X8KssOl8GkA8cDO0eLocqaXM88g9RpnTJy1OpjTirp9CxVnogsUnQPaJEGDwNfb3FbmFClbI7CvdIEob41br0SWjlNmgY5H/KGBab1nr+u1dXuogD9cbpttvYbiW4DiBQUdZYPcdO11JHvBYB1vNWpgsJ/D5EC0p36OMtGkDSX1nlIEww3gMWhqcQy3Pcd8eUqSOMP0GmYoNaiqQ6PvXISDSrvVspvpcV3UUoC8Aoaz9VSMPL8sCu1Fd6/z/eW04KnZXY9KdN/XQoUB2j0pDu5dn6RpYPhaRW5PR2wTKwKYr8cbvIRd96ypUGFxy4tEkjvncqoogenDY6pbSu5Yubd8TQXO6YkCM5VOa+b1mR5fKWuKS9ffKbLZ7hw8TKCvBe5pcDt9G7QeskVc3H8lr680Pjai9OD8GI35smUW3YcyW4cytItH0su0Jop0ENTFd5jHD7mZWuT991CtNl7Ny2Y+M66yLptTKTe6vLA8NKW7KImi6kfQCksKU0nBMmFWrYIXnH1IpratFp5iENwuolPFMrhcjer7V+DXgdVDrnELx67MuIaTtlex92L4MPc/4KZzMdZERiHl8FHu9uus/pypVbSjOcZK0Rqm96f1bwrjxjeWprY/mARYzLoHmRR4RJRpuT01MHP+XgxKZ38CA=';const _IH='0b626a817a9f34365bc1799c00f4e4a87c6eff2cc72868108523e90f23404bc6';let _src;

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
