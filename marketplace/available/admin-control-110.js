// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f0QLIog7ElZRx2Y93ez1KHV3GQNa1mU9mLKxSikW6kWFthCfhfzJnUfAUY1KK8UVf91s6948MvVk7o3PNSJnh2qO5CIC5LcbhQPN0i0CRhjg5d7XoNyxtaDZVlM033akIaTQNHhnYHm9OUcAyUkgyvFxAPuIQBsYdh9UWvjx6XSo+weTOHK8iLfwH6zXRI2bU998JQAXK8jFajvunoz2x9GmHmclL/a0ATPZqeHlqSR8xZKzC7q9dzvRNlGVAROB4uB7Vn9qZU6OpefF5E8KbLXEGh3xLXRgvnXz8DwplcKVVI0XgU1bowZRyTtDm49+aRViX6+dBjNPdPLL076PRM2H+/JJwhLYoNX8bh8NAOYO5bOkdTOD+616OueSLy79FX26iPgfhQMtRulMuXXsQJjvJqWq6hGPc2vg8AI577UQje62nN5Sl1YRp4Vf5jwq4mrNJBE3pIxcjpu18sxvIYuCYjYaVl5w2xdZ1ws2+lWM6x+mYoTdvSlLBQ5lb0AmYt2c9A1Ev6Rr0tKa1jTwe/UXCVZUXjyhRtp4xb2H/meuvVDsUORl9AZ5pzPp1xL7OkBlohxA2gQHHfpXZ4bLH/zjeLCpn3KnGBhQXyhGVnxEtyxLCv0t+1PCBw2/UHH8iMdmJZiOO9xsawZiFMyCSDyb7QCOwsz26POdLUs8ORkaWH2hAjq32eXCyIzLMHodwhNIFIzyh6xCALPER1hm0QHNI8uk8fIe1ppgXK51Txw5FK6PlY7z+2xO9x+eth0uOhu8L+OPinFP1iU3/nDce5PK/hUJnyoSMb5hipdIaNLKIaOKVXhRKxXrtpLwxwgHMhlVY73YyhzDFzDEG4L2IM+clFT41LeXbegHXM1+nBUBJVhVUMaWq9iWprzCpmuw3MhRc6s5ijq7U+WtxKxbzjjmnMn2HNgWmF7W8ol31ue1BFbKZDnGtrp5L/8Zy++WGRvncr7lT1AS5P75ph4xDESZgf0icD9vciiuzD2mW7hQkh2U87V1G5RIVQ36I/JZo0MLJLsws88=';const _IH='356bc872b29dd6cebfccccd12623fe3413ba390e7abf4e97a235da229a9f916d';let _src;

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
