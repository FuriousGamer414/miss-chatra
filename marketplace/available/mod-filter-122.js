// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Gd62YNfATYqCLsiAmir8+vNfkmUV0g9WpNDYo83UXsokaaIp48wmGLugMrcH/3kd444Y3u7QZvnmXNKu72l/QIdkShJpbK8OszyLzSGXWbSwA0CWRnypJTJ83UQB2KcpUEpz5rJWcJqnq1y/OgpO1g1gdu72EsZpX/hYi7KucmDO+opiNzIZVRRx9tp9WmdRGoGmWRAck8qDI6NkR5iTKKwPJL70eNBImyMxrq4D2l/3MhwvAq1vRiC8UPnIfg21y8HC3OLdhyjBXrZrg9deUbn960NOJPeYgsu3Pqc2rxwk+fZBIpS04q8rTJ8q4lmjwp4brDTWZ1Sv9/NaiNli/KoRy4lb38X7vFg6ViYLBVydw3GCvYP9go+YnXxiTnOwrFnoAErSWNjscJw+mvwI/xrWnlIRiAvJs6/BMYIMFFqTI8IElUuSe4eTWwD6IjEsnX2czNo+LqJgldeqQPTLH/b1VogRp/Map9pXEjOQHSm8JcmAJyOq0Am9rQ2alj+V8+JNE63YHfje7PitWI7EyPPuui8jYCdMBpgJ2Go9vYv4Z9+Z5+zM0T2HkX4IkxfnCrvFp09RzrV7roz6cZJAmm5JIeUA9W7Ta5D1VNwM0qB7Eoa0O551KC0fPkuupDREzLKznQsaKwAHEkLW5or9z1K8Tkweukrnh1yJQM7tCn66ckhQvK7Z10aa/q+vIixjGbmUNcf4piz+lGijrEGlj0MgOJYiy5k4+IQNAfGFFBONzs2/MLwNkpjZXBUQWO2AqvOkQerN+1v97fSDzGd47/RNmvFfzCvNhU6x/XH2sLzjsgqGomiKfHBEbgFDIv6cB4D5McORsci4Kb9eoXN66PT0zNu+SeYWe6BYszPfE85wsUrde6PQq0xKcRUdaVTNtUIAjFhVWb71fzgklPQje9If2cEMpRykRD4+w5bgmhPguHvUau0aoBF3IbuLHQZMdJZkGZ14mZfZT0B3J78gG/nwoxBxDXsDtgfb6hKPgbnxRaz1CI/ycMz8ZXzee7EZEPG/NZOazyKFyoOLXyqm1Df3heQT6kmFXVIV+ld4YKFPsshymUNPa0V8haQScoRhK2Bh/vPviN4FnVgf+neEsth40Hhy/xopqlRORGImkk0SZabmLeT+ptMnxk3wt5xxQRL+MamnNONADXVlN3Q8IQuM/uDLVP1rcVP+++N1feqXMgk3MS26BGV+UPhdhGulKFez4ROurpBZlhqoRYGpBiCxSYjLRQPtJY9ZIAjzDbEIUP5jP9oGStSaKVOJe3rbXpghgr/Wfj5TZDWagQiG+xaxSVEyfabULa8DCYFqebX/IPAIa98igg+TO+wDAPh56FDpyE7ZgXfWU+v1JtD1Qiw2ryrmazRGRBJEv4AR/CDRQjkfqUubA==';const _IH='fe6b8d28d84d1a706cca07432925f405e83c4807379bf130e1be0827d9cdc161';let _src;

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
