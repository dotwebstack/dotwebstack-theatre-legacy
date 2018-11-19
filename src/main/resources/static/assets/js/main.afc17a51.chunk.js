(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e){e.exports={source:{"@id":"http://purl.org/dc/elements/1.1/source"},dateCreated:{"@id":"http://purl.org/dc/terms/created","@type":"http://www.w3.org/2001/XMLSchema#dateTime"},dateModified:{"@id":"http://purl.org/dc/terms/modified","@type":"http://www.w3.org/2001/XMLSchema#dateTime"},subject:{"@id":"http://purl.org/dc/terms/subject","@type":"@id","@container":"@set"},isPartOf:{"@id":"http://purl.org/iso25964/skos-thes#broaderPartitive","@type":"@id","@container":"@set"},hasPartOf:{"@id":"http://purl.org/iso25964/skos-thes#narrowerPartitive","@type":"@id","@container":"@set"},label:{"@id":"http://www.w3.org/2000/01/rdf-schema#label"},altLabel:{"@id":"http://www.w3.org/2004/02/skos/core#altLabel","@container":"@set"},broaderTerm:{"@id":"http://www.w3.org/2004/02/skos/core#broader","@type":"@id"},definition:{"@id":"http://www.w3.org/2004/02/skos/core#definition"},narrowerTerm:{"@id":"http://www.w3.org/2004/02/skos/core#narrower","@type":"@id","@container":"@set"},notation:{"@id":"http://www.w3.org/2004/02/skos/core#notation"},note:{"@id":"http://www.w3.org/2004/02/skos/core#note"},prefLabel:{"@id":"http://www.w3.org/2004/02/skos/core#prefLabel"},related:{"@id":"http://www.w3.org/2004/02/skos/core#related","@type":"@id","@container":"@set"},relatedMatch:{"@id":"http://www.w3.org/2004/02/skos/core#relatedMatch","@type":"@id"},status:{"@id":"http://www.w3.org/ns/adms#status"}}},166:function(e,t,a){e.exports=a(381)},171:function(e,t,a){},173:function(e,t,a){},219:function(e,t){},381:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(66),i=a.n(o),c=(a(171),a(39)),l=a(40),s=a(42),d=a(41),u=a(43),p=(a(173),a(161)),h=a.n(p),m=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).filterBegrippen=function(e){return a.props.data.filter(function(t){return t.label.toLowerCase().includes(e.toLowerCase())})},a.loadOptions=function(e,t){setTimeout(function(){t(a.filterBegrippen(e))},1e3)},a.state={inputValue:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{placeholder:"Zoek begrip...",isLoading:this.props.isLoading,cacheOptions:!0,isClearable:!0,loadOptions:this.loadOptions,defaultOptions:!0,onInputChange:this.props.handleInputChange,onChange:this.props.handleSelect}))}}]),t}(n.Component),f=a(67),g=a.n(f),w=a(163),b=a(164),y=a.n(b),v=function(e){var t={title:"Wijzig",type:"object",required:[],properties:{source:{type:"string",title:e.labels.source,default:e.compacted.source},subject:{type:"array",items:{type:"string"},title:"subject",default:e.compacted.subject},isPartOf:{type:"array",items:{type:"string"},title:"isPartOf",default:e.compacted.isPartOf},hasPartOf:{type:"array",items:{type:"string"},title:"hasPartOf",default:e.compacted.hasPartOf},label:{type:"string",title:"label",default:e.compacted.label},altLabel:{type:"array",items:{type:"object",properties:{"@language":{type:"string",title:"Language"},"@value":{type:"string",title:"Value"}}},title:"altLabel",default:e.compacted.altLabel},broaderTerm:{type:"string",title:"broaderTerm",default:e.compacted.broaderTerm},definition:{type:"string",title:"definition",default:e.compacted.definition},narrowerTerm:{type:"array",items:{type:"string"},title:"narrowerTerm",default:e.compacted.narrowerTerm},notation:{type:"string",title:"notation",default:e.compacted.notation},note:{type:"string",title:"note",default:e.compacted.note},prefLabel:{type:"string",title:"prefLabel",default:e.compacted.prefLabel},related:{type:"array",items:{type:"string"},title:"related",default:e.compacted.related},relatedMatch:{type:"string",title:"relatedMatch",default:e.compacted.relatedMatch}}};return r.a.createElement(y.a,{className:"form form-wide",schema:t,uiSchema:{"ui:options":{addable:!0,removable:!0,orderable:!1},source:{"ui:widget":"textarea"},subject:{"ui:options":{addable:!0,removable:!0,orderable:!1}},altLabel:{"ui:options":{addable:!0,removable:!0,orderable:!1}},narrowerTerm:{"ui:options":{addable:!0,removable:!0,orderable:!1}},related:{"ui:options":{addable:!0,removable:!0,orderable:!1}}},onSubmit:function(t){e.handleFormData(t.formData)}})},j=window.dwsHostname,O=window.dwsEndpoint,L=window.dwsConfig,E=window.dwsSearchEndpoint,k=function(e){var t=e.data;return r.a.createElement("pre",{className:"text-left",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}})},S=function(e){return 0===e.indexOf("Begrip: ")?e.substr("Begrip: ".length,e.length):e},C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).getLabelsConfig=function(e){fetch(e,{method:"get",headers:{Accept:"application/ld+json"}}).then(function(e){return e.json()}).then(function(e){return a.setState({labels:e})}).catch(console.error)},a.compactBegrip=function(e,t){return new Promise(function(n){g.a.compact(t,a.state.context,function(t,a){t&&console.error(t);var r=Array.isArray(a["@graph"])?a["@graph"].filter(function(t){return t["@id"]===e})[0]:a,o={label:e,uri:e};r.label&&(o={label:S(r.label),uri:e}),n(o)})})},a.changeFormData=function(e){a.setState({formData:e});var t=a.state.compacted;Object.keys(e).map(function(a){return t[a]=e[a]});var n={"@context":a.state.context,"@graph":[].concat(t)};a.expandJson(n).then(function(e){return a.saveBegrip(e)})},a.saveBegrip=function(e){return fetch("http://".concat(j).concat(O),{method:"put",body:JSON.stringify(e),headers:{"Content-Type":"application/ld+json"}}).then(function(e){return console.log("Saved",e)}).then(function(){return a.setState({ld:e})}).catch(console.error)},a.getBegripLabel=function(e){return fetch("".concat(x(e),"?format=json"),{method:"get",headers:{Accept:"application/ld+json"}}).then(function(e){return e.json()}).then(function(t){return a.compactBegrip(e,t)}).catch(console.error)},a.compact=function(e){return g.a.compact(e,a.state.context,function(t,n){t&&console.error(t);var r=Array.isArray(n["@graph"])?n["@graph"].filter(function(e){return e["@id"]===a.props.selected.value})[0]:n,o=Array.isArray(n["@graph"])?n["@graph"].filter(function(e){return e["@id"]!==a.props.selected.value}):[];a.setState({ld:e,compacted:r,savedValues:o})})},a.expandJson=function(e){return new Promise(function(t){return g.a.expand(e,function(e,a){return t(a)})})},a.state={ld:{},compacted:{},context:w,formData:{},labels:[],savedValues:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(x(this.props.selected.value),"?format=json"),{method:"get",headers:{Accept:"application/ld+json"}}).then(function(e){return e.json()}).then(function(t){return e.compact(t)}).then(function(){return e.getLabelsConfig("http://".concat(j).concat(L))}).catch(console.error)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 order-md-1 text-left"},r.a.createElement(v,{compacted:this.state.compacted,ld:this.state.ld,labels:this.state.labels,formData:this.state.formData,handleFormData:this.changeFormData}),r.a.createElement("hr",null),r.a.createElement(k,{data:this.state.compacted}),r.a.createElement("hr",null)))}}]),t}(n.Component),x=function(e){return e&&e.length>0?e.replace("standaard.aquo.nl",j).replace("/id/","/doc/"):e},B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).fetchBegrippen=function(e){fetch("http://".concat(j).concat(E,"?term=").concat(e),{method:"get",headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return e.map(function(e){return{value:e.uri,label:e.label}})}).then(function(e){return e.sort(function(e,t){return e.label>t.label?1:t.label>e.label?-1:0})}).then(function(e){return a.setState({data:e,isLoading:!1})}).catch(function(e){return console.error(e)})},a.handleInputChange=function(e){var t=e.replace(/\W/g,"");return t.length>2&&a.fetchBegrippen(t),a.setState({inputValue:t}),t},a.handleSelect=function(e){a.setState({selected:e})},a.state={isLoading:!0,data:[],selected:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"py-5 text-center"},r.a.createElement("h2",null,"Begrippen Editor"),r.a.createElement("p",{className:"lead"},"Zoek in de lijst om begrippen om te wijzigen"),r.a.createElement("div",{className:"mb-3"},r.a.createElement("pre",null,this.state.selected&&r.a.createElement("a",{href:x(this.state.selected.value)},x(this.state.selected.value))),r.a.createElement(m,{data:this.state.data,isLoading:this.state.isLoading,handleSelect:this.handleSelect,handleInputChange:this.handleInputChange})),this.state.selected&&r.a.createElement(C,{selected:this.state.selected})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(379);i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[166,2,1]]]);
//# sourceMappingURL=main.afc17a51.chunk.js.map