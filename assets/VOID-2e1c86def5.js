console.log(" %c Theme VOID %c https://blog.imalan.cn/archives/247/ ","color: #fadfa3; background: #23b7e5; padding:5px;","background: #1c2b36; padding:5px;");var VOID_Content={countWords:function(){if($("#totalWordCount").length){var n=0;$.each($("a.archive-title"),function(t,e){n+=parseInt($(e).attr("data-words"))}),$("#totalWordCount").html(n)}},parseTOC:function(){if(0<$(".TOC").length){tocbot.init({tocSelector:".TOC",contentSelector:"div[itemprop=articleBody]",headingSelector:"h2, h3, h4, h5",collapseDepth:6}),$.each($(".toc-link"),function(t,e){$(e).click(function(){var t=$(document.getElementById($(this).attr("href").replace("#",""))).offset().top-60;return $.scrollTo(t,300),window.innerWidth<1200&&TOC.close(),!1})}),1200<=window.innerWidth&&TOC.open()}},parsePhotos:function(){$.each($(".photos"),function(t,e){$.each($(e).children(),function(t,n){var a=new Image;a.src=$(n).find("img").attr("data-src"),a.onload=function(){var t=parseFloat(a.width),e=parseFloat(a.height);$(n).css("width",50*t/e+"px"),$(n).css("flex-grow",50*t/e),$(n).find("a").css("padding-top",e/t*100+"%")}})})},parseUrl:function(){var n=document.domain;$('a:not(a[href^="#"]):not(".post-like")').each(function(t,e){(!$(e).attr("target")||""==!$(e).attr("target")&&"_self"==!$(e).attr("target"))&&e.host!=n&&$(e).attr("target","_blank")}),VOIDConfig.PJAX&&($.each($('a:not(a[target="_blank"], a[no-pjax])'),function(t,e){e.host==n&&$(e).addClass("pjax")}),$(document).pjax("a.pjax",{container:"#pjax-container",fragment:"#pjax-container",timeout:8e3}))},highlight:function(){$.each($("pre code"),function(t,e){var n="";null!=$(e).attr("class")&&""!==$(e).attr("class")&&(n=$(e).attr("class").toLowerCase().replace("lang-","").replace("language-","")),$(e).parent().attr("data-lang",n),hljs.highlightBlock(e),VOIDConfig.lineNumbers&&hljs.lineNumbersBlock(e,{singleLine:!0})})},bigfoot:function(){$.bigfoot({actionOriginalFN:"ignore"})},pangu:function(){pangu.spacingElementByTagName("p")},math:function(){VOIDConfig.enableMath&&"undefined"!=typeof MathJax&&(MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),MathJax.Hub.Queue(["Typeset",MathJax.Hub]))},hyphenate:function(){$("div[itemprop=articleBody] p, div[itemprop=articleBody] blockquote").hyphenate("en-us")}},VOID={init:function(){VOID_Ui.checkHeader(),VOID_Ui.MasonryCtrler.init(),VOID_Ui.DarkModeSwitcher.checkColorScheme(),VOID_Ui.checkScrollTop(!1),VOID_Ui.lazyload(),VOID_Ui.headroom(),VOID_Content.countWords(),VOID_Content.parseTOC(),VOID_Content.parsePhotos(),VOID_Content.parseUrl(),VOID_Content.pangu(),VOID_Content.highlight(),VOID_Content.bigfoot(),VOID_Content.math(),VOID_Content.hyphenate(),VOID.handleLike(),AjaxComment.init(),$("body").on("click",function(t){return VOID_Util.clickIn(t,".mobile-search-form")||VOID_Util.clickIn(t,"#toggle-mobile-search")||!$(".mobile-search-form").hasClass("opened")?VOID_Util.clickIn(t,"#toggle-setting-pc")||VOID_Util.clickIn(t,"#toggle-setting")||!$("body").hasClass("setting-panel-show")||VOID_Util.clickIn(t,"#setting-panel")?void 0:($("body").removeClass("setting-panel-show"),setTimeout(function(){$("#setting-panel").hide()},300),!1):($(".mobile-search-form").removeClass("opened"),!1)})},beforePjax:function(){NProgress.start(),VOID_Ui.reset()},afterPjax:function(){NProgress.done(),$("#loggin-form").length&&$("#loggin-form").addClass("need-refresh"),VOID_Ui.MasonryCtrler.init(),VOID_Ui.checkScrollTop(!1),VOID_Content.countWords(),VOID_Content.parseTOC(),VOID_Content.parsePhotos(),VOID_Content.parseUrl(),VOID_Content.highlight(),VOID_Content.math(),VOID_Content.hyphenate(),VOID_Content.pangu(),VOID_Content.bigfoot(),VOID.handleLike(),0<$(".OwO").length&&new OwO({logo:"OωO",container:document.getElementsByClassName("OwO")[0],target:document.getElementsByClassName("input-area")[0],api:"/usr/themes/VOID/assets/libs/owo/OwO_01.json",position:"down",width:"400px",maxHeight:"250px"}),AjaxComment.init()},endPjax:function(){$(".TOC").length<1&&TOC.close()},alert:function(t,e){var n=(new Date).getTime();$("body").prepend('<div class="msg" id="msg{id}">{Text}</div>'.replace("{Text}",t).replace("{id}",n)),$.each($(".msg"),function(t,e){$(e).attr("id")!="msg"+n&&$(e).css("top",$(e).offset().top-$(document).scrollTop()+$(".msg#msg"+n).outerHeight()+20+"px")}),$(".msg#msg"+n).addClass("show");var a=e;"number"!=typeof a&&(a=2500),setTimeout(function(){$(".msg#msg"+n).addClass("hide"),setTimeout(function(){$(".msg#msg"+n).remove()},1e3)},a)},handleLike:function(){var a=VOID_Util.getCookie("void_likes");null!=a&&$.each($(".post-like"),function(t,e){var n=String($(e).attr("data-cid"));-1!=a.indexOf(","+String(n)+",")&&$(e).addClass("done")})},like:function(n){var a=parseInt($(n).attr("data-cid")),o=VOID_Util.getCookie("void_likes");null==o&&(o=","),-1!=o.indexOf(","+String(a)+",")?VOID.alert("您已经点过赞了~"):$.post(VOIDConfig.likePath,{cid:a},function(t){$(n).addClass("done");var e=$(n).find(".like-num").text();$(n).find(".like-num").text(parseInt(e)+1),o=o+String(a)+",",VOID_Util.setCookie("void_likes",o,604800)},"json")},manageComment:function(t){window.confirm($(t).attr("data-lang"))&&(VOID_Ui.rememberPos(),window.location.href=$(t).attr("data-action"))},startSearch:function(t){var e=$(t).val();if($(t).val(""),$(t).blur(),e&&""!=e){var n=VOIDConfig.searchBase+e;VOIDConfig.PJAX?$.pjax({url:n,container:"#pjax-container",fragment:"#pjax-container",timeout:8e3}):window.open(n,"_self")}else $(t).attr("placeholder","你还没有输入任何信息")},enterSearch:function(t){13==(window.event||arguments.callee.caller.arguments[0]).keyCode&&VOID.startSearch(t)}},Share={parseItem:function(t){return t=$(t).parent(),{url:$(t).attr("data-url"),title:$(t).attr("data-title"),excerpt:$(t).attr("data-excerpt"),img:$(t).attr("data-img"),twitter:$(t).attr("data-twitter"),weibo:$(t).attr("data-weibo")}},toWeibo:function(t){var e=Share.parseItem(t),n="http://service.weibo.com/share/share.php?appkey=&title=分享《"+e.title+"》 @"+e.weibo+"%0a%0a"+e.excerpt+"&url="+e.url+"&pic="+e.img+"&searchPic=false&style=simple";window.open(n)},toTwitter:function(t){var e=Share.parseItem(t),n="https://twitter.com/intent/tweet?text=分享《"+e.title+"》 @"+e.twitter+"%0a%0a"+e.excerpt+"%20"+e.url;window.open(n)}},AjaxComment={noName:"必须填写用户名",noMail:"必须填写电子邮箱地址",noContent:"必须填写评论内容",invalidMail:"邮箱地址不合法",commentsOrder:"DESC",commentList:".comment-list",comments:"#comments .comments-title",commentReply:".comment-reply",commentForm:"#comment-form",respond:".respond",textarea:"#textarea",submitBtn:"#comment-submit-button",newID:"",parentID:"",bindClick:function(){$(AjaxComment.commentReply+" a, #cancel-comment-reply-link").unbind("click"),$(AjaxComment.commentReply+" a").click(function(){AjaxComment.parentID=$(this).parent().parent().parent().attr("id"),$(AjaxComment.textarea).focus()}),$("#cancel-comment-reply-link").click(function(){AjaxComment.parentID=""})},err:function(){$(AjaxComment.submitBtn).attr("disabled",!1),AjaxComment.newID=""},finish:function(){TypechoComment.cancelReply(),$(AjaxComment.submitBtn).html("提交评论"),$(AjaxComment.textarea).val(""),$(AjaxComment.submitBtn).attr("disabled",!1),0<$("#comment-"+AjaxComment.newID).length&&($.scrollTo($("#comment-"+AjaxComment.newID).offset().top-50,500),$("#comment-"+AjaxComment.newID).fadeTo(500,1)),$(".comment-num .num").html(parseInt($(".comment-num .num").html())+1),AjaxComment.bindClick(),VOID_Content.highlight()},init:function(){AjaxComment.bindClick(),$(AjaxComment.commentForm).submit(function(){if($(AjaxComment.submitBtn).attr("disabled",!0),$(AjaxComment.commentForm).find("#author")[0]){if(""==$(AjaxComment.commentForm).find("#author").val())return VOID.alert(AjaxComment.noName),AjaxComment.err(),!1;if(""==$(AjaxComment.commentForm).find("#mail").val())return VOID.alert(AjaxComment.noMail),AjaxComment.err(),!1;if(!/^[^@\s<&>]+@([a-z0-9]+\.)+[a-z]{2,4}$/i.test($(AjaxComment.commentForm).find("#mail").val()))return VOID.alert(AjaxComment.invalidMail),AjaxComment.err(),!1}var t=$(AjaxComment.commentForm).find(AjaxComment.textarea).val().replace(/(^\s*)|(\s*$)/g,"");return null==t||""==t?(VOID.alert(AjaxComment.noContent),AjaxComment.err()):($(AjaxComment.submitBtn).html("提交中"),$.ajax({url:$(AjaxComment.commentForm).attr("action"),type:$(AjaxComment.commentForm).attr("method"),data:$(AjaxComment.commentForm).serializeArray(),error:function(){return VOID.alert("提交失败！请重试。"),$(AjaxComment.submitBtn).html("提交评论"),AjaxComment.err(),!1},success:function(t){try{if($(AjaxComment.commentList,t).length){if(AjaxComment.newID=$(AjaxComment.commentList,t).html().match(/id="?comment-\d+/g).join().match(/\d+/g).sort(function(t,e){return t-e}).pop(),$(".pager .prev").length&&""==AjaxComment.parentID)return VOID.alert("评论成功！请回到评论第一页查看。"),AjaxComment.newID="",AjaxComment.parentID="",AjaxComment.finish(),!1;var e=""==AjaxComment.parentID?"comment-parent":"comment-child",n='<div itemscope itemtype="http://schema.org/UserComments" id="comment-'+AjaxComment.newID+'" style="opacity:0" class="comment-body '+e+'">'+$(t).find("#comment-"+AjaxComment.newID).html()+"</div>";return $(AjaxComment.commentList).length<=0&&$("#comments").append('<h3 class="comment-separator"><div class="comment-tab-current"><span class="comment-num">已有 <span class="num">0</span> 条评论</span></div></h3>').append('<div class="comment-list"></div>'),""==AjaxComment.parentID?($("#comments>.comment-list").prepend(n),VOID.alert("评论成功！"),AjaxComment.finish()):($("#"+AjaxComment.parentID).hasClass("comment-parent")?0<$("#"+AjaxComment.parentID+" > .comment-children").length?$("#"+AjaxComment.parentID+" > .comment-children > .comment-list").prepend(n):(n='<div class="comment-children"><div class="comment-list">'+n+"</div></div>",$("#"+AjaxComment.parentID).append(n)):$("#"+AjaxComment.parentID).after(n),VOID.alert("评论成功！"),AjaxComment.finish(),AjaxComment.parentID=""),AjaxComment.newID="",!1}var a="提交失败！请重试。"+$($(t)[7]).text();return VOID.alert(a),$(AjaxComment.submitBtn).html("提交评论"),AjaxComment.err(),!1}catch(t){window.location.reload()}}})),!1})}};$(document).ready(function(){VOID.init(),VOIDConfig.PJAX&&($(document).on("pjax:send",function(){VOID.beforePjax()}),$(document).on("pjax:complete",function(){VOID.afterPjax()}),$(document).on("pjax:end",function(){VOID.endPjax()}))}),VOID_Ui.tuneBg(),$(window).resize(function(){VOID_Ui.tuneBg()}),window.setInterval(function(){var t=(new Date).getTime()-Date.parse(VOIDConfig.buildTime);t=Math.floor(t/1e3);var e=Math.floor(t/86400);t%=86400;var n=Math.floor(t/3600);t%=3600;var a=Math.floor(t/60);t%=60;var o=Math.floor(t/1);$("#uptime").html(e+" 天 "+n+" 小时 "+a+" 分 "+o+" 秒 ")},1e3);