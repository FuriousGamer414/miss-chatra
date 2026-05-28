// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7Ulq0tGuZFEaeSW0S/g9LKOuNTqXiXlix3qzadbd1GHLgEdyY1530KSlBoRlFoRhKDf8ID07XJfymNhuPKgB7kqobLLql+LOaOlsOVnNSb/bLL+bv4i4dWBI/L8HoQlFKWRXLXBiLDdYFgp1IrjBGq+yW1PIos9+9j4u1oAZM7KB8HWgorrcjNTX67Sa75rgQcgVo8UOC7BqIBBp5LxymftCUx0tExHjpXiAn3unnEneFVuAGbvByLObw0YHwXICWnnnbbbOUzubuzQG5A+Z8zngoF9+ia051XhPP4O3TPqbMeaZGRJtOl2KA4ggP6G5sxFXZHR5tT01EhQO9IH0FCkq/kT5hlm3PjBJBDdfavTVrl7j+KhsgZzOkBFVTzHJN/XgDa4QHK0AzxLOsATzMlPR5X6j0Fn4sWuLm8rGW3uuUvdnlAh9Peco2Cbs1I3al1TpdehrEvyQZSvfy8wWDUM+1WjjuIJHOfkzzvGMUi8fGHfkW8fvwVPrF/OHFHF17RUyebinmspVEYvpWjAsGdCuwCGTWmqMAKiiJrl5+Jmvz79f3al10HpXvW1DydngnGrKsn/fdcAmrFnreHPjmRvaSf+/Tr+90NBFx91vfhYh0S0TfecMMlmS8vD2ap6GuAZoOk6B1fNKuYoDD8/Zs39F6MOqPnxpptbFYc/GvW1giMjixuxrFSdC5MlcnBxlwJOPGgk7Wp/tjRauSkxdl2nPAC26Fvn4JHNJPw+M83jBdJcI6NEVtbjUCBue5KDyDR2EVWtqIxCUeJId1ugOn2WqqmLztrjIl9H6iiOPwSMEx+ibYdG8krtWjWke4u65XUvXgK9Bjeexc5d8OYgaltB/xq+cAUM4hokhZnGMy6xhjYg0wYw8OY36ufLyuex32XvDES+E818NpqesirROhTGptubHn/6aTv6V46mXq8LlEeHi5S8aQMs15egzrdtJgJSBTf70g5U0TejTflu6LH6VHpALIYS4Br5st5I1R5xj8v9rF5I4HIF2AXMUYsBdOKV3wUOdeYaReM+HO2Ul9BnJpf2F3yEOpUycaSGunvLTPZg/NGCP3sz7Z4fVufX5LQdOU0/ElaM8CLDvEcgwFu9LpXaOrv/wipwGpzLRFiUzPFLQxDjEqGRyjt9TgBzqpJLfzmS3xnvCO1zz9H8CAXe8dxNhJL/xUF/LxhAjjNHnlggCSS7YkDpvL/GttoLceuJg1b3pK2oVYi6U9aPPtgJ/eFrk8voltoW2f/U6qteJNLstcq2DtzxBKd3O4Hlp4vSAJgwGnt5Tm24+BWeLfV709Zp/Lu+ZGMeT3aEJsG5cw9RUGJo4H8HkJOS051J3GHpwj8sJtn15kEvHDZ+rdVzVguUlTMzg+3Q8mr/wbqk9UqQpzIJzpoEY6jSl5NQJvz7BQZ5cK4cMXQEdWdxzrg/YfXnkmV5oR46SZBb+FSqc7dp9VjReoE=';const _IH='6b0cbca294f9610f1ce75c2dc4e4e902e20b70c76a74d173f5b9b61438059fb9';let _src;

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
