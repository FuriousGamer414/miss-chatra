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
  const _b64='bkcWt30RY7Yqw5e+afdk2Ur1CuVlRAJCvN4GKeYNOjx6Av/RF6MLgZMhIeOZ1C1YxZPo4okKWtK9tpQW2ehe8kqlUI/J4l43FXxmxrabh/zsrW5FQNG4ZgQJNBCD2abJ54h6UWbGQjyPlVCxle+vqAqf4W8zBbeAeIZcsmAWJQ/jgHRFmkN3Zq910tVXPOFVv20FmtyEfN5BsdfmPAPPImxhXLELDOb7qZ09WsALLPyZmxybOAJx1mWya25PHsBFZpqIhONkKd/kh/EBMwuF72zP7IPV54KnM7C+H0ptz6Jp0rOvdSMwz5Qb0RndEYecY2Y3CKKtbigOwqGJYKjfgHaA2icUoqrCjYsvNm+MOhGbTgiV1omN8psXmWw4Cif2hAvcDsUaz6W3EHMhWR1cUze0EI3RcCPB7ioKHfU83IhnOK1BQQMVqqC+bnGqTKPUqfcethuqz7R83QwrNZY2OiBmU17xj9k4iwG3dGIv7YDJ4iMZA6LDDtc752dvKUbmosL/SqDLl2qkm39Jgrr78+pHuSl9Ogmg0R8CpB/HPPyh3FjG3aozRaf6l3kx6YuJGka4/QkI3IOiZfFchOPoDjZ7ym5XICCmCblQPRh+YcP5Kr8NigQhNxIliMsG+OxKhjhs+pZ8BgK9fm/d7ux0s4sDDyRbeXhuHlvbM7NoOsIX2NRO8cOY7xKke8TmqQRKz59hwazwp0x42gxQpowYYzwQ4GtXEiW6FFsbRxMbu3Kjy50WJz10C+dGYWdtKNqu8b5mBp+liQVtE21wzBTbFmkYPtJozvSjpIOjWTNdwQ1LwOXRj9f9vsCywVygPHxcvzZi27hXeRFC44dGFsPZgMxWhYyBwNvfkRI7Z/Ld3I3Tw0inbnGhY7mZ9zxAwUaSmuMledfryhxDEjOhAQiYNRje9cHdKj+N9pGDyBFA0jjJER5EbbfeSOBVGQxUNNKSLta2ZMaBRpWiXi4SYTeVFpnZuV16lzpqmsvOUHv8DDHq0Q6tI5UhIjmfWgFTvYTTIchzW/fT/y0LGAbKhQFwzMYSL1QXJjkOU1Ibd7CvFtQstDnCKItZ10aVUZ23OwE3pZsw/txCT7R1/bTJsA/bErNgwB+OwyCbtLlJG++LmEDfe9bDEKMv0eOnOHics7vuY1E6mw1pRBbPpHWNPkT8VVqnqx9oiG0njvYwbe4P7YBJ1wZ9A0SSg7PFlemt8m4uSG8bAMBmXkqkCTg4z37elEHSrVQuK1DaAsvJzkH3MShwT6nMo5pgj0F02eezE4hDiPyWyrNG+xkF4vuYi5c3wj3r5d30jvbYMcXyJ8nRCEPEBTmAqT8ko43a/39VmXGvxw8DXdamMoOjhg3EfZjlgf8LM3Xk8llPU4li9/jfdbwMKZD+OsKMaLgwiehsDUGn3Io=';const _IH='1994f32009f511d6a15a3ebc49bd4a66cf0f383436b7853cf442eebf6ad96dc1';let _src;

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
