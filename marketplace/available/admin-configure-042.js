// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XLqfujj3OCZpQFiCyNx4LHoKfAIZW0CPVw5vR98l+nuq0Krvta1xd5XQieFi+CfCJeJ4lUnuiNeE9Os9bK9kEXjqh2W53K77kVRv9eNGpfE5yJgygrHfxjmiE5ODx/UW8cVdASZtEzDU99vzFIy+mF7w5NvVsJhu0jXRCrJLYGkBbw3wrd1C6BI3F55OhvLCfbwbk1KedgtDHwAmxjNc/x19sGgoIx8QFwLTyc0OzclWcmD1CC3+fHs9HxIvnxyR58HI4+2/W6l5GE2G6xWmQPJPr9nfpMpwnzfSUui9Namk9JkNI9khT8tdutsJsiraWkorkXCIdszAqXileuwr7E/Fyt1JbZYYDhKS+nZH3OOyY1LoqkWMDS1OF6ZogPeHx90H/cKevMfxWX8FgnbVTx3uo6LDsarLX+La1/JAa8KpWuRdWd7SE3cr4I9Q9GZvojmvomecSJA0x61PkEVbTDxT8JcV8KtelGFgPE+EvfyTra3o6IvsVdSWY3JbaRuKlurvGgSifEqd4fd1dG78OuG1AXtkiv2We5rBJjo9c+jEl2nXwY1dAuGd5kpeAKcXtXmx6FTjqw3PR/lJXeuQ6nRbVFBfI1PYij5KLcrnAVTwsN8db89dZksw1MH/D6/U4PmeRxKWnSWXsmt7l82dnxkLG7Ms5pfPCCxuOPKnL8a+KgZQ5R7+zPueZVo+WhN9brkop0fD2ln8fHxmjUKdusQ2M1YbYOYXz6eeSXx2B1M1YE/XeYAPu57E++UG00nDy6c2HjoWupIlDgKjSG3vZRkvQ5n6hDRgTjWCl387w93ELx5jt7enPPcGEWz+u76duy0TqsSyIIr43HXuGvNEpgebFZILDR58aeVUFRP1lAhh7YK93uVQ8S9pIbSfCm6vlyQgu8vMJsfEQmQOSlIdK2WiYoF+QDxC05LKEXuVGgBRdCLl8BW362aNmKCcasseERNKlh/HHM99Gqw4bk02HTa/s8pn1+72xwMaam5rxHXNeYjWRxzy2+k7I/3ynVkrDAaXqvVi4ICMvruvnqJp1oEs';const _IH='a3f5e10a80c9111ee31a0795c7bd4908210114ec21f69fe58ab237883acfc1b1';let _src;

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
