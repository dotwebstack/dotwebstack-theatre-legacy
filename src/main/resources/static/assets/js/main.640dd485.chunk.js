(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e){e.exports={source:{"@id":"http://purl.org/dc/elements/1.1/source"},dateCreated:{"@id":"http://purl.org/dc/terms/created","@type":"http://www.w3.org/2001/XMLSchema#dateTime"},dateModified:{"@id":"http://purl.org/dc/terms/modified","@type":"http://www.w3.org/2001/XMLSchema#dateTime"},subject:{"@id":"http://purl.org/dc/terms/subject","@type":"@id","@container":"@set"},isPartOf:{"@id":"http://purl.org/iso25964/skos-thes#broaderPartitive","@type":"@id","@container":"@set"},hasPartOf:{"@id":"http://purl.org/iso25964/skos-thes#narrowerPartitive","@type":"@id","@container":"@set"},label:{"@id":"http://www.w3.org/2000/01/rdf-schema#label"},altLabel:{"@id":"http://www.w3.org/2004/02/skos/core#altLabel","@container":"@set"},broaderTerm:{"@id":"http://www.w3.org/2004/02/skos/core#broader","@type":"@id"},definition:{"@id":"http://www.w3.org/2004/02/skos/core#definition"},narrowerTerm:{"@id":"http://www.w3.org/2004/02/skos/core#narrower","@type":"@id","@container":"@set"},notation:{"@id":"http://www.w3.org/2004/02/skos/core#notation"},note:{"@id":"http://www.w3.org/2004/02/skos/core#note"},prefLabel:{"@id":"http://www.w3.org/2004/02/skos/core#prefLabel"},related:{"@id":"http://www.w3.org/2004/02/skos/core#related","@type":"@id","@container":"@set"},relatedMatch:{"@id":"http://www.w3.org/2004/02/skos/core#relatedMatch","@type":"@id"},status:{"@id":"http://www.w3.org/ns/adms#status"}}},166:function(e,t,a){e.exports=a(381)},171:function(e,t,a){},173:function(e,t,a){},219:function(e,t){},381:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(66),o=a.n(i),c=(a(171),a(39)),l=a(40),s=a(42),d=a(41),p=a(43),u=(a(173),a(160)),h=a.n(u),m=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).filterBegrippen=function(e){return a.props.data.filter(function(t){return t.label.toLowerCase().includes(e.toLowerCase())})},a.loadOptions=function(e,t){setTimeout(function(){t(a.filterBegrippen(e))},1e3)},a.state={inputValue:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{placeholder:"Zoek begrip...",isLoading:this.props.isLoading,cacheOptions:!0,isClearable:!0,loadOptions:this.loadOptions,defaultOptions:!0,onInputChange:this.props.handleInputChange,onChange:this.props.handleSelect}))}}]),t}(r.Component),f=a(162),g=a.n(f),w=a(163),b=a(164),y=a.n(b),v=function(e){var t={title:"Wijzig",type:"object",required:["source"],properties:{source:{type:"string",title:"source",default:e.compacted.source},dateCreated:{type:"string",title:"dateCreated",default:e.compacted.dateCreated},dateModified:{type:"string",title:"dateModified",default:e.compacted.dateModified},subject:{type:"array",items:{type:"string"},title:"subject",default:e.compacted.subject},isPartOf:{type:"array",items:{type:"string"},title:"isPartOf",default:e.compacted.isPartOf},hasPartOf:{type:"array",items:{type:"string"},title:"hasPartOf",default:e.compacted.hasPartOf},label:{type:"string",title:"label",default:e.compacted.label},altLabel:{type:"array",items:{type:"object",properties:{"@language":{type:"string",title:"Language"},"@value":{type:"string",title:"Value"}}},title:"altLabel",default:e.compacted.altLabel},broaderTerm:{type:"string",title:"broaderTerm",default:e.compacted.broaderTerm},definition:{type:"string",title:"definition",default:e.compacted.definition},narrowerTerm:{type:"array",items:{type:"string"},title:"narrowerTerm",default:e.compacted.narrowerTerm},notation:{type:"string",title:"notation",default:e.compacted.notation},note:{type:"string",title:"note",default:e.compacted.note},prefLabel:{type:"string",title:"prefLabel",default:e.compacted.prefLabel},related:{type:"array",items:{type:"string"},title:"related",default:e.compacted.related},relatedMatch:{type:"string",title:"relatedMatch",default:e.compacted.relatedMatch},status:{type:"object",properties:{"@language":{type:"string",title:"Language"},"@value":{type:"string",title:"Value"}},title:"status",default:e.compacted.status}}};return n.a.createElement(y.a,{schema:t,uiSchema:{"ui:options":{addable:!0,removable:!0},source:{"ui:widget":"textarea"},dateCreated:{"ui:widget":"date-time"},dateModified:{"ui:widget":"date-time"}}})},j=function(e){var t=e.data;return n.a.createElement("pre",{className:"text-left",dangerouslySetInnerHTML:{__html:JSON.stringify(t,null,2)}})},O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).compact=function(e,t){return g.a.compact(e,t,function(t,r){t&&console.error(t),delete r["@context"];var n=Array.isArray(r["@graph"])?r["@graph"].filter(function(e){return e["@id"]===a.props.selected.value})[0]:r;a.setState({ld:e,compacted:n})})},a.state={ld:{},compacted:{}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(this.props.selected.value),{method:"get",headers:{Accept:"application/ld+json"}}).then(function(e){return e.json()}).then(function(t){return e.compact(t,w)}).catch(console.error)}},{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 order-md-1 text-left"},n.a.createElement(v,{compacted:this.state.compacted,ld:this.state.ld}),n.a.createElement("hr",null),n.a.createElement(j,{data:this.state.compacted})))}}]),t}(r.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).fetchBegrippen=function(e){fetch("http://standaard.aquo.nl/beheer/begrippen?term=".concat(e),{method:"get",headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return e.map(function(e){return{value:e.begrip,label:e.categorie_label?"".concat(e.begrip_label," (").concat(e.categorie_label,")"):e.begrip_label}})}).then(function(e){return e.sort(function(e,t){return e.label>t.label?1:t.label>e.label?-1:0})}).then(function(e){return a.setState({data:e,isLoading:!1})}).catch(function(e){return console.error(e)})},a.handleInputChange=function(e){var t=e.replace(/\W/g,"");return t.length>2&&a.fetchBegrippen(t),a.setState({inputValue:t}),t},a.handleSelect=function(e){a.setState({selected:e})},a.state={isLoading:!0,data:[],selected:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"py-5 text-center"},n.a.createElement("h2",null,"Begrippen Editor"),n.a.createElement("p",{className:"lead"},"Zoek in de lijst om begrippen om te wijzigen"),n.a.createElement("div",{className:"mb-3"},n.a.createElement("pre",null,this.state.selected&&n.a.createElement("a",{href:this.state.selected.value},this.state.selected.value)),n.a.createElement(m,{data:this.state.data,isLoading:this.state.isLoading,handleSelect:this.handleSelect,handleInputChange:this.handleInputChange})),this.state.selected&&n.a.createElement(O,{selected:this.state.selected})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(379);o.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[166,2,1]]]);
//# sourceMappingURL=main.640dd485.chunk.js.map