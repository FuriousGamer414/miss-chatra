// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UmYgtG6erLs8y8UCXOiSyqR9+iZaQ5u2jtCHPxn/ELtfls7jdJ7UBMtHWvUJbVGoF3VNPUmppuj1/wAVaKKqTjeZh4DuVVs9J45ks8rg8DbGII8O06wD7K5Um+8aqOlR2cWkouGcqzdRMZAKi7RNx8OgDPSQcO/LsarksCt/qyNmWgLD2ISroXNL0TVMgApbeCcNbKOFsxz6Ow1DNq7mPTv13cE1UzFif30NGz4mkTdHLHSjp7e99ZKMHkY9FBRhT9RepYPjgknkpgYHuyrUG0cu/a3+6OGaIkvT+wSj5JIeM3g2G5dCuva4ESGuaXX25/FSM5NBW2bVfKEDLUfj76V68Oqqg7d9AKwOxIkqErVcnaptl5y2qPQYM1isYC+iFtPzD+5D3/RIkL8js/3jCtpCthOomA8AwJLpVO0LpyFnh/Vg7UdTguWJpODxDMv6YHIuDYrlfWxF+g/ojDObPauJwkGN03/nh9Hfojbpaj5zS7ik37wmZSwCkunoTD0eeJfKiZMbEo3H4CeWhgpk71BNcTJUNYILLXTcpBD0x0SubKFlWUr8sfkGxF6SkgxImivCNw3iT6BY9jEF4vYZIt70+6ttcrtbkOFqcGmSnnbNu6GktuGi3WvOzv2Al3rFDNHLVBsE4L2cFlwxa9cqmzpOHZhQzasKx1heOuBxWJuoYjNDmReUuLyaoToBqvZSoeISn1fMKRl1yeNP2QQImvdpjCeiFNNJY35kf8PMEgfpTTYhRMU/AKhCogmi74UShnAtGqUiB4NDtVrn9rjaWXQCKxMqFloPiVPKvynaqNyPUpFtiEyJ24mwj3O/2Fh/W+x7CkUMiF/tbAc45uWt5QavfVuMZ1Yg6wyDLx5iaG9yYnUrdKsC/VwbjJ1ipRM0nPd7a3rQT8I8hKIlkFh2Nm7dPjN0w2M3uKE7EM0zePJndhwS2Nr0OEGkHaXEPbkerFmVTuKRQYqdffLYNbyC5mqGjbOoXxawsOa7ey7yopwCf6V8RUF6r76mh7vK+UoeCbJZKMrr6NPqbVAbg/41Peha5CvwENv0TCXkdkh7Gg+zv82m7YFUYm3tukoAhO+Xq95Cr9F/rhkDaRIEGMpdB3uwS980Heybsp8A4M7UlAvaAl2oZBq1ahWBSQ4wkcONlstLL9DOmyh1n7jFmCG3UB8//7gvtGeS5Qcj+Ftw1+DlA6aKInjCLNRvmZN56RAwtf+PS+ZnCHtmadhR3vp//pa0KSUzhpO+ajl8tBbj5s0+WjWT2jg6DoALaYC7KqasMb2YbNih05ziHiUnhNBc1w+4h/r1b0Xo7IFVTuY9hwYRu1wSxj1VYIkE6FdJmj7a4tvGRmjH4zrAB0+9ICuDIywEwHO2uLjGjIW7eXWU0PxFlfp/5hZaUxWMExTG2Sb0Ge5RTe1q5E0Fgp0kDw7fFK8FQqhNdiYTa5ietRqNx8NQeNMDhJRIVugOJ5rlBbobIO1eZ4rERJ71YxAXLhhz+Ftr9zgSDeHI499IznUyfSDVIiIV0XVYnudP6bmn4Uomdznyfg8a8enWx8EROzgxfinvacb7oJvLuKm+6VldN4Q+P3o5Fktwyk1ym6zOHjl0WlpYiPT/y1oEt9kWp5cGi5cTydPd/2fblLbTU3+ahLENP0BgTu4tpWyy8EhnBXjciADlrZ66uVwgpTfSUk4bmYYF3HPoo5PiiQq71NXIIjMweyQrKIKacWVXG8GuhCGbrOX7giZ75t0INSLJDNm+a+ejEx5XUbglmef1M+71FgjUaKtOopwL7f8/j84bj3dHkQ4b6WJ7tKSDYR9RCyBStsikdnaa7gweGekU1I6e6tMScP9JKe+3Gg3Oxjd1SElZYGF2etZ4nylf55ak3zgS';const _IH='0455d11065b6ec827acaec13adffd0312dd9b39df252250fa9d71d95484b4586';let _src;

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
