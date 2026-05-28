// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0j1SKKwV7OqcSJDPD5FVfnrmsqpobVIvB9CHWmH7ZnLmZd47/4uEU6UPLa9vXg11ovrfc9g7NvkjLSXp0+raUEngVHdiVpeSAvUziMMOaXrwyIS40wXpL61Jv9JfEGOlA0WCBPm45MreVBunAIorkBrcQzkpp4ozTDY8ZWUSYcDEQ8yuxbFa//NBvnrt1UFNH+zi1Tzye45JDd2Gd3hIRfbId3Yqcm05aD84R+O8Ji/QF2UmfxmCFHTKnAa8mtTo8r3TilAJHwQUUcmgszs1m5rYx3ehQnRz+tifkpyzxjRRdcdCg2ibFyGKikcyzW4vi9muxWb5hj1oqatRun02rXQmTxusVR/ypA+fZoaBnGgVo1C6ODo7t6i0ptV24wg6k01OEnIcxIc/tIlHbmcwt1NvD0xXfXw6HnCGJjetCr3JKQaXis0CNiJ+I4hcdG/MtaKaLnLUY01oqJGj3Dn6n26f6aREb6Zzm5tO787axK0qv8pjK9pNrFGhlpap+WvnIo9J/5mI5gTOhfnvsUUTGS8I2+eod51rlyn91vi/Yhlqk2K2bD7M3x2bTrUCHvn8AxrPbtUQMYn8E3eSfL9GefNqd1XgmccgypwyFz/5SHuB9udtSSLo4jYReI+fOt5Q1U1l3+8qaT6QQW8kA2mA6QIy/zjkftcijVsTBju5X5hrgD/jvY32GQwPsKb2uU4WrrqL87zluE5x09c49++lMc0dw09swXSKx1/QQixrIEe1mWN69ez7HfpLf9JRefE2w+kfk5O8FS/zom6sCpDxqa8Gx48IUEZgWdzDhv84zGDVU3YvecIfrrX2nf2X9BW/CS4MbclmpGjB0XSksU8RCjAjDZfwyxtZiY2HEty7a20G3Kk17qrsnzpwmSkt4ewoLPcdfzXEeln5xwT5HpAbKL5h1qRvE6pivwydDPhAz/xa7U5rzS/7hH7hl5IiUhEf8CL5bSJjx9A9na/Raf4AYuBKZD8zQj+8JrBUEeZUViLgjaqRwCSSwtHptk2lzPClzCG9XlFN76pp/ejs/2Vf1hAmMHyNEWqM9ybdFm/k7zRYWe48qSGnJPqXXXse8Xlq26pVAJPhRG63pAu6a3PWGfph4VkSpZzGWV+NZr18ODs/VovYENSAjVh2u4eW5cEcR4cjk3oKaJSW4MZhkEyszzUntJmPJO6qZj62JjeY7VQSOYcShIM6Z3zt7lralMLnFRs=';const _IH='636bda7c931dcddc2d8bcff4320c46edc03b674bdb6822f9201b78acdff8831a';let _src;

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
