"use strict";(self.webpackChunkpijs_doc=self.webpackChunkpijs_doc||[]).push([[651],{9759:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=r(5893),s=r(1151);const o={},i="quickstart",c={id:"quickstart",title:"quickstart",description:"\u8fd0\u884c\uff1a",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"install",permalink:"/docs/install"},next:{title:"\u4ee3\u7801\u5757\u6d4b\u8bd5",permalink:"/docs/\u4ee3\u7801\u5757\u6d4b\u8bd5"}},l={},a=[{value:"Mysql",id:"mysql",level:2},{value:"\u8fd0\u884cp2p",id:"\u8fd0\u884cp2p",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quickstart",children:"quickstart"}),"\n",(0,t.jsx)(n.h1,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install -g pi_ptjs --registry http://192.168.31.241:4873/\n"})}),"\n",(0,t.jsx)(n.h1,{id:"hello-world",children:"Hello World"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-TypeScript",children:'console.log("Hello World");\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd0\u884c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"pijs helloworld.ts\n"})}),"\n",(0,t.jsx)(n.h1,{id:"\u8fd0\u884cwebserver",children:"\u8fd0\u884cWebServer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"const express = require(\"express\");\r\nconst multer = require('multer');\r\n\r\nconst path = require(\"path\");\r\n\r\nconst app = express()\r\n\r\napp.get('/test/:id', function (req, res) {\r\n    res.send(`id:${req.params.id}`);\r\n})\r\napp.get('/set_header', function (req, res) {\r\n    res.set({\r\n        'tmp': 'set_header'\r\n    });\r\n    res.send('Hello World');\r\n})\r\n\r\napp.get('/redirect', function (req, res) {\r\n    res.redirect('http://www.google.com');\r\n})\r\n\r\napp.get('/status', function (req, res) {\r\n    res.status(500).json({ error: 'message' });\r\n})\r\n\r\n\r\napp.get('/upload', function (req, res) {\r\n    res.send(`\r\n    <h2>With <code>\"express\"</code> npm package</h2>\r\n    <form action=\"/api/upload\" enctype=\"multipart/form-data\" method=\"post\">\r\n      <div>Text field title: <input type=\"text\" name=\"title\" /></div>\r\n      <div>File: <input type=\"file\" name=\"someExpressFiles\" multiple=\"multiple\" /></div>\r\n      <input type=\"submit\" value=\"Upload\" />\r\n    </form>\r\n  `);\r\n})\r\n\r\nconst upload = multer({ dest: 'upload/' });\r\n\r\napp.post('/api/upload', upload.single('f'), (req, res, next) => {\r\n    const username = req.body.username;\r\n    const email = req.body.email;\r\n\r\n    res.send('Form submitted successfully!');\r\n\r\n});\r\n\r\napp.listen(80);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"mysql",children:"Mysql"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:"var mysql = require('mysql');\r\n\r\n\r\nvar connection = mysql.createConnection({\r\n  host: 'localhost',\r\n  user: 'test',\r\n  password: '123456',\r\n  database: 'test'\r\n});\r\n\r\n// globalThis.mysql = connection;\r\n\r\nconnection.connect(function () {\r\n  console.log(\"\u8fde\u63a5\u72b6\u6001\uff1a\", connection.state);\r\n\r\n  connection.query('SELECT * from tab1', function (error, results, fields) {\r\n    console.log(\"\u8fde\u63a5\u72b6\u6001222\uff1a\", connection.state);\r\n    if (error) throw error;\r\n    console.log('The solution is: ', results, \" fields:\", fields);\r\n\r\n    connection.end();\r\n  });\r\n});\r\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8fd0\u884cp2p",children:"\u8fd0\u884cp2p"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JavaScript",children:'const { P2PNat, P2PClientNat, p2pConfigDefault } = require("native/js_p2p.js");\r\nconst { openPid } = require("./pi_js_builtin/js/p2p_pid");\r\n\r\n/**\r\n * p2pConfigDefault = {\r\n  "ca_cert_file": "",   // \u5f53\u524d\u8282\u70b9\u8bc1\u4e66(\u5fc5\u586b)\r\n  "cert_file": "",      // \u5f53\u524d\u8282\u70b9\u8bc1\u4e66(\u5fc5\u586b)\r\n  "key_file": "",       // \u5f53\u524d\u8282\u70b9\u8bc1\u4e66(\u5fc5\u586b)\r\n  "local_host": "0.0.0.0:8080", // \u672c\u5730\u76d1\u542c\u5730\u5740\r\n  "seed_host": "",      // \u79cd\u5b50\u8282\u70b9\u5730\u5740(\u7b2c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u4e0d\u586b), \u79cd\u5b50\u8282\u70b9\u7528\u4e8e\u548c\u5176\u4ed6\u8282\u70b9\u4ea4\u6362\u4fe1\u606f\r\n  "seed_host_name": "", // \u79cd\u5b50\u8282\u70b9\u540d(\u7b2c\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u4e0d\u586b)\r\n  "phi_threshold": 8.0, \r\n  "sampling_window_size": 1000,\r\n  "max_interval": 10000,\r\n  "initial_interval": 5000,\r\n  "unlive_node_grace_period": 30000,\r\n  "connect_timeout": 5000,\r\n  "version": [0, 1, 0], // \u7248\u672c\r\n  "seed_amount": 1,\r\n  "not_seed_amount": 1,\r\n  "sync_timeout": 5000,\r\n  "heartbeat_interval": 5000,\r\n  "collect_interval": 30000\r\n}\r\n */\r\nlet config = p2pConfigDefault;\r\n// \u8bc1\u4e66\u8981\u6c42 \u4f7f\u7528 ed25519 \u7b97\u6cd5(\u89c1\u79c1\u6709\u8bc1\u4e66\u751f\u6210\u6587\u6863)\r\nconfig.ca_cert_file = "./tests/ca/ca_cert.pem";\r\nconfig.cert_file = "./tests/A/a.crt";\r\nconfig.key_file = "./tests/A/a.key";\r\nconfig.local_host = "0.0.0.0:38080";\r\n\r\n\r\nconst p2pFunc = async () => {\r\n  let p2p = await P2PNat.startP2P(JSON.stringify(config));\r\n  let pid = openPid(1, "./p2p_serv_handle.js", "test11");\r\n  await p2p.start_port(8080, "test port", 1, pid);\r\n\r\n}\r\n\r\np2pFunc().then((r) => {\r\n  console.log("!!!!!!!!!!p2p:", r);\r\n}).catch(e => {\r\n  console.log("!!!!!!!!!!p2p e:", e.message, e.stack);\r\n});\r\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(7294);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);