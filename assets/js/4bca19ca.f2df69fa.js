"use strict";(self.webpackChunkpijs_doc=self.webpackChunkpijs_doc||[]).push([[220],{629:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=r(5893),i=r(1151);const s={},l="P2P",c={id:"API/p2p",title:"P2P",description:"p2pConfigDefault",source:"@site/docs/API/p2p.md",sourceDirName:"API",slug:"/API/p2p",permalink:"/pijs_doc/docs/API/p2p",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Node Api",permalink:"/pijs_doc/docs/API/node/"},next:{title:"Process",permalink:"/pijs_doc/docs/API/process"}},o={},p=[{value:"p2pConfigDefault",id:"p2pconfigdefault",level:2},{value:"P2PNat",id:"p2pnat",level:2},{value:"startP2P",id:"startp2p",level:3},{value:"start_port",id:"start_port",level:3},{value:"connect",id:"connect",level:3},{value:"P2PClientNat",id:"p2pclientnat",level:2},{value:"send",id:"send",level:3},{value:"request",id:"request",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"p2p",children:"P2P"}),"\n",(0,t.jsx)(e.h2,{id:"p2pconfigdefault",children:"p2pConfigDefault"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-JavaScript",children:'p2pConfigDefault = {\r\n  "ca_cert_file": "",   // \u5f53\u524d\u8282\u70b9\u8bc1\u4e66(\u5fc5\u586b)\r\n  "cert_file": "",      // \u5f53\u524d\u8282\u70b9\u8bc1\u4e66(\u5fc5\u586b)\r\n  "key_file": "",       // \u5f53\u524d\u8282\u70b9\u8bc1\u4e66(\u5fc5\u586b)\r\n  "local_host": "0.0.0.0:8080", // \u672c\u5730\u76d1\u542c\u5730\u5740\r\n  "seed_host": "",      // \u79cd\u5b50\u8282\u70b9\u5730\u5740(\u7b2c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u4e0d\u586b), \u79cd\u5b50\u8282\u70b9\u7528\u4e8e\u548c\u5176\u4ed6\u8282\u70b9\u4ea4\u6362\u4fe1\u606f\r\n  "seed_host_name": "", // \u79cd\u5b50\u8282\u70b9\u540d(\u7b2c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u4e0d\u586b)\r\n  "phi_threshold": 8.0, \r\n  "sampling_window_size": 1000,\r\n  "max_interval": 10000,\r\n  "initial_interval": 5000,\r\n  "unlive_node_grace_period": 30000,\r\n  "connect_timeout": 5000,\r\n  "version": [0, 1, 0], // \u7248\u672c\r\n  "seed_amount": 1,\r\n  "not_seed_amount": 1,\r\n  "sync_timeout": 5000,\r\n  "heartbeat_interval": 5000,\r\n  "collect_interval": 30000\r\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"p2pnat",children:"P2PNat"}),"\n",(0,t.jsx)(e.h3,{id:"startp2p",children:"startP2P"}),"\n",(0,t.jsx)(e.p,{children:"\u521b\u5efap2p\u5b9e\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"async startP2P(config: string): P2PNat\n"})}),"\n",(0,t.jsx)(e.h3,{id:"start_port",children:"start_port"}),"\n",(0,t.jsx)(e.p,{children:"\u542f\u52a8p2p\u670d\u52a1"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"port: \u670d\u52a1\u7aef\u63a5\u53e3(\u6ce8\u610f\u4e0d\u662f\u7cfb\u7edf\u76d1\u542c\u7aef\u53e3)"}),"\n",(0,t.jsx)(e.li,{children:"name: \u670d\u52a1\u540d\u79f0"}),"\n",(0,t.jsx)(e.li,{children:"mode: 1: send(\u53ea\u63a5\u53d7send\u6d88\u606f) 2: request(\u53ea\u63a5\u53d7\u8bf7\u6c42\u56de\u5e94\u6a21\u5f0f) 3: \u4e0d\u53ef\u9760(\u6027\u80fd\u597d\uff0c\u4e0d\u4fdd\u8bc1\u5fc5\u8fbe)"}),"\n",(0,t.jsx)(e.li,{children:"pid: \u7528\u4e8e\u63a5\u6536\u6d88\u606f\u5904\u7406\u65b9\u6cd5(\u5f53\u524d\u670d\u52a1\u6240\u6709\u4e1a\u52a1\u90fd\u5728\u8fd9\u91cc\u5904\u7406)"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"async start_port(port: number, name: string, mode: number, pid: number)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"connect",children:"connect"}),"\n",(0,t.jsx)(e.p,{children:"\u8fde\u63a5\u5bf9\u7aef\u670d\u52a1,\u8fd4\u56de\u5ba2\u6237\u7aef\u5b9e\u4f8b"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"peer: \u5bf9\u7aefGossipNodeID\u8282\u70b9 \u5982: VmvoecS91YdyzncoXp94iFgkmCu82SitFTfFYT4DeKR/1701161221917"}),"\n",(0,t.jsx)(e.li,{children:"port\uff1astart_port\u4e2d\u8bbe\u7f6e\u7684port"}),"\n",(0,t.jsx)(e.li,{children:"timeout: \u8fde\u63a5\u8d85\u65f6\u65f6\u957f"}),"\n",(0,t.jsxs)(e.li,{children:["return","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"P2PClientNat"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"async connect(peer: string, port: number, timeout: number) :P2PClientNat\n"})}),"\n",(0,t.jsx)(e.h2,{id:"p2pclientnat",children:"P2PClientNat"}),"\n",(0,t.jsx)(e.h3,{id:"send",children:"send"}),"\n",(0,t.jsx)(e.p,{children:"\u53d1\u9001\u6d88\u606f, \u4e0d\u9700\u8981\u7b49\u5f85\u5bf9\u7aef\u8fd4\u56de"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"start_port \u4e2d\u7684mode\u4e3a1\u4f7f\u7528"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"send(payload: ArrayBuffer)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"request",children:"request"}),"\n",(0,t.jsx)(e.p,{children:"\u8bf7\u6c42\u6d88\u606f\uff0c\u5e76\u7b49\u5f85\u8fd4\u56de\u7ed3\u679c\r\nstart_port \u4e2d\u7684mode\u4e3a2\u4f7f\u7528"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"index: \u8bf7\u6c42\u7f16\u53f7(\u8fd4\u56de\u7684\u65f6\u5019\u4f1a\u5e26\u4e0a)"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"async request(index: number, payload: ArrayBuffer, timeout: number): promise<Uint8Array>\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4f8b\u5b50",children:"\u4f8b\u5b50"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-JAVASCRIPT",children:'const { P2PNat, P2PClientNat, p2pConfigDefault } = require("native/js_p2p.js");\r\nconst { openPid } = require("p2p_pid.js");\r\n\r\nlet config = p2pConfigDefault;\r\nconfig.ca_cert_file = "./tests/ca/ca_cert.pem";\r\nconfig.cert_file = "./tests/A/a.crt";\r\nconfig.key_file = "./tests/A/a.key";\r\nconfig.local_host = "0.0.0.0:38080";\r\n\r\n\r\nconst p2pFunc = async () => {\r\n  let p2p = await P2PNat.startP2P(JSON.stringify(config));\r\n  // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u865a\u62df\u673aID\r\n  let pid = openPid(1, "./p2p_serv_handle.js", "handle");\r\n  await p2p.start_port(8080, "test port", 1, pid);\r\n}\r\n\r\np2pFunc().then((r) => {\r\n  console.log("!!!!!!!!!!p2p:", r);\r\n}).catch(e => {\r\n  console.log("!!!!!!!!!!p2p e:", e.message, e.stack);\r\n});\r\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"p2p_serv_handle:"}),"\n",(0,t.jsx)(e.p,{children:"\u63a5\u6536\u6570\u636e\u5e76\u54cd\u5e94"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-JavaScript",children:'\r\n/**\r\n * p2p\u670d\u52a1\uff0c\u7528\u4e8e\u63a5\u6536\u6570\u636e\u5904\u7406\r\n */\r\nasync function handle(reply, msg) {\r\n    console.log("test!!!!!!!!!!!!!!!!!!!!!!!!msg:", msg);\r\n    reply.reply(Buffer.from("reply b msg!!!!!!!!").buffer);\r\n}\r\n\r\n\r\n\r\nmodule.exports = {\r\n    handle\r\n}\n'})})]})}function a(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>l});var t=r(7294);const i={},s=t.createContext(i);function l(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);