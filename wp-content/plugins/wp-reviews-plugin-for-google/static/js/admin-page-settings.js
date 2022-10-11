jQuery(document).ready(function(){Trustindex_Autocomplete.check=function(){let value=jQuery("#trustindex-plugin-settings-page #page-link").val().trim();if(Trustindex_Autocomplete.searching){return false}if(value.substr(0,4)=="www."||value.substr(0,7)=="http://"||value.substr(0,8)=="https://"){if(!/^(www\.|https?:\/\/)(www\.)?google\.[^\/]+\/(search|maps)/gm.test(value)&&!/^(www\.|https?:\/\/)(www\.)?g\.page\/[^\/]+\/(?:review|share)/gm.test(value)){Trustindex_Autocomplete.box.html('<span class="error">'+Trustindex_Autocomplete.box.data("errortext-search")+"</span>");Trustindex_Autocomplete.box.show();return false}Trustindex_Autocomplete.box.hide();Trustindex_Autocomplete.load.show();Trustindex_Autocomplete.searching=true;let cache_term=value;if(Trustindex_Autocomplete.cache[cache_term]!==undefined){setTimeout(function(){Trustindex_Autocomplete.showResult(Trustindex_Autocomplete.cache[cache_term],"errortext-search")},400);return}let do_request=function(){jQuery.ajax({method:"POST",url:"https://admin.trustindex.io/api/findPlaceId",data:{url:value},dataType:"jsonp",success:function(a){Trustindex_Autocomplete.cache[cache_term]=a;Trustindex_Autocomplete.showResult(a,"errortext-search")}})};if(/[\?&]gl=[^&]+/.test(value)){do_request()}else{jQuery.getJSON("https://ipinfo.io",function(a){let country_code=typeof a.country!="undefined"?a.country.toLowerCase():"us";value+=(value.indexOf("?")!=-1?"&":"?")+"gl="+country_code;do_request()})}}else{if(!/([A-Z][a-zA-Z0-9_-]+)/gm.test(value)){Trustindex_Autocomplete.box.html('<span class="error">'+Trustindex_Autocomplete.box.data("errortext")+"</span>");Trustindex_Autocomplete.box.show();return false}Trustindex_Autocomplete.box.hide();Trustindex_Autocomplete.load.show();Trustindex_Autocomplete.searching=true;let cache_term=value;if(Trustindex_Autocomplete.cache[cache_term]!==undefined){setTimeout(function(){Trustindex_Autocomplete.showResult(Trustindex_Autocomplete.cache[cache_term])},400);return}jQuery.ajax({method:"POST",url:"https://admin.trustindex.io/api/getPageDetails",data:{platform:"google",page_id:value},dataType:"jsonp",success:function(a){Trustindex_Autocomplete.cache[cache_term]=a;Trustindex_Autocomplete.showResult(a)}})}};Trustindex_Autocomplete.showResult=function(a,b){Trustindex_Autocomplete.load.hide();Trustindex_Autocomplete.searching=false;if(typeof b=="undefined"){b="errortext"}if(a.success&&a.result){let page_details={id:a.result.page_id,name:a.result.name,address:a.result.address,avatar_url:a.result.avatar_url,rating_number:a.result.reviews.count,rating_score:a.result.reviews.score};let form=jQuery("#submit-form");let div=form.find(".ti-selected-source");form.find("#ti-noreg-page_details").val(JSON.stringify(page_details));div.find(".ti-source-box:not(.ti-original-source-box)").remove();div.find("img").attr("src",page_details.avatar_url);div.find("#label-noreg-page_name, .label-noreg-page_name").html(page_details.name);if(page_details.address){div.find("#label-noreg-address, .label-noreg-address").html(page_details.address+"<br />")}div.find("#label-noreg-url, .label-noreg-url").html("<a target='_blank' href='"+a.result.url+"'>"+a.result.url+"</a>");jQuery("#trustindex-plugin-settings-page .btn-check").addClass("btn-disabled");div.fadeIn();div.find(".ti-source-box").show()}else{if(typeof a.possible_places!="undefined"){let form=jQuery("#submit-form");jQuery("#trustindex-plugin-settings-page .btn-check").addClass("btn-disabled");let source_div=form.find(".ti-selected-source");let source_row=source_div.find(".ti-original-source-box");source_div.find(".ti-source-box:not(.ti-original-source-box)").remove();source_row.find('[id|="label-noreg"]').each(function(){let el=jQuery(this);if(!el.attr("id")){return}el.attr("class",el.attr("id"));el.attr("id","")});a.possible_places.forEach(function(c){let div=source_row.clone().removeClass("ti-original-source-box");div.find("img").attr("src",c.avatar_url);div.find(".label-noreg-page_name").html(c.name);div.find(".label-noreg-url").html("<a target='_blank' href='"+c.url+"'>"+c.url+"</a>");div.find(".btn-connect").removeClass("btn-connect").addClass("btn-place-choose").attr("href",c.url);source_row.before(div);div.show()});source_row.hide();source_div.fadeIn()}else{Trustindex_Autocomplete.box.html('<span class="error">'+Trustindex_Autocomplete.box.data(b)+"</span>");Trustindex_Autocomplete.box.show()}}};jQuery(document).on("click","#trustindex-plugin-settings-page .btn-place-choose",function(a){a.preventDefault();let btn=jQuery(this);btn.css("pointer-events","none").addClass("btn-disabled").blur();TI_manage_dots(btn);Trustindex_Autocomplete.button.css("pointer-events","none");jQuery("#trustindex-plugin-settings-page .btn-text").css("pointer-events","none");jQuery.ajax({method:"POST",url:"https://admin.trustindex.io/api/findPlaceId",data:{url:btn.attr("href")},dataType:"jsonp",success:function(b){if(b.success&&b.result){let page_details={id:b.result.page_id,name:b.result.name,address:b.result.address,avatar_url:b.result.avatar_url};let form=jQuery("#submit-form");form.find("#ti-noreg-page_details").val(JSON.stringify(page_details));form.submit()}else{location.reload()}}})})});