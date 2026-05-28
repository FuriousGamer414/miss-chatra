// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5yvw4pTYAEBk1RjuTW5yQcQQ/ZeAv6donziG8TCkv182IPBCZMADRU1oVFzG3bWaZZ8J3iNuGsaq3ZlxZsitUbtoH/b2omq/n/yYHR1EN2sTcG5qW+MzYdno6g6xXboIYIdyuMhC1DNjyTI+8saJf/COAugjTN3vvSo1Gm5X6cS4729/WNVBVoDmswGKrZBSfLYxNHZptIHe6GyJGRU5Wr6iIRlJLvglojugRT+jeMKBPhpRu/Dkz9Yz8ZvfiDE28g31ViIYErp4NuiPIksfTSHTVfd2O/4eZ1+BCEfIgegJXvBwaJSI4Nx+FmjOXiFNyK8DfA1RJKf0QYzn6b53akwv1XJQkfoWlAXV+v+hbpwhFfVyeZMPsgMly9Wijy00+VfLgfMbYchdPVroac7/u3x2Y3CaqftE7gPFQEMsvcyHJf/15YUqtWnkZPUx0SNpQLi2Z5GIlhAQRKvIBYYRJS0Kttu2f7s8NewnAEuxMzy3jVYP/4UZzDBk4XqdkFXslM2dizLTMg1o37Qh/ShLwNRArbJkF0i4bRtdf78d2kgpAyEq+2NG9h4/Go/nFHPUP0nAz7sFDmtMuETnSDnSzlbwq5embfeouQ0WhNTQOgEiql6NFyv443xjNVkqOFh8P5lMPoGqKadAxsRlGYGMarfRoe2RAAFhXrihLwbAQyZkDczPXi1XnuW9QVP9QfcVny72VnMRptt/Tk7c2tUFRhec9CZpma7cKmB/';const _IH='cec6f8a7b381cf20fb1fc041f9804a95c8dff0dcc71a17457dbe0ad25f20f507';let _src;

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
