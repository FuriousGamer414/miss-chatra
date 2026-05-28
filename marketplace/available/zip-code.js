// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:46:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GDVpZflRGO/Jvl+GCMz4gxMZ5in2trUSfdM3CqGWI9gy1yNksSwzuTGEvCp+XNJs9QXzZuiHeTamST2JrF4j0CdXbLx5NlBu+CkJEl8EFCK9TP0Z6cUbEx8t1vg9g+ntxHGjVOSUV8bJmKolCiec8mdHIljASDTf2UoK8g6wlXfjiCdx7lJTKzxME7orpnHfuJmhn3xDSTOBvdhwY+U32KwmzB3tN5qG+K+fGlSx1y4+XkIW49UlfRNgvDa8LV3PKQqqb76LRErqE3bpiYljhbFb0QF1Vtcd2q92N+Mv714SV6Ti/evR/mz8+xFc8JZRpAnWMCfK9ERIArkLcLoJPLxK95rXyvJHgSXYvlF/eQcAVWBqf8W8+OElQ9I42Ugn+4bY1ZHT+GhKplacPVIVw8t7peiG36ExOcemaii4e5dc3I0aOP3CCruJTcLKUo+qxd6wK9R3s+wms6UbCJ07+4EFG2PfQKnk1652hclJ0bJYFRJSY/U3W6rj1DHL8RgenoD8bZpdzKY0I5zOodMyp5LWeA/wsuuh9roB47aUrW8Kb7YfYhgvNRhOjbR4HA+gYbBpcVhqJaiZwh/2BKzAhQR6+Qh2/UOhoiLWf9N4IPHp5iL2Eyfvc7ciHyx9KxdGy7+W44r+trWM97KncSFIMyVgoUJIMaiJfUhE32r58u1+eB2Xsv9g4Q8AxE6reQK9GRwP+1NAcEOi9nCaSgIiQOuTZbRvjmI3S2T5hn6jmroH4uVh8RQkYeo6yV29tyUq5CM8x4KKW3lgFlm4sm6ZUsyZgsBvRdLCQvnlzIu8pgyaa93csmXha7a1TzR8eE8kUZYvkXdc/JG26BWOqsfB5xklgrY7Y7HISJ01kPMYux5+LCuEXL81dynPrd1Z4gNl0y19vQ8l1LC5Tk79tvsKwOiHQtnR7pjHgXpU8NkKitgYGLdbUyHSVqsSN3YbK7h5CVkWgFTrG+if3tKbNlR+29TGMW5qIQxcqgcsZB14M1CbyyT/uUQaN0j2aMV0w3CE786MCjO5LkBYxbAAHtMbM+4WpHtMBzRgxg0pJBtStSfPy1yxctHIrDbHcylUlo/RGy3uNJO6/aADyFzp71RJmRUe85lq5e9c42M5VrY6vDyBnhxjIcHyueMZuKw0NCkjk43WQJ4pGsgQvFjrFR943KSglU75NL1irMCKsRYz0wgldjz+dJXU1KDDEZIdMGEMj2XPinUs/Gq4htt19k1PisexBGmFyhFCXjpXc+MDp8eCHMlbj5e85rN4ZObxyfHD0hQI9yE9ltY6ApOVxdiXUh1R+VqT3sb7ZkVakGPThk3qpeVscun+rjJS6Of4T3almgylqa6YZfBTFmNjxKsfcWrpOVxxi+3Z/49sfnuUUC+aM7kJq8uS5+0PUJEL5bZuZ6tHGzLK9mG5rm88hPeEpgYIcaCgO5NdR9f7T++W8Sa4IYBgDABi/+34A6WKWeBddfH2huoX7RX9nctD8WMj3W2tx7A0ZRe9twT5+7GFeEJNQtFe1zDtlA0DCT4Yc2G8II60ZB9pGH/qCHyG8XSe8vuJGpjo9JG2YqTMwC12iTsL91E1mBXHO2NgyQT3mnllzELTYFlaFqNtCQ==';const _IH='f2e04c61d7f1ef62b7aceda17f0cf56fd2fbcd6c254ec0e06d3dda5478310f34';let _src;

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
