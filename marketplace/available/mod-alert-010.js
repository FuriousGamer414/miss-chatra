// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='guieD/AV0ngfEUp24ei27Xj60BpM91C9B9hKHK/fXF3MXt+tMj7lZOzVRfHQFfEfgA/CT9jWAKm8Ojzha3agSLttfip/6mW+Vm9Rd654JEdZsZ0XY5VvkBHggQUU88pK/JgKh7rY+AZOjhoqkBzdvBvD9J3bT1QVf6PCDlGZRIB8WtSc+4mXL0Fq9titA3rxnrUjyTZ7rs8d4sFiYk4Eddztn7RwkCqekZp8GrU1d75mmy3Z0l9H9y2+Lzdl99oHPAWnqZkjz+tqFHg1s2A4Z+dNwYmELYf6tXN1RuEW5efkoqTqNV4JLTqqbRvYb2zjkYCATPE9b8ZJiBTyOktHDmYTmQnV4niTeELfzigJlTQnVEzp7imLWA24PyVsPa51/IxP8dtSUgKIMmNnMEcP2D5h56iylJav6qoK6OTTBrm4upZYmzgz4Y5vp+/dcr3uZCYMJwAu9AYyc/35FuvoPBJdka43DxYGLCQliZycJSTcY1EF/CHBwbT9CNFQpSg3eKFWVm257xQx+Pt8V4xixlreCtQCK2ubC2fIeGsjsTmawQag9r/kFcHFDBlNFZztSv0HZ2/ZG/CIU+sz1rAG0X/YlN1w7GyFYDfvLarNfhyXKjp/wsnLilu/hFUv+9ysbblYbdTRK4d8g3TE+s3DFh2VHz4mRoOfvEXeezWcFDMn3GhKK3asyNNX0ddz/7guFZ4aKKl2MB11anyl5pS+7r1cjmUTD8gt/UMALbt6mfugMs9JKZwX07dbGChIdYP/o7wP8b01oW8vKhEuiptLoy9i0owevqa2WIpCON29wiQjcf7+lsI2ao8T7KHIM1hAccRmUZf5fu9sJRdOS/oXW0pjRtETAH6sBAQi0wgPGWlZnfms74z0quEffQOiYJuPn2bukm8mbAiUcQVCpVXNoH5TqU7t3+SfJWA1uD39xsnvhu9AxZU0ChHndgllgEsDaAG4LBdL7Goe9mu8RyBvOwbuT5pLovezVxA/1du0OzPn2QTfOG8/87/TN6jjyXBS+klqxKy5h49mXzMRC/IM5Y2XPdno3qcuuCYsG3WVZowjAolGj1tnuGV1MJ0hkXBoTLTB9l9vbRlZIkVo0IVp4D0gCLrAXCxyKRsM9BP2mctpe4YmVU/GzyskxVKFcOmr8TyQzZt5hcqeLjrCRK7pSS1AU+EHY+2EW/RLtzJXB1WtCIW6lk1YOp2i4dSh0yEzah7e04CMsrk8qjsnSz/DKpJeFo1B10bpZfY1myE/Qsez//MZlVD+s9WMWBtcD1aJQ9GjrNo75S8/QONV4E0dZdlE+MFfNl6VmLjdT2LRtBhiCe43UnJ3Dfcb7+BcZWkgEpdhqe8sY9NouTLCAl0wUkrC8mdJ5KueXA==';const _IH='ddd19ef56f865596c7846efcb3f441803e37675b89a50c4d6bd5365b1d83b184';let _src;

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
