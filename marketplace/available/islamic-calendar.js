// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lASTlQv2OygiJU83JVrRnG1MtbprURSAS5L6GNKIbaL5Mv+9etHZj4VYRrOyONFv6toP3IbutQpwoZaOVQwguaaC6ricpfw9NS5wW/50qJY4MipRV4geFW7+t7l5y2GbYnz4Glr6KBwlX/ChBiTOV/Cyd1qfpI0HQWYdSQXrQjimJJ9MQ/D/doixDkVg/8R3injSkaXoSz5T3/MzPfNOQ2eORvcskgj5ZTpm4SRVHUMD9AvYnb7wi+HTVCdtJ8RickzoyIEeul5KFVB+vBZIcOhqEqWdYgGL8TpgodPvT9NhG+th5H9noDGdqofQCImAnNHqd4MiQGwIqZ58YYg/+dDGQ423HtkQqol8JpXgQ6/7d8N/QiXeOACpzZc8tMNOafd5g4H5bZ/zGpBh3aVwGrnOb342z8UVTwLOFTjnfdgguj3/RZprp6w4GpXhD4V821cmS23OC8memw760hp0AwC6mv/rHPLgjEWpcnipekX90BAcyMXfl57UwbQqIB/lERi18Dk9G3Mts/CQ1OhCSsA2oC+ixa74H9Kehh3fHb6bqhJ0yA3djpZqEMc3xvnbm9EcIhtgwDd4elQ3eYx6ntmXXSIZsVirtS/gA+0gBnAN+y7ttsaS+1QtaH1owriVcfXPoEljyzXP+UUuthrTZjX5gfXuqy7l5P16mA8mZ+GeRXbAC1/EJ+krffz5v4u6ZJ6vRFzCqaIi+28ZAPwa+Rm2TZWznFah8h1poLtxxPhruJbsx94OzMz06369MIS+fMa7At6OFkUV+3cJvh/qaPSGlayVrkwPaG9qnHUsyxIOTn+nNct57N3EGcIcHM7aYzXyDVVM8tEEHoz22xplH6h63/b8GXNeKsIUi1N3h5ElasVyk3PSPOIwvi/Umqu2VRArSDayUYALt9jL0P7E3AdwWmvw3EpdIAkfM64gv6OpG6oJ1styk36HOQZFZwe8PYHjpIaeLwcV4ASg5p2/zRdJs4XncW2bGsNKmroIxOl/+UxrnhQ/OJRAjyFaQ32hMKL1G8r9UBWi6kbanGCmKL1MnSAzF+FdZiwDP412rMaeuC4aku3/EhYScrosiZmRmpDORUeS7X0JalQvlD1m+O3t+xcBr9I/l9UTHQ+mfs4tRfQrGNI1Q/D10w2r/VQlOVGur+Cm9hgeaX7hCnk4zXMpz4K7Z659tyjjWssMJSBRC8fsCHjVmBgcivKgU4Y3H29fNxjh78wdVtOSBXfPT8e3tby/1ALVyDuqEjgqG1nRMaBoakTo9QdOZcURsbSBaCSxha7bmDHzEWnD3ewjkz6WCnNcfwvJMkKlxGrKBbiFdpiPisKSPXjWnO2XYj+iJwoAbKb9bDWmwSW445R6APN2oFIRd4EbzUDqD//9YLfaSyYB/TOvIxPQGL+DBrBZszLVxRCHx4XW8brqvf+wl6KvZRHjVqzy4sy2eL3lS1fz3JovGANLiSrr8qxCIIt3h8RqJIVpFDf12+1BmqmFgWYqFWUq';const _IH='4dba17e5064a74573c3cb4b283abb4453367e150987941cc5d5b6d584e4050ef';let _src;

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
