var LS_fontLibrary={classInstance:null,modalOpen:!1,open:function(t){LS_fontLibrary.modalOpen||kmw.modal.open({uid:"ls-font-library",modalClasses:"lse-google-font-modal",content:jQuery("#ls-google-fonts-modal-content"),contentClasses:"ls-google-fonts-modal-window",minWidth:680,maxWidth:1280,maxHeight:"100%",onOpen:function(){LS_fontLibrary.classInstance||(LS_fontLibrary.modalOpen=!0,LS_fontLibrary.classInstance=new LS_gFontLoader(LS_FontData.fonts,LS_FontData.languages,t))},onClose:function(){LS_fontLibrary.modalOpen=!1}})},close:function(){kmw.modal.close("ls-font-library")}};class LS_gFontLoader{constructor(t,e,s){this.BATCH_SIZE=16,this.PANEL_H=300,this.MARGIN=10,this.FONT_SIZE=35,this.PANEL_WIDTH=280,this.popularOrder=Object.values(t).reverse(),this.alphabeticOrder=[],this.newestOrder=[],this.trendingOrder=[],this.categories=["serif","sans-serif","display","handwriting","monospace"],this.keyword="",this.languages=e,this.currentLanguage="latin",this.userSentence="",this.exampleSentence=this.languages[0].sentence,this.leftToRight=!0,this.onSelectCallback=s,this.inactive=[],this.modalHeight=jQuery(".kmw-modal-inner").height(),this.loadingPoint=.8*this.modalHeight,this.$panelsCnt=jQuery(".ls-gfonts-font-panels-cnt"),this.$panels=jQuery(".ls-gfonts-font-panel"),this.$titles=jQuery(".ls-gfonts-font-panel-title"),this.$sentences=jQuery(".ls-gfonts-font-panel-sentence-inner"),this.$sentenceInput=jQuery("#ls-gfonts-sentence-input"),this.$search=jQuery("#ls-gfonts-search"),this.$size=jQuery(".ls-gfonts-current-size"),this.$resize=jQuery("#ls-gfonts-resize-range"),this.$languages=jQuery("#ls-gfonts-languages-select"),this.$categories=jQuery("#ls-gfonts-categories-select"),this.$sort=jQuery("#ls-gfonts-sort-select"),this.$familyCounter=jQuery(".ls-gfonts-family-counter"),this.$notFound=jQuery(".ls-gfonts-not-found"),this.$reset=jQuery(".ls-gfonts-not-found-reset"),this.fontDataOriginal=this.popularOrder,this.createTrending(),this.fontDataOriginal=this.trendingOrder,this.fontDataReduced=this.filterByLang(),this.fontDataInUse=Object.values(this.fontDataReduced),this.sentenceTimeout,this.fontSizeTimeout,this.searchTimeout,this.categoryTimeout,this.windowResizeTimeout,this.initialPanels(),this.events()}initialPanels(){this.emptyCnt(),this.updateCounter(),this.addNewPanels(this.BATCH_SIZE),this.addNewPanels(this.BATCH_SIZE),this.calcHeight()}events(){jQuery("#ls-google-fonts-modal-content").on("scroll.ls-google-fonts",(()=>{this.scroll()})),this.$sentenceInput.on("input.ls-google-fonts",(()=>{this.$panels=jQuery(".ls-gfonts-font-panel"),this.$sentences=jQuery(".ls-gfonts-font-panel-sentence-inner"),clearTimeout(this.sentenceTimeout),this.sentenceTimeout=setTimeout((()=>{this.userSentence=this.$sentenceInput.val(),this.$sentences.html(this.userSentence||this.exampleSentence)}),300)})),this.$search.on("input.ls-google-fonts",(()=>{clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout((()=>{this.keyword=this.$search.val().toLowerCase(),this.filterFonts(),this.checkNoResults(),this.fontDataInUse=Object.values(this.fontDataReduced),this.initialPanels()}),300)})),this.$categories.on("change.ls-google-fonts",(()=>{let t=this.$categories.val();this.categories="all"===t?["serif","sans-serif","display","handwriting","monospace"]:[t],this.filterFonts(),this.checkNoResults(),this.fontDataInUse=Object.values(this.fontDataReduced),this.initialPanels()})),this.$resize.on("input.ls-google-fonts",(()=>{this.$panels=jQuery(".ls-gfonts-font-panel"),this.$sentences=jQuery(".ls-gfonts-font-panel-sentence-inner"),this.FONT_SIZE=this.$resize.val(),this.$size.html(`${this.FONT_SIZE}px`),this.$panelsCnt[parseInt(this.FONT_SIZE)>50?"addClass":"removeClass"]("ls-gfonts-text-align"),clearTimeout(this.fontSizeTimeout),this.fontSizeTimeout=setTimeout((()=>{this.resizeFontPanels()}),200)})),this.$sort.on("change.ls-google-fonts",(()=>{let t=this.$sort.val();"popular"===t?this.fontDataOriginal=this.popularOrder:"trending"===t?(this.createTrending(),this.fontDataOriginal=this.trendingOrder):"name"===t?(this.createAlphabetic(),this.fontDataOriginal=this.alphabeticOrder):(this.createNewest(),this.fontDataOriginal=this.newestOrder),this.emptyCnt(),this.filterFonts(),this.checkNoResults(),this.fontDataInUse=Object.values(this.fontDataReduced),this.initialPanels()})),this.$languages.on("change.ls-google-fonts",(()=>{this.currentLanguage=this.$languages.val(),this.exampleSentence=this.languages.find((t=>t.lang===this.currentLanguage)).sentence,"hebrew"===this.currentLanguage||"arabic"===this.currentLanguage?(this.leftToRight=!1,this.$panelsCnt.addClass("ls-gfonts-rtl")):(this.leftToRight=!0,this.$panelsCnt.removeClass("ls-gfonts-rtl")),this.displayedSentence=this.userSentence||this.displayedSentence,this.filterFonts(),this.checkNoResults(),this.fontDataInUse=Object.values(this.fontDataReduced),this.initialPanels()})),jQuery(window).on("resize.ls-google-fonts",(()=>{clearTimeout(this.windowResizeTimeout),this.windowResizeTimeout=setTimeout((()=>{this.calcHeight(),this.modalHeight=jQuery("#ls-google-fonts-modal-content").height(),this.loadingPoint=.8*this.modalHeight,this.scroll()}),300)})),this.$reset.on("click.ls-google-fonts",(()=>{this.resetFilters()}));let t=this.onSelectCallback;this.$panelsCnt.off().on("click",".ls-gfonts-font-panel",(function(){t(jQuery(this).data("fontName"))}))}emptyCnt(){jQuery("#ls-google-fonts-modal-content").scrollTop(0),this.loadingPoint=.8*this.modalHeight,this.$panelsCnt.html('<div class="ls-gfonts-placeholder" data-place="first"></div><div class="ls-gfonts-placeholder"></div><div class="ls-gfonts-placeholder"></div><div class="ls-gfonts-placeholder"></div>')}calcHeight(){let t=this.fontDataReduced.length;this.$panelsCnt=jQuery(".ls-gfonts-font-panels-cnt");let e=this.$panelsCnt.width(),s=Math.floor(e/this.PANEL_WIDTH),i=Math.ceil(t/s)*(this.PANEL_H+this.MARGIN+this.MARGIN);return this.$panelsCnt.height(i),i}updateCounter(){this.$familyCounter.html(`${this.fontDataReduced.length} out of ${this.fontDataOriginal.length} families`)}addNewPanels(t){if(0===this.fontDataInUse.length)return;t=t<this.fontDataInUse.length?t:this.fontDataInUse.length;let e=[],s="";for(let i=0;i<t;i++){let t=this.fontDataInUse.pop();if(!t)return;s+=this.createPanelHTML(t),e.push(t.family)}if(jQuery(s).insertBefore('.ls-gfonts-placeholder[data-place="first"]'),"khmer"!==this.currentLanguage){if(setTimeout((()=>{this.loadWebFont(e,this.inactive,30)})),0!=this.inactive.length){let t=this.inactive.splice(0,10);this.loadWebFont(t,this.inactive,180)}}else this.loadKhmer(e,1.5)}loadWebFont(t,e,s){WebFont.load({google:{families:t},timeout:1e3*s,fontactive:(t,e)=>{this.showText(t,e)},fontinactive:function(t,s){e.push(t)}})}loadKhmer(t,e){WebFont.load({google:{families:t},timeout:1e3*e,fontactive:(t,e)=>{this.showText(t,e)},fontinactive:(t,e)=>{this.showText(t,e)}})}showText(t,e){jQuery('.ls-gfonts-font-panel[data-font-name="'+t+'"]').find(".ls-gfonts-font-panel-sentence-inner").css({visibility:"visible"})}createPanelHTML(t){let e="display"===t.category||"handwriting"===t.category?"cursive":t.category,s=`'${t.family}', ${e}`;return`<div class="ls-gfonts-font-panel" data-font-name="${t.family}" style="height: ${this.PANEL_H}px"><div class="ls-gfonts-font-panel-title">${t.family}</div><div class="ls-gfonts-font-panel-sentence"><div class="ls-gfonts-font-panel-sentence-inner" style="font-size: ${this.FONT_SIZE}px; font-family: ${s}">${this.userSentence||this.exampleSentence}</div></div><div class="ls-gfonts-panel-shadow"></div></div>`}scroll(){let t=jQuery("#ls-google-fonts-modal-content").scrollTop();t<this.loadingPoint||(this.addNewPanels(this.BATCH_SIZE),this.loadingPoint+=.8*this.modalHeight,t>this.loadingPoint&&this.scroll())}filterFonts(){this.fontDataReduced=this.filterByLang(),this.categories.length<5&&(this.fontDataReduced=this.filterbyCategory()),this.keyword&&(this.fontDataReduced=this.filterByKeyword())}filterByLang(){let t=[];return this.fontDataOriginal.forEach((e=>{e.subsets.includes(this.currentLanguage)&&t.push(e)})),t}filterbyCategory(){return this.fontDataReduced.filter((t=>this.categories.includes(t.category)))}filterByKeyword(){let t=this.fontDataReduced.filter((t=>t.family.slice(0,this.keyword.length).toLowerCase().includes(this.keyword))),e=this.fontDataReduced.filter((t=>t.family.toLowerCase().slice(1).includes(this.keyword)));return t.concat(e)}resizeFontPanels(){this.$sentences.css({fontSize:`${this.FONT_SIZE}px`}),this.FONT_SIZE>35?this.PANEL_H=300*(1+(this.FONT_SIZE-35)/100):this.PANEL_H=300,this.$panels.each(((t,e)=>{jQuery(e).outerHeight(this.PANEL_H)})),this.calcHeight()}createNewest(){if(0!=this.newestOrder)return;let t=Object.values(this.fontDataOriginal);this.newestOrder=t.sort(((t,e)=>t.lastModified>e.lastModified?1:e.lastModified>t.lastModified?-1:0))}createAlphabetic(){if(0!=this.alphabeticOrder.length)return;let t=Object.values(this.fontDataOriginal);this.alphabeticOrder=t.sort(((t,e)=>t.family>e.family?-1:e.family>t.family?1:0))}createTrending(){if(0!=this.trendingOrder.length)return;let t=Object.values(this.fontDataOriginal);this.trendingOrder=t.sort(((t,e)=>t.trendingIndex>e.trendingIndex?1:e.trendingIndex>t.trendingIndex?-1:0))}checkNoResults(){this.fontDataReduced.length?this.$notFound.css({display:"none"}):this.$notFound.css({display:"flex"})}resetFilters(){this.$notFound.css({display:"none"}),5!=this.categories.length&&(this.categories=["serif","sans-serif","display","handwriting","monospace"],this.$categories.val("all")),this.keyword="",this.$search.val(""),this.fontDataReduced=this.filterByLang(),this.fontDataInUse=Object.values(this.fontDataReduced),this.initialPanels()}}