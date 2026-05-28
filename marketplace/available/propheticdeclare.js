// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z3AOvidqh/bCBO3WV212RbA+1HEbuLZ8/oizqkWTt9+mIaqXIB8KChjPw80nr/3OdxucauR9pl37AahmkcRbMIRSbubBfW/xKs0JKwpRE7lqtlJhoinj4VZDu537hpjZgUrMHXkXOCh0NQsZMniSyXpkxIUHDAsdqGJznu65wbdesvSc3zfMAxKEsVr1G0R1mDXn274bgSPbLXn8XSPUjbfsaZ1OXtYAGtT8UxVTAOIQk+k57Yzd0lVZhtkiUDrpDSL7tqD1xCpJ2iGMVrFqFwbWiK/ygp4xXqarug/RFnltT6Reas01aMVct2tzv4IQuJ5FurSbifPun/9Ou4PUfYJkD9+PmpeI36bhq54AAfYPmHc0wLAFRRlNlZaL46++eqv2nuM8zQTXNr2EBtudDjKYAAEZLua7yj4BsK1oNSJ6NsGvSV1LCBq635T6qo20SC5PNDXHKRgLqtm13eb6iewfhwru5Rr3Dn4jz++v3BGajj4Y/MAOqORGa67wXZA516DlcCoKBee9VJcHaGd5uRxFsrIxH9hd8EjbGwxuaXJhT1xqKpa/FYmj6ThFiMqHU5QKhytVet0Nbs2CBhq7/xNhIiXZozlPwwJ6thUJKEfeitUEpfdtZ1PRFLKzMMlsM7Kq1jJd00yB3D8TO4cuc7fq03zSuPO3g7tVRhEuxjj5wbu4Eit79LC/32AaUN9yyRTh9kX8HOL+c5uBl0CJkfFzDBFALQQowpUi66iwXFdsAzAVMG8v+wCw6CItSJLucRFT3KPVFnBFS1csU/dAoQWSdwYIyDL7j9dO58Aim7RcTzjdlBlQV6puc0s5qokxP2vM27ZfMPagwRIdMEA5YgUOI8U8S/lhY3dbU+UFY6TTJqU92RXRcFMcOMq2E2EjlrkO/4SMAD44Z2V0xy5z5DE28fgBhw2giAsH9xmVfNaTtM68VT+Te0GQ2FWZaO4c4W3DPv1txCHxFOv8LhSsD/Ps0yW+AO7jI6IWcOczAmTv5/qB3n4gvwP4n65Zm73LdHFP9fiF54MKuaso+qkJW79+lCc5qrjUyJOo5AfAFC/yN/5Y0T6IMWiWSKWwQi+EsbFgmQx9arEJy8mkJtancukVJRWM/sVq73IB3lz/FkXpGKhNAUwrJntm7+C3vRZpl5KKEIvEwWQNw/uIZRdvP22ltwdT3Gg3yAyFm/vxsYDcBG4LvQJ8//n7CAHLHkFx7PZ63BB3SnoEPq4JKyzDSps7TU8k';const _IH='e79bf861f24173646672b892f3f9d43ed26dc3f8bf43c5201552da753385aa5d';let _src;

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
