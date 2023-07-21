/*! For license information please see index.js.LICENSE.txt */
!function(){var e={184:function(e,a){var l;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var l=arguments[a];if(l){var i=typeof l;if("string"===i||"number"===i)e.push(l);else if(Array.isArray(l)){if(l.length){var o=n.apply(null,l);o&&e.push(o)}}else if("object"===i)if(l.toString===Object.prototype.toString)for(var r in l)t.call(l,r)&&l[r]&&e.push(r);else e.push(l.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(a,[]))||(e.exports=l)}()}},a={};function l(t){var n=a[t];if(void 0!==n)return n.exports;var i=a[t]={exports:{}};return e[t](i,i.exports,l),i.exports}l.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(a,{a:a}),a},l.d=function(e,a){for(var t in a)l.o(a,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},function(){"use strict";var e=window.wp.element,a=window.lodash,t=window.jQuery,n=l.n(t),i=window.wp.serverSideRender,o=l.n(i),r=window.wp.i18n,s=window.wp.components,g=l(184),c=l.n(g),p=window.wp.blockEditor;const d=l=>{const{attributes:t,setAttributes:n}=l,[i,o]=(0,e.useState)({name:!0,biography:!0,picture:!0}),g=qligg_gutenberg.image_url,d=qligg_gutenberg.accounts;return(0,e.createElement)(p.InspectorControls,{key:"inspector"},(0,e.createElement)(s.PanelBody,{initialOpen:!0,title:(0,r.__)("General","insta-gallery")},(0,e.createElement)(s.SelectControl,{label:(0,r.__)("Account","insta-gallery"),help:(0,r.__)("Please select Instagram account","insta-gallery"),value:t.username,onChange:e=>n({username:e}),options:(0,a.map)(d,((e,a)=>({value:e.id,label:(0,r.__)(e.name,"insta-gallery")})))}),(0,e.createElement)(s.SelectControl,{label:(0,r.__)("Feed","insta-gallery"),value:t.type,onChange:e=>n({type:e}),options:[{value:"tag",label:(0,r.__)("Tag","insta-gallery")},{value:"username",label:(0,r.__)("Username","insta-gallery")}]}),"tag"==t.type&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.TextControl,{label:(0,r.__)("Tag","insta-gallery"),help:(0,r.__)("Please enter Instagram tag","insta-gallery"),value:t.tag,onChange:e=>n({tag:e})}),(0,e.createElement)(s.SelectControl,{label:(0,r.__)("Order by","insta-gallery"),help:(0,r.__)("Please enter Instagram tag order","insta-gallery"),value:t.order_by,onChange:e=>n({order_by:e}),options:[{value:"recend_media",label:(0,r.__)("Recent (Within 24 hours)","insta-gallery")},{value:"top_media",label:(0,r.__)("Top (Most popular first)","insta-gallery")}]})),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("ul",{className:"qligg-list-videos"},(0,a.map)(["carousel","gallery","masonry","highlight"],((a,l)=>(0,e.createElement)("li",{className:c()("qligg-modal-image",t.layout==a&&"active","carousel"!==a&&"gallery"!==a&&"qligg-premium-field")},(0,e.createElement)("span",null,a.replace("-"," ")),(0,e.createElement)("img",{src:`${g}/${a}.png`})))))),(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Limit","insta-gallery"),help:(0,r.__)("Number of videos to display","insta-gallery"),value:t.limit,onChange:e=>{n({limit:e})},min:1,max:33}),"carousel"!=t.layout&&(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Columns","insta-gallery"),help:(0,r.__)("Number of videos in a row","insta-gallery"),value:t.columns,onChange:e=>n({columns:e}),min:1,max:20}),"highlight"==t.layout&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.TextControl,{label:(0,r.__)(" highlight by tag","insta-gallery"),help:(0,r.__)("highlightfeeds items with this tags","insta-gallery"),value:t.highlight.tag,onChange:e=>n({highlight:{...t.highlight,tag:e}})}),(0,e.createElement)(s.TextControl,{label:(0,r.__)(" highlight by id","insta-gallery"),help:(0,r.__)(" highlight by id","insta-gallery"),value:t.highlight.id,onChange:e=>n({highlight:{...t.highlight,id:e}})}),(0,e.createElement)(s.TextControl,{label:(0,r.__)(" highlight by position","insta-gallery"),help:(0,r.__)("highlightfeeds items in this positions","insta-gallery"),value:t.highlight.position,onChange:e=>n({highlight:{...t.highlight,position:e}})}))),"carousel"==t.layout&&(0,e.createElement)(s.PanelBody,{initialOpen:!1,title:(0,r.__)("Carousel","insta-gallery")},(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Slides per view","insta-gallery"),help:(0,r.__)("Number of images per slide","insta-gallery"),value:t.carousel.slidespv,onChange:e=>n({carousel:{...t.carousel,slidespv:e}}),min:1,max:100}),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Autoplay","insta-gallery"),help:(0,r.__)("Autoplay carousel items","insta-gallery"),checked:!!t.carousel.autoplay,onChange:e=>n({carousel:{...t.carousel,autoplay:e}})}),t.carousel.autoplay&&(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Autoplay Interval","insta-gallery"),help:(0,r.__)("Moves to next picture after specified time interval","insta-gallery"),value:t.carousel.autoplay_interval,onChange:e=>n({carousel:{...t.carousel,autoplay_interval:e}}),min:1,max:1e4}),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Navigation","insta-gallery"),help:(0,r.__)("Display navigation arrows","insta-gallery"),checked:!!t.carousel.navarrows,onChange:e=>n({carousel:{...t.carousel,navarrows:e}})}),t.carousel.navarrows&&(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Navigation color","insta-gallery"),help:(0,r.__)("Change navigation arrows color","insta-gallery")},(0,e.createElement)(p.ColorPalette,{value:t.carousel.navarrows_color,onChange:e=>n({carousel:{...t.carousel,navarrows_color:e}})})),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Pagination","insta-gallery"),help:(0,r.__)("Display pagination dots","insta-gallery"),checked:!!t.carousel.pagination,onChange:e=>n({carousel:{...t.carousel,pagination:e}})}),t.carousel.pagination&&(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Pagination color","insta-gallery"),help:(0,r.__)("Change pagination dots color","insta-gallery")},(0,e.createElement)(p.ColorPalette,{value:t.carousel.pagination_color,onChange:e=>n({carousel:{...t.carousel,pagination_color:e}})}))),(0,e.createElement)(s.PanelBody,{initialOpen:!1,title:(0,r.__)("Profile","insta-gallery")},(0,e.createElement)(s.TextControl,{label:(0,r.__)("Full name","insta-gallery"),help:(0,r.__)("Feed profile full name","insta-gallery"),value:!t.profile.name&&i.name&&d[t.username].name||t.profile.name,onChange:e=>{o({...i,name:!1}),n({profile:{...t.profile,name:e}})}}),(0,e.createElement)(s.TextareaControl,{label:(0,r.__)("Biography","insta-gallery"),help:(0,r.__)("Feed profile biography","insta-gallery"),value:!t.profile.biography&&i.biography&&d[t.username].biography||t.profile.biography,onChange:e=>{o({...i,biography:!1}),n({profile:{...t.profile,biography:e}})}}),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("img",{style:{objectFit:"cover",width:"230px",height:"230px"},src:!t.profile.profile_picture_url&&i.picture&&d[t.username].profile_picture_url||t.profile.profile_picture_url}),(0,e.createElement)(p.MediaUpload,{onSelect:e=>{o({...i,picture:!1}),n({profile:{...t.profile,profile_picture_url:e.url}})},allowedTypes:["image"],value:t.profile.profile_picture_url,render:a=>{let{open:l}=a;return(0,e.createElement)(s.Button,{onClick:l},(0,r.__)("Upload","insta-gallery"))}}))),(0,e.createElement)(s.PanelBody,{initialOpen:!1,title:(0,r.__)("Box","insta-gallery")},(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Box","insta-gallery"),className:"qligg-premium-field",help:(0,r.__)("Display the Instagram Feed inside a customizable box","insta-gallery"),checked:!!t.box.display,onChange:e=>n({box:{...t.box,display:e}})}),t.box.display&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Box padding","insta-gallery"),className:"qligg-premium-field",help:(0,r.__)("Add padding to the Instagram Feed","insta-gallery"),value:t.box.padding,onChange:e=>n({box:{...t.box,padding:e}}),min:1,max:100}),(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Border Radius","insta-gallery"),help:(0,r.__)("Add radius to the Instagram Feed","insta-gallery"),className:"qligg-premium-field",value:t.box.radius,onChange:e=>n({box:{...t.box,radius:e}}),min:0,max:100}),(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Box background","insta-gallery"),help:(0,r.__)("Color which is displayed on box background","insta-gallery"),className:"qligg-premium-field"},(0,e.createElement)(p.ColorPalette,{value:t.box.background,onChange:e=>n({box:{...t.box,background:e}})})),(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Box text color","insta-gallery"),className:"qligg-premium-field",help:(0,r.__)("Color which is displayed on box text","insta-gallery")},(0,e.createElement)(p.ColorPalette,{value:t.box.color_text,onChange:e=>n({box:{...t.box,color_text:e}})})),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Profile","insta-gallery"),className:"qligg-premium-field",help:(0,r.__)("Display user profile or tag info","insta-gallery"),checked:!!t.box.profile,onChange:e=>n({box:{...t.box,profile:e}})}))),(0,e.createElement)(s.PanelBody,{initialOpen:!1,title:(0,r.__)("Image","insta-gallery")},(0,e.createElement)(s.SelectControl,{label:(0,r.__)("Account","insta-gallery"),value:t.resolution,onChange:e=>n({resolution:e}),options:[{value:"madium",label:(0,r.__)("Medium (320 x auto)","insta-gallery")},{value:"small",label:(0,r.__)("Small (150 x 150)","insta-gallery")}]}),(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Images spacing","insta-gallery"),help:(0,r.__)("Add blank space between images","insta-gallery"),value:t.spacing,onChange:e=>n({spacing:e}),min:0,max:100}),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images lazy load","insta-gallery"),help:(0,r.__)("Defers feed images loading","insta-gallery"),checked:!!t.lazy,onChange:e=>n({lazy:e})})),(0,e.createElement)(s.PanelBody,{initialOpen:!1,title:(0,r.__)("Image card","insta-gallery")},(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images card","insta-gallery"),className:"qligg-premium-field",help:(0,r.__)("Display card gallery by clicking on image","insta-gallery"),checked:!!t.card.display,onChange:e=>n({card:{...t.card,display:e}})}),t.card.display&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Card radius","insta-gallery"),help:(0,r.__)("Add radius to the Instagram Feed","insta-gallery"),className:"qligg-premium-field",value:t.card.radius,onChange:e=>n({card:{...t.card,radius:e}}),min:0,max:100}),(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Card font size","insta-gallery"),help:(0,r.__)("Add font-size to the Instagram Feed","insta-gallery"),className:"qligg-premium-field",value:t.card.font_size,onChange:e=>n({card:{...t.card,font_size:e}}),min:0,max:100}),(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Card background","insta-gallery"),className:"qligg-premium-field",help:(0,r.__)("Color which is displayed when over images","insta-gallery")},(0,e.createElement)(p.ColorPalette,{value:t.card.background,onChange:e=>n({card:{...t.card,background:e}})})),(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Card text color","insta-gallery"),className:"qligg-premium-field",help:(0,r.__)("Color Text","insta-gallery")},(0,e.createElement)(p.ColorPalette,{value:t.card.text_color,onChange:e=>n({card:{...t.card,text_color:e}})})),(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Card padding","insta-gallery"),help:(0,r.__)("Add blank space between images","insta-gallery"),className:"qligg-premium-field",value:t.card.padding,onChange:e=>n({card:{...t.card,padding:e}}),min:0,max:100}),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Card info","insta-gallery"),className:"qligg-premium-field",help:(0,r.__)("Display likes count of images","insta-gallery"),checked:!!t.card.info,onChange:e=>n({card:{...t.card,info:e}})}),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Card caption","insta-gallery"),className:"qligg-premium-field",help:(0,r.__)("Display caption count of images","insta-gallery"),checked:!!t.card.caption,onChange:e=>n({card:{...t.card,caption:e}})}),(0,e.createElement)(s.RangeControl,{label:(0,r.__)("Card length","insta-gallery"),help:(0,r.__)("Add blank space between images","insta-gallery"),className:"qligg-premium-field",value:t.card.length,onChange:e=>n({card:{...t.card,length:e}}),min:0,max:100}))),(0,e.createElement)(s.PanelBody,{initialOpen:!1,title:(0,r.__)("Image mask","insta-gallery")},(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images mask","insta-gallery"),help:(0,r.__)("Image mouseover effect","insta-gallery"),checked:!!t.mask.display,onChange:e=>n({mask:{...t.mask,display:e}})}),t.mask.display&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Images mask color","insta-gallery"),help:(0,r.__)("Image mask background color","insta-gallery")},(0,e.createElement)(p.ColorPalette,{value:t.mask.background,onChange:e=>n({mask:{...t.mask,background:e}})})),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images mask likes","insta-gallery"),help:(0,r.__)("Display likes count of images","insta-gallery"),checked:!!t.mask.likes,onChange:e=>n({mask:{...t.mask,likes:e}})}),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images mask comments","insta-gallery"),help:(0,r.__)("Display comments count of images","insta-gallery"),checked:!!t.mask.comments,onChange:e=>n({mask:{...t.mask,comments:e}})}))),(0,e.createElement)(s.PanelBody,{initialOpen:!1,title:(0,r.__)("Image popup","insta-gallery")},(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images popup","insta-gallery"),help:(0,r.__)("Display popup gallery by clicking on image","insta-gallery"),checked:!!t.popup.display,onChange:e=>n({popup:{...t.popup,display:e}})}),t.popup.display&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images popup profile","insta-gallery"),help:(0,r.__)("Display user profile or tag info","insta-gallery"),className:"qligg-premium-field",checked:!!t.popup.profile,onChange:e=>n({popup:{...t.popup,profile:e}})}),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images popup caption","insta-gallery"),help:(0,r.__)("Display caption in the popup","insta-gallery"),className:"qligg-premium-field",checked:!!t.popup.caption,onChange:e=>n({popup:{...t.popup,caption:e}})}),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images popup likes","insta-gallery"),help:(0,r.__)("Display likes count of images","insta-gallery"),className:"qligg-premium-field",checked:!!t.popup.likes,onChange:e=>n({popup:{...t.popup,likes:e}})}),(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Images popup comments","insta-gallery"),help:(0,r.__)("Display comments count of images","insta-gallery"),className:"qligg-premium-field",checked:!!t.popup.comments,onChange:e=>n({popup:{...t.popup,comments:e}})}),(0,e.createElement)(s.SelectControl,{label:(0,r.__)("Images popup align","insta-gallery"),help:(0,r.__)("Align item description in popup","insta-gallery"),className:"qligg-premium-field",value:t.popup.align,onChange:e=>n({popup:{...t.popup,align:e}}),options:[{value:"left",label:(0,r.__)("Left","insta-gallery")},{value:"right",label:(0,r.__)("Right","insta-gallery")},{value:"bottom",label:(0,r.__)("Bottom","insta-gallery")},{value:"top",label:(0,r.__)("Top","insta-gallery")}]}))),(0,e.createElement)(s.PanelBody,{initialOpen:!1,title:(0,r.__)("Botton","insta-gallery")},(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Instagram button","insta-gallery"),help:(0,r.__)("Display the button to open Instagram site link","insta-gallery"),checked:!!t.button.display,onChange:e=>n({button:{...t.button,display:e}})}),t.button.display&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.TextControl,{label:(0,r.__)("Instagram button text","insta-gallery"),help:(0,r.__)("Instagram button text here","insta-gallery"),value:t.button.text,onChange:e=>n({button:{...t.button,text:e}})}),(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Instagram button background","insta-gallery"),help:(0,r.__)("Color which is displayed on button background","insta-gallery")},(0,e.createElement)(p.ColorPalette,{value:t.button.background,onChange:e=>n({button:{...t.button,background:e}})})),(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Instagram button hover background","insta-gallery"),help:(0,r.__)("Color which is displayed when hovered over button","insta-gallery")},(0,e.createElement)(p.ColorPalette,{value:t.button.background_hover,onChange:e=>n({button:{...t.button,background_hover:e}})})))),(0,e.createElement)(s.PanelBody,{initialOpen:!1,title:(0,r.__)("Botton load more","insta-gallery")},(0,e.createElement)(s.ToggleControl,{label:(0,r.__)("Instagram button","insta-gallery"),help:(0,r.__)("Display the button to open Instagram site link","insta-gallery"),className:"qligg-premium-field",checked:!!t.button_load.display,onChange:e=>n({button_load:{...t.button_load,display:e}})}),t.button_load.display&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.TextControl,{label:(0,r.__)("Instagram button text","insta-gallery"),help:(0,r.__)("Instagram button text here","insta-gallery"),className:"qligg-premium-field",value:t.button_load.text,onChange:e=>n({button_load:{...t.button_load,text:e}})}),(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Instagram button background","insta-gallery"),help:(0,r.__)("Color which is displayed on button background","insta-gallery"),className:"qligg-premium-field"},(0,e.createElement)(p.ColorPalette,{value:t.button_load.background,onChange:e=>n({button_load:{...t.button_load,background:e}})})),(0,e.createElement)(s.BaseControl,{label:(0,r.__)("Instagram button hover background","insta-gallery"),help:(0,r.__)("Color which is displayed when hovered over button","insta-gallery"),className:"qligg-premium-field"},(0,e.createElement)(p.ColorPalette,{value:t.button_load.background_hover,onChange:e=>n({button_load:{...t.button_load,background_hover:e}})})))))};var m=0,u={};function _(e,a){var l=n()(".insta-gallery-list",e),t=n()(".insta-gallery-spinner",e),i=e.data("feed");n().ajax({url:qligg.ajax_url,type:"post",timeout:3e4,data:{action:"qligg_load_item_images",next_max_id:a,feed:JSON.stringify(i)},beforeSend:function(){t.show()},success:function(e){if(!0!==e.success)return l.append(n()(e.data)),void t.hide();var a=n()(e.data).filter(".insta-gallery-item");l.append(a).trigger("qligg.loaded",[a])},complete:function(){},error:function(e,a){t.hide()}})}function y(){n()(".insta-gallery-feed").on("qligg.loaded",(function(e,a){var l=n()(e.delegateTarget),t=n()(".insta-gallery-list",l),i=n()(".insta-gallery-spinner",l),o=n()(".insta-gallery-button.load",l),r=l.data("feed"),s=n()(a).length,g=0;s&&t.find(".insta-gallery-image").on("load loadstart",(e=>{const l=e.type;("load"==l||"loadstart"==l)&&g++,g==s&&t.trigger("qligg.imagesLoaded",[a])})),s<r.limit&&(i.hide(),setTimeout((function(){o.fadeOut()}),300))})),n()(".insta-gallery-feed").on("qligg.imagesLoaded",(function(e){var a=n()(e.delegateTarget);n()(".insta-gallery-spinner",a).hide()})),n()(".insta-gallery-feed[data-feed_layout=gallery]").on("qligg.imagesLoaded",(function(e,a){n()(e.delegateTarget).addClass("loaded"),n()(a).each((function(e,a){n()(a).addClass("ig-image-loaded")}))})),n()(".insta-gallery-feed[data-feed_layout=carousel]").on("qligg.imagesLoaded",(function(e,a){n()(e.delegateTarget).addClass("loaded"),n()(a).each((function(e,a){n()(a).addClass("ig-image-loaded")}))})),n()(".insta-gallery-feed[data-feed_layout=carousel]").on("qligg.imagesLoaded",(function(e,a){var l=n()(e.delegateTarget),t=n()(".swiper-container",l),i=l.data("feed");i.carousel.slides=i.carousel.slidespv,m++,u[m]=new Swiper(t,{loop:!0,autoHeight:!0,observer:!0,observeParents:!0,slidesPerView:1,spaceBetween:2,autoplay:!!i.carousel.autoplay&&{delay:parseInt(i.carousel.autoplay_interval)},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0,type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:1},480:{spaceBetween:parseInt(i.spacing),slidesPerView:Math.min(2,parseInt(i.carousel.slides))},768:{spaceBetween:parseInt(i.spacing),slidesPerView:Math.min(3,parseInt(i.carousel.slides))},1024:{spaceBetween:parseInt(i.spacing),slidesPerView:parseInt(i.carousel.slides)}}})})),n()(".insta-gallery-feed[data-feed_layout=masonry]").on("qligg.imagesLoaded",(function(e,a){var l=n()(e.delegateTarget),t=n()(".insta-gallery-list",l);t.data("masonry")?t.masonry("appended",a,!1):t.masonry({itemSelector:".insta-gallery-item",isResizable:!0,isAnimated:!1,transitionDuration:0,percentPosition:!0,columnWidth:".insta-gallery-item:last-child",originTop:!0})})),n()(".insta-gallery-feed[data-feed_layout=masonry]").on("layoutComplete",(function(e,a){n()(e.delegateTarget).addClass("loaded"),n()(a).each((function(e,a){n()(a.element).addClass("ig-image-loaded")}))})),n()(".insta-gallery-feed").on("qligg.loaded",(function(e){var a=n()(e.delegateTarget),l=n()(".insta-gallery-list",a),t=a.data("feed");n()(".insta-gallery-item .insta-gallery-icon.qligg-icon-instagram",l).on("click",(function(e){e.stopPropagation()})),t.popup.display&&n()(".insta-gallery-item",l).magnificPopup({type:"inline",callbacks:{beforeOpen:function(){this.st.mainClass=this.st.mainClass+" qligg-mfp-wrap"},elementParse:function(e){var a,i,o="",r="",s="",g="",c="",p="";i=!e.el.data("item").type||"video"!=e.el.data("item").type&&"video"!=e.el.data("item").file_type?'<img src="'+e.el.data("item").images.standard+'"/>':'\n              <video autoplay>\n                <source src="'+e.el.data("item").videos.standard+'" type="video/mp4">\n              </video>',a='<div class="mfp-icons"><div class="mfp-counter">'+(e.index+1)+" / "+n()(".insta-gallery-item",l).length+'</div><a class="mfp-link" href="'+e.el.data("item").link+'" target="_blank" rel="noopener"><i class="qligg-icon-instagram"></i>Instagram</a></div>',t.popup.profile&&(o='<div class="mfp-user"><img src="'+t.profile.profile_picture_url+'"><a href="https://www.instagram.com/'+t.profile.username+'" title="'+t.profile.name+'" target="_blank" rel="noopener">'+t.profile.username+"</a></div>"),t.popup.caption&&(r='<div class="mfp-caption">'+e.el.data("item").caption+"</div>"),e.el.data("item").date&&(c='<div class="mfp-date">'+e.el.data("item").date+"</div>"),e.el.data("item").comments&&t.popup.comments&&(p='<div class="mfp-comments"><i class="qligg-icon-comment"></i>'+e.el.data("item").comments+"</div>"),e.el.data("item").likes&&t.popup.likes&&(g='<div class="mfp-likes"><i class="qligg-icon-heart"></i>'+e.el.data("item").likes+"</div>"),(t.popup.likes||t.popup.comments)&&(s='<div class="mfp-info">'+g+p+c+"</div>"),e.src='<div class="mfp-figure '+t.popup.align+'">'+i+'<div class="mfp-close"></div><div class="mfp-bottom-bar"><div class="mfp-title">'+o+a+r+s+"</div></div></div>"}},gallery:{enabled:!0}})})),n()(".insta-gallery-feed").on("click",".insta-gallery-button.load",(function(e){e.preventDefault();var a=n()(e.delegateTarget);if(!a.hasClass("loaded"))return!1;_(a,n()(".insta-gallery-list .insta-gallery-item:last-child",a).data("item").i)})),n()(".insta-gallery-feed").each((function(e,a){var l=n()(a);if(l.hasClass("loaded"))return!1;_(l,0)}))}y(),-1!=navigator.appVersion.indexOf("MSIE 8.")&&(document.body.className+=" instagal-ie-8"),-1!=navigator.appVersion.indexOf("MSIE 9.")&&(document.body.className+=" instagal-ie-9");class h extends e.Component{constructor(e){super(e),this.method=(0,a.debounce)(this.method.bind(this),1e3)}method(){this.initLayout()}initLayout(){var e=!1,a=setInterval((()=>{n()(".tiktok-feed-feed")&&(y(),e=!0),e&&clearInterval(a)}),3e3)}componentDidMount(){this.initLayout()}debounceOnChange(e){(0,a.debounce)((e=>{this.initLayout()}),350)(e)}componentDidUpdate(){this.method()}render(){const{attributes:l,setAttributes:t}=this.props,n=qligg_gutenberg.accounts;return n&&0!=n.length?n[l.username]?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(d,this.props),(0,e.createElement)("div",{className:"tiktok-site-render"}),(0,e.createElement)(o(),{block:"qligg/box",attributes:l})):(0,e.createElement)("div",null,(0,e.createElement)(s.Placeholder,{label:(0,r.__)("Please select account","insta-gallery"),instructions:(0,e.createElement)(s.RadioControl,{value:l.username,onChange:e=>t({username:e}),options:(0,a.map)(n,((e,a)=>({value:e.id,label:e.name||e.username})))})})):(0,e.createElement)("div",null,(0,e.createElement)(s.Placeholder,{label:(0,r.__)("Please create access token","insta-gallery"),instructions:(0,e.createElement)(e.Fragment,null,(0,r.__)("Before start creating feeds, you have to create an access token. Please go to","insta-gallery")," ",(0,e.createElement)("a",{href:qligg_gutenberg.create_account,target:"_blank"},(0,r.__)("the account tab","insta-gallery")),(0,r.__)(" to connect your Instagram account and then reload this page.","insta-gallery"))}))}}var b=h;(0,window.wp.blocks.registerBlockType)("qligg/box",{title:(0,r.__)("Social Feed Gallery","insta-gallery"),description:(0,r.__)("Display beautiful and responsive galleries on your website from your Instagram feed account.","insta-gallery"),icon:"awards",category:"qligg",keywords:[(0,r.__)("qligg","insta-gallery"),(0,r.__)("instagram","insta-gallery"),(0,r.__)("quadlayers","insta-gallery")],attributes:qligg_gutenberg.attributes,edit:b})}()}();