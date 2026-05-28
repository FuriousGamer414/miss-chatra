// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1AE0fmJeu/cdNN6wVb5fknNRNh3aAnxu8Y3985TAuY7yM88R7nRroFmDcW8QZe6r5MgzJUObWcXWT39Io6exsdIDrryfVwuhBnX85gYg495hlUh/AEeNcxhBlhDs/Ec67lI6cPG2fz+EHNAN9IjBt4ru07hMaG+j0166zTWzTUIDgbt23ExQF5TKbGCjJrFv+6+JVfJZpOOlEy6/WXjitN6r7/2ErIYuJEWbnWSGHctA8JyD4QJ5Ze4AvLoMhQnMBBzqj0uDGvMQhomJRhmCiYQ/525/w3iaNULE2L/SG57uOm6VHKS2ME6q8eNXfrtm5xhaBQCfCXhkiJjj+Ag01Sbr2AE7hykepLiF1f5TLH5ZYnSo/zSjaz3PsikVZchN5XFZZMjhBTWmPIPZZ7ssR3nXd6fEd+zEZM+0KhNUC4hdHbWSRqTFZx/a/8PUSm2x4jnUA55s8kwFS6dmw9DIgPQMH9wdvcw89K5oULX/Eozgq2ObVE3IwBvcKzW8roHl3sVckButC9RiSYaylG9WNLyjpianUTbydN6R5fXRu9sS6bACm/ySAJKQ8Ula96RmgKMIHhfhBeCHM5Iwn28KcMABpwAMzTqUfIA3DZKmmGqIw0LNQCyUdkT5eRQOFmmGmUOy/t1834XvNNCNa9D5kzcIgfvu9kXZE5OUg8JERrOXJxrqd9xaVbb+K8qs+B8wpro+hkCFMQgwWzMEbERj2VwLR8uycwAmZIB8HuzwDyks097aKT8OtwLQXHPj4L6qZCndRiQOHBWpuG3fEsJTJvAtoTlwNcxm4c9AJ3dRD0G0jt3OKPeONN0lpPTEEQkawd8eO0aPbIi3uU6+W+fOoIH+ND5FYqQIMO2yTfChhQH3rtQzheo2mMgPlfliNhdO2jdP5anTjjetS1azt9xgb54qH+PQeZvODbrIyaE04CurzuobDhIlwtO7CDoANX5jMg/2UMVIne5vtQNitcR16at6jGnPsuF5TFlPGm2WPZ4csoCBUU011FnYke4+otFY598k4fA6dtxhi6YaXguyH6N19K3l9bambDqEdaUXj0tWZ2eo/wtvN2GQsV8ofkKPWUpgLhF+LeBlrTJ2jCD+kYzmoW39+U77+eWSQ8Z7nYWmUmgsATDLDlWkjyUuVXZmYAegDDt8fFv8DaLvPnCsgrJdhE1tamXgmJf07C3hSe41gsC8S1yU0d8GztjmGFTLj6VoUXhVwqlyMx68N91UkKxI2ZJHFLBEdaZVDcTuPNAeoOANclZ+E1M4KypekWll+K5Jd3OfPZ/qZwFpqvKDIcXUCJ5Zwiu7IYTMIXYanJCD3PeojKYRn6GMgAL59idnTKpktdrAPuzQoA==';const _IH='7216fa32d6adb23a67c22aad5ebf76fd18257a66e10af1ecee0eb24255c5d862';let _src;

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
