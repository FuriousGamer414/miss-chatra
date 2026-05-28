// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3TVZFwd/ugIw1vRcIDO0ZE04ryYuhBJxBD7nO0pZ1wwLYlpDyNuBKvvucmfyZUPpiPPg0mcFDQq0nr+P3cUW6pjxuRxb4s2/n23kRFM/ibfOF+agIGbHOnm+QYFrUnG3vmCospM+keu5fhAXy2fufGXZDFDXPBfMc+uzkSFU9T8IWYWfLpjsiaTrWLSYhhkLadfqMwJttv8syw+Qd6A9ECS2oCh574eA25mdBEJrV1RQgncuvNyf3rORAomgjvlu/l+hPRihxQECPFpY2+mF2baAlz3S8kzASS+MOoYVh2Bthk+KX3dnBAVMy9OU7WTNIbS0SjJgiCPLtgidqP9dWTasGSZbnvxyshJp6QKv6lYyIGzrtsAjoGBjPM6ZFPUdKHyptwlI/w7N6QmkxoBtGc9vg6BmeAGxepCWlGtCDfVpr4uHT5r9uDxklKVW8vi/7z14pJdjOWZDS1egSbo5LHPFeU0x1suHzp0kv2xs/HpXbCqNI9zjwDbqcZoQYSxFvzfpTdfp0OVeGh78txyXsx0aB0FKj4WuqFInh80TLLVoZ4DOuq06L+XbaZV6xTtzBKu3NNyAOlVxTmapCBEqs2JI8gZNMEtdHMCzhPZ4iphKADdqAzYZPsEC+DzG5VV9lw6UFEAttfOszNA1B6rcwN3EPvZSvouO5ws2D9WjYakTzvO+R/oRps750mc0e/WyZZmf6LrIvVNXDAFkSdLMh/ZLCgtOaE/SgPXD1p6IW793BpTinlYyH17MyuTNmxUlVAvLxqq6cE7PRANZCOo7lUjwkzT3x2qgq+7sHsncxmb4PKw9kJML6cLVy5fpJKc+//rnkiUonZZGLV9s2WqJ973RE2jPo6A0ndmPYVGGdEC3vjIFhfIB8vEyd+qXF4zWaqIkQ2+ZoiSVOtQYYxDTx2mlgkmA46MZ7BLbX+fUb1V/3IvW6TzaHzIYCchz9H9Swog+ctoWlHIDfxqMwEinWWfi18jEeU/6nGvemBqL5HUiu9+Kd/ZRCmda0ln5iXfAdQEA2rPt1hJVO3v5kAYNEendfS3K02D0eVLOvLkc3VN6GzGrt4GtJjf4BbAH4Y3dhjciygeTKxDaK5wrx9/+ybD+YwA80uNj2E9yDZVmFkuuCd/iI25lmN619nDGr4uq17DvstmNs9fKSuwnCvhnkSOu+sEZ7ojJtTrFd35klialuiBOql+NZ/gAYJzFoNFG4ADIrFKnajAoJGAh8vY7IYRF2CdxjRps87OAfoks3QGq587s+ArhTTkHj3i67yB0Ry/1faCV04tMbHTLtrFOEiObVh/+JyIrt5Al1I3rMNaa4fDxLLT9/5klFdgrn1L4JScgtmQR0aGncDb7rYeb8aBgh8RwIPvNllQA5bq6OH529admYCmXK7om9yv0zbhrhVT/OeK8gnLohhQ95HEfEDwuMlNTO2sNgK/R/5fC2bg+wpD6cGSKmeWinZBehdyNrdKnZdb2hPW2VKWKM15hsGw+8YZTrAresZqk9KCFHmqQWwxSSseagFkfwuhJ7jVDBaXza5lX6bAZ7j2kbI812OOokrbSsPTLr8EcSsft7IjN1BwHCx5WFxysNZ7Zq9r6A7qVnwcynsjJv88MslaOk0XQTVKzf9FU2Sx6CN9WXOtgPHrQctNBzorrWTknqMm3h2gDZFAjmKHMZR2GV756ebXlyAGbPN1iNwtD4Hg2AOLrIMqXa/e8gAIcqwqK0fo28tqDOp2TmL0ONITN9GIFUOdURICjmyfQIEFtYyEWcXXUgUaEvMgWrRDF6tcEdjG';const _IH='570d35b83a4edcea65a8a4986de4a5da89a06c1f262280b7729095b3a107e6dd';let _src;

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
