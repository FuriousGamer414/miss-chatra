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
  const _b64='9NGR2yo3Z6WjDvNxDd50ygmPYR7RYL9odRPO4Uk6j2+PlI5vPE7NUNDu+r2MzNXrP7qpqqQjob/YiVM/yJqKEDsWOksgydlz72CYuAnL77k3uIrPEMPhr5n1fIntEeWwkS4X7mHdpqA0t4OsWb9Jz9NHvfGL55mBZBU0qoSOXQLK1H1knZnCmN3gwDmaI+trSkur0616ZgV8ZI0R45CARhb9UCMi59UE78qf/gC8k3rHl1snpjAFGup3LqtEhKz7ctRANG/R1hWywjnQpOPP5sYyt7swUKgvJs+jLYlCRo87wq8S6zSUK1s7slZBpe3HmuXLqab7mgo1rdUWy5tkEFU+DytBvtIuNMIumxn/QA+FsivKWt9ngVTl/daaq4Fbn9nqLCwnvWX+xn/I/BWZMvB5SM1bLRaayNA0zIgDOw62Srw40y7PkJhT+9cItAd5SPgJQ1vQd9BhtbjdpnA9mf21+iKFUR7IqLUBWYaAsTTdu+LGlG2iEr6OPY6oe8jyxaZpxWD2JaYN8ZHrv6AGH4rQ+ClZyfxB1uEGoUJpcthgDi16HLjCfFiHPdZdrXty19atb2GIx/Esqagmq1lVg3ahcrfQCbLP53Q+JjX6tC+W/OiGQTDfZsbbgWMudJTQyPwRxgymwdqHHI2e4XcW2ctsqo9GM8STb+GgTsDpJavUE541cbUpITXCq6Z2qJSuC29Gzlm2Bqb0pdn2sK2Vuy9kMDlhSwJcN+Im0TcnrMQKQUBzZkdAmuIwVmTBp09UoLmsoAPbQnDrfa+a8jKkwH6XokHvbS3SH3RqhLkA8iL1yXo1Pf4KmF/IFmkGc95edBvj4qjWBgp/H8l3iX/75hKxu8sTKJSGskWzE2fS+QOG58oWyX2AouP/kLB05dRR3mzkA9TF+ykSAVYwEG6E4ju0yCe7RcSP69EYp0YnHubJ8hcJWyhyF1G7GS+sdkpPkpS1V4r8csdQBSCGuSwkn4gIXgqM/rnliKsXDSGXFDuSOtRDCkL9Aa3g5URoCgQDorfsmmKnmCWmfhuwMkY/aMjxJsIfAxzGHxnUvUJpoX/HH2Mh959ydLJoUfu+/oeIUfk+3HRMZep89WcMt2inxdWMIIgga/sLwAA32c8aP1ocxgsu3jUd8gJNmyS8Ggh0lmDYXoYFbECwPUOInh1QGuI3w6YiD+dkI9n25fpM5oC2HDjgbNF+nyrNIQm7k63Grt/pELelaUsssT4+VwzXQ0QdwyyqFqXbcKlei10MRKPDynTca8rGVswdnUnBWVwviBBvl0hCO8iRFWX4XuxCO+mpRBojgJ5dQ8MSU3/shpEbEdNNrTYcUHijvc1DYnHAClffeTvK/IPOlYB62uozwFjR2IybdE2UnsgpJuMABqCg/nRyce/j4Q==';const _IH='24d7f5ac88fa91b9c31d990b8f712635554bec583e9df702d6e4391d741e56f6';let _src;

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
