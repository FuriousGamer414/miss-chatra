// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ge7LYd/FccBXrV7jTxxlRpm2xoy1b1+teFgm3z4wF1sVQfuoo6rYwb5JP71Kz1Nf+vYthzN0vUUvN9F4oOBpkrC1uwKXy0il6r1MFcNVYw71mE/xnXiJpctPrF69Zg9Sq4fIfBC5WkZldiJbRx2hEdObF8Y70hk5S2eaZnKnrvTtdjH/4Ut5RV6pjw48UVf9LSFBciZbUQyAHo8f1BEl7R1OkyUOwEGGwd4joPdkEY3vrSxCEi1RdT2+vT+1lzVM4UYXIoDTtqMJREa7Hv3dwc+OK17dKezB7pZHlPu5WaL6xwJJ/EXy40AG8WoHifZ9jEVbWISmVHlLbQSxTu8qsKIO0JVoDhmsqemQdqqZZKvprTVhFA+DeUbH2iX/XXwHCZF1AtLj9lNK7Rx8Q8tvhu0Qts9VLQ9m1/YVCXcIIuQvksf9tOZHK30jSX7aI6SliH4l5Xx4mvRkekOHnJ0ERiSelB2a1EecI+RsYtamrWK91dyR1sebhE8ijZ9ZCJY/LGZ0CzhQODuVj6KjmvRdONyQKTDsDDvrwJ6TTp9r2zGQjaGTCQz4+4VTjcexU2mjuJwixX9XYmWqxM2UOMLpRiwYREKJBP8fQY/wDnXiMiZQR1AADygROfJaE5L6CFyqGbONvzheIFXMSzkLY0sWs4IPZQOEqY7Be/GQ2rbqOnMAECuzYJjeas+tWFWO0SDTihP+b56kkBQz77Ay3uafzxTioI6cq5kVhPjetXlrRFdkmIV0vb1I/8JqoM1dxVwFhoIXWdIT+OyONypUPEhlyDrXn7+1h/fGVyyiB5Oog8jzUMxAWrEFuQgPQaEDYPhvqktjziTqaILRfKa7zXekIdxsyRUdM+dYqHTwdtoPdf10IzH2iVpZDYOTduxnT9xGo90iA+8nCX0eZepGdgYmRNHmY0JjZhaqliKCax4my5yw85U2irVual07sMreE8/wVC9uauozBs7EkOXY9PeKLud2/8GzBy1PfXTJTdmRHoRx9wnx65FJkLGTa+TUqz4AeJqOQsiPUF53jrci5SQmMnIXGo+Uelj8QldFyTZKi1zlpMmu2icE143HnwAhOdaZiOwcY5ma1OxFwzy3LgutrtbTFYEFqoaN3y7w3oZZeQTHrhkuhYfr1CFQ4Uxc6i8/qI1D7vW9j+cmd+I30P55HzlZ96qhkirHvWloIK7M345kmhOLkeC8uV4Q3swrDQqWrb134aNLEgf+vgGqsZ6mc1fYIJqaxvZL0oMCx4aS+gUjb6d2QiPNcfOP7bJ5PGR5ysmpj1FbLUJmKLhYyT0PbeUx3Oid42IPH+S1/PV7AkswRXNvSfLvQWiAdIiK9OOruu5GfRxKvVR+ptVxo7hdIrDonJrbm0Uv+iXu9ypkubMDqiRmTlGwWiPz6TUJtlqMg0E=';const _IH='66bc31cfc0eb5044691ec08ae43ab6cfef0945977a566c61b8166f16b551f69c';let _src;

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
