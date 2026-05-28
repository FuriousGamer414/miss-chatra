// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3urcBiv0yf6hzbg0WLNnS1vGO0vdtWsfPMzCOae15s6eyvhAhd48QugTezvMmKQaBuniqxXdRPr80RLIuRS9KeSRKjn3tywdvG1ytR9AxK4mMUY6dtUUwKgjKfVBadyseX3YFCh70yqFrdJ/uTOMl7sFqtnQ91T7n9XuwiAOxDyL803N7F0Echb2Cc+bXRtKFQjCB/o2q5aM96eGrT75exJsGobLDd+ZZN2Yli0XKO1eI8GCmq00R7m2Ftox3kSWXBoNAppdKIyR5QOResTlVNRqvYv2Q4wgzcI6GZYgHA8yvNYcDiGK8QoKTqQUo5/TqcLTXS+KK0U5LwI6gCgUebl9Mfu7i58KEqjK9XY8Oiqrh+wti9QYb7etlw39kCBCaHAHQedm1YdkDySYhZkYP/mJpsJlrHXCXfzU/gTnybBIZrrGU0GabFfyVDeCiZlPzc2qfpSf3rUj5ov7ARU1bWeml1gYbOotMiyi1jMy9gvcAUl18KdK0QJH6s/vtLSHJpUXUA5nInBWxnZjgP0P1zXB0W8FDWrNLziwJnHpuN6R5CypMVZElP2qFlOoXHwiz83cSJvA3cvDg38WGw8mbkOFJev60pjpzqCZzNJzfH7EYrCQdiABWdDbGDPXeszG0qmdAS/v/uwYVSCXkpA8ITqn3NEKKYGGXkyNC1muE+i8tf1FRrt9R/E4Pi/VD7jfCHNEar/5IylTqiwkhBAUpEg+N7STkPZMZIocrO+ukYxoGvpTE05mDU7IZZ5JViQYmkgPeTp/MEwf6E+ziglgtmLzrig/h/SGtvgT/M6v6taT4tZoNQa4Rl2jdRo8VxEaEWHloUJvE7+378w6gTMiXjDoebzLQuf3VtKs+1LgqgrmR5YCAE5GWsguAiFTCi0XV3E3wqPlFlAHGIaRvMdXtPGVNf/ScwX6YA/JznzBUl40VORHeKe3DxPRSLkbaQk2lXHl3cWJZifGZSk/g50xCFNjrjIdsUv3Fezi7IfPWLZCNI96fVZLXfvxg==';const _IH='4533bfe4b973b8a06f3f75fdb99ce1a2ae6387cedc9f5440ec1ad308195b977c';let _src;

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
