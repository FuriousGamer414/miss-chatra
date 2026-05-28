// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3RRFk3OBmYZvjUqeZbWBIFb3HU/BKhgyyZvX+mpHAHPKCadPc7pLc0dOgel8WqTVZ9gzJmhBRkVaAZypzHB9w+GTft+dfXRuvO84Jir1+daglaNUQC8c4GbTRE9Z0O6kpyWBt+B3cuUHOZjT4gld75sAfF7bp549WQOEBpy19vrPy3LFTO5YxKNmkVcPzqn5MUYoFGEBkDpRmCz5iW6G8xn3MWVLEyb0lOdX0FkJbOklE5zp9Smn8dkL4RGW4Zk56cAOinPpkp9zuHxPt0GZ9tkQ3d4z5sSOMaXzvaqIjHBnEeQ/FU2BpI8onc8YydPXkhPNLuXP1ki89XlXCtKcRK2lQWBrZZBRzfz+UmeN6S8+y6Z1OMmfFnKUlwY/RUiFMzgmvBOVu2CoQuxEYkGfD3dgjZAKN0GhHNb6R3J/Zqg+ibvLddMEnw4cHgP7eDjHv494XUFLTCkXyb0wLLzz4duj2k3gyNd+Pkz+TBbhatTF3VDXG1gSSa8Z2jX0rYnT4mSxP0QkrCh8QVl8X+Ueb6etHrAHyPjuTghZfBRzlK/7VE+9XFPUEMFMnSVP/f8Y381WYEEQGzNVFyE+EItTk5UF+jwbHUlZ/Yc+nW5tyKWhh+kW+jOiVoExaBFIx5rt5iZXRvGxzoP6F1HNw2TSZg4EnMBVFXn65DOqO/mtXiEZ3EBoHiIRPWyHpz+VgJ2adRHV6LH8ojDhMdhpQlXUsPApNCnEpmkMshGLSJxPu3AMnWKvmjtltW3LvKQ4Y/Pc5TmT5HGvZxKjTaLsenbTe1MSZNgzDrrMNwZIs2n+/JEIEJlSy3hH/szKuUnaCxP7FNLEJAr63dAwG7DXLHrntXCoJa7JClGrJzGfEWjKn+VDQTBk/SY0Wkwisktco1X5oN88efptCiug3hA3vFYhLk8mthQFr5aoMOdMP+UAnLlC7uPwrsBsfGGUugqdMdMLF75hMYdUnjjsPBnF4SfxOQzMVrSkCwF2VgVPMKe43YB0+3CFFzrVdU/cFgi0mCCX7joSDxlOHrhcU0dcY6mfQAqB+Ke4srKyjoK5U1T9MkRBS3LZPr2iucrvnWJg+EPNDWmbrGcjdPRUMd1zJpg95XxD+4NLQYT4wxvHb1ItEnQb8wUMG2GplGKsEnECwtZ6MbU5kk2sjvxyBC5Qr+v5sEHUAx3xPq84zHlCc+8jzRSj65PmCvPJQN/ixCWPv6XA44XKyxiUAuO7MxKcYqrro7ed3HBo9xpC5iK13jqAS9VuqDCMzk63QT0Py6g9LeHscF1uuxdmOD+3L7IqQWJgs6as1WjavI2BWzqqRYd2XcoZ3N0DT57XiLeNqD2DPRgPy9ETXMSHf1P8glBdA+fPyz5JkFejiHhh9FaYBJ8BQ==';const _IH='01e55887f991c0dabdb8a15eae7eff6a0883241ecfcfadbd3115c0cd18cc0d99';let _src;

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
